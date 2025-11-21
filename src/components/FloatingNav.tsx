import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, ChefHat, Phone, MessageCircle, FileText } from 'lucide-react';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: 'Inicio', href: '/', color: 'bg-primary-500' },
    { icon: Info, label: 'Conócenos', href: '/conocenos', color: 'bg-primary-600' },
    { icon: ChefHat, label: 'Cocinas', href: '/cocina-tradicional', color: 'bg-primary-700' },
    { icon: FileText, label: 'Cotizar', href: '#cotizar', color: 'bg-primary-500' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/56964295258', color: 'bg-tertiary-400', external: true },
    { icon: Phone, label: 'Contacto', href: '#contacto', color: 'bg-secondary-900' },
  ];

  const whatsappNumber = '56964295258';
  const whatsappMessage = encodeURIComponent('Hola, me interesa conocer más sobre sus servicios.');

  return (
    <>
      {/* Botón flotante principal */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform ${
            isOpen
              ? 'bg-primary-500 rotate-45 scale-110'
              : 'bg-secondary-800 hover:bg-secondary-900 hover:scale-110'
          }`}
          aria-label="Menú de navegación"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Menu className="w-7 h-7 text-white" />
          )}
        </button>

        {/* Menú expandido */}
        <div
          className={`absolute bottom-20 right-0 transition-all duration-300 ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-2 min-w-[200px] border border-secondary-200">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const delay = index * 50;
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={() => !item.external && setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-cream-100 group ${
                    isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${delay}ms` : '0ms',
                  }}
                >
                  <div className={`${item.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-secondary-800 group-hover:text-primary-500">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingNav;

