import { useState, useEffect, useMemo } from 'react';
import { Star } from 'lucide-react';
import { useWindowSize } from '../hooks/useWindowSize';

interface GoogleReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
  project: string;
}

const reviews: GoogleReview[] = [
  {
    id: 1,
    name: 'Faustino Rincon',
    rating: 5,
    comment: '¡Simplemente espectaculares! Los encontré por internet, se lo mostré a mis jefes y quedaron encantados con los muebles exhibidores. Desde el primer contacto, el equipo demostró un gran profesionalismo, pero lo más impresionante es la calidad del producto final.',
    project: 'Hace 3 meses · Muebles Exhibidores'
  },
  {
    id: 2,
    name: 'Maria F. Capacho C.',
    rating: 5,
    comment: 'Excelente desde la asesoría hasta el producto final, son ordenados, limpios, confiables. 100% recomendados',
    project: 'Hace un año'
  },
  {
    id: 3,
    name: 'Paula Riffo Paredes',
    rating: 5,
    comment: 'Muy buena atención! Lo principal son confiables y muy profesionales!',
    project: 'Hace 4 meses'
  },
  {
    id: 4,
    name: 'Giovanny Lugo',
    rating: 5,
    comment: 'El trabajo realizado por Muebleria Casablanca es impecable a la medida, súper profesionales, con su experiencia te dan las mejores recomendaciones para que tu mueble sea el adecuado',
    project: 'Hace un año · Muebles a Medida'
  },
  {
    id: 5,
    name: 'Alvaro Mujica S.',
    rating: 5,
    comment: 'Para los que no los conocen, trabajan muy muy bien, al principio fui con un poco de desconfianza pero luego de ver el trabajo final solo queda agradecerles!!!',
    project: 'Hace 3 años'
  }
];

interface GoogleReviewsCarouselProps {
  variant?: 'default' | 'hero' | 'mobile';
}

