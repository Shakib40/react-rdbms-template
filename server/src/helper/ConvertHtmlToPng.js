const puppeteer = require('puppeteer');

async function convertHtmlToPdf(htmlContent) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set content of the page, including header and footer HTML
  const combinedHtmlContent = `
    <html>
      <head>
      </head>
      <body>
        <main>${htmlContent}</main>
      </body>
    </html>
  `;

  await page.setContent(combinedHtmlContent);

  const pdfBuffer = await page.pdf({
    format: 'A4',
    // displayHeaderFooter: true,
    margin: {
      top: '50px',
      bottom: '100px'
    },
    // headerTemplate: headerHtml,
    // footerTemplate: footerHtml
  });

  await browser.close();
  return pdfBuffer;
}

module.exports = convertHtmlToPdf;