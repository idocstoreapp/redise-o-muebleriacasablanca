# PROMPTA PARA BACKEND DEL COTIZADOR

## PROBLEMA ESPECÍFICO

El componente `ProductDetailPublico.tsx` muestra correctamente todas las variables (colores, materiales, encimeras, canteados) en **COCINAS** (`/cocinas-publico`), pero **NO** muestra las variables en:

- **CLOSETS** (`/closets-publico`) - ❌ No muestra variables
- **MUEBLES** (`/muebles-publico`) - ❌ No muestra variables

## COMPORTAMIENTO ACTUAL

### ✅ Cocinas (FUNCIONA):
- Muestra imagen del producto
- Muestra opciones de cantidad
- Muestra detalle
- Muestra botón de cotizar
- **Muestra TODAS las variables** (colores, materiales, encimeras, canteados)

### ❌ Closets (NO FUNCIONA):
- Muestra imagen del producto
- Muestra opciones de cantidad
- Muestra detalle
- Muestra botón de cotizar
- **NO muestra las variables** (colores, materiales, opciones de personalización)

### ❌ Muebles (NO FUNCIONA):
- Muestra imagen del producto
- Muestra opciones de cantidad
- Muestra detalle
- Muestra botón de cotizar
- **NO muestra las variables** (colores, materiales, opciones de personalización)

## SOLUCIÓN REQUERIDA

Necesito que `ProductDetailPublico.tsx` muestre **TODOS los selectores de variables** para closets y muebles, igual que lo hace para cocinas.

Los selectores que deberían aparecer incluyen:
- Selector de colores
- Selector de materiales
- Selector de acabados
- Cualquier otra opción de personalización disponible para cada tipo de producto

## RUTAS AFECTADAS

- `https://cotizador-app-two.vercel.app/closets-publico` - ❌ Necesita mostrar variables
- `https://cotizador-app-two.vercel.app/muebles-publico` - ❌ Necesita mostrar variables
- `https://cotizador-app-two.vercel.app/cocinas-publico` - ✅ Ya funciona correctamente

## VERIFICACIÓN

Para verificar el problema:
1. Abrir `https://cotizador-app-two.vercel.app/closets-publico` directamente en el navegador
2. Seleccionar un producto/closet
3. Verificar si aparecen los selectores de variables (colores, materiales, etc.)
4. Repetir el mismo proceso para muebles

## ACCIÓN REQUERIDA

Actualizar `ProductDetailPublico.tsx` para que:
1. Detecte correctamente el tipo de producto (closet, mueble, cocina)
2. Muestre todos los selectores de variables disponibles para closets
3. Muestre todos los selectores de variables disponibles para muebles
4. Mantenga el comportamiento actual que ya funciona para cocinas



