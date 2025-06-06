# Claude Code Self-Learning Instructions

## Core Directive: Continuous Learning
I should actively maintain and update this CLAUDE.md file as I discover new patterns, workflows, and preferences during our collaboration. This file serves as my evolving memory of how to best assist with this project.

## Learning Protocol

### 1. Pattern Recognition
When I encounter any of the following, I should consider updating this file:
- Repeated commands or workflows
- Technology-specific best practices
- User preferences expressed multiple times
- Build/test/deployment commands
- Project structure conventions
- Error resolution patterns
- **New command discoveries from research** (especially when user encounters command errors)
- **Framework-specific CLI commands and syntax**
- **Correct vs incorrect command patterns**

### 2. User Confirmation Required
**IMPORTANT**: Before adding anything to this file, I MUST:
1. Identify the pattern or preference
2. Ask the user: "I noticed [pattern/preference]. Would you like me to remember this for future sessions?"
3. Only update after explicit confirmation
4. Show what I plan to add before making changes

**CRITICAL REMINDER**: When I research new information to solve user problems (especially command errors), I should ALWAYS offer to update this file with the discovered information. The user should not have to remind me to do this.

### 3. Research-First Problem Solving Protocol
**CRITICAL**: Before implementing fixes for errors or issues, I MUST:

1. **Primary Source Research** (Official Documentation):
   - Check official documentation, GitHub repos, PyPI pages
   - Look for official troubleshooting guides, FAQs
   - Search official issue trackers for similar problems

2. **Secondary Source Research** (Established Communities):
   - Stack Overflow with high upvotes and recent activity
   - Official forums, Discord servers, Reddit communities
   - Well-established technical blogs with author credentials

3. **Tertiary Source Research** (General Community):
   - GitHub issue discussions and solutions
   - Personal blogs and tutorials (with validation)
   - AI-generated content (but verify against primary/secondary)

4. **Research Documentation**:
   - Always note the source of solutions found
   - Prioritize solutions that can be validated from multiple sources
   - Document the research process for future reference

**Implementation Priority**:
1. Solutions found in primary sources (official docs, maintainer responses)
2. Solutions validated across multiple secondary sources
3. Community solutions with clear explanations and recent activity
4. Custom solutions only when no established patterns exist

**When Research is MANDATORY**:
- API-related errors (TypeError, method signatures, async/await issues)
- Framework-specific behavior that contradicts expectations
- Version compatibility issues
- Testing framework integration problems
- Any error where quick fixes don't work and multiple attempts fail

**CRITICAL WORKFLOW UPDATE**: Before attempting any complex fixes involving APIs, testing frameworks, or third-party libraries, I MUST:
1. Research the exact error message in official documentation
2. Search for similar issues in GitHub repositories and Stack Overflow
3. Check for recent API changes or version compatibility issues
4. Look for working examples from authoritative sources
5. Only then analyze and implement a solution based on research findings

### 4. Validation Loop Discovery
As I work on tasks, I should:
- Identify validation steps (tests, linting, type checking)
- Document the commands that verify my work
- Learn the expected outputs of successful validation
- Update this file with discovered validation workflows

Example validation patterns to capture:
- Test commands and expected outputs
- Linting rules and how to fix common issues
- Build processes and success indicators
- Type checking commands

### 5. File Maintenance
- Monitor file size during updates
- If file exceeds 4-5 pages (~200 lines), look for:
  - Redundant information
  - Patterns that can be generalized
  - Outdated information no longer relevant
- Propose consolidation to user before compacting

### 6. Update Format
When adding new information, use this structure:
```markdown
## [Category]
### [Specific Pattern/Command]
- **When to use**: [Context]
- **Command/Pattern**: [Exact command or pattern]
- **Validation**: [How to verify it worked]
- **Added**: [Date]
```

---

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

---

## Learned Patterns and Knowledge

### Project-Specific Patterns
#### Investor Deck Build System
- **When to use**: Building and validating the 8-slide investor presentation
- **Command/Pattern**: `npm run build` - Complete build process (HTML → PDF → PNGs)
- **Validation**: Check all PNG outputs in `dist/react-pdf/pngs/` for proper rendering, no text cutoff, correct styling
- **Architecture**: Modular HTML/CSS system with Puppeteer PDF generation and native macOS PNG extraction
- **Added**: 2025-06-06

### Development Environment
<!-- To be updated as commands are learned -->

### Common Commands
<!-- To be updated as commands are learned -->

### Validation Workflows
<!-- To be updated as validation patterns are discovered -->

### Technology Stack
#### Frontend Build Tools
- **Puppeteer**: HTML to PDF conversion with print CSS support
- **Native macOS sips**: PDF to PNG conversion (no external dependencies)
- **Modular HTML/CSS**: Component-based slide development
- **Added**: 2025-06-06

### User Preferences
<!-- To be updated as preferences are discovered -->

---
*This file is self-maintaining. I will ask for permission before adding new patterns and keep it concise and relevant.*
