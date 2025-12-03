import { useState, useEffect, useRef } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Hook optimizado para detectar el tamaño de la ventana
 * Usa requestAnimationFrame para optimizar actualizaciones
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>(() => {
    // Estado inicial solo en cliente
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return { width: 0, height: 0 };
  });

  const rafId = useRef<number | null>(null);
  const lastUpdateTime = useRef(0);
  const throttleMs = 150; // Throttle de 150ms

  useEffect(() => {
    let ticking = false;

    const updateWindowSize = () => {
      const currentTime = Date.now();

      // Throttle: solo actualizar si ha pasado el tiempo mínimo
      if (currentTime - lastUpdateTime.current >= throttleMs) {
        const newSize = {
          width: window.innerWidth,
          height: window.innerHeight,
        };

        setWindowSize((prev) => {
          // Solo actualizar si cambió
          if (prev.width !== newSize.width || prev.height !== newSize.height) {
            return newSize;
          }
          return prev;
        });

        lastUpdateTime.current = currentTime;
      }

      ticking = false;
    };

    const handleResize = () => {
      if (!ticking) {
        // Usar requestAnimationFrame para optimizar
        rafId.current = requestAnimationFrame(updateWindowSize);
        ticking = true;
      }
    };

    // Verificar tamaño inicial
    updateWindowSize();

    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []); // Sin dependencias para evitar re-crear listeners

  return windowSize;
}

