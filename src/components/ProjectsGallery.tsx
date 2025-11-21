import { useState, useEffect, useRef } from 'react';
import { ArrowRight, X, Heart } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface Project {
  id: number;
  image: string;
  alt: string;
}

interface ProjectsGalleryProps {
  projects: Project[];
  title: string;
  serviceType: 'cocina' | 'closet' | 'mueble';
}

const ProjectsGallery = ({ projects, title, serviceType }: ProjectsGalleryProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [visibleOverlays, setVisibleOverlays] = useState<Set<number>>(new Set());
  const timeoutRefs = useRef<Map<number, NodeJS.Timeout>>(new Map());

  useEffect(() => {
    // En mobile, mostrar overlay después de 1 segundo para cada proyecto
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      projects.forEach((project) => {
        const timeout = setTimeout(() => {
          setVisibleOverlays((prev) => new Set(prev).add(project.id));
        }, 1000);
        timeoutRefs.current.set(project.id, timeout);
      });
    }

    return () => {
      // Limpiar timeouts al desmontar
      timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, [projects]);

  const openModal = (id: number) => {
    // Solo abrir modal en desktop
    if (window.innerWidth >= 768) {
      setSelectedProject(id);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const getMessage = () => {
    const messages = {
      cocina: 'Hola, me interesa una cocina similar a este proyecto. ¿Pueden ayudarme con una cotización?',
      closet: 'Hola, me interesa un closet similar a este proyecto. ¿Pueden ayudarme con una cotización?',
      mueble: 'Hola, me interesa un mueble similar a este proyecto. ¿Pueden ayudarme con una cotización?'
    };
    return messages[serviceType];
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);
  const isVideo = (url: string) => url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov');

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-secondary-950">
              {title}
            </h2>
            <p className="text-xl text-secondary-800 max-w-2xl mx-auto font-medium">
              Explora nuestros trabajos realizados. ¿Te gusta alguno? Podemos hacer algo similar para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => {
              const showOverlayMobile = visibleOverlays.has(project.id);
              const isVisibleMobile = showOverlayMobile;
              
              return (
                <div
                  key={project.id}
                  className="group relative rounded-2xl overflow-hidden shadow-lg md:cursor-pointer card-hover"
                  onClick={(e) => {
                    // Solo abrir modal en desktop
                    if (window.innerWidth >= 768) {
                      openModal(project.id);
                    }
                  }}
                >
                  <div className="aspect-square relative overflow-hidden bg-secondary-200">
                    {isVideo(project.image) ? (
                      <video
                        src={project.image}
                        className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    {/* Gradient overlay - visible en mobile después de 1s, en desktop con hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-secondary-900/70 via-secondary-900/30 to-transparent transition-opacity duration-500 ${
                      isVisibleMobile ? 'opacity-100 md:opacity-0' : 'opacity-0'
                    } md:group-hover:opacity-100`}></div>
                    
                    {/* CTA overlay - visible en mobile después de 1s, en desktop con hover */}
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${
                      isVisibleMobile 
                        ? 'translate-y-0 md:translate-y-full' 
                        : 'translate-y-full'
                    } md:group-hover:translate-y-0`}>
                      <div className="flex items-center gap-2 text-white mb-2 md:mb-2">
                        <Heart className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                        <span className="font-semibold text-xs md:text-sm">¿Te gusta este diseño?</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2" onClick={(e) => e.stopPropagation()}>
                        <a
                          href="#cotizar"
                          className="bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold flex items-center gap-2 transition-all duration-300 justify-center flex-1"
                        >
                          Cotizar
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                        </a>
                        <div className="flex-1">
                          <WhatsAppButton
                            message={getMessage()}
                            variant="inline"
                            className="bg-tertiary-400 hover:bg-tertiary-500 active:bg-tertiary-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold w-full justify-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal - Solo en desktop */}
      {selectedProject !== null && selectedProjectData && (
        <div
          className="hidden md:flex fixed inset-0 z-50 items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6 text-secondary-900" />
            </button>

            <div className="relative">
              {isVideo(selectedProjectData.image) ? (
                <video
                  src={selectedProjectData.image}
                  className="w-full h-auto max-h-[60vh] object-contain bg-cream-100"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={selectedProjectData.image}
                  alt={selectedProjectData.alt}
                  className="w-full h-auto max-h-[60vh] object-contain bg-cream-100"
                />
              )}
              
              <div className="p-6 md:p-8 bg-white">
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-secondary-950">
                    ¿Te gusta este diseño?
                  </h3>
                  <p className="text-secondary-700 font-medium">
                    Podemos crear algo similar adaptado a tu espacio y necesidades.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#cotizar"
                    onClick={closeModal}
                    className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Solicitar cotización
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <WhatsAppButton
                    message={getMessage()}
                    variant="inline"
                    className="bg-tertiary-400 hover:bg-tertiary-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsGallery;
