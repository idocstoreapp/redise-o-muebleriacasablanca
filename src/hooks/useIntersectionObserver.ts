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
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
          
          // Si solo queremos disparar una vez y ya intersectó, desconectar
          if (triggerOnce && entry.isIntersecting) {
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isIntersecting];
}

