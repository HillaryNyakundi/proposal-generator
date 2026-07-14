# Creating a New Proposal

The fastest way to make a proposal for a new client is to copy an existing one and change the front-matter.

## Steps

1. **Copy an existing proposal** as your starting point:

   ```bash
   cp avid-proposal.md clients/acme-quote.md
   ```

   (Any location works; outputs are written next to the file. Create a folder like `clients/` if you want to keep them organized.)

2. **Edit the front-matter** for this client:

   ```yaml
   ---
   title: Design Proposal & Quotation
   brand: AVID TECH
   logo: assets/logo.png
   subtitle: Brand Identity • Mobile App Assets
   client: Acme Ltd — jane@acme.com
   date: 20 July 2026
   validity: 14 Days
   output: Acme_Quotation        # controls the output filename
   ---
   ```

   > If you moved the file into a subfolder, remember `logo:` is relative to the **Markdown file**. From `clients/acme-quote.md`, the logo path would be `../assets/logo.png`.

3. **Adjust the body** — prices, timeline, deliverables, scope.

4. **Generate:**

   ```bash
   npx tsx src/index.ts clients/acme-quote.md
   ```

   → `clients/Acme_Quotation.pdf` and `clients/Acme_Quotation.docx`.

## What to change per client (checklist)

- [ ] `client` — name and contact
- [ ] `date` and `validity`
- [ ] `output` — so you don't overwrite another client's files
- [ ] Prices in the Service Packages table
- [ ] Timeline / delivery estimate
- [ ] Scope and deliverables
- [ ] Any package-specific terms

## Keeping proposals in git

Generated `*.pdf` and `*.docx` files are git-ignored (see `.gitignore`), so only your Markdown sources are tracked. That's intentional — the Markdown is the source of truth; the documents are build artifacts you can regenerate anytime.
