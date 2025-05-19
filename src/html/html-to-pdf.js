const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const os = require('os');

(async () => {
  // Get absolute path to the HTML file
  const htmlPath = path.resolve(__dirname, 'index.html');
  const fileUrl = `file://${htmlPath}`;
  
  console.log(`Converting ${fileUrl} to PDF...`);
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    // Create new page
    const page = await browser.newPage();
    
    // Set viewport to ensure all content is visible
    await page.setViewport({
      width: 1280,
      height: 720,
      deviceScaleFactor: 1.5
    });
    
    // Navigate to local HTML file
    await page.goto(fileUrl, {
      waitUntil: 'networkidle0'
    });
    
    // Get total number of slides
    const slidesCount = await page.evaluate(() => {
      return document.querySelectorAll('.slide').length;
    });
    
    console.log(`Found ${slidesCount} slides`);
    
    // Define output directories
    const distDir = path.resolve(__dirname, '../../dist/html');
    const slidesDir = path.join(distDir, 'pdfs');
    
    // Create output directories if they don't exist
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    
    if (!fs.existsSync(slidesDir)) {
      fs.mkdirSync(slidesDir, { recursive: true });
    }
    
    // Generate individual slide PDFs
    for (let i = 1; i <= slidesCount; i++) {
      console.log(`Processing slide ${i}...`);
      
      // Make only this slide visible
      await page.evaluate((slideNum) => {
        // Hide all slides
        document.querySelectorAll('.slide').forEach(slide => {
          slide.classList.remove('active');
        });
        
        // Show current slide
        document.getElementById(`slide-${slideNum}`).classList.add('active');
        
        // Hide navigation controls for clean export
        const nav = document.querySelector('.navigation');
        if (nav) nav.style.display = 'none';
        
        const indicator = document.querySelector('.slide-indicator');
        if (indicator) indicator.style.display = 'none';
      }, i);
      
      // Wait for any transitions to complete
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Generate PDF for this slide
      await page.pdf({
        path: path.join(slidesDir, `slide-${i.toString().padStart(2, '0')}.pdf`),
        format: 'A4',
        landscape: true,
        printBackground: true,
        margin: {
          top: '0.4in',
          right: '0.4in',
          bottom: '0.4in',
          left: '0.4in'
        }
      });
    }
    
    // Generate combined PDF
    console.log('Generating complete deck...');
    
    // Reset to first slide and show all content for printing
    await page.evaluate(() => {
      // Reset all slides for printing
      document.querySelectorAll('.slide').forEach((slide, index) => {
        slide.style.position = 'relative';
        slide.style.opacity = '1';
        slide.style.transform = 'none';
        slide.style.left = '0';
        slide.style.top = '0';
        slide.style.marginBottom = '30px';
        slide.style.pageBreakAfter = 'always';
      });
      
      // Reset body styles
      document.body.style.overflow = 'visible';
      document.body.style.height = 'auto';
      
      // Hide navigation
      const nav = document.querySelector('.navigation');
      if (nav) nav.style.display = 'none';
      
      const indicator = document.querySelector('.slide-indicator');
      if (indicator) indicator.style.display = 'none';
    });
    
    // Wait for styles to apply
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Generate complete deck PDF
    await page.pdf({
      path: path.join(distDir, 'noodleseed-investor-deck.pdf'),
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: {
        top: '0.4in',
        right: '0.4in',
        bottom: '0.4in',
        left: '0.4in'
      }
    });
    
    console.log('PDF conversion completed successfully!');
    console.log(`Individual slides saved in ${slidesDir}`);
    console.log(`Complete deck saved as ${path.join(distDir, 'noodleseed-investor-deck.pdf')}`);
    
    // Clean up any temporary files
    const tempDir = os.tmpdir();
    const tempFiles = fs.readdirSync(tempDir);
    const puppeteerTempFiles = tempFiles.filter(file => 
      file.startsWith('puppeteer_dev_chrome') || 
      file.startsWith('puppeteer_global_temp')
    );
    
    for (const file of puppeteerTempFiles) {
      try {
        fs.unlinkSync(path.join(tempDir, file));
        console.log(`Cleaned up temporary file: ${file}`);
      } catch (err) {
        // Ignore errors when cleaning up temp files
      }
    }
    
  } catch (error) {
    console.error('Error converting HTML to PDF:', error);
  } finally {
    await browser.close();
  }
})();