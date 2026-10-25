const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateAllFavicons() {
  const sourceImg = 'C:/Users/vinit/.gemini/antigravity-ide/brain/658d3826-91a4-41cd-a461-6d39657c5a49/mlm_favicon_logo_1792934786494.jpg';
  
  // 1. Crop the centered badge (minX: 192, minY: 192, width: 640, height: 640)
  // Let's create an SVG rounded mask matching the badge's border radius
  const size = 640;
  const radius = 136;
  const roundedMask = Buffer.from(
    `<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/></svg>`
  );

  const croppedBadge = await sharp(sourceImg)
    .extract({ left: 192, top: 192, width: size, height: size })
    .composite([{ input: roundedMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const publicDir = path.join(__dirname, 'public');
  const iconsDir = path.join(publicDir, 'icons');
  if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });

  // Master 512x512 PNG
  const master512 = await sharp(croppedBadge).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), master512);
  fs.writeFileSync(path.join(iconsDir, 'icon-512x512.png'), master512);

  // Targets
  const targetSizes = [
    { file: 'favicon-16x16.png', size: 16 },
    { file: 'favicon-32x32.png', size: 32 },
    { file: 'favicon-48x48.png', size: 48 },
    { file: 'apple-touch-icon.png', size: 180 },
    { file: 'icons/icon-72x72.png', size: 72 },
    { file: 'icons/icon-96x96.png', size: 96 },
    { file: 'icons/icon-128x128.png', size: 128 },
    { file: 'icons/icon-144x144.png', size: 144 },
    { file: 'icons/icon-152x152.png', size: 152 },
    { file: 'icons/icon-192x192.png', size: 192 },
    { file: 'icons/icon-384x384.png', size: 384 },
  ];

  const icoBuffers = [];

  for (const t of targetSizes) {
    const buf = await sharp(croppedBadge).resize(t.size, t.size).png().toBuffer();
    fs.writeFileSync(path.join(publicDir, t.file), buf);
    console.log(`Generated ${t.file} (${t.size}x${t.size})`);
    
    if ([16, 32, 48].includes(t.size)) {
      icoBuffers.push({ size: t.size, buf });
    }
  }

  // Generate multi-resolution ICO file
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(icoBuffers.length, 4); // Count

  const entries = [];
  let imgOffset = 6 + icoBuffers.length * 16;
  const imageBuffers = [];

  for (const item of icoBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size, 0);
    entry.writeUInt8(item.size, 1);
    entry.writeUInt8(0, 2); // Colors
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // 32 bpp
    entry.writeUInt32LE(item.buf.length, 8); // Size of image data
    entry.writeUInt32LE(imgOffset, 12); // Offset
    entries.push(entry);
    imageBuffers.push(item.buf);
    imgOffset += item.buf.length;
  }

  const icoBuf = Buffer.concat([header, ...entries, ...imageBuffers]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuf);
  console.log('Generated favicon.ico (16x16, 32x32, 48x48) successfully!');

  // Generate favicon.svg embedding the master badge
  const b64 = master512.toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <image href="data:image/png;base64,${b64}" width="512" height="512" />
</svg>\n`;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svg);
  console.log('Generated favicon.svg successfully!');
}

generateAllFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
