const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// 1. Read source PNG (612x612)
const srcPath = path.join(__dirname, 'public', 'favicon.png');
const srcBuf = fs.readFileSync(srcPath);

let offset = 8, idatChunks = [], srcW, srcH, srcColorType;
while (offset < srcBuf.length) {
  const length = srcBuf.readUInt32BE(offset);
  const type = srcBuf.toString('ascii', offset + 4, offset + 8);
  if (type === 'IHDR') {
    srcW = srcBuf.readUInt32BE(offset + 8);
    srcH = srcBuf.readUInt32BE(offset + 12);
    srcColorType = srcBuf.readUInt8(offset + 17);
  } else if (type === 'IDAT') {
    idatChunks.push(srcBuf.slice(offset + 8, offset + 8 + length));
  }
  offset += 12 + length;
}

const raw = zlib.inflateSync(Buffer.concat(idatChunks));
const bpp = srcColorType === 6 ? 4 : 3;
const stride = srcW * bpp;
const srcPixels = Buffer.alloc(srcW * srcH * 4);

let rawOffset = 0;
for (let y = 0; y < srcH; y++) {
  const filter = raw[rawOffset++];
  const currRow = y * stride;
  const prevRow = (y - 1) * stride;

  for (let x = 0; x < stride; x++) {
    const rawByte = raw[rawOffset++];
    const a = x >= bpp ? srcPixels[currRow + x - bpp] : 0;
    const b = y > 0 ? srcPixels[prevRow + x] : 0;
    const c = (x >= bpp && y > 0) ? srcPixels[prevRow + x - bpp] : 0;

    let val = 0;
    if (filter === 0) val = rawByte;
    else if (filter === 1) val = (rawByte + a) & 0xff;
    else if (filter === 2) val = (rawByte + b) & 0xff;
    else if (filter === 3) val = (rawByte + Math.floor((a + b) / 2)) & 0xff;
    else if (filter === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
      val = (rawByte + ((pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c))) & 0xff;
    }
    srcPixels[currRow + x] = val;
  }
}

// Ensure 4 channels RGBA
const fullRGBA = Buffer.alloc(srcW * srcH * 4);
for (let i = 0; i < srcW * srcH; i++) {
  if (bpp === 4) {
    fullRGBA[i * 4] = srcPixels[i * 4];
    fullRGBA[i * 4 + 1] = srcPixels[i * 4 + 1];
    fullRGBA[i * 4 + 2] = srcPixels[i * 4 + 2];
    fullRGBA[i * 4 + 3] = srcPixels[i * 4 + 3];
  } else {
    fullRGBA[i * 4] = srcPixels[i * 3];
    fullRGBA[i * 4 + 1] = srcPixels[i * 3 + 1];
    fullRGBA[i * 4 + 2] = srcPixels[i * 3 + 2];
    fullRGBA[i * 4 + 3] = 255;
  }
}

