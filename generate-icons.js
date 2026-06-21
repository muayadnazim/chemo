// Simple script to generate icons for the PWA
// Run with: node generate-icons.js

const fs = require('fs');

// Create a simple SVG icon
function createSVGIcon(size) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a73e8"/>
      <stop offset="100%" style="stop-color:#1557b0"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#bg)"/>
  <text x="${size * 0.5}" y="${size * 0.6}" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="${size * 0.45}" fill="white">C</text>
  <text x="${size * 0.5}" y="${size * 0.85}" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="${size * 0.25}" fill="rgba(255,255,255,0.8)">⚕</text>
</svg>`;
}

// Create SVG icons
const sizes = [192, 512];
sizes.forEach(size => {
    const svg = createSVGIcon(size);
    fs.writeFileSync(`icon-${size}.svg`, svg);
    console.log(`Created icon-${size}.svg`);
});

// Create a simple HTML page to convert SVGs to PNGs
const html = `<!DOCTYPE html>
<html>
<head><title>Generate Icons</title></head>
<body>
  <h1>Icon Generator</h1>
  <p>Take screenshots of these icons and save them as PNG files</p>
  <img src="icon-192.svg" width="192" height="192" onload="convertToPNG(this, 192)">
  <img src="icon-512.svg" width="512" height="512" onload="convertToPNG(this, 512)">
  <canvas id="canvas192" width="192" height="192"></canvas>
  <canvas id="canvas512" width="512" height="512"></canvas>
  <script>
    function convertToPNG(img, size) {
      const canvas = document.getElementById('canvas' + size);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, size, size);
      const link = document.createElement('a');
      link.download = 'icon-' + size + '.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  </script>
</body>
</html>`;

fs.writeFileSync('icon-converter.html', html);
console.log('Created icon-converter.html - open this in a browser to generate PNGs');

// Create a minimal PNG placeholder function using base64
function createMinimalPNG(size) {
    // Create a minimal valid PNG with a blue square
    // This is a 1x1 blue pixel PNG that we'll use as a fallback
    const png = Buffer.from([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG signature
        0x00, 0x00, 0x00, 0x0D, // IHDR chunk length
        0x49, 0x48, 0x44, 0x52, // "IHDR"
        0x00, 0x00, 0x00, 0x01, // width (1)
        0x00, 0x00, 0x00, 0x01, // height (1)
        0x08, 0x02, // bit depth, color type
        0x00, 0x00, 0x00, // compression, filter, interlace
        0x90, 0x77, 0x53, 0xDE, // CRC
        0x00, 0x00, 0x00, 0x0C, // IDAT chunk length
        0x49, 0x44, 0x41, 0x54, // "IDAT"
        0x08, 0xD7, 0x63, 0x60, 0x60, 0x00, 0x00, 0x00, 0x04, 0x00, 0x01, 0x3A, 0x4D, 0x6A, // compressed data
        0x00, 0x00, 0x00, 0x00, // CRC
        0x00, 0x00, 0x00, 0x00, // IEND chunk
        0x49, 0x45, 0x4E, 0x44, // "IEND"
        0xAE, 0x42, 0x60, 0x82  // CRC
    ]);
    return png;
}

console.log('Done! Now open icon-converter.html in a browser to get real PNG files.');
console.log('Or use the SVGs directly if your server supports SVG icons.');
