import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    contacto: '',
    direccion: '',
    mensaje: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        contacto: '',
        direccion: '',
        mensaje: ''
      });
      
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
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
          <label htmlFor="contacto" className="block text-sm font-semibold text-dark-700 mb-2">
            Contacto *
          </label>
          <input
            type="text"
            id="contacto"
            name="contacto"
            required
            value={formData.contacto}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="Teléfono o email"
          />
        </div>

        <div>
          <label htmlFor="direccion" className="block text-sm font-semibold text-dark-700 mb-2">
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="Tu dirección"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-semibold text-dark-700 mb-2">
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            required
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
            placeholder="Tu mensaje..."
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
        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Enviar</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;

