import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  fetchpriority = 'auto',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  objectFit = 'cover',
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [imgError, setImgError] = useState(false);

  // Detectar si es imagen LCP
  const isLCP = loading === 'eager' && fetchpriority === 'high';

  // Generar rutas WebP
  const getWebPPath = (originalPath: string, size?: number) => {
    const ext = originalPath.match(/\.(jpg|jpeg|png|webp)$/i)?.[0] || '';
    const basePath = originalPath.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const sizeSuffix = size ? `-${size}w` : '';
    return `${basePath}${sizeSuffix}.webp`;
  };

  // Generar srcset para WebP
  const sizesForSrcset = [400, 800, 1200, 1600];
  const webpSrcset = sizesForSrcset
    .map((size) => {
      const webpPath = getWebPPath(src, size);
      return `${encodeURI(webpPath)} ${size}w`;
    })
    .join(', ');

  // Fallback srcset
  const fallbackSrcset = sizesForSrcset
    .map((size) => {
      return `${encodeURI(src)} ${size}w`;
    })
    .join(', ');

  // Aspect ratio para evitar CLS
  const aspectRatio = width && height ? `${width} / ${height}` : undefined;
  const aspectRatioStyle = aspectRatio ? { aspectRatio: `${width} / ${height}` } : {};
  const imageStyle: React.CSSProperties = {
    objectFit,
    ...aspectRatioStyle,
    ...(width ? { maxWidth: `${width}px` } : {}),
    ...(height ? { maxHeight: `${height}px` } : {})
  };

  const handleError = () => {
    setImgError(true);
    onError?.();
  };

  const handleLoad = () => {
    onLoad?.();
  };

  // Si hay error, mostrar imagen original
  if (imgError) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchpriority}
        decoding={isLCP ? 'sync' : 'async'}
        className={className}
        style={imageStyle}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
      />
    );
  }

  const ext = src.match(/\.(jpg|jpeg)$/i) ? 'image/jpeg' : 'image/png';

  return (
    <picture>
      {/* WebP con srcset */}
      {webpSrcset && (
        <source
          srcSet={webpSrcset}
          sizes={sizes}
          type="image/webp"
        />
      )}

      {/* Fallback con srcset */}
      {fallbackSrcset && (
        <source
          srcSet={fallbackSrcset}
          sizes={sizes}
          type={ext}
        />
      )}

      {/* Imagen fallback */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchpriority}
        decoding={isLCP ? 'sync' : 'async'}
        className={className}
        style={imageStyle}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
      />
    </picture>
  );
};

export default OptimizedImage;

