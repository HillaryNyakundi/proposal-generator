# Getting Started

## Requirements

- [Node.js](https://nodejs.org/) v18 or newer
- npm

No other setup is needed:

- **Puppeteer** downloads its own copy of Chromium during `npm install`.
- **TypeScript** runs directly via [tsx](https://www.npmjs.com/package/tsx) — there is **no build step** and no `dist/` folder.

## Install

```bash
npm install
```

This installs both the runtime dependencies (Puppeteer, the DOCX converter, the Markdown parser) and the dev tooling (TypeScript, tsx, type definitions).

## Generate your first document

The repo ships with two example proposals:

- `proposal.md` — the Safeschoolbus software proposal (the default).
- `avid-proposal.md` — the AVID TECH design quotation.

Build the default one:

```bash
npm run generate
```

You'll see:

```
PDF created: Safeschoolbus_Proposal.pdf
DOCX created: Safeschoolbus_Proposal.docx
```

Both files are written to the project root. Open the PDF in any viewer, or the DOCX in Word / Google Docs / LibreOffice.

## Build a specific proposal

Pass the Markdown file as an argument:

```bash
npx tsx src/index.ts avid-proposal.md
```

## Build only one format

```bash
npm run pdf     # PDF only
npm run docx    # DOCX only
```

See [cli.md](cli.md) for the full command reference, then [authoring.md](authoring.md) to write your own.
