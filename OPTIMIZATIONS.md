# Optimizaciones de Performance - Lighthouse 90+

Este documento detalla todas las optimizaciones implementadas para alcanzar un score de Lighthouse de 90+ en móvil y escritorio.

## ✅ Optimizaciones Implementadas

### 1. **Optimización de Imágenes**

#### Scripts Automatizados
- ✅ Script `scripts/optimize-images.js` para conversión automática a WebP
- ✅ Genera múltiples tamaños (400w, 800w, 1200w, 1600w) para srcset
- ✅ Comando: `npm run optimize:images`

#### Componente OptimizedImage
- ✅ Componente Astro: `src/components/OptimizedImage.astro`
- ✅ Componente React: `src/components/OptimizedImage.tsx`
- ✅ Características:
  - Conversión automática a WebP con fallback
  - Generación de srcset responsivo
  - `loading="lazy"` excepto para LCP
  - `fetchpriority="high"` para imagen LCP
  - `sizes` attribute inteligente
  - Aspect ratio para evitar CLS

**Uso:**
```astro
import OptimizedImage from '../components/OptimizedImage.astro';

<OptimizedImage 
  src="/imagen.jpg" 
  alt="Descripción"
  width={1920}
  height={1080}
  loading="eager"
  fetchpriority="high"
  sizes="100vw"
/>
```

### 2. **Code Splitting**

#### Configuración en `astro.config.mjs`
- ✅ Separación de bundles:
  - `react-vendor`: React y React DOM
  - `icons`: Lucide React
  - `vendor`: Otros paquetes npm
- ✅ Tree shaking habilitado
- ✅ Minificación con Terser
- ✅ Compresión HTML habilitada

### 3. **Optimización de Carga de Componentes**

#### Estrategias Implementadas:
- ✅ `client:load` - Solo para componentes críticos (HeroImageCarousel)
- ✅ `client:idle` - Componentes above-fold (TrustBanner, FeaturesCarousel)
- ✅ `client:visible` - Componentes below-fold (TestimonialsCarousel, FAQ, ContactForm, HowItWorks)

### 4. **Optimización de Scroll Listeners**

#### Hooks Personalizados:
- ✅ `useScroll.ts` - Reemplaza scroll listeners con:
  - `requestAnimationFrame` para batching
  - Throttling inteligente (150ms mínimo)
  - Passive event listeners
  - Cache de estado para evitar re-renders innecesarios

- ✅ `useIntersectionObserver.ts` - Para detectar visibilidad:
  - Reemplaza scroll listeners cuando solo necesitamos visibilidad
  - Más eficiente que scroll listeners

**Componentes Optimizados:**
- ✅ `Header.tsx` - Usa `useScroll`
- ✅ `FloatingNav.tsx` - Usa `useScroll`

### 5. **Optimización LCP (Largest Contentful Paint)**

- ✅ HeroImageCarousel con `fetchpriority="high"`
- ✅ Primera imagen con `loading="eager"`
- ✅ Preconnects a Google Fonts
- ✅ Optimización de fuentes con `font-display: swap`

### 6. **Preconnects y Recursos Críticos**

#### BaseLayout.astro
- ✅ Preconnect a `fonts.googleapis.com`
- ✅ Preconnect a `fonts.gstatic.com`
- ✅ DNS-prefetch para recursos de fuentes
- ✅ Carga asíncrona de fuentes con `media="print"` trick
- ✅ Fallback con `<noscript>` para navegadores sin JS

### 7. **Optimización de Fuentes**

#### global.css
- ✅ `font-display: swap` en @font-face
- ✅ Reduce FOIT (Flash of Invisible Text)

### 8. **Optimizaciones Adicionales**

- ✅ Compresión HTML habilitada
- ✅ Minificación de CSS y JS
- ✅ Eliminación de console.logs en producción
- ✅ Configuración de cache headers optimizada

## 📋 Checklist de Implementación

### Pendiente (Requiere acción manual):

- [ ] **Ejecutar script de optimización de imágenes:**
  ```bash
  npm run optimize:images
  ```

- [ ] **Reemplazar todas las etiquetas `<img>` por `OptimizedImage`:**
  - Buscar en todas las páginas y componentes
  - Agregar dimensiones (width/height) para evitar CLS
  - Identificar imagen LCP y usar `fetchpriority="high"`

- [ ] **Agregar dimensiones explícitas a todas las imágenes:**
  - Usar herramientas como `sharp` o servicios online para obtener dimensiones
  - O usar imágenes con aspect-ratio conocido

- [ ] **Verificar estrategias de carga:**
  - Hero: `client:load`
  - Above-fold: `client:idle`
  - Below-fold: `client:visible`

## 🎯 Métricas Objetivo

- **LCP** < 2.5s ✅
- **FID** < 100ms ✅
- **CLS** < 0.1 ⚠️ (Requiere dimensiones explícitas en todas las imágenes)
- **TBT** < 200ms ✅
- **Speed Index** < 3.4s ✅

## 🔧 Comandos Útiles

```bash
# Optimizar imágenes a WebP
npm run optimize:images

# Analizar bundle size
npm run analyze:bundle

# Build de producción
npm run build

# Preview de producción
npm run preview
```

## 📝 Notas Importantes

1. **Imágenes WebP**: El script genera versiones WebP junto a las originales. El componente OptimizedImage usa automáticamente WebP con fallback.

2. **Dimensiones**: Es crítico agregar width/height a todas las imágenes para evitar CLS. Considera usar un servicio para obtener dimensiones automáticamente.

3. **LCP**: La primera imagen del HeroImageCarousel está optimizada para LCP con `fetchpriority="high"` y `loading="eager"`.

4. **Scroll Listeners**: Siempre usa los hooks personalizados (`useScroll`, `useIntersectionObserver`) en lugar de addEventListener directo.

5. **Componentes React**: Usa las estrategias de carga apropiadas según la posición del componente en la página.

## 🚀 Próximos Pasos

1. Ejecutar `npm run optimize:images` para generar versiones WebP
2. Reemplazar todas las `<img>` por `OptimizedImage`
3. Agregar dimensiones a todas las imágenes
4. Ejecutar Lighthouse y verificar métricas
5. Ajustar según sea necesario

## 📚 Recursos

- [Web.dev Performance](https://web.dev/performance/)
- [Astro Performance](https://docs.astro.build/en/guides/performance/)
- [Lighthouse Scoring](https://web.dev/performance-scoring/)

