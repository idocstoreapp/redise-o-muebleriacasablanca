import { Home, ChefHat, Phone, MessageCircle, FileText, Package, Sofa } from 'lucide-react';

const MobileNavBar = () => {
  const navItems = [
    { icon: Home, label: 'Inicio', href: '/' },
    { icon: ChefHat, label: 'Cocinas', href: '/cocinas' },
    { icon: Package, label: 'Closets', href: '/closets' },
    { icon: Sofa, label: 'Muebles', href: '/muebles-a-medida' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/56964295258', external: true, color: 'bg-tertiary-400' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-secondary-800 border-t border-secondary-700 shadow-2xl md:hidden">
      <div className="container-custom">
        <div className="flex items-center justify-around py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isWhatsApp = item.external && item.href.includes('wa.me');
            
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isWhatsApp
                    ? 'text-tertiary-300 hover:text-tertiary-200 hover:bg-tertiary-400/20'
                    : 'text-secondary-200 hover:text-accent-400 hover:bg-secondary-700/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;

