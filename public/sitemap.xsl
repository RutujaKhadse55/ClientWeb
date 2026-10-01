<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap — Direct Selling India</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Arial, sans-serif; background: #FAF7F2; color: #1a1a1a; }
          .header { background: #7c1d24; color: white; padding: 24px 40px; }
          .header h1 { font-size: 24px; font-weight: 700; }
          .header p { margin-top: 6px; opacity: 0.85; font-size: 14px; }
          .container { max-width: 960px; margin: 40px auto; padding: 0 20px; }
          table { width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
          th { background: #7c1d24; color: white; text-align: left; padding: 12px 16px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
          td { padding: 10px 16px; border-bottom: 1px solid #f0ece6; font-size: 14px; }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #fdf5f5; }
          a { color: #7c1d24; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .badge { display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 600; }
          .high { background: #fee2e2; color: #991b1b; }
          .medium { background: #fef3c7; color: #92400e; }
          .low { background: #f0fdf4; color: #166534; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Direct Selling India — XML Sitemap</h1>
          <p>This sitemap helps search engines discover and index all pages on directsellingindia.org</p>
        </div>
        <div class="container">
          <table>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Change Frequency</th>
              <th>Priority</th>
            </tr>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
                <td><xsl:value-of select="sitemap:changefreq"/></td>
                <td>
                  <xsl:choose>
                    <xsl:when test="sitemap:priority >= 0.9">
                      <span class="badge high"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:when>
                    <xsl:when test="sitemap:priority >= 0.7">
                      <span class="badge medium"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:when>
                    <xsl:otherwise>
                      <span class="badge low"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:otherwise>
                  </xsl:choose>
                </td>
              </tr>
            </xsl:for-each>
            <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
              <tr>
                <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
                <td>—</td>
                <td>—</td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
