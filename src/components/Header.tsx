import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

