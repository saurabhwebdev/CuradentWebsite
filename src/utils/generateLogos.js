const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  16, 32, 48, 57, 60, 72, 76, 96, 114, 120, 
  128, 144, 152, 180, 192, 384, 512
];

async function generateLogos() {
  try {
    const svg = fs.readFileSync(path.join(process.cwd(), 'public', 'favicon.svg'));
    
    // Ensure the logos directory exists
    const logosDir = path.join(process.cwd(), 'public', 'logos');
    if (!fs.existsSync(logosDir)) {
      fs.mkdirSync(logosDir, { recursive: true });
    }

    for (const size of sizes) {
      await sharp(svg)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(path.join(logosDir, `logo-${size}x${size}.png`));
      
      console.log(`Generated ${size}x${size} logo`);
    }

    // Generate a special high-quality version for bookmarks
    await sharp(svg)
      .resize(192, 192, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ quality: 100 })
      .toFile(path.join(logosDir, 'bookmark-icon.png'));

    console.log('All logos generated successfully!');
  } catch (error) {
    console.error('Error generating logos:', error);
  }
}

generateLogos(); 