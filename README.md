# PDF Generator

A small Node.js script that converts an HTML file into a print-ready PDF using [Puppeteer](https://pptr.dev/). It renders `proposal.html` in a headless Chromium browser and outputs an A4 PDF with page numbers in the footer.

## Features

- Renders HTML (including CSS backgrounds) to PDF via headless Chromium
- A4 page format with sensible print margins
- Automatic `Page X of Y` footer on every page
- Waits for the network to be idle so all assets load before printing

## Requirements

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm

Puppeteer downloads its own copy of Chromium on install, so no separate browser setup is needed.

## Installation

```bash
npm install
```

## Usage

1. Place the HTML you want to convert in the project root as `proposal.html` (or edit the path in [generate-pdf.js](generate-pdf.js)).
2. Run the script:

```bash
node generate-pdf.js
```

3. The generated PDF is written to the project root (default: `Safeschoolbus_Proposal.pdf`).

On success you'll see:

```
PDF created successfully!
```

## Configuration

The PDF options live in [generate-pdf.js](generate-pdf.js) and can be adjusted:

| Option | Current value | Description |
| --- | --- | --- |
| Input file | `proposal.html` | Source HTML rendered to PDF |
| Output file | `Safeschoolbus_Proposal.pdf` | Path of the generated PDF |
| `format` | `A4` | Page size |
| `printBackground` | `true` | Include CSS background colors/images |
| `margin` | 24mm / 18mm | Top-bottom / left-right page margins |
| Footer | `Page X of Y` | Centered page-number footer |

To change the header, use the `headerTemplate` option (currently empty).

## Project Structure

```
.
├── generate-pdf.js   # The conversion script
├── proposal.html     # Source HTML input
├── package.json      # Dependencies and metadata
└── README.md
```

## License

ISC
