import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Cuánto tiempo toma la fabricación?',
    answer: '4-6 semanas desde la aprobación del diseño. Te proporcionamos un cronograma detallado y cumplimos rigurosamente los plazos.',
  },
  {
    question: '¿Ofrecen garantía?',
    answer: 'Sí, garantía completa en materiales y mano de obra. Todos los proyectos incluyen garantía por escrito.',
  },
  {
    question: '¿Cómo funciona la cotización?',
    answer: 'Contacto inicial, propuesta detallada con diseño y presupuesto sin compromiso. Precios según materiales, dimensiones y complejidad.',
  },
  {
    question: '¿Puedo ver trabajos anteriores?',
    answer: 'Sí, portafolio completo en el sitio web. También puedes visitar nuestro taller para ver muestras físicas de materiales.',
  },
  {
    question: '¿Puedo elegir los materiales?',
    answer: 'Sí, trabajamos con amplia variedad de materiales premium. Te asesoramos para elegir la mejor opción según presupuesto y estilo.',
  },
  {
    question: '¿Incluyen instalación?',
    answer: 'Sí, servicio integral: diseño, fabricación e instalación profesional. Todo incluido en el presupuesto.',
  },
  {
    question: '¿Qué pasa si hay atrasos?',
    answer: 'Cumplimos los plazos establecidos. En caso de eventualidad, te informamos con anticipación y minimizamos el impacto.',
  },
  {
    question: '¿Ofrecen financiamiento?',
    answer: 'Sí, planes de pago flexibles. Puedes pagar en cuotas durante la fabricación. Consulta opciones con nuestros asesores.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-cream-300">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-secondary-950">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-secondary-800 max-w-2xl mx-auto font-medium">
            Resolvemos tus dudas
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cream-100 transition-colors"
              >
                <span className="font-display text-lg font-bold text-secondary-950 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 text-secondary-700 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

