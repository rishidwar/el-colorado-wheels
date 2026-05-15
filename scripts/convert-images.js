const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const inputDir = path.join(__dirname, '..', 'public', 'images')

async function convertDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await convertDir(fullPath)
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      const outPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')
      await sharp(fullPath)
        .webp({ quality: 85 })
        .toFile(outPath)
      console.log(`✓ ${path.relative(inputDir, fullPath)} → ${path.basename(outPath)}`)
      fs.unlinkSync(fullPath)
    }
  }
}

convertDir(inputDir).then(() => {
  console.log('Done — all images converted to .webp')
}).catch(console.error)
