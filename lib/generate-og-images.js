const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const glob = require('glob');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// Helper function to encode image to base64
function base64Encode(file) {
  const bitmap = fs.readFileSync(file);
  return Buffer.from(bitmap).toString('base64');
}

// Helper function to add delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateImage(title, description, section, outputPath) {
  console.log(`Generating image for title: ${title}`);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to the recommended OG image size
  await page.setViewport({ width: 1200, height: 630 });

  // Resolve the path to the logo image
  const logoPath = path.resolve(__dirname, '../public/NFSFU234FormValidation-logo.png');

  // Check if the logo image exists
  if (!fs.existsSync(logoPath)) {
    console.error(`Logo image not found at path: ${logoPath}`);
    return;
  }

  const logoBase64 = base64Encode(logoPath);
  const logoDataURL = `data:image/png;base64,${logoBase64}`;

  const htmlContent = `
    <html>
      <body style="width: 1200px; height: 630px; margin: 0; padding: 0; background: #f9fafb; font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center;">
        <div style="
          width: 1100px; 
          height: 550px; 
          background: #e0e0e0; 
          border-radius: 20px; 
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2), 
                      -10px -10px 20px rgba(255, 255, 255, 0.8); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          position: relative;
          overflow: hidden;
          padding: 20px;
        ">
          <img src="${logoDataURL}" style="position: absolute; top: 20px; left: 20px; width: 200px;">
          <div style="position: absolute; bottom: 70px; left: 40px; line-height: 1.4;">
            <div style="font-size: 20px; font-weight: bold; color: #F16529;">${section}</div>
            <div style="font-size: 40px; font-weight: bold; margin-top: 10px;">${title}</div>
            <div style="font-size: 22px; color: #555; margin-top: 10px;">${description}</div>
          </div>
        </div>
      </body>
    </html>
  `;

  await page.setContent(htmlContent);

  // Use delay to wait for content to render
  await delay(1000); // Wait 1 second

  const screenshot = await page.screenshot({ fullPage: false, encoding: 'binary' });

  // Ensure directory exists
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  fs.writeFileSync(outputPath, screenshot);

  await browser.close();
  console.log(`Image saved at: ${outputPath}`);
}

async function generateImages(type) {
  let mdxFiles;

  if ( type === "blog" )
  {
    mdxFiles = glob.sync('app/blog/**/*.mdx')
  }
  else
  {
    mdxFiles = glob.sync('app/docs/**/*.mdx')
  }

  console.log(`Found ${mdxFiles.length} MDX files`);
  console.log(`MDX Files: ${mdxFiles}`);

  // Append a default entry for blog if no MDX files are found
  if (type === 'blog') {
    mdxFiles.push('blog');
  }

  for (const file of mdxFiles) {
    console.log(`Processing file: ${file}`);
    let data = {};
  
    if (file !== 'blog') {
      const content = fs.readFileSync(file, 'utf8');
      data = matter(content).data;
    } else {
      data.title = 'Blog - NFSFU234FormValidationLibrary';
      data.description = 'Welcome to the blog homepage!';
      data.section = 'Blog';
    }
  
    if (data.title || file !== 'blog') {
      // Extract the base name of the file without extension
      const baseName = path.basename(file, path.extname(file));
  
      // Convert the base name to lowercase and replace spaces and other non-alphanumeric characters with hyphens
      const fileName = `${baseName.toLowerCase().replace(/[^a-z0-9-]/gi, '-')}.png`;
  
      let outputPath;
      let section = data.section || 'Blog'; // Default section to 'Blog' if not provided
  
      if (type === 'docs') {
        outputPath = path.resolve('public/og-images', fileName);
      } else if (type === 'blog') {
        outputPath = path.resolve('public/og-blog-images', fileName);
      } else {
        outputPath = path.resolve('public/og-images', fileName); // Default to docs if type is not specified
      }
  
      await generateImage(data.title, data.description || '', section, outputPath);
      console.log(`Image generated for: ${file}`);
    } else {
      console.log(`No title found in file: ${file}`);
    }
  }


}

// Parse command-line arguments
const argv = yargs(hideBin(process.argv)).argv;
const type = argv.type || 'all';
console.log(`Type argument received: ${type}`);

// Run the appropriate image generation based on the provided type
(async () => {
  try {
    if (type === 'all') {
      await generateImages('docs');
      await generateImages('blog');
    } else if (type === 'docs') {
      await generateImages('docs');
    } else if (type === 'blog') {
      await generateImages('blog');
    } else {
      console.error('Invalid type specified. Use "docs", "blog", or "all".');
    }
  } catch (error) {
    console.error('Error generating images:', error);
  }
})();