const GoogleReviewsCarousel = ({ variant = 'default' }: GoogleReviewsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { width } = useWindowSize();

  // Evitar mismatch de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Breakpoints: 770px, 1027px, 1271px, 1456px, 1725px
  // Calcular estilos dinámicos según el ancho de pantalla
  // Entre 1030px y 1725px el card debe ser más pequeño
  const dynamicStyles = useMemo(() => {
    if (variant !== 'hero') {
      return null;
    }

    // Breakpoints específicos
    const breakpoints = {
      small: 770,    // < 770px
      medium: 1030,  // 770px - 1030px
      large: 1271,   // 1030px - 1271px
      xlarge: 1280,  // 1271px - 1280px
      xxlarge: 1456, // 1280px - 1456px
      xxxlarge: 1725, // 1456px - 1725px
      // > 1725px (muy grande, card más pequeño)
    };

    let cardWidth: number;
    let padding: number;
    let right: number;
    let top: string | undefined;
    let bottom: string | undefined;
    let iconSize: number;
    let headerIconSize: number;
    let titleSize: string;
    let ratingSize: number;
    let starSize: number;
    let commentSize: string;
    let nameSize: string;
    let projectSize: string;
    let gap: number;
    let indicatorHeight: number;
    let indicatorWidth: number;
    let indicatorActiveWidth: number;

    if (width < breakpoints.small) {
      // < 770px - Móvil (no se muestra en hero, pero por si acaso)
      cardWidth = 280;
      padding = 12;
      right = 8;
      top = '50%';
      iconSize = 16;
      headerIconSize = 20;
      titleSize = '0.75rem';
      ratingSize = 10;
      starSize = 10;
      commentSize = '0.75rem';
      nameSize = '0.625rem';
      projectSize = '0.625rem';
      gap = 8;
      indicatorHeight = 4;
      indicatorWidth = 4;
      indicatorActiveWidth = 20;
    } else if (width < breakpoints.medium) {
      // 770px - 1030px - Card más pequeño
      cardWidth = 300;
      padding = 14;
      right = 12;
      top = '52%';
      iconSize = 17;
      headerIconSize = 21;
      titleSize = '0.75rem';
      ratingSize = 10;
      starSize = 10;
      commentSize = '0.75rem';
      nameSize = '0.625rem';
      projectSize = '0.625rem';
      gap = 8;
      indicatorHeight = 4;
      indicatorWidth = 4;
      indicatorActiveWidth = 20;
    } else if (width < breakpoints.large) {
      // 1030px - 1271px - Card más pequeño, posicionado más abajo para evitar choque con título
      cardWidth = 320;
      padding = 16;
      right = 16;
      top = '55%'; // Más abajo para evitar choque con título
      iconSize = 18;
      headerIconSize = 22;
      titleSize = '0.8125rem';
      ratingSize = 11;
      starSize = 11;
      commentSize = '0.8125rem';
      nameSize = '0.6875rem';
      projectSize = '0.6875rem';
      gap = 10;
      indicatorHeight = 5;
      indicatorWidth = 5;
      indicatorActiveWidth = 22;
    } else if (width < breakpoints.xlarge) {
      // 1271px - 1280px - Card más pequeño, posicionado más abajo
      cardWidth = 360;
      padding = 18;
      right = 20;
      top = '55%'; // Más abajo para evitar choque con título
      bottom = undefined;
      iconSize = 19;
      headerIconSize = 23;
      titleSize = '0.875rem';
      ratingSize = 12;
      starSize = 12;
      commentSize = '0.875rem';
      nameSize = '0.75rem';
      projectSize = '0.75rem';
      gap = 11;
      indicatorHeight = 5;
      indicatorWidth = 5;
      indicatorActiveWidth = 22;
    } else if (width < breakpoints.xxlarge) {
      // 1280px - 1456px - Card más pequeño, arriba de los botones
      cardWidth = 320;
      padding = 16;
      right = 20;
      top = undefined;
      bottom = '5rem'; // Arriba de los botones (botones están pegados al bottom)
      iconSize = 18;
      headerIconSize = 22;
      titleSize = '0.8125rem';
      ratingSize = 11;
      starSize = 11;
      commentSize = '0.8125rem';
      nameSize = '0.6875rem';
      projectSize = '0.6875rem';
      gap = 10;
      indicatorHeight = 5;
      indicatorWidth = 5;
      indicatorActiveWidth = 22;
    } else if (width < breakpoints.xxxlarge) {
      // 1456px - 1725px - Card más pequeño, arriba de los botones
      cardWidth = 340;
      padding = 18;
      right = 24;
      top = undefined;
      bottom = '5.5rem'; // Arriba de los botones
      iconSize = 19;
      headerIconSize = 23;
      titleSize = '0.875rem';
      ratingSize = 12;
      starSize = 12;
      commentSize = '0.875rem';
      nameSize = '0.75rem';
      projectSize = '0.75rem';
      gap = 11;
      indicatorHeight = 5;
      indicatorWidth = 5;
      indicatorActiveWidth = 22;
    } else {
      // >= 1725px - Card más pequeño
      cardWidth = 360;
      padding = 18;
      right = 24;
      top = '52%';
      bottom = undefined;
      iconSize = 20;
      headerIconSize = 24;
      titleSize = '0.875rem';
      ratingSize = 12;
      starSize = 12;
      commentSize = '0.875rem';
      nameSize = '0.75rem';
      projectSize = '0.75rem';
      gap = 12;
      indicatorHeight = 6;
      indicatorWidth = 6;
      indicatorActiveWidth = 24;
    }

    return {
      card: {
        width: `${cardWidth}px`,
        padding: `${padding}px`,
        right: `${right}px`,
        ...(top !== undefined ? { top } : {}),
        ...(bottom !== undefined ? { bottom } : {}),
      },
      header: {
        iconSize: `${headerIconSize}px`,
        titleSize,
        ratingSize: `${ratingSize}px`,
        starSize: `${starSize}px`,
        gap: `${gap}px`,
      },
      content: {
        iconSize: `${iconSize}px`,
        starSize: `${starSize}px`,
        commentSize,
        nameSize,
        projectSize,
        gap: `${gap}px`,
      },
      indicators: {
        height: `${indicatorHeight}px`,
        width: `${indicatorWidth}px`,
        activeWidth: `${indicatorActiveWidth}px`,
        gap: `${gap / 2}px`,
      },
    };
  }, [width, variant]);

  // Variante hero: card flotante en desktop, debajo en móvil
  if (variant === 'hero') {
    // No renderizar hasta que esté montado para evitar mismatch de hidratación
    if (!mounted || !dynamicStyles || width === 0) {
      return null;
    }

    return (
      <>
         {/* Desktop: Card flotante a la derecha - Solo desktop dentro del hero */}
         <div 
           className={`hidden md:block absolute z-20 ${
             dynamicStyles.card.top ? '-translate-y-1/2' : ''
           }`}
           style={{
             width: dynamicStyles.card.width,
             right: dynamicStyles.card.right,
             ...(dynamicStyles.card.top ? { top: dynamicStyles.card.top } : {}),
             ...(dynamicStyles.card.bottom ? { bottom: dynamicStyles.card.bottom } : {}),
             maxWidth: `calc(100% - ${parseFloat(dynamicStyles.card.right) * 2}px)`,
           }}
         >
           <div 
             className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20"
             style={{ padding: dynamicStyles.card.padding }}
           >
             <div 
               className="flex items-center mb-3"
               style={{ gap: dynamicStyles.header.gap }}
             >
               <svg 
                 className="flex-shrink-0" 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 xmlns="http://www.w3.org/2000/svg"
                 style={{ width: dynamicStyles.header.iconSize, height: dynamicStyles.header.iconSize }}
               >
                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
               </svg>
               <div>
                 <p 
                   className="font-bold text-secondary-950"
                   style={{ fontSize: dynamicStyles.header.titleSize }}
                 >
                   Google Reviews
                 </p>
                 <div className="flex items-center gap-1">
                   {[...Array(5)].map((_, i) => (
                     <Star 
                       key={i} 
                       className="fill-accent-400 text-accent-400" 
                       style={{ width: dynamicStyles.header.starSize, height: dynamicStyles.header.starSize }}
                     />
                   ))}
                   <span 
                     className="text-secondary-600 ml-1"
                     style={{ fontSize: dynamicStyles.header.ratingSize }}
                   >
                     5.0
                   </span>
                 </div>
               </div>
             </div>
            
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="min-w-full flex-shrink-0"
                  >
                     <div 
                       className="flex items-center mb-2"
                       style={{ gap: dynamicStyles.content.gap }}
                     >
                       {[...Array(review.rating)].map((_, i) => (
                         <Star 
                           key={i} 
                           className="fill-accent-400 text-accent-400" 
                           style={{ width: dynamicStyles.content.starSize, height: dynamicStyles.content.starSize }}
                         />
                       ))}
                     </div>
                     <p 
                       className="text-secondary-700 mb-2 leading-relaxed line-clamp-3"
                       style={{ fontSize: dynamicStyles.content.commentSize }}
                     >
                       "{review.comment}"
                     </p>
                     <div 
                       className="flex items-center"
                       style={{ gap: dynamicStyles.content.gap }}
                     >
                       <p 
                         className="font-semibold text-secondary-950"
                         style={{ fontSize: dynamicStyles.content.nameSize }}
                       >
                         {review.name}
                       </p>
                       <span 
                         className="text-secondary-400"
                         style={{ fontSize: dynamicStyles.content.nameSize }}
                       >
                         ·
                       </span>
                       <p 
                         className="text-secondary-600"
                         style={{ fontSize: dynamicStyles.content.projectSize }}
                       >
                         {review.project}
                       </p>
                     </div>
                  </div>
                ))}
              </div>
            </div>

             {/* Indicadores */}
             <div 
               className="flex justify-center mt-3"
               style={{ gap: dynamicStyles.indicators.gap }}
             >
               {reviews.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => goToSlide(index)}
                   className="rounded-full transition-all duration-300 bg-secondary-300 hover:bg-secondary-400"
                   style={{
                     height: dynamicStyles.indicators.height,
                     width: index === currentIndex 
                       ? dynamicStyles.indicators.activeWidth 
                       : dynamicStyles.indicators.width,
                     backgroundColor: index === currentIndex ? '#3b82f6' : undefined,
                   }}
                   aria-label={`Ir a reseña ${index + 1}`}
                 />
               ))}
             </div>
          </div>
        </div>

        {/* Mobile: NO se renderiza aquí - se renderiza después del hero en las páginas */}
      </>
    );
  }

  // Variante mobile: versión compacta para móvil (sin wrapper)
  if (variant === 'mobile') {
    return (
      <>
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div>
            <p className="font-bold text-xs text-secondary-950">Google Reviews</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-accent-400 text-accent-400" />
              ))}
              <span className="text-[10px] text-secondary-600 ml-1">5.0</span>
            </div>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-full flex-shrink-0"
              >
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="text-xs text-secondary-700 mb-2 leading-relaxed line-clamp-2">
                  "{review.comment}"
                </p>
                <div className="flex items-center gap-1.5">
                  <p className="font-semibold text-[10px] text-secondary-950">
                    {review.name}
                  </p>
                  <span className="text-secondary-400 text-[10px]">·</span>
                  <p className="text-[10px] text-secondary-600">{review.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-1 mt-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-5 bg-primary-500'
                  : 'w-1 bg-secondary-300 hover:bg-secondary-400'
              }`}
              aria-label={`Ir a reseña ${index + 1}`}
            />
          ))}
        </div>
      </>
    );
  }

  // Variante default: comportamiento normal
  return (
    <div className="relative w-full overflow-hidden py-1 md:py-8 -mx-4 px-4">
      <div 
        className="flex transition-transform duration-500 ease-in-out w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="min-w-full w-full flex-shrink-0 pr-2"
          >
            <div className="bg-white rounded-xl p-3 md:p-8 shadow-xl border border-secondary-200 w-full box-border">
              <div className="flex items-center gap-1 mb-2 md:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-5 md:h-5 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="text-secondary-700 text-xs md:text-lg mb-3 md:mb-6 leading-snug md:leading-relaxed font-medium">
                "{review.comment}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <p className="font-bold text-xs md:text-base text-secondary-950">
                      {review.name}
                    </p>
                  </div>
                  <p className="text-[10px] md:text-sm text-secondary-600 ml-6 md:ml-7">{review.project}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-primary-500'
                : 'w-2 bg-secondary-300 hover:bg-secondary-400'
            }`}
            aria-label={`Ir a reseña ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GoogleReviewsCarousel;

