import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Faustino Rincon',
    rating: 5,
    comment: '¡Simplemente espectaculares! Los encontré por internet, se lo mostré a mis jefes y quedaron encantados con los muebles exhibidores. Desde el primer contacto, el equipo demostró un gran profesionalismo, pero lo más impresionante es la calidad del producto final. Cada detalle, cada unión y cada acabado están hechos con una precisión increíble. En un mercado donde a veces se sacrifica calidad por precio, esta empresa demuestra que un trabajo de excelencia no solo embellece el espacio, sino que es una inversión inteligente y duradera.',
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
    comment: 'Para los que no los conocen, trabajan muy muy bien, al principio fui con un poco de desconfianza pero luego de ver el trabajo final solo queda agradecerles!!! Sin duda vuelvo a contactarlos cuando lo necesite.',
    project: 'Hace 3 años'
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden py-1 md:py-8 -mx-4 px-4">
      <div 
        className="flex transition-transform duration-500 ease-in-out w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="min-w-full w-full flex-shrink-0 pr-2"
          >
            <div className="bg-white rounded-xl p-3 md:p-8 shadow-xl border border-secondary-200 w-full box-border">
              <div className="flex items-center gap-1 mb-2 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-5 md:h-5 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <Quote className="w-5 h-5 md:w-8 md:h-8 text-primary-500 mb-2 md:mb-4 opacity-50" />
              <p className="text-secondary-700 text-xs md:text-lg mb-3 md:mb-6 leading-snug md:leading-relaxed font-medium">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {/* Logo de Google */}
                    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <p className="font-bold text-xs md:text-base text-secondary-950">
                      {testimonial.name}
                    </p>
                  </div>
                  <p className="text-[10px] md:text-sm text-secondary-600 ml-6 md:ml-7">{testimonial.project}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-primary-500'
                : 'w-2 bg-secondary-300 hover:bg-secondary-400'
            }`}
            aria-label={`Ir a testimonio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

