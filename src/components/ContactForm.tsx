import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    comuna: '',
    region: '',
    telefono: '',
    email: '',
    servicio: 'remodelacion-cocina',
    comentarios: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simular envío - aquí integrarías con tu backend
    setTimeout(() => {
      setStatus('success');
      setFormData({
        nombre: '',
        apellido: '',
        comuna: '',
        region: '',
        telefono: '',
        email: '',
        servicio: 'remodelacion-cocina',
        comentarios: ''
      });
      
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-semibold text-dark-700 mb-2">
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="apellido" className="block text-sm font-semibold text-dark-700 mb-2">
            Apellido *
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            required
            value={formData.apellido}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="Tu apellido"
          />
        </div>

        <div>
          <label htmlFor="comuna" className="block text-sm font-semibold text-dark-700 mb-2">
            Comuna *
          </label>
          <input
            type="text"
            id="comuna"
            name="comuna"
            required
            value={formData.comuna}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="Tu comuna"
          />
        </div>

        <div>
          <label htmlFor="region" className="block text-sm font-semibold text-dark-700 mb-2">
            Región *
          </label>
          <input
            type="text"
            id="region"
            name="region"
            required
            value={formData.region}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="Tu región"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-semibold text-dark-700 mb-2">
            Teléfono *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="+56 9 1234 5678"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-dark-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="tu@email.com"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="servicio" className="block text-sm font-semibold text-dark-700 mb-2">
            Tipo de servicio *
          </label>
          <select
            id="servicio"
            name="servicio"
            required
            value={formData.servicio}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
          >
            <option value="remodelacion-cocina">Remodelación de cocina</option>
            <option value="diseno-fabricacion">Diseño/Desarrollo/Fabricación Cocina</option>
            <option value="optimizar-espacios">Optimizar espacios de Cocina</option>
            <option value="remodelacion-local">Remodelación local comercial</option>
            <option value="closets">Closets a medida</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="comentarios" className="block text-sm font-semibold text-dark-700 mb-2">
            Comentarios o preguntas
          </label>
          <textarea
            id="comentarios"
            name="comentarios"
            rows={4}
            value={formData.comentarios}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
            placeholder="Cuéntanos sobre tu proyecto..."
          />
        </div>
      </div>

      {status === 'success' && (
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
          <p className="text-green-800 font-medium">
            ¡Enviado con éxito! Te contactaremos pronto.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
          <p className="text-red-800 font-medium">
            Error al enviar. Por favor, intenta nuevamente.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Enviar solicitud</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;

