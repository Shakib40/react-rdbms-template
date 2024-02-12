
const ConvertHtmlToPng = require('../helper/ConvertHtmlToPng'); // For PDF
const fs = require('fs'); // For PDF
const ejs = require('ejs'); // For PDF
const path = require('path'); // For PDF

exports.DOWNLOAD_PNG = async (request, response, next) => {
  try {

    const reportHtmlPath = path.join(__dirname, '..', 'assets', 'img.html');
    const reporttemplate = fs.readFileSync(reportHtmlPath, 'utf8');
    const htmlContent = ejs.render(reporttemplate);
   
    const pdfBuffer = await ConvertHtmlToPng(htmlContent);

    if (!pdfBuffer) {
      throw new Error('PDF buffer is undefined or empty.');
    }
  
    response.setHeader(
      'Content-Disposition',
      `attachment; filename=${reportHtmlPath}`
    );
    response.setHeader('Content-Type', 'application/pdf');
    response.end(pdfBuffer);
  } catch (error) {
    next(error);
  }
};
  