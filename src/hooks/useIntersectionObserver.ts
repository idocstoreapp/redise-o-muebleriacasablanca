import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook optimizado para IntersectionObserver
 * Reemplaza scroll listeners cuando solo necesitamos detectar visibilidad
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): [RefObject<T>, boolean] {
  const { threshold = 0, rootMargin = '0px', triggerOnce = false } = options;
  const [isIntersecting, setIsIntersecting] = useState(true); // Iniciar como true para que el contenido sea visible por defecto
  const elementRef = useRef<T>(null);

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return;
    
    const element = elementRef.current;
    if (!element) return;

    // Verificar si el elemento ya está en el viewport al montar
    const checkInitialVisibility = () => {
      try {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        // Verificar si el elemento está visible en el viewport
        const isVisible = (
          rect.top < windowHeight &&
          rect.bottom > 0 &&
          rect.left < windowWidth &&
          rect.right > 0
        );
        
        if (isVisible) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      } catch (error) {
        // Si hay un error, mantener el estado por defecto (visible)
        console.warn('Error checking initial visibility:', error);
      }
    };

    // Verificar visibilidad inicial después de un pequeño delay para asegurar que el DOM está listo
    const timeoutId = setTimeout(checkInitialVisibility, 100);

    let observer: IntersectionObserver | null = null;
    
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsIntersecting(entry.isIntersecting);
            
            // Si solo queremos disparar una vez y ya intersectó, desconectar
            if (triggerOnce && entry.isIntersecting) {
              observer?.unobserve(element);
            }
          });
        },
        {
          threshold,
          rootMargin
        }
      );

      observer.observe(element);
    } catch (error) {
      console.warn('Error creating IntersectionObserver:', error);
    }

    return () => {
      clearTimeout(timeoutId);
      if (observer && element) {
        try {
          observer.unobserve(element);
        } catch (error) {
          // Ignorar errores al limpiar
        }
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isIntersecting];
}

