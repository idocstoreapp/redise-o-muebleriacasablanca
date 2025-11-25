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
  return (
    <div className={`w-full rounded-2xl overflow-hidden shadow-xl border border-secondary-200 bg-white ${className}`}>
      <iframe
        src={urlCotizador}
        title="Catálogo de Cocinas - Cotizador Interactivo"
        width="100%"
        height={altura}
        frameBorder="0"
        allowFullScreen
        className="w-full border-0"
        loading="lazy"
        style={{ 
          minHeight: '600px',
          display: 'block'
        }}
      />
    </div>
  );
};

export default CatalogoCocinasEmbebido;

