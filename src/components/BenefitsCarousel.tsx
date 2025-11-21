import { useState, useEffect } from 'react';
import { Package, Palette, Award, ChefHat, Clock, Sofa } from 'lucide-react';

interface Benefit {
  iconName: string;
  title: string;
  description: string;
}

interface BenefitsCarouselProps {
  benefits: Benefit[];
}

// Mapa de nombres de iconos a componentes
const iconMap: { [key: string]: any } = {
  Package,
  Palette,
  Award,
  ChefHat,
  Clock,
  Sofa,
};

const BenefitsCarousel = ({ benefits }: BenefitsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [benefits.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {/* Carrusel para mobile - muestra una card a la vez */}
      <div className="md:hidden mb-8">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.iconName];
              
              if (!Icon) {
                return null;
              }
              
              return (
                <div key={index} className="min-w-full w-full flex-shrink-0 px-2">
                  <div className="bg-white p-6 rounded-2xl card-hover border border-secondary-300 shadow-lg">
                    <div className="w-14 h-14 bg-accent-400 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 text-secondary-950">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-800 leading-relaxed font-medium text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid para desktop - muestra todas las cards */}
      <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
        {benefits.map((benefit, index) => {
          const Icon = iconMap[benefit.iconName];
          const isActive = index === currentIndex;
          
          if (!Icon) {
            return null;
          }
          
          return (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl card-hover border border-secondary-300 shadow-lg transition-all duration-500 cursor-pointer ${
                isActive 
                  ? 'scale-105 shadow-2xl border-primary-500' 
                  : 'scale-100 opacity-90'
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="w-14 h-14 bg-accent-400 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-secondary-950">
                {benefit.title}
              </h3>
              <p className="text-secondary-800 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2">
        {benefits.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-primary-500'
                : 'w-2 bg-secondary-300 hover:bg-secondary-400'
            }`}
            aria-label={`Ir a beneficio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsCarousel;

