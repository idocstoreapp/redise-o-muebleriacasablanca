# 🖼️ Guía de Optimización de Imágenes

## ✅ Mejoras Implementadas

### 1. **Script de Optimización Mejorado** (`scripts/optimize-images.js`)

- ✅ Genera tamaños inteligentes según el tipo de imagen:
  - **Hero/Full-width**: 800w, 1200w, 1600w, 1920w
  - **Content/Cards**: 400w, 600w, 800w, 1200w
  - **Thumbnails/Logos**: 200w, 400w, 600w
- ✅ Auto-detección basada en rutas de archivo
- ✅ Genera formatos WebP para todas las imágenes
- ✅ Mantiene calidad optimizada (80-85%)

### 2. **Componente OptimizedImage Mejorado**

- ✅ Soporta tipos de imagen: `hero`, `content`, `thumbnail`, `logo`
- ✅ Auto-detección de tamaños según ruta
- ✅ Genera `srcset` automáticamente
- ✅ Usa formato WebP con fallback
- ✅ `sizes` attribute inteligente según contexto

### 3. **Actualizaciones de Componentes**

- ✅ Hero LCP image usando OptimizedImage
- ✅ TrustBanner listo para optimización
- ✅ Features images pendientes de actualización

## 📋 Pasos para Completar la Optimización

### Paso 1: Ejecutar Script de Optimización

```bash
npm run optimize:images
```

Esto generará:
- Versiones WebP de todas las imágenes
- Múltiples tamaños para srcset (ej: `imagen-800w.webp`, `imagen-1200w.webp`)

### Paso 2: Reemplazar Imágenes en Componentes

#### A. HeroImageCarousel
- Actualizar para usar OptimizedImage (o mantener en HTML como está)

#### B. TrustBanner
```tsx
<OptimizedImage 
  src={cliente.image}
  alt={cliente.name}
  width={150}
  height={48}
  type="thumbnail"
  className="..."
/>
```

#### C. Features en index.astro
```astro
<OptimizedImage 
  src="/Gemini_Generated_Image_5hacl35hacl35hac.png"
  alt="Diseño personalizado"
  type="content"
  className="..."
/>
```

#### D. Logos
```astro
<OptimizedImage 
  src="/logo.png"
  alt="Logo"
  type="logo"
  width={128}
  height={128}
/>
```

## 🎯 Resultados Esperados

**Antes**:
- Total: 10,876.6 KiB
- Sin optimización de formato
- Sin tamaños responsivos

**Después** (esperado):
- Reducción de ~70-80% en tamaño
- Formato WebP (más eficiente)
- Tamaños responsivos según dispositivo
- Ahorro estimado: ~8,000 KiB

## 📝 Checklist de Optimización

### Imágenes Hero (LCP)
- [x] `/Gemini_Generated_Image_exyvenexyvenexyv.png` - Ya optimizada con OptimizedImage
- [ ] `/Gemini_Generated_Image_qkuj5kqkuj5kqkuj.png` - En HeroImageCarousel
- [ ] `/Gemini_Generated_Image_mljzfkmljzfkmljz.png` - En HeroImageCarousel
- [ ] `/Gemini_Generated_Image_jeq0kqjeq0kqjeq0.png` - En HeroImageCarousel

### Imágenes de Features
- [ ] `/Gemini_Generated_Image_5hacl35hacl35hac.png` - Diseño personalizado
- [ ] `/Gemini_Generated_Image_6zzvha6zzvha6zzv.png` - Materiales de calidad
- [ ] `/Gemini_Generated_Image_dy1tr0dy1tr0dy1t.png` - Entrega puntual
- [ ] `/Gemini_Generated_Image_taxf2gtaxf2gtaxf.png` - Equipo especializado

### Logos y Clientes
- [ ] `/logo.png` - Logo principal
- [ ] `/logo-blaco.png` - Logo blanco
- [ ] `/clientes/*.png` - Logos de clientes
- [ ] `/Marcas/*.png` - Logos de marcas

## 🚀 Próximos Pasos

1. **Ejecutar script de optimización** para generar WebP
2. **Reemplazar todas las `<img>` con `<OptimizedImage>`**
3. **Verificar en Lighthouse** que las imágenes están optimizadas
4. **Verificar tamaños** con `npm run get:dimensions` si es necesario

