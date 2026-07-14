import puppeteer from "puppeteer";

/** Renders an HTML string to a print-ready A4 PDF via headless Chromium. */
export async function generatePdf(
  html: string,
  outputPath: string
): Promise<void> {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    // The HTML is fully self-contained (inline CSS, no external assets),
    // so "load" is sufficient — there is no navigation for networkidle to wait on.
    await page.setContent(html, { waitUntil: "load" });
    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: "<div></div>",
      footerTemplate: `
        <div style="font-size:10px;width:100%;text-align:center;color:#4b5563;">
          Page <span class="pageNumber"></span> of <span class="totalPages"></span>
        </div>`,
      margin: {
        top: "24mm",
        bottom: "24mm",
        left: "18mm",
        right: "18mm",
      },
    });
  } finally {
    await browser.close();
  }
}
