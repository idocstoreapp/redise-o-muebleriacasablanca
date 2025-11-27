import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

/**
 * Script auxiliar para obtener dimensiones de imágenes
 * Útil para agregar width/height a OptimizedImage y evitar CLS
 */

async function getImageDimensions(imagePath) {
  try {
    const metadata = await sharp(imagePath).metadata();
    return {
      width: metadata.width,
      height: metadata.height,
      format: metadata.format
    };
  } catch (error) {
    console.error(`Error procesando ${imagePath}:`, error.message);
    return null;
  }
}

async function scanImages(dir, results = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await scanImages(fullPath, results);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        const dims = await getImageDimensions(fullPath);
        if (dims) {
          const relativePath = path.relative(publicDir, fullPath).replace(/\\/g, '/');
          results.push({
            path: relativePath,
            ...dims
          });
        }
      }
    }
  }

  return results;
}

async function main() {
  console.log('📐 Obteniendo dimensiones de imágenes...\n');
  
  const images = await scanImages(publicDir);
  
  console.log(`✅ Encontradas ${images.length} imágenes:\n`);
  console.log('// Copiar esto en tu código para agregar dimensiones\n');
  console.log('const imageDimensions = {');
  
  images.forEach((img) => {
    console.log(`  '${img.path}': { width: ${img.width}, height: ${img.height} },`);
  });
  
  console.log('};\n');
  console.log('💡 Usa estos valores en el componente OptimizedImage:');
  console.log('   <OptimizedImage src="/..." width={imageDimensions["/..."].width} height={imageDimensions["/..."].height} />');
}

main().catch(console.error);

