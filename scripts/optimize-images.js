import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

// Tamaños para srcset
const SIZES = [400, 800, 1200, 1600, 2400];

// Formatos soportados
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

async function getImageFiles(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Recursivamente buscar en subdirectorios
      const subFiles = await getImageFiles(fullPath);
      files.push(...subFiles);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (SUPPORTED_FORMATS.includes(ext) && !entry.name.includes('.webp')) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

async function optimizeImage(inputPath, outputDir) {
  const ext = path.extname(inputPath);
  const basename = path.basename(inputPath, ext);
  const relativePath = path.relative(publicDir, path.dirname(inputPath));
  const outputBaseDir = path.join(outputDir, relativePath);

  // Crear directorio de salida si no existe
  await fs.mkdir(outputBaseDir, { recursive: true });

  const results = {
    webp: {},
    original: null
  };

  try {
    // Leer metadata de la imagen original
    const metadata = await sharp(inputPath).metadata();
    const { width, height } = metadata;

    // Generar WebP original
    const webpPath = path.join(outputBaseDir, `${basename}.webp`);
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);
    results.webp.original = path.relative(publicDir, webpPath).replace(/\\/g, '/');

    // Generar diferentes tamaños para srcset
    for (const size of SIZES) {
      if (size <= width) {
        const sizeWebpPath = path.join(outputBaseDir, `${basename}-${size}w.webp`);
        await sharp(inputPath)
          .resize(size, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: 85, effort: 6 })
          .toFile(sizeWebpPath);
        
        results.webp[size] = path.relative(publicDir, sizeWebpPath).replace(/\\/g, '/');
      }
    }

    console.log(`✓ Optimizado: ${path.relative(publicDir, inputPath)}`);
    return results;
  } catch (error) {
    console.error(`✗ Error optimizando ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Iniciando optimización de imágenes...\n');
  
  const imageFiles = await getImageFiles(publicDir);
  console.log(`📸 Encontradas ${imageFiles.length} imágenes para optimizar\n`);

  let optimized = 0;
  let errors = 0;

  for (const imagePath of imageFiles) {
    const result = await optimizeImage(imagePath, publicDir);
    if (result) {
      optimized++;
    } else {
      errors++;
    }
  }

  console.log(`\n✅ Optimización completada:`);
  console.log(`   - Optimizadas: ${optimized}`);
  console.log(`   - Errores: ${errors}`);
  console.log(`\n💡 Nota: Las imágenes WebP se generaron junto a las originales.`);
  console.log(`   El componente OptimizedImage usará automáticamente las versiones WebP.`);
}

main().catch(console.error);

