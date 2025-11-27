# 🚀 Guía Rápida de Optimizaciones

## ✅ Ya Implementado

1. ✅ Script de optimización de imágenes (`npm run optimize:images`)
2. ✅ Componentes `OptimizedImage` (Astro y React)
3. ✅ Code splitting configurado
4. ✅ Hooks optimizados (`useScroll`, `useIntersectionObserver`)
5. ✅ Estrategias de carga optimizadas
6. ✅ Preconnects y optimización de fuentes
7. ✅ HeroImageCarousel optimizado para LCP

## 🔧 Acciones Necesarias

### 1. Ejecutar Optimización de Imágenes

```bash
npm run optimize:images
```

Esto generará versiones WebP de todas las imágenes en `/public`.

### 2. Reemplazar Etiquetas `<img>` (Recomendado hacer gradualmente)

Buscar y reemplazar en:
- `src/pages/index.astro`
- `src/components/ProjectsGallery.tsx`
- Todas las demás páginas

**Ejemplo de reemplazo:**

**Antes:**
```astro
<img src="/imagen.jpg" alt="Descripción" loading="lazy" />
```

**Después:**
```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
---
<OptimizedImage 
  src="/imagen.jpg" 
  alt="Descripción"
  width={1920}
  height={1080}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 3. Agregar Dimensiones a Imágenes

Para evitar CLS, todas las imágenes deben tener `width` y `height`.

**Opciones:**
- Usar un servicio online para obtener dimensiones
- Usar `sharp` programáticamente
- Conocer las dimensiones de antemano

## 📊 Verificar Resultados

```bash
# Build de producción
npm run build

# Preview local
npm run preview

# Ejecutar Lighthouse en Chrome DevTools
# O usar: npm run analyze:bundle
```

## 🎯 Métricas Esperadas

- **Performance**: 90+
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **TBT**: < 200ms

## 📝 Notas

- El script de imágenes debe ejecutarse después de agregar nuevas imágenes
- Las imágenes WebP se generan automáticamente junto a las originales
- El componente `OptimizedImage` maneja el fallback automáticamente

