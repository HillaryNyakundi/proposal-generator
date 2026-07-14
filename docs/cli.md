# CLI & Scripts

## npm scripts

These operate on the default `proposal.md`:

| Command | Does |
| --- | --- |
| `npm run generate` | Build **both** PDF and DOCX. |
| `npm run pdf` | Build the PDF only. |
| `npm run docx` | Build the DOCX only. |
| `npm run typecheck` | Type-check the TypeScript sources (`tsc --noEmit`). Does not emit files. |

## Direct invocation

To target a different Markdown file or combine options, call the entry point with `tsx`:

```bash
npx tsx src/index.ts [markdown-file] [--pdf] [--docx]
```

### Arguments

| Argument | Meaning |
| --- | --- |
| `[markdown-file]` | Path to the proposal Markdown. Defaults to `proposal.md`. |
| `--pdf` | Generate the PDF. |
| `--docx` | Generate the DOCX. |

If **neither** `--pdf` nor `--docx` is given, **both** are generated.

### Examples

```bash
# Both formats from a specific file
npx tsx src/index.ts avid-proposal.md

# PDF only, from a specific file
npx tsx src/index.ts avid-proposal.md --pdf

# DOCX only, from the default proposal.md
npx tsx src/index.ts --docx

# Both formats from the default proposal.md
npx tsx src/index.ts
```

## Output location & naming

- Files are written to the **same directory as the Markdown file**.
- The base filename comes from the `output:` front-matter field; if absent, a slug of `title`; if that's absent too, the Markdown filename.
- Extensions `.pdf` / `.docx` are appended automatically.

Example: `avid-proposal.md` with `output: AVID_TECH_Proposal` produces `AVID_TECH_Proposal.pdf` and `AVID_TECH_Proposal.docx`.

## Exit behavior

On any error (missing file, render failure), the process prints the error and exits with a non-zero status. A missing or unsupported **logo** is a warning, not an error — generation continues without it.
