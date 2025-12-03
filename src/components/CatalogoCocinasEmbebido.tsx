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
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    // Solo prevenir scroll horizontal, no vertical
    const preventHorizontalScroll = () => {
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
    };

    // Establecer altura según el tamaño de pantalla
    const setHeight = () => {
      if (window.innerWidth < 768) {
        setIframeHeight('800px');
      } else {
        setIframeHeight(altura);
      }
    };

    preventHorizontalScroll();
    setHeight();

    // Forzar recarga del iframe para asegurar que se carguen las variables
    setIframeKey(prev => prev + 1);

    window.addEventListener('resize', setHeight);
    
    return () => {
      window.removeEventListener('resize', setHeight);
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, [altura, urlCotizador]);

  return (
    <div 
      className={`w-full max-w-full rounded-2xl shadow-xl border border-secondary-200 bg-white overflow-hidden ${className}`}
      style={{ 
        maxWidth: '100%',
        position: 'relative',
        width: '100%',
        height: iframeHeight,
        isolation: 'isolate'
      }}
    >
      <iframe
        key={iframeKey}
        src={urlCotizador}
        title="Catálogo de Cocinas - Cotizador Interactivo"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        className="border-0 w-full h-full"
        loading="eager"
        style={{ 
          display: 'block',
          border: 'none',
          width: '100%',
          height: '100%',
          minHeight: '600px',
          overflow: 'auto'
        }}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-pointer-lock allow-modals allow-downloads allow-presentation allow-same-origin"
        referrerPolicy="no-referrer-when-downgrade"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
};

export default CatalogoCocinasEmbebido;

