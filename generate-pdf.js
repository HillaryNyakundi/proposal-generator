const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  const filePath = "file://" + path.join(__dirname, "proposal.html");

  await page.goto(filePath, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "Safeschoolbus_Proposal.pdf",
    format: "A4",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<div></div>",
    footerTemplate: `
      <div style="font-size:10px;width:100%;text-align:center;">
        Page <span class="pageNumber"></span> of <span class="totalPages"></span>
      </div>`,
    margin: {
      top: "24mm",
      bottom: "24mm",
      left: "18mm",
      right: "18mm",
    },
  });

  await browser.close();
  console.log("PDF created successfully!");
})();
