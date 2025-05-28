# Noodle Seed Investor Deck

An 8-slide investor pitch deck built with a modular HTML/CSS system and automated PDF/PNG generation.

## Build System

### Quick Command
- `npm run build` - Complete build process (HTML → PDF → PNGs)

### Build Process
The unified build system (`src/html/build-all.js`) performs:

1. **Clean** - Removes previous build files and PNG outputs
2. **HTML Build** - Combines modular components into single HTML file
3. **PDF Generation** - Uses Puppeteer to create complete 8-slide PDF
4. **PNG Extraction** - Uses native macOS tools to extract high-quality PNGs from PDF pages

### Architecture

**Modular Structure:**
```
src/html/
├── components/
│   ├── document-head.html      # HTML head with CSS
│   ├── presentation-start.html # Opening HTML tags
│   └── presentation-end.html   # Navigation and closing tags
├── slides/
│   ├── slide-1.html           # Title + Hook
│   ├── slide-2.html           # The Problem  
│   ├── slide-3.html           # Solution + Differentiation
│   ├── slide-4.html           # Market Opportunity
│   ├── slide-5.html           # Customer Proof
│   ├── slide-6.html           # Team
│   ├── slide-7.html           # Funding + Roadmap
│   └── slide-8.html           # Investment Opportunity
├── css/
│   └── main.css               # Consolidated CSS (all styles)
└── build-all.js               # Unified build script
```

**Output Structure:**
```
dist/html/
├── noodleseed-investor-deck.pdf    # Complete 8-slide deck
└── pngs/
    ├── slide-01.png               # High-quality PNG images  
    └── ...slide-08.png
```

### Technologies Used

- **Puppeteer** - HTML to PDF conversion with print CSS support
- **Native macOS sips** - PDF to PNG conversion (no external dependencies)
- **Modular HTML/CSS** - Component-based slide development
- **Print CSS** - Optimized styling for PDF output

### Development Notes

- Each slide is a self-contained HTML component with inline CSS
- The build system automatically handles slide numbering (8 slides total)
- CSS is consolidated into a single file for performance
- Navigation controls are hidden during PDF generation
- Uses A4 landscape format with optimized margins
- High-quality PNG generation at 300 DPI using native macOS tools

### Build Validation Process

**IMPORTANT**: After running `npm run build`, always validate the generated slides:

1. **Check all PNG outputs** - Look at each PNG in `dist/react-pdf/pngs/` to verify:
   - No text is cut off or overlapping
   - All content is visible and properly laid out
   - Colors and styling are correct
   - No blank or partially rendered slides

2. **Common issues to check for**:
   - Text overflow in boxes (reduce font size or padding)
   - Missing content (check for unsupported CSS properties)
   - Blank slides (often due to border styling issues)
   - Icon rendering problems (verify SVG compatibility)

3. **If issues are found**:
   - Fix the React component in `src/react-pdf/build-pdf.js`
   - Rebuild with `npm run build`
   - Re-validate all slides again

### Key Features

- **Research-backed structure** - 8-slide format based on investor deck best practices
- **Consistent branding** - Noodle Seed logo and color scheme throughout
- **Professional styling** - Clean, modern design with proper typography
- **Cross-format output** - PDF for presentations, PNGs for web/social media
- **Fast builds** - Single PDF generation + native tool extraction
- **No external dependencies** - Uses built-in macOS tools for image processing

This system eliminates content overflow issues from the previous 7-slide structure while maintaining professional presentation quality.
