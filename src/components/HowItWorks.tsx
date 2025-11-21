import { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Consulta',
    description: 'Visita para conocer tu espacio y necesidades.',
    icon: '📞',
  },
  {
    number: '02',
    title: 'Diseño',
    description: 'Diseño exclusivo adaptado a tu estilo y presupuesto.',
    icon: '🎨',
  },
  {
    number: '03',
    title: 'Fabricación',
    description: 'Fabricamos con materiales premium.',
    icon: '🏗️',
  },
  {
    number: '04',
    title: 'Instalación',
    description: 'Instalación profesional con precisión.',
    icon: '✅',
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="bg-gradient-to-br from-secondary-800 to-secondary-900 text-white relative overflow-hidden py-8 md:py-24">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: `url("${patternUrl}")` }}
        ></div>
      </div>
      
      <div className="container-custom relative z-10 w-full mx-auto px-4">
        <div className="text-center mb-4 md:mb-16 w-full">
          <h2 className="font-display text-2xl md:text-5xl font-bold mb-2 md:mb-4 text-center mx-auto w-full">
            Cómo funciona
          </h2>
          <p className="text-sm md:text-xl text-white/90 max-w-2xl mx-auto font-medium text-center">
            Proceso simple en 4 pasos
          </p>
        </div>

        <div className="max-w-5xl mx-auto w-full">
          {/* Carrusel para mobile */}
          <div className="md:hidden mb-0">
            <div className="relative overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeStep * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="min-w-full w-full flex-shrink-0 px-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border-2 border-accent-400 bg-white/20 shadow-2xl w-full box-border">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-3xl">{step.icon}</span>
                        <span className="text-2xl font-black text-accent-400">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold mb-1.5 break-words">
                        {step.title}
                      </h3>
                      <p className="text-white/80 text-xs font-medium leading-snug">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Indicadores mobile */}
            <div className="flex justify-center gap-2 mt-4">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === index
                      ? 'w-8 bg-accent-400'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Ir al paso ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid para desktop */}
          <div className="hidden md:grid grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative cursor-pointer transition-all duration-500 ${
                  activeStep === index
                    ? 'transform scale-105 z-10'
                    : 'opacity-70 hover:opacity-90'
                }`}
              >
                <div
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-500 ${
                    activeStep === index
                      ? 'border-accent-400 bg-white/20 shadow-2xl'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{step.icon}</span>
                    <span className="text-3xl font-black text-accent-400">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-accent-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Indicadores desktop */}
          <div className="hidden md:flex justify-center gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-accent-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir al paso ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

