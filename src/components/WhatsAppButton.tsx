import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  number?: string;
  message?: string;
  className?: string;
  variant?: 'default' | 'floating' | 'inline';
}

const WhatsAppButton = ({ 
  number = '56964295258',
  message = 'Hola, me interesa conocer más sobre sus servicios de diseño y fabricación.',
  className = '',
  variant = 'default'
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  const variants = {
    default: 'bg-tertiary-400 hover:bg-tertiary-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2',
    floating: 'fixed bottom-24 right-6 z-40 bg-tertiary-400 hover:bg-tertiary-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:scale-105 flex items-center gap-2',
    inline: 'bg-tertiary-400 hover:bg-tertiary-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 w-full justify-center'
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>Contactar</span>
    </a>
  );
};

export default WhatsAppButton;

