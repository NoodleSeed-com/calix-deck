# NoodleSeed Investor Materials

This repository contains investor presentation materials for NoodleSeed, including:
- HTML-based interactive slide deck
- LaTeX-based one-page investor summary
- LaTeX-based pitch deck

## Repository Structure

```
.
├── assets/               # Shared assets
│   └── images/           # Images used in presentations
├── dist/                 # Generated output files
│   ├── html/             # HTML presentation outputs
│   │   ├── pdfs/         # Individual slide PDFs
│   │   └── noodleseed-investor-deck.pdf # Complete HTML deck as PDF
│   ├── one-page/         # One-page investor sheet
│   └── pitch-deck/       # Full pitch deck
├── src/                  # Source files
│   ├── html/             # HTML presentation source
│   │   ├── html-to-pdf.js # PDF conversion script
│   │   └── index.html    # HTML presentation
│   └── latex/            # LaTeX source files
│       ├── examples/     # Example LaTeX files
│       ├── one-page/     # One-page investor summary
│       └── pitch-deck/   # Full pitch deck
├── .claude.md            # Claude memory file
├── .gitignore            # Git ignore rules
├── package.json          # Node.js package information
└── README.md             # This file
```

## HTML Presentation

The HTML presentation is a responsive, interactive slide deck that can be viewed in a browser or exported to PDF.

### Requirements

- Node.js (14+)
- NPM (6+)

### Setup

```bash
# Install dependencies
npm install
```

### Usage

```bash
# Generate PDF and open it
npm run pdf

# Only generate PDF without opening
npm run build:pdf

# Only open existing PDF
npm run open:pdf
```

### Output Files

- `dist/html/noodleseed-investor-deck.pdf` - Complete slide deck as one PDF
- `dist/html/pdfs/slide-XX.pdf` - Individual slide PDFs

## LaTeX Documents

### One-Page Investor Summary

Located in `src/latex/one-page/`, this is a condensed one-page summary of NoodleSeed for potential investors.

### Pitch Deck

Located in `src/latex/pitch-deck/`, this is a full presentation deck created with LaTeX.

## Branding Colors

- NoodleBlue: rgb(41, 131, 255)
- NoodleGreen: rgb(0, 219, 170)
- FundingBlue: rgb(52, 149, 235)
- FundingTeal: rgb(0, 192, 165)
- FundingYellow: rgb(254, 204, 141)
- FundingBlack: rgb(34, 34, 34)