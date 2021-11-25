const puppeteer = require('puppeteer');
(async () => {
 // launch and create a new page
 const browser = await puppeteer.launch();

 const page = await browser.newPage();
 // go to page in resumeonly mode, wait for any network events to settle
 await page.goto("http://localhost:3000", {
  waitUntil: "networkidle2"
 });

 await page.setViewport({
    width: 3000,
    height: 1080,
  });

  
 // output to a local file
 await page.pdf({
  path: "terence_kong_resume.pdf",
  format: "a4",
  printBackground: true
 });
 // close
 await browser.close();
})();