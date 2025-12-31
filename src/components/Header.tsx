import { useScroll } from '../hooks/useScroll';

const Header = () => {
  const isScrolled = useScroll({ threshold: 50, throttleMs: 150 });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
        isScrolled
          ? 'bg-secondary-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo-blaco.png" 
              alt="Mueblería Casa Blanca" 
              className="h-10 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] filter brightness-110 contrast-110"
              style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3)) drop-shadow(0 0 4px rgba(255,255,255,0.1))' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/logo-blanco.png';
                target.onerror = null;
              }}
            />
            <span className="font-display text-xl font-bold text-white">
              Mueblería Casa Blanca
            </span>
          </a>
          <nav className="flex items-center gap-6">
            <a
              href="/"
              className="text-white/90 hover:text-accent-400 transition-colors font-medium"
            >
              Inicio
            </a>
            <a
              href="/cocinas"
              className="text-white/90 hover:text-accent-400 transition-colors font-medium"
            >
              Cocinas
            </a>
            <a
              href="/closets"
              className="text-white/90 hover:text-accent-400 transition-colors font-medium"
            >
              Closets
            </a>
            <a
              href="/muebles-a-medida"
              className="text-white/90 hover:text-accent-400 transition-colors font-medium"
            >
              Muebles
            </a>
            <a
              href="/#cotizar"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold"
            >
              Cotizar
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

