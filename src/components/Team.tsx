interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Antonio Ramos',
    role: 'Director de Proyectos',
    description: 'Encargado de transformar cada concepto en realidad. Con su visión y experiencia, cada proyecto cobra vida, superando expectativas y creando soluciones únicas.',
    image: '/nuestro-equipo/antonio.png'
  },
  {
    name: 'Juan Aranguiz',
    role: 'Contratista & Socio Estratégico',
    description: 'El motor que impulsa nuestros proyectos más ambiciosos. Su visión estratégica y capacidad para identificar oportunidades nos permite alcanzar nuevos niveles de excelencia. Juntos, formamos un equipo imparable que transforma ideas en realidades extraordinarias.',
    image: '/nuestro-equipo/essity.png'
  }
];

const Team = () => {
  return (
    <section id="equipo" className="py-24 md:py-32 bg-cream-300 relative overflow-hidden">
      <div className="container-custom">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extralight mb-4 text-secondary-950">
            <span className="font-light">NUESTRO</span>{' '}
            <span className="font-normal text-accent-400">EQUIPO</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-700 max-w-2xl mx-auto font-light">
            Profesionales comprometidos con la excelencia en cada proyecto
          </p>
        </div>

        {/* Grid de 2 columnas con los miembros del equipo */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-accent-400/20 rounded-lg p-8 transition-all duration-1000 hover:border-accent-400/40 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                {/* Foto con efecto de resplandor */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-accent-400/20 rounded-full blur-xl -z-10 scale-150"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-accent-400/30 object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-light mb-2 text-secondary-950">
                  {member.name}
                </h3>
                <p className="text-sm uppercase tracking-widest font-light text-accent-400 mb-4">
                  {member.role}
                </p>
                <p className="text-secondary-700 leading-relaxed font-light">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Texto de cierre */}
        <div className="text-center mt-16">
          <p className="text-lg md:text-xl text-secondary-700 max-w-3xl mx-auto font-light leading-relaxed">
            Trabajamos en conjunto, combinando experiencia, calidad y dedicación para brindar el mejor servicio de la ciudad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;

