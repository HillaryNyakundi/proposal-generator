import fs from "fs";
import HTMLtoDOCX from "@turbodocx/html-to-docx";

/** Converts an HTML string to an editable A4 Word document. */
export async function generateDocx(
  html: string,
  outputPath: string
): Promise<void> {
  const buffer = await HTMLtoDOCX(html, null, {
    orientation: "portrait",
    pageSize: { width: 11906, height: 16838 }, // A4 in twips (210mm x 297mm)
    margins: { top: 1440, bottom: 1440, left: 1080, right: 1080 }, // twips: 24mm / 18mm
    footer: true,
    pageNumber: true,
    table: { row: { cantSplit: true } },
  });

  fs.writeFileSync(outputPath, buffer as Buffer);
}
