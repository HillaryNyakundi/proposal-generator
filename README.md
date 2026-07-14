# Proposal Generator

Write a proposal once in **Markdown**, generate branded **PDF** and **DOCX** documents from it. Content lives in `proposal.md` (with a front-matter header for cover-page fields); styling lives in one CSS file; a small TypeScript pipeline renders Markdown → HTML → PDF/DOCX.

- **PDF** via [Puppeteer](https://pptr.dev/) (headless Chromium, pixel-accurate).
- **DOCX** via [@turbodocx/html-to-docx](https://www.npmjs.com/package/@turbodocx/html-to-docx) (editable Word document).

- **Full documentation lives in [docs/](docs/)** — see [docs/README.md](docs/README.md) for the map ([getting started](docs/getting-started.md), [authoring](docs/authoring.md), [architecture](docs/architecture.md), [styling](docs/styling.md), [CLI](docs/cli.md), [new proposal](docs/new-proposal.md), [troubleshooting](docs/troubleshooting.md)).

## Why Markdown

- Easy to edit for every new client — change the front-matter and body, nothing else.
- Version-control friendly.
- One source of truth converts cleanly to both HTML-based PDF and DOCX.
- Styled with your own CSS ([templates/proposal.css](templates/proposal.css)) — reusable across proposals.

## Requirements

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm

Puppeteer downloads its own Chromium on install; no separate browser setup needed. TypeScript runs directly via [tsx](https://www.npmjs.com/package/tsx) — there is no build step.

## Installation

```bash
npm install
```

## Usage

Edit [proposal.md](proposal.md), then run:

```bash
npm run generate   # both PDF and DOCX
npm run pdf        # PDF only
npm run docx       # DOCX only
```

Outputs are written next to the Markdown file. The filename comes from the `output` field in the front-matter (default: `Safeschoolbus_Proposal.pdf` / `.docx`).

You can also point the pipeline at a different Markdown file:

```bash
npx tsx src/index.ts path/to/other-proposal.md
```

## Writing a proposal

`proposal.md` starts with a YAML front-matter block that fills the cover page, followed by the Markdown body:

```markdown
---
title: School Transport Safety System Proposal
brand: Safeschoolbus
logo: assets/logo.png            # optional; path relative to proposal.md
subtitle: A short one-line description of the proposal
preparedBy: Hillary Nyakundi
projectType: Mobile and web-based system
techStack: Expo React Native, Node.js, Express
version: "1.0"
date: July 2026
output: Safeschoolbus_Proposal   # base filename for the PDF/DOCX
---

## 1. Executive Summary

Your content here — headings, lists, **bold**, and tables all work.

| Item | Estimate |
| --- | ---: |
| Discovery and planning | KES 80,000 – 150,000 |
```

Every front-matter field is optional — omit any you don't need and the cover adapts. Use `<div class="page-break"></div>` in the body to force a page break in the PDF.

### Adding a logo

1. Drop your logo image into the [assets/](assets/) folder (e.g. `assets/logo.png`). PNG, JPG, GIF, WebP, and SVG are supported.
2. Set (or uncomment) the `logo:` field in the front-matter, pointing at it relative to `proposal.md`.
3. Regenerate.

The image is inlined as a base64 data URI at render time, so it appears in **both** the PDF and the DOCX with no external file dependency. Display size is capped in [templates/proposal.css](templates/proposal.css) (`.cover .logo`, default max 220×120px) — adjust there. If the file is missing or an unsupported type, the build prints a warning and skips the logo rather than failing.

## Project structure

```
.
├── proposal.md              # Content + front-matter (edit this)
├── assets/                  # Logo and other images
├── templates/
│   └── proposal.css         # Branded stylesheet
├── src/
│   ├── index.ts             # CLI entry point / orchestrator
│   ├── render.ts            # Markdown + front-matter → styled HTML
│   ├── pdf.ts               # HTML → PDF (Puppeteer)
│   └── docx.ts              # HTML → DOCX (@turbodocx/html-to-docx)
├── tsconfig.json
├── package.json
└── README.md
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run generate` | Generate both PDF and DOCX |
| `npm run pdf` | Generate PDF only |
| `npm run docx` | Generate DOCX only |
| `npm run typecheck` | Type-check the TypeScript sources |

## Notes

- Word documents have no concept of CSS flexbox/grid, so the centered cover page won't match the PDF exactly (the text lands at the top). Headings, paragraphs, tables, and inline styling convert faithfully. For pixel-perfect output, use the PDF.
- The PDF and DOCX use the same A4 page size and 24mm/18mm margins.

## License

ISC
