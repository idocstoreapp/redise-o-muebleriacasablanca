import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Variante hero: card flotante en desktop, debajo en móvil
  if (variant === 'hero') {
    return (
      <>
        {/* Desktop: Card flotante a la derecha - Solo desktop dentro del hero */}
        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-20 w-[28rem] max-w-[calc(100%-3rem)]">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <p className="font-bold text-sm text-secondary-950">Google Reviews</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent-400 text-accent-400" />
                  ))}
                  <span className="text-xs text-secondary-600 ml-1">5.0</span>
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
                        <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                      ))}
                    </div>
                    <p className="text-sm text-secondary-700 mb-3 leading-relaxed line-clamp-3">
                      "{review.comment}"
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-xs text-secondary-950">
                        {review.name}
                      </p>
                      <span className="text-secondary-400">·</span>
                      <p className="text-xs text-secondary-600">{review.project}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-1.5 mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-6 bg-primary-500'
                      : 'w-1.5 bg-secondary-300 hover:bg-secondary-400'
                  }`}
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

