import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-secondary-100 section-padding pb-24 md:pb-0">
      <div className="container-custom">
        <div className="mb-12 pb-8 border-b border-secondary-600">
          <img 
            src="/logo.png" 
            alt="Mueblería Casa Blanca" 
            className="h-16 w-auto mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] filter brightness-110 contrast-110"
            style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3)) drop-shadow(0 0 4px rgba(255,255,255,0.1))' }}
          />
          <p className="text-secondary-200 max-w-md">
            Diseños exclusivos a medida. Cocinas, closets y espacios comerciales con calidad y puntualidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

        <div className="border-t border-secondary-600 pt-8 text-center text-secondary-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Mueblería Casa Blanca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

