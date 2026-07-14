import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const ROOT = path.join(__dirname, "..");

/** Front-matter fields recognised by the cover page. Extra keys are ignored. */
export interface ProposalMeta {
  title?: string;
  brand?: string;
  subtitle?: string;
  preparedBy?: string;
  /** Who the proposal/quotation is for (rendered as "Prepared for:"). */
  client?: string;
  projectType?: string;
  techStack?: string;
  version?: string;
  date?: string;
  /** How long the quotation is valid (rendered as "Valid for:"). */
  validity?: string;
  /** Path to a logo image, relative to the Markdown file (e.g. assets/logo.png). */
  logo?: string;
  /** Base filename for the generated PDF/DOCX (without extension). */
  output?: string;
  [key: string]: unknown;
}

export interface RenderResult {
  html: string;
  meta: ProposalMeta;
  /** Base filename for outputs, without extension. */
  outputName: string;
}

const md = new MarkdownIt({ html: true, linkify: true, typographer: true });

function slugify(value: string): string {
  return (
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "proposal"
  );
}

const MIME_BY_EXT: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

/**
 * Reads the logo file and returns an `<img>` with the image inlined as a
 * base64 data URI, so it renders in both the PDF and the DOCX (neither of
 * which resolves relative/file paths from an in-memory HTML string).
 * Returns "" when no logo is set; warns and skips when the file is missing.
 */
function logoImg(logoPath: string | undefined, baseDir: string): string {
  if (!logoPath) return "";

  const resolved = path.resolve(baseDir, logoPath);
  if (!fs.existsSync(resolved)) {
    console.warn(`Warning: logo not found at ${resolved} — skipping.`);
    return "";
  }

  const ext = path.extname(resolved).toLowerCase();
  const mime = MIME_BY_EXT[ext];
  if (!mime) {
    console.warn(`Warning: unsupported logo type "${ext}" — skipping.`);
    return "";
  }

  const base64 = fs.readFileSync(resolved).toString("base64");
  return `<img class="logo" src="data:${mime};base64,${base64}" alt="logo" />`;
}

/** Builds the cover section from front-matter. Every field is optional. */
function coverHtml(meta: ProposalMeta, baseDir: string): string {
  const details: string[] = [];
  if (meta.preparedBy)
    details.push(`<p><strong>Prepared by:</strong> ${meta.preparedBy}</p>`);
  if (meta.client)
    details.push(`<p><strong>Prepared for:</strong> ${meta.client}</p>`);
  if (meta.projectType)
    details.push(`<p><strong>Project Type:</strong> ${meta.projectType}</p>`);
  if (meta.techStack)
    details.push(`<p><strong>Technology Stack:</strong> ${meta.techStack}</p>`);

  const metaLines: string[] = [];
  if (meta.version) metaLines.push(`<p>Document Version: ${meta.version}</p>`);
  if (meta.date) metaLines.push(`<p>Date: ${meta.date}</p>`);
  if (meta.validity) metaLines.push(`<p>Valid for: ${meta.validity}</p>`);

  return `<section class="cover">
    ${logoImg(meta.logo, baseDir)}
    ${meta.brand ? `<div class="brand">${meta.brand}</div>` : ""}
    ${meta.title ? `<h1>${meta.title}</h1>` : ""}
    ${meta.subtitle ? `<div class="subtitle">${meta.subtitle}</div>` : ""}
    <div class="divider"></div>
    ${details.join("\n    ")}
    ${metaLines.length ? `<div class="meta">${metaLines.join("")}</div>` : ""}
  </section>`;
}

/** Reads a Markdown proposal and renders a complete, self-contained HTML document. */
export function render(markdownPath: string): RenderResult {
  const raw = fs.readFileSync(markdownPath, "utf8");
  const { data, content } = matter(raw);
  const meta = data as ProposalMeta;

  const css = fs.readFileSync(
    path.join(ROOT, "templates", "proposal.css"),
    "utf8"
  );
  const body = md.render(content);
  const baseDir = path.dirname(markdownPath);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${meta.title ?? "Proposal"}</title>
<style>
${css}
</style>
</head>
<body>
${coverHtml(meta, baseDir)}
<main class="content">
${body}
</main>
</body>
</html>`;

  const outputName = meta.output
    ? String(meta.output)
    : slugify(meta.title ?? path.basename(markdownPath, ".md"));

  return { html, meta, outputName };
}
