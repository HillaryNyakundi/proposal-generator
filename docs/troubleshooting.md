# Troubleshooting

## Logo not appearing

The logo is skipped (silently, or with a warning) in these cases:

1. **The `logo:` line is commented out.** In YAML, `#` starts a comment, so `# logo: assets/logo.png` sets nothing. Remove the `#`:
   ```yaml
   logo: assets/logo.png
   ```

2. **The path is wrong.** `logo:` is resolved **relative to the Markdown file**, not the project root. If your Markdown is in a subfolder, adjust accordingly (e.g. `../assets/logo.png`). When the file isn't found you'll see:
   ```
   Warning: logo not found at /abs/path/... — skipping.
   ```

3. **Unsupported file type.** Supported extensions: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`. Anything else prints:
   ```
   Warning: unsupported logo type ".xyz" — skipping.
   ```

To confirm a logo actually made it in:

```bash
# Is it in the DOCX?
unzip -l AVID_TECH_Proposal.docx | grep media
# Is the data URI in the rendered HTML?
npx tsx -e "const {render}=require('./src/render.ts'); console.log(render('avid-proposal.md').html.includes('data:image'))"
```

## Why not just use a file path or `file://` for images?

Both exporters receive **an HTML string**, not a file on disk, so there's no base directory to resolve a relative path against. `page.setContent()` in Puppeteer has no base URL, and the DOCX converter can't reach the filesystem either. Inlining the image as a base64 `data:` URI is what makes it work in both. This is why the logo (and the CSS) are embedded rather than linked.

## The cover isn't centered in the DOCX

Expected. The cover uses CSS flexbox to center its content, and Word has no flexbox — so in the DOCX the cover text lands at the top of the page. The PDF is centered correctly. See [styling.md](styling.md#the-cover-and-docx) for the workaround.

## Typecheck errors after changing options

`npm run typecheck` runs the real TypeScript compiler and will flag mismatched option types (e.g. passing a string where Puppeteer or the DOCX library expects a number). Note that `tsx` (used to *run* the tool) does **not** type-check — it strips types and runs — so a program can run fine yet still fail `typecheck`. Run the typecheck before committing.

Two real examples from this project:
- Puppeteer's `setContent` accepts `waitUntil: "load"` / `"domcontentloaded"`, not `"networkidle0"` (that's for navigations).
- `@turbodocx/html-to-docx` `pageSize` wants numbers in twips, not CSS strings like `"210mm"`.

## Fonts look different in the DOCX

Use standard/system fonts (Arial, Helvetica, Georgia, Times New Roman). Web fonts don't carry into Word. Set the font in `body { font-family: … }` in [`templates/proposal.css`](../templates/proposal.css).

## Chromium / Puppeteer didn't download

Puppeteer fetches Chromium during `npm install`. If it was skipped (offline install, corporate proxy, or `PUPPETEER_SKIP_DOWNLOAD` set), reinstall:

```bash
npm rebuild puppeteer
# or
npx puppeteer browsers install chrome
```

## `node_modules` shows up in git

The repo's early history committed `node_modules`. `.gitignore` now excludes it, but if it's still tracked, untrack it (keeps the files on disk):

```bash
git rm -r --cached node_modules
git commit -m "chore: stop tracking node_modules"
```

## A table isn't rendering as a table

Markdown tables need the header separator row (`| --- | --- |`) and consistent pipes. A blank line must separate the table from surrounding text. See [authoring.md](authoring.md#tables).