// 2. High-Quality Area-Average Downsampler
function resizeRGBA(targetW, targetH) {
  const out = Buffer.alloc(targetW * targetH * 4);
  const scaleX = srcW / targetW;
  const scaleY = srcH / targetH;

  for (let ty = 0; ty < targetH; ty++) {
    const syStart = ty * scaleY;
    const syEnd = (ty + 1) * scaleY;
    const y0 = Math.floor(syStart);
    const y1 = Math.min(srcH - 1, Math.ceil(syEnd) - 1);

    for (let tx = 0; tx < targetW; tx++) {
      const sxStart = tx * scaleX;
      const sxEnd = (tx + 1) * scaleX;
      const x0 = Math.floor(sxStart);
      const x1 = Math.min(srcW - 1, Math.ceil(sxEnd) - 1);

      let rSum = 0, gSum = 0, bSum = 0, aSum = 0, totalWeight = 0;

      for (let y = y0; y <= y1; y++) {
        const yWeight = Math.max(0, Math.min(y + 1, syEnd) - Math.max(y, syStart));
        if (yWeight <= 0) continue;

        for (let x = x0; x <= x1; x++) {
          const xWeight = Math.max(0, Math.min(x + 1, sxEnd) - Math.max(x, sxStart));
          const w = xWeight * yWeight;
          if (w <= 0) continue;

          const idx = (y * srcW + x) * 4;
          rSum += fullRGBA[idx] * w;
          gSum += fullRGBA[idx + 1] * w;
          bSum += fullRGBA[idx + 2] * w;
          aSum += fullRGBA[idx + 3] * w;
          totalWeight += w;
        }
      }

      const outIdx = (ty * targetW + tx) * 4;
      if (totalWeight > 0) {
        out[outIdx] = Math.round(rSum / totalWeight);
        out[outIdx + 1] = Math.round(gSum / totalWeight);
        out[outIdx + 2] = Math.round(bSum / totalWeight);
        out[outIdx + 3] = Math.round(aSum / totalWeight);
      }
    }
  }
  return out;
}

// 3. PNG Encoder
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  crcTable[n] = c;
}
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const typeAndData = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeAndData), 0);
  return Buffer.concat([len, typeAndData, crc]);
}
function encodePNG(w, h, rgba) {
  const rowSize = w * 4;
  const raw = Buffer.alloc(h * (1 + rowSize));
  for (let y = 0; y < h; y++) {
    raw[y * (1 + rowSize)] = 0;
    rgba.copy(raw, y * (1 + rowSize) + 1, y * rowSize, (y + 1) * rowSize);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

// 4. Generate all required sizes
const targets = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'icons/icon-72x72.png', size: 72 },
  { file: 'icons/icon-96x96.png', size: 96 },
  { file: 'icons/icon-128x128.png', size: 128 },
  { file: 'icons/icon-144x144.png', size: 144 },
  { file: 'icons/icon-152x152.png', size: 152 },
  { file: 'icons/icon-192x192.png', size: 192 },
  { file: 'icons/icon-384x384.png', size: 384 },
  { file: 'icons/icon-512x512.png', size: 512 }
];

const iconsDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });

const pngsForIco = [];

for (const target of targets) {
  const dest = path.join(__dirname, 'public', target.file);
  const rgba = resizeRGBA(target.size, target.size);
  const pngBuf = encodePNG(target.size, target.size, rgba);
  fs.writeFileSync(dest, pngBuf);
  console.log(`Generated ${target.file} (${target.size}x${target.size})`);

  if ([16, 32, 48].includes(target.size)) {
    pngsForIco.push({ size: target.size, buf: pngBuf });
  }
}

// Also generate 48x48 for ICO
const rgba48 = resizeRGBA(48, 48);
const png48 = encodePNG(48, 48, rgba48);
pngsForIco.push({ size: 48, buf: png48 });

// 5. Build multi-resolution favicon.ico containing 16x16, 32x32, 48x48
// ICO Header: 2 bytes reserved (0), 2 bytes type (1 for ICO), 2 bytes image count
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(pngsForIco.length, 4);

const entries = [];
let imgOffset = 6 + pngsForIco.length * 16;
const imageBuffers = [];

for (const item of pngsForIco) {
  const entry = Buffer.alloc(16);
  entry.writeUInt8(item.size, 0); // width
  entry.writeUInt8(item.size, 1); // height
  entry.writeUInt8(0, 2); // colors
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(item.buf.length, 8); // size of image data
  entry.writeUInt32LE(imgOffset, 12); // offset
  entries.push(entry);
  imageBuffers.push(item.buf);
  imgOffset += item.buf.length;
}

const icoBuf = Buffer.concat([header, ...entries, ...imageBuffers]);
fs.writeFileSync(path.join(__dirname, 'public', 'favicon.ico'), icoBuf);
console.log('Generated favicon.ico with 16x16, 32x32, 48x48!');
