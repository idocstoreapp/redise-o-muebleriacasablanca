import { ArrowRight, ChefHat, Sparkles } from 'lucide-react';

interface CotizadorCocinasProps {
  urlCotizador?: string;
  titulo?: string;
  descripcion?: string;
  estilo?: 'boton' | 'banner' | 'card' | 'flotante';
  className?: string;
}

const CotizadorCocinas = ({
  urlCotizador = 'https://cotizador-app-two.vercel.app/cocinas-publico',
  titulo = 'Diseña tu Cocina Ideal',
  descripcion = 'Explora nuestro catálogo interactivo y crea la cocina de tus sueños con nuestro cotizador en línea.',
  estilo = 'banner',
  className = ''
}: CotizadorCocinasProps) => {
  const handleClick = () => {
    window.open(urlCotizador, '_blank', 'noopener,noreferrer');
  };

  // Estilo: Botón simple
  if (estilo === 'boton') {
    return (
      <a
        href={urlCotizador}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${className}`}
      >
        <ChefHat className="w-5 h-5" />
        <span>Cotizar Cocina</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    );
  }

  // Estilo: Banner completo
  if (estilo === 'banner') {
    return (
      <section className={`bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-700 rounded-2xl overflow-hidden shadow-2xl ${className}`}>
        <div className="relative px-6 md:px-12 py-8 md:py-16">
          {/* Decoración de fondo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 md:mb-8">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              {titulo}
            </h2>
            
            {descripcion && (
              <p className="text-white/90 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                {descripcion}
              </p>
            )}
            
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-3 bg-white hover:bg-cream-100 text-primary-600 font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-base md:text-lg group"
            >
              <ChefHat className="w-5 h-5 md:w-6 md:h-6" />
              <span>Explorar Catálogo</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Estilo: Card
  if (estilo === 'card') {
    return (
      <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border border-secondary-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${className}`}>
        <div className="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-700 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/10"></div>
          <ChefHat className="w-20 h-20 text-white relative z-10" />
        </div>
        
        <div className="p-6 md:p-8">
          <h3 className="font-display text-xl md:text-2xl font-bold text-secondary-950 mb-3">
            {titulo}
          </h3>
          
          {descripcion && (
            <p className="text-secondary-700 text-sm md:text-base mb-6 leading-relaxed">
              {descripcion}
            </p>
          )}
          
          <a
            href={urlCotizador}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-full justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span>Cotizar Ahora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  // Estilo: Flotante
  if (estilo === 'flotante') {
    return (
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-4 md:px-6 py-3 md:py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2 md:gap-3 group ${className}`}
        aria-label="Abrir cotizador de cocinas"
      >
        <ChefHat className="w-5 h-5 md:w-6 md:h-6" />
        <span className="hidden md:inline text-sm md:text-base">Cotizar Cocina</span>
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform hidden md:block" />
      </button>
    );
  }

  return null;
};

export default CotizadorCocinas;

