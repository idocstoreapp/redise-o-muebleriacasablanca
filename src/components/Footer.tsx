import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [privacyLink, setPrivacyLink] = useState({ href: '/privacidad', label: 'Política de Privacidad' });

  useEffect(() => {
    const pathname = window.location.pathname;
    
    // Determinar qué política mostrar según la página actual
    if (pathname.startsWith('/cocinas') || pathname.includes('/cocina-')) {
      setPrivacyLink({ href: '/privacidad-cocinas', label: 'Política de Privacidad - Cocinas' });
    } else if (pathname.startsWith('/closets') || pathname.includes('/closet')) {
      setPrivacyLink({ href: '/privacidad-closets', label: 'Política de Privacidad - Closets' });
    } else if (pathname.startsWith('/muebles') || pathname.includes('/mueble')) {
      setPrivacyLink({ href: '/privacidad-muebles', label: 'Política de Privacidad - Muebles' });
    } else {
      setPrivacyLink({ href: '/privacidad', label: 'Política de Privacidad' });
    }
  }, []);

  return (
    <footer className="bg-secondary-800 text-secondary-100 section-padding pb-24 md:pb-0">
      <div className="container-custom">
        <div className="mb-12 pb-8 border-b border-secondary-600">
          <img 
            src="/logo-blaco.png" 
            alt="Mueblería Casa Blanca" 
            className="h-16 w-auto mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] filter brightness-110 contrast-110"
            style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3)) drop-shadow(0 0 4px rgba(255,255,255,0.1))' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/logo-blanco.png';
              target.onerror = null;
            }}
          />
          <p className="text-secondary-200 max-w-md">
            Diseños exclusivos a medida. Cocinas, closets y espacios comerciales con calidad y puntualidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Información de contacto */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-accent-400">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <a href="tel:+56964295258" className="text-secondary-100 hover:text-accent-400 transition-colors">
                  +56 9 6429 5258
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <a href="mailto:contacto@muebleriacasablanca.cl" className="text-secondary-100 hover:text-accent-400 transition-colors">
                  contacto@muebleriacasablanca.cl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-1" />
                <span className="text-secondary-100">Santa Elena 803, Santiago, Chile</span>
              </li>
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-accent-400">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-secondary-100 hover:text-accent-400 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="/conocenos" className="text-secondary-100 hover:text-accent-400 transition-colors">Conócenos</a>
              </li>
              <li>
                <a href="/cocinas" className="text-secondary-100 hover:text-accent-400 transition-colors">Cocinas</a>
              </li>
              <li>
                <a href="/closets" className="text-secondary-100 hover:text-accent-400 transition-colors">Closets</a>
              </li>
              <li>
                <a href="/muebles-a-medida" className="text-secondary-100 hover:text-accent-400 transition-colors">Muebles</a>
              </li>
              <li>
                <a href="/proyectos" className="text-secondary-100 hover:text-accent-400 transition-colors">Proyectos</a>
              </li>
              <li>
                <a href="/blog" className="text-secondary-100 hover:text-accent-400 transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-accent-400">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="/cocinas" className="text-secondary-100 hover:text-accent-400 transition-colors">Cocinas a Medida</a>
              </li>
              <li>
                <a href="/closets" className="text-secondary-100 hover:text-accent-400 transition-colors">Closets a Medida</a>
              </li>
              <li>
                <a href="/muebles-a-medida" className="text-secondary-100 hover:text-accent-400 transition-colors">Muebles a Medida</a>
              </li>
              <li>
                <a href="/proyectos" className="text-secondary-100 hover:text-accent-400 transition-colors">Ver Proyectos</a>
              </li>
            </ul>
          </div>

          {/* Políticas de Privacidad */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-accent-400">Políticas</h3>
            <ul className="space-y-2">
              <li>
                <a href={privacyLink.href} className="text-secondary-100 hover:text-accent-400 transition-colors">
                  {privacyLink.label}
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-accent-400">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary-700 rounded-lg flex items-center justify-center hover:bg-accent-400 transition-colors text-secondary-100 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary-700 rounded-lg flex items-center justify-center hover:bg-accent-400 transition-colors text-secondary-100 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-secondary-200 mb-2 font-semibold">Horarios:</p>
              <p className="text-sm text-secondary-100">Lunes - Viernes: 9:00 - 18:00 Hrs</p>
              <p className="text-sm text-secondary-100">Sábados: Con previa cita</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-200 text-sm">
            <p>&copy; {new Date().getFullYear()} Mueblería Casa Blanca. Todos los derechos reservados.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={privacyLink.href} className="hover:text-accent-400 transition-colors">
                {privacyLink.label}
              </a>
            </div>
          </div>
          {/* Firma discreta del desarrollador */}
          <div className="mt-4 pt-4 border-t border-secondary-700/50">
            <p className="text-xs text-secondary-500 text-center">
              Desarrollado por{' '}
              <a 
                href="https://jonadevel-portfolio.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-accent-400 transition-colors underline decoration-dotted underline-offset-2"
                title="Jonathan Guarirapa - Desarrollador de aplicaciones y sitios webs"
              >
                Jonathan Guarirapa
              </a>
              {' · '}
              <a 
                href="https://wa.me/56962614851" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-accent-400 transition-colors underline decoration-dotted underline-offset-2"
                title="Contactar por WhatsApp"
              >
                WhatsApp
              </a>
              {' · '}
              <a 
                href="mailto:jona.develp@gmail.com" 
                className="text-secondary-400 hover:text-accent-400 transition-colors underline decoration-dotted underline-offset-2"
                title="Enviar correo"
              >
                Email
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

