import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  site: 'https://muebleriacasablanca.cl',
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Separar vendor chunks
            if (id.includes('node_modules')) {
              // React vendor
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-vendor';
              }
              // Lucide icons (suele ser pesado)
              if (id.includes('lucide-react')) {
                return 'icons';
              }
              // Otros vendors
              return 'vendor';
            }
          },
          chunkFileNames: 'chunks/[name]-[hash].js',
          entryFileNames: 'entry/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        },
        // Optimizaciones adicionales
        treeshake: {
          moduleSideEffects: false
        }
      },
      // Optimizaciones de tamaño
      cssCodeSplit: true,
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      // Chunk size warnings
      chunkSizeWarningLimit: 1000
    },
    // Optimizaciones de resolución
    resolve: {
      alias: {}
    },
    // Optimizaciones de SSR
    ssr: {
      noExternal: []
    }
  },
  // Optimizaciones de compresión
  compressHTML: true
});

