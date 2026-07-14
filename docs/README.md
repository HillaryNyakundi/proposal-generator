# Documentation

Full documentation for the Proposal Generator — a tool that turns a Markdown file into branded **PDF** and **DOCX** proposals/quotations.

## What it does

You write a proposal once in Markdown (`proposal.md`), with a small YAML header for cover-page details. The tool renders it through a shared HTML template + CSS, then exports:

- a **PDF** via headless Chromium (Puppeteer) — pixel-accurate, print-ready.
- a **DOCX** via `@turbodocx/html-to-docx` — an editable Word document.

One source of truth, two professional outputs, styled entirely by your own CSS.

## Documentation map

| Doc | Read it when you want to… |
| --- | --- |
| [getting-started.md](getting-started.md) | Install and generate your first document. |
| [authoring.md](authoring.md) | Write a proposal — front-matter fields, tables, page breaks, logos. |
| [architecture.md](architecture.md) | Understand how the pipeline works, module by module. |
| [styling.md](styling.md) | Change fonts, colors, spacing, and the cover design. |
| [cli.md](cli.md) | Look up commands and npm scripts. |
| [new-proposal.md](new-proposal.md) | Spin up a new proposal for a new client. |
| [troubleshooting.md](troubleshooting.md) | Fix a logo that won't show, layout quirks, and errors. |

## 30-second version

```bash
npm install                              # once
npm run generate                         # build proposal.md → PDF + DOCX
npx tsx src/index.ts avid-proposal.md    # build a different proposal
```

Outputs land next to the Markdown file; their filename comes from the `output:` field in the front-matter.
