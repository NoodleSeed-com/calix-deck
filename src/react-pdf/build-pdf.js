import React from 'react';
import { renderToBuffer, Document } from '@react-pdf/renderer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import slide components - enhanced 5-slide deck with case study
import { createSlide1 } from './slides/slide-01.js';
import { createSlide2 } from './slides/slide-02.js';
import { createSlide3 } from './slides/slide-03.js';
import { createSlide4 } from './slides/slide-04.js';
import { createSlide5 } from './slides/slide-05.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate PDF document
async function generatePDF() {
    const document = React.createElement(Document, {
        title: "Noodle Seed AI Agent Development Services",
        author: "Noodle Seed",
        subject: "AI Agent Development Capabilities and Service Portfolio",
        creator: "Noodle Seed",
        producer: "React PDF"
    },
        // Create enhanced 5-slide deck with case study
        createSlide1(),  // Company introduction with multi-framework expertise
        createSlide2(),  // Cross-platform technology stack & capabilities
        createSlide3(),  // Development approach & methodology
        createSlide4(),  // Troon Technologies case study
        createSlide5()   // Flexible engagement models & dual rate structure
    );

    const buffer = await renderToBuffer(document);
    
    // Ensure output directory exists
    const outputDir = path.resolve(__dirname, '../../dist/react-pdf');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write PDF file
    const outputPath = path.join(outputDir, 'noodle-seed-ai-capabilities.pdf');
    fs.writeFileSync(outputPath, buffer);
    console.log(`PDF generated successfully: ${outputPath}`);
}

// Generate PNG images from PDF - one per page
async function generatePNGs() {
    const { execSync } = await import('child_process');
    const inputPath = path.resolve(__dirname, '../../dist/react-pdf/noodle-seed-ai-capabilities.pdf');
    const outputDir = path.resolve(__dirname, '../../dist/react-pdf/pngs');
    
    // Ensure PNG output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
        // Use ImageMagick convert to extract each page as PNG
        const command = `convert -density 300 "${inputPath}" "${path.join(outputDir, 'slide-%02d.png')}"`;
        execSync(command, { stdio: 'inherit' });
        
        console.log(`PNG images generated successfully in: ${outputDir}`);
    } catch (error) {
        console.error('Error generating PNG images:', error.message);
        console.log('Note: PNG generation requires ImageMagick convert command');
        console.log('Install with: brew install imagemagick');
    }
}

// Main build function
async function build() {
    console.log('Building Noodle Seed AI Agent Development Services Capabilities Deck...');
    
    try {
        await generatePDF();
        await generatePNGs();
        console.log('Build completed successfully!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

// Run build if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    build();
}

export { generatePDF, generatePNGs, build };