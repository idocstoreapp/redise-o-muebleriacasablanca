import { useEffect, useState } from 'react';

interface CatalogoCocinasEmbebidoProps {
  urlCotizador?: string;
  altura?: string;
  className?: string;
}

const CatalogoCocinasEmbebido = ({
  urlCotizador = 'https://cotizador-app-two.vercel.app/cocinas-publico',
  altura = '800px',
  className = ''
}: CatalogoCocinasEmbebidoProps) => {
  const [iframeHeight, setIframeHeight] = useState(altura);

  useEffect(() => {
    // Prevenir scroll horizontal solo en el body
    const preventBodyScroll = () => {
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.maxWidth = '100vw';
      document.documentElement.style.maxWidth = '100vw';
    };

    // Establecer altura según el tamaño de pantalla
    const setHeight = () => {
      if (window.innerWidth < 768) {
        setIframeHeight('700px');
      } else {
        setIframeHeight(altura);
      }
    };

    preventBodyScroll();
    setHeight();

    window.addEventListener('resize', setHeight);
    
    return () => {
      window.removeEventListener('resize', setHeight);
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
      document.body.style.maxWidth = '';
      document.documentElement.style.maxWidth = '';
    };
  }, [altura]);

  return (
    <div 
      className={`w-full max-w-full rounded-2xl shadow-xl border border-secondary-200 bg-white ${className}`}
      style={{ 
        maxWidth: '100%',
        overflow: 'hidden', // Sin scroll en el contenedor
        position: 'relative',
        width: '100%',
        height: iframeHeight,
        zIndex: 1, // Asegurar que esté por encima
        isolation: 'isolate' // Crear nuevo contexto de apilamiento
      }}
    >
      <iframe
        src={urlCotizador}
        title="Catálogo de Cocinas - Cotizador Interactivo"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        className="border-0 w-full h-full"
        loading="lazy"
        style={{ 
          display: 'block',
          border: 'none',
          width: '100%',
          height: '100%',
          minHeight: '600px',
          position: 'relative',
          zIndex: 2, // Asegurar que el iframe esté por encima
          pointerEvents: 'auto' // Asegurar que reciba eventos
        }}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation"
      />
    </div>
  );
};

export default CatalogoCocinasEmbebido;

