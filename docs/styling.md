# Styling

All visual styling lives in one file: [`templates/proposal.css`](../templates/proposal.css). It is read at render time and inlined into every generated document, so a change there affects the next PDF and DOCX you build — no other step required.

## How styling reaches the output

- **PDF:** Chromium renders the HTML + CSS exactly as a browser would, so nearly all CSS is honored (flexbox, `@page` margins, backgrounds, page-break hints).
- **DOCX:** `@turbodocx/html-to-docx` maps HTML/CSS onto Word constructs. It handles fonts, colors, bold/italic, headings, lists, and tables well, but **does not** support layout CSS like flexbox or grid. See [the cover caveat](#the-cover-and-docx).

## Key selectors

| Selector | Controls |
| --- | --- |
| `body` | Base font family, text color, line height. |
| `.cover` | The cover page — centered via flexbox, full-height, page-break after. |
| `.cover .logo` | Logo max size on the cover (default 220×120px). |
| `.brand` | The small uppercase brand label. |
| `.cover .subtitle` | The subtitle under the title. |
| `.divider` | The short accent bar under the cover heading. |
| `.cover .meta` | The small date/version/validity block. |
| `.content` | Wrapper around the body; sets body padding. |
| `h1` | Cover title size. |
| `h2` | Section headings + the underline rule. |
| `h3` | Subheadings. |
| `table`, `th`, `td` | Table borders, padding, header background. |
| `blockquote` | Callout box styling. |
| `.page-break` | Utility that forces a page break (`page-break-after: always`). |

## Common changes

**Brand color.** The accent blue `#2563eb` appears on `.brand` and `.divider`. Change both:

```css
.brand { color: #c026d3; }
.divider { background: #c026d3; }
```

**Fonts.** Update `body { font-family: … }`. Stick to system/standard fonts (Arial, Helvetica, Georgia, Times New Roman) so the DOCX renders identically on any machine — a web font would need embedding and won't carry into Word cleanly.

**Page margins (PDF).** Two things set PDF margins and they should agree:
- `@page { margin: … }` in the CSS.
- The `margin` option in [`src/pdf.ts`](../src/pdf.ts) (`page.pdf({ margin: … })`), which is what Chromium actually uses for PDF printing.

**Page margins (DOCX)** are set separately in [`src/docx.ts`](../src/docx.ts) via the `margins` option (in twips: 1440 = 1 inch = 25.4mm).

**Table alignment.** Right-align a column from the Markdown with `---:` in the header separator (see [authoring.md](authoring.md#tables)); fine-tune padding/borders in `th, td`.

## The cover and DOCX

The cover uses `display: flex` to center everything vertically and horizontally. Word has no flexbox, so in the DOCX the cover content lands at the **top** of the first page instead of centered. Everything else (headings, text, tables, the logo image) converts faithfully.

If you need a pixel-perfect cover, use the PDF. If you specifically need a centered-looking cover in the DOCX, the workaround is Word-friendly constructs (leading spacer paragraphs, or a single-cell table) — ask and it can be added as a DOCX-only cover variant.
