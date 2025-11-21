import { useState, useEffect } from 'react';
import { Palette, Award, Clock, MessageCircle, Shield, Users } from 'lucide-react';

interface FeatureCard {
  icon: any;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  colSpan?: string;
  isGradient?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
}

const features: FeatureCard[] = [
  {
    icon: Palette,
    title: 'Diseño Personalizado',
    description: 'Cocinas a medida con distribución eficiente y soluciones adaptadas a tu estilo de vida.',
    image: '/Gemini_Generated_Image_5hacl35hacl35hac.png',
    imageAlt: 'Diseño personalizado',
  },
  {
    icon: Award,
    title: 'Materiales Premium',
    description: 'Selección cuidadosa de materiales para garantizar durabilidad y acabados impecables.',
    image: '/Gemini_Generated_Image_6zzvha6zzvha6zzv.png',
    imageAlt: 'Materiales de calidad',
  },
  {
    icon: Clock,
    title: 'Entrega Puntual',
    description: 'Cumplimos rigurosamente los plazos acordados. Sin atrasos, sin excusas.',
    image: '/Gemini_Generated_Image_dy1tr0dy1tr0dy1t.png',
    imageAlt: 'Entrega puntual',
  },
  {
    icon: MessageCircle,
    title: 'Asesoría Profesional',
    description: 'Acompañamiento desde el diseño hasta la instalación. Orientación experta en cada paso.',
    image: '/Gemini_Generated_Image_exyvenexyvenexyv.png',
    imageAlt: 'Asesoría integral',
  },
  {
    icon: Shield,
    title: 'Proceso Transparente',
    description: 'Presupuestos claros, cronogramas detallados y comunicación constante en cada etapa.',
    image: '/Gemini_Generated_Image_jeq0kqjeq0kqjeq0.png',
    imageAlt: 'Proceso transparente',
  },
  {
    icon: Users,
    title: 'Equipo Especializado',
    description: 'Profesionales calificados en diseño, fabricación e instalación. Resultados excepcionales garantizados.',
    image: '/Gemini_Generated_Image_taxf2gtaxf2gtaxf.png',
    imageAlt: 'Equipo especializado',
    isGradient: true,
    gradientFrom: 'from-primary-500',
    gradientTo: 'to-primary-600',
  },
];

const FeaturesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000); // Cambia cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="md:hidden w-full -mx-4 px-4">
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="min-w-full w-full flex-shrink-0 pr-2">
                <div
                  className={`bg-white p-3 rounded-xl card-hover border border-secondary-300 relative overflow-hidden group shadow-lg w-full box-border ${
                    feature.isGradient
                      ? `bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo}`
                      : ''
                  }`}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className={`w-full h-full object-cover transition-opacity duration-500 animate-slow-zoom ${
                        feature.isGradient 
                          ? 'opacity-30 group-hover:opacity-40' 
                          : 'opacity-45 group-hover:opacity-100'
                      }`}
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 ${
                        feature.isGradient
                          ? `bg-gradient-to-br ${feature.gradientFrom}/90 ${feature.gradientTo}/90`
                          : 'bg-gradient-to-br from-secondary-800/20 to-transparent group-hover:from-secondary-900/80 group-hover:to-secondary-950/80'
                      } transition-all duration-300`}
                    ></div>
                  </div>
                  <div className="relative z-10">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 shadow-lg ${
                        feature.isGradient ? 'bg-white' : 'bg-accent-400'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          feature.isGradient ? 'text-primary-500' : 'text-white'
                        }`}
                      />
                    </div>
                    <h3
                      className={`font-display text-base font-bold mb-1.5 group-hover:text-white transition-colors break-words ${
                        feature.isGradient ? 'text-white' : 'text-secondary-950'
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-xs leading-snug group-hover:text-white/95 transition-colors font-medium ${
                        feature.isGradient ? 'text-white/95' : 'text-secondary-800'
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-6">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-primary-500'
                : 'w-2 bg-secondary-300 hover:bg-secondary-400'
            }`}
            aria-label={`Ir a característica ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesCarousel;

