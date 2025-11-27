import { useState, useEffect, useRef } from 'react';

interface UseScrollOptions {
  threshold?: number;
  throttleMs?: number;
}

/**
 * Hook optimizado para detectar scroll usando requestAnimationFrame
 * Evita bloqueos de renderización con throttling inteligente
 */
export function useScroll({ threshold = 50, throttleMs = 150 }: UseScrollOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const rafId = useRef<number | null>(null);
  const lastUpdateTime = useRef(0);
  const thresholdRef = useRef(threshold);
  const throttleMsRef = useRef(throttleMs);

  // Actualizar refs cuando cambian los props
  useEffect(() => {
    thresholdRef.current = threshold;
    throttleMsRef.current = throttleMs;
  }, [threshold, throttleMs]);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();

      // Throttle: solo actualizar si ha pasado el tiempo mínimo
      if (currentTime - lastUpdateTime.current >= throttleMsRef.current) {
        const scrolled = currentScrollY > thresholdRef.current;
        
        setIsScrolled((prev) => {
          // Solo actualizar si cambió
          if (prev !== scrolled) {
            return scrolled;
          }
          return prev;
        });
        
        lastUpdateTime.current = currentTime;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        // Usar requestAnimationFrame para optimizar
        rafId.current = requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    // Verificar estado inicial
    updateScrollState();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []); // Sin dependencias para evitar re-crear listeners

  return isScrolled;
}

