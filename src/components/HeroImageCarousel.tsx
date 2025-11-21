import { useState, useEffect } from 'react';

interface HeroImage {
  src: string;
  alt: string;
  label: string;
}

const heroImages: HeroImage[] = [
  { src: '/Gemini_Generated_Image_exyvenexyvenexyv.png', alt: 'Cocina personalizada', label: 'Cocinas' },
  { src: '/Gemini_Generated_Image_qkuj5kqkuj5kqkuj.png', alt: 'Closet a medida', label: 'Closets' },
  { src: '/Gemini_Generated_Image_mljzfkmljzfkmljz.png', alt: 'Recibidor elegante', label: 'Recibidores' },
  { src: '/Gemini_Generated_Image_jeq0kqjeq0kqjeq0.png', alt: 'Sala de estar', label: 'Salas' },
];

const HeroImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover ${
              index === currentIndex ? 'animate-hero-zoom' : 'scale-100'
            }`}
            loading={index === 0 ? 'eager' : 'lazy'}
            key={`${image.src}-${currentIndex}`}
          />
        </div>
      ))}
      {/* Indicadores de área - Solo visible en desktop */}
      <div className="hidden md:flex absolute top-6 right-6 z-30 flex-col gap-2">
        {heroImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`px-2 py-1 md:px-4 md:py-2 rounded-full backdrop-blur-sm border border-white/50 md:border-2 transition-all duration-300 whitespace-nowrap ${
              index === currentIndex
                ? 'bg-primary-500 border-white text-white shadow-lg scale-105'
                : 'bg-white/20 border-white/40 text-white/80 hover:bg-white/30'
            }`}
            aria-label={`Ver ${image.label}`}
          >
            <span className="font-semibold text-[10px] md:text-sm leading-tight">{image.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroImageCarousel;


