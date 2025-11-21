# Mueblería Casa Blanca - Rediseño Web

Sitio web moderno y profesional para Mueblería Casa Blanca, enfocado en conversión y experiencia de usuario.

## 🚀 Tecnologías

- **Astro** - Framework web moderno
- **React** - Componentes interactivos
- **Tailwind CSS** - Estilos y diseño responsive
- **TypeScript** - Tipado estático
- **Lucide React** - Iconos modernos

## 📦 Instalación

```bash
npm install
```

## 💻 Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 🏗️ Build

```bash
npm run build
```

Genera los archivos estáticos en la carpeta `dist/`

## 👀 Preview

```bash
npm run preview
```

Previsualiza la versión de producción localmente

## 📱 Despliegue a Vercel

### Opción 1: Desde GitHub (Recomendado)

1. **Crear repositorio en GitHub:**
   ```bash
   # Inicializar git si no está inicializado
   git init
   
   # Agregar todos los archivos
   git add .
   
   # Hacer commit inicial
   git commit -m "Initial commit: Mueblería Casa Blanca website"
   
   # Crear repositorio en GitHub y conectarlo
   git remote add origin https://github.com/TU_USUARIO/muebleria-casa-blanca.git
   git branch -M main
   git push -u origin main
   ```

2. **Conectar con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Selecciona el repositorio `muebleria-casa-blanca`
   - Vercel detectará automáticamente que es un proyecto Astro
   - Haz clic en "Deploy"
   - ¡Listo! Tu sitio estará en línea en minutos

### Opción 2: Desde CLI de Vercel

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Desplegar (sigue las instrucciones)
vercel

# Para producción
vercel --prod
```

## ⚙️ Configuración de Vercel

El proyecto está configurado para desplegarse automáticamente en Vercel. Los ajustes incluyen:

- **Framework Preset:** Astro (auto-detectado)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** Se usa la versión por defecto de Vercel

## 📂 Estructura del Proyecto

```
/
├── public/          # Archivos estáticos (imágenes, videos)
├── src/
│   ├── components/  # Componentes React
│   ├── layouts/     # Layouts de Astro
│   ├── pages/       # Páginas del sitio
│   └── styles/      # Estilos globales
├── astro.config.mjs # Configuración de Astro
├── tailwind.config.mjs # Configuración de Tailwind
└── package.json
```

## 🌐 URLs de Producción

Una vez desplegado, el sitio estará disponible en:
- URL de Vercel: `https://muebleria-casa-blanca.vercel.app`
- Dominio personalizado: `https://muebleriacasablanca.cl` (si está configurado)

## 📝 Notas Importantes

- Asegúrate de que todas las variables de entorno estén configuradas en Vercel
- Las imágenes deben estar en la carpeta `public/` para que funcionen correctamente
- El sitio genera archivos estáticos, ideal para hosting en Vercel

## 🔗 Enlaces Útiles

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Vercel](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

