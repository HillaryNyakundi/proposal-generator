import path from "path";
import { render } from "./render";
import { generatePdf } from "./pdf";
import { generateDocx } from "./docx";

type Target = "pdf" | "docx";

/**
 * Usage:
 *   tsx src/index.ts [proposal.md] [--pdf] [--docx]
 *
 * With no target flags, both PDF and DOCX are produced.
 * The output filename comes from the front-matter `output` field
 * (falling back to a slug of the title).
 */
async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const flags = args.filter((a) => a.startsWith("--"));
  const positional = args.filter((a) => !a.startsWith("--"));

  const markdownPath = path.resolve(positional[0] ?? "proposal.md");

  let targets: Target[] = [];
  if (flags.includes("--pdf")) targets.push("pdf");
  if (flags.includes("--docx")) targets.push("docx");
  if (targets.length === 0) targets = ["pdf", "docx"];

  const { html, outputName } = render(markdownPath);
  const outDir = path.dirname(markdownPath);

  for (const target of targets) {
    const outputPath = path.join(outDir, `${outputName}.${target}`);
    if (target === "pdf") {
      await generatePdf(html, outputPath);
    } else {
      await generateDocx(html, outputPath);
    }
    console.log(
      `${target.toUpperCase()} created: ${path.relative(process.cwd(), outputPath)}`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
