# Architecture

## Overview

The generator is a small pipeline: **Markdown → HTML → (PDF | DOCX)**. A single rendering step produces one self-contained HTML string, which both exporters consume. This guarantees the PDF and DOCX are built from identical markup.

```
proposal.md ──► render() ──► HTML string ──┬──► generatePdf() ──► *.pdf
 (content +      (Markdown +    (cover +    │      (Puppeteer)
  front-matter)   CSS + logo)    body)      └──► generateDocx() ──► *.docx
                                                   (html-to-docx)
```

## The files

| File | Responsibility |
| --- | --- |
| [`src/index.ts`](../src/index.ts) | CLI entry point. Parses arguments, calls `render()`, then runs the requested exporters. |
| [`src/render.ts`](../src/render.ts) | Turns a Markdown file into a full HTML document (cover + body + inlined CSS + inlined logo). The heart of the system. |
| [`src/pdf.ts`](../src/pdf.ts) | Exports an HTML string to PDF using Puppeteer. |
| [`src/docx.ts`](../src/docx.ts) | Exports an HTML string to DOCX using `@turbodocx/html-to-docx`. |
| [`templates/proposal.css`](../templates/proposal.css) | The stylesheet, read at render time and inlined into `<style>`. |

## How `render()` works

1. **Read** the Markdown file.
2. **Split** front-matter from body with [`gray-matter`](https://www.npmjs.com/package/gray-matter). Front-matter becomes the `meta` object; the rest is the Markdown body.
3. **Render the body** to HTML with [`markdown-it`](https://www.npmjs.com/package/markdown-it) (configured with `html: true`, `linkify: true`, `typographer: true`).
4. **Build the cover** from `meta` (brand, title, subtitle, logo, prepared-by/for, date, validity, etc.).
5. **Inline the CSS** from `templates/proposal.css` into a `<style>` tag.
6. **Assemble** the final HTML document and return it, along with the resolved `outputName`.

The returned object:

```ts
interface RenderResult {
  html: string;        // complete, self-contained HTML document
  meta: ProposalMeta;  // parsed front-matter
  outputName: string;  // base filename for outputs (no extension)
}
```

## Why the HTML is self-contained

Both exporters receive **an HTML string**, not a file path or URL. That means there is no base directory for the browser or the DOCX converter to resolve relative paths against. So everything external is inlined:

- **CSS** is read from disk and embedded in `<style>`.
- **The logo** is read from disk and embedded as a base64 `data:` URI (see [`logoImg()`](../src/render.ts)).

This is the key design decision that lets the same markup produce both a correct PDF and a correct DOCX with images. See [troubleshooting.md](troubleshooting.md) for why a plain `file://` path would not work.

## Output naming

The base filename is resolved in this order:

1. The `output:` front-matter field, if present.
2. Otherwise, a slug of the `title`.
3. Otherwise, the Markdown filename.

`generatePdf` and `generateDocx` append `.pdf` / `.docx`.

## PDF export details ([`src/pdf.ts`](../src/pdf.ts))

- Launches headless Chromium, calls `page.setContent(html, { waitUntil: "load" })`.
- `waitUntil: "load"` (not `networkidle0`) because there is no navigation — all assets are already inline.
- Prints A4 with `printBackground: true`, 24mm top/bottom and 18mm left/right margins, and a centered `Page X of Y` footer.
- The browser is always closed in a `finally` block.

## DOCX export details ([`src/docx.ts`](../src/docx.ts))

- Passes the HTML string to `HTMLtoDOCX` with A4 page size (in twips), matching margins, a footer, and page numbers.
- Table rows are set to not split across pages (`cantSplit`).
- Writes the returned buffer to disk.

## Dependencies

| Package | Role |
| --- | --- |
| `puppeteer` | HTML → PDF via headless Chromium |
| `@turbodocx/html-to-docx` | HTML → DOCX |
| `markdown-it` | Markdown → HTML |
| `gray-matter` | Parse YAML front-matter |
| `tsx` (dev) | Run TypeScript directly, no build step |
| `typescript`, `@types/*` (dev) | Type-checking and editor support |
