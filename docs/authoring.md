# Authoring a Proposal

A proposal is a single Markdown file with two parts:

1. A **YAML front-matter** block (between `---` lines) that fills the cover page.
2. The **Markdown body** — your actual content.

```markdown
---
title: Design Proposal & Quotation
brand: AVID TECH
subtitle: Brand Identity • Mobile App Assets • Google Play Store Assets
client: Gabriel Okemwa - tkspa.com
date: 14 July 2026
validity: 14 Days
output: AVID_TECH_Proposal
---

## About AVID TECH

Your content starts here…
```

## Front-matter reference

Every field is **optional**. Omit any you don't need and the cover adapts — nothing is left blank or labeled with an empty value.

| Field | Cover output | Notes |
| --- | --- | --- |
| `title` | Large heading | Also used as the `<title>` and as a filename fallback. |
| `brand` | Small uppercase label above the title | Your company name. |
| `subtitle` | Line under the title | One-line description or tagline. |
| `logo` | Image above the brand | Path **relative to the Markdown file**, e.g. `assets/logo.png`. See [logos](#logos). |
| `preparedBy` | "Prepared by: …" | The author / your side. |
| `client` | "Prepared for: …" | The recipient. |
| `projectType` | "Project Type: …" | Optional descriptor. |
| `techStack` | "Technology Stack: …" | Optional descriptor. |
| `version` | "Document Version: …" | In the small meta block. |
| `date` | "Date: …" | Any format you like; it's printed verbatim. |
| `validity` | "Valid for: …" | E.g. `14 Days`. Good for quotations. |
| `output` | — | Base filename for the PDF/DOCX (no extension). If omitted, a slug of the title is used. |

> Tip: quote values that contain special YAML characters. Numbers like a version are safest quoted: `version: "1.0"`.

Any extra keys you add are simply ignored by the renderer, so you can keep your own notes in the front-matter if you like.

## Body content

The body is standard Markdown, rendered by `markdown-it`. What's supported and how it's styled:

| Markdown | Result |
| --- | --- |
| `## Heading` | Section heading with an underline rule. **Use `##` for your main sections.** |
| `### Subheading` | Smaller subheading. |
| `- item` / `1. item` | Bulleted / numbered lists. |
| `**bold**`, `*italic*` | Inline emphasis. |
| `[text](url)` | Links (bare URLs are auto-linked too). |
| `> quote` | Callout box with a colored left border. |
| Tables (see below) | Bordered, full-width tables. |

Heading sizing note: `#` (h1) is styled large for the **cover title** and is generated for you from `title`. In the body, start your sections at `##` so they look right.

### Tables

Use standard Markdown (GitHub-flavored) tables. Alignment colons work — right-alignment is handy for prices:

```markdown
| Package | Includes | Investment |
| --- | --- | ---: |
| **Brand Identity** | Logo suite, colour palette, typography | **KES 15,000 – 30,000** |
| **Complete Package** | Everything included | **KES 20,000 – 35,000** |
```

Tables render in both PDF and DOCX. In the DOCX, rows are kept from splitting across pages.

### Page breaks

To force a new page in the PDF, drop this line in the body wherever you want the break:

```html
<div class="page-break"></div>
```

Because `markdown-it` is configured with `html: true`, raw HTML like this passes through. (In the DOCX, page-break behavior is approximate — Word repaginates on its own.)

### Centering a block

Raw HTML works for one-off layout, e.g. a centered closing page:

```html
<div style="text-align:center;">

## Thank you for choosing AVID TECH.

*Designing brands that inspire confidence.*

</div>
```

Leave blank lines around the inner Markdown so it's still parsed as Markdown.

## Logos

1. Put your image in [`assets/`](../assets/) — e.g. `assets/logo.png`. Supported: PNG, JPG, GIF, WebP, SVG.
2. Set the `logo:` field to that path (relative to the Markdown file):
   ```yaml
   logo: assets/logo.png
   ```
3. Regenerate.

The image is inlined as a base64 data URI, so it appears in **both** the PDF and the DOCX with no external file dependency. Display size is capped by `.cover .logo` in [`templates/proposal.css`](../templates/proposal.css) (default max 220×120px) — adjust it there.

**Common mistake:** leaving the `logo:` line commented out (`# logo: …`). YAML treats `#` as a comment, so the logo is never configured. See [troubleshooting.md](troubleshooting.md#logo-not-appearing).

## Generating

```bash
npx tsx src/index.ts your-proposal.md        # PDF + DOCX
npx tsx src/index.ts your-proposal.md --pdf  # PDF only
```

For the default `proposal.md`, the shorthand `npm run generate` / `npm run pdf` / `npm run docx` works. See [cli.md](cli.md).
