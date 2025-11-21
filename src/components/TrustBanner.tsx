import { useState, useEffect } from 'react';

const TrustBanner = () => {
  // Logos de clientes
  const clientes = [
    { name: 'Cliente Andes Motor', image: '/clientes/andesmotor_2022_Mesadetrabajo1-Photoroom.png' },
    { name: 'Cliente Essity', image: '/clientes/Essity_Logo_neu.svg.png' },
    { name: 'Cliente IDOCSTORE', image: '/clientes/IDOCSTORE FINAL PRINCIPAL-Photoroom.png' },
    { name: 'Cliente', image: '/clientes/1-b4b59c68-Photoroom.png' },
  ];

  // Logos de marcas/proveedores
  const marcas = [
    { name: 'Blum', image: '/Marcas/BLUM.png' },
    { name: 'Hettich', image: '/Marcas/hettich-logo.png' },
    { name: 'Silestone', image: '/Marcas/logo-silestone.png' },
    { name: 'Marca', image: '/Marcas/34c816_b1131d61a5b546b381825fba7fc0c7ee~mv2.gif' },
  ];

  return (
    <section className="bg-cream-100 border-y border-secondary-200 py-8">
      <div className="container-custom">
        {/* Logos de clientes (scroll infinito) */}
        <div className="mb-6">
          <p className="text-secondary-600 font-semibold text-sm md:text-base text-center mb-4">
            Nuestros clientes confían en nosotros:
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-16 overflow-hidden relative">
            <div className="flex items-center gap-8 md:gap-16 animate-scroll">
              {clientes.map((cliente, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={cliente.image}
                    alt={cliente.name}
                    className="h-8 md:h-12 w-auto max-w-[120px] md:max-w-[150px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
              {clientes.map((cliente, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={cliente.image}
                    alt={cliente.name}
                    className="h-8 md:h-12 w-auto max-w-[120px] md:max-w-[150px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logos de marcas/proveedores (scroll infinito) */}
        <div>
          <p className="text-secondary-600 font-semibold text-sm md:text-base text-center mb-4">
            Trabajamos con las mejores marcas:
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-16 overflow-hidden relative">
            <div className="flex items-center gap-8 md:gap-16 animate-scroll-reverse">
              {marcas.map((marca, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                >
                  <img
                    src={marca.image}
                    alt={marca.name}
                    className="h-8 md:h-12 w-auto max-w-[120px] md:max-w-[150px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
              {marcas.map((marca, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                >
                  <img
                    src={marca.image}
                    alt={marca.name}
                    className="h-8 md:h-12 w-auto max-w-[120px] md:max-w-[150px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;

