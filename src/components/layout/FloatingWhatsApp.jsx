import { MessageCircle } from 'lucide-react';
import { distributor } from '../../data';

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${distributor.whatsapp}?text=${encodeURIComponent("Bonjour, je visite votre site Dynace Global et je souhaite des conseils pour une commande.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Contacter la distributrice sur WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="tooltip">Conseil & Commande WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
