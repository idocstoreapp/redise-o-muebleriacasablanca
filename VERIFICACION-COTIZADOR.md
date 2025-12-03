# Verificación del Cotizador - Closets y Muebles

## Pasos para verificar que el backend está funcionando:

### 1. Verificar URL directa (sin iframe):
Abre estas URLs directamente en el navegador (no en el iframe):

- **Closets**: https://cotizador-app-two.vercel.app/closets-publico
- **Muebles**: https://cotizador-app-two.vercel.app/muebles-publico

**¿Qué verificar?**
- Selecciona un producto/closet
- ¿Aparecen los selectores de variables (colores, materiales, opciones)?
- Si SÍ aparecen → El backend está funcionando, el problema es el iframe/caché
- Si NO aparecen → El backend aún no está actualizado

### 2. Si el backend SÍ muestra las variables:

**Solución temporal:**
1. Abre la página de closets o muebles en tu sitio
2. Presiona `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac) para hacer un hard refresh
3. O abre en modo incógnito/privado
4. O limpia la caché del navegador completamente

**Solución permanente:**
El código ya tiene cache busting implementado, pero si el navegador tiene una caché muy agresiva, puede que necesites:
- Limpiar la caché del navegador
- Esperar unos minutos para que el CDN de Vercel actualice

### 3. Si el backend NO muestra las variables:

El problema está en el backend. Necesitas verificar:
- ¿Se desplegó correctamente el cambio en Vercel?
- ¿El componente ProductDetailPublico.tsx tiene la lógica para closets y muebles?
- ¿Hay algún error en la consola del navegador?

## Debugging:

Abre la consola del navegador (F12) y verifica:
1. ¿Hay errores en la consola?
2. ¿El iframe se está cargando correctamente?
3. ¿La URL del iframe tiene los parámetros de cache busting?

## Cache Busting implementado:

El código ahora genera URLs como:
- `https://cotizador-app-two.vercel.app/closets-publico?v=1234567890&_t=abc123&nocache=1`

Esto debería forzar al navegador a cargar la versión más reciente.

