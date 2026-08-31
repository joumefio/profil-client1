import { useState } from 'react';
import './FAQ.css';
import { faqs, distributor } from '../../data';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">
            <HelpCircle size={15} />
            <span>Réponses Claires & Rapides</span>
          </div>
          <h2 className="section-title">Questions <span>Fréquemment Posées</span></h2>
          <p className="section-subtitle">
            Tout ce que vous souhaitez savoir sur nos produits, la posologie, les commandes et les livraisons.
          </p>
        </div>

        <div className="faq-wrapper">
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={index} className={`faq-card ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-trigger" 
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <div className={`faq-icon-pill ${isOpen ? 'rotated' : ''}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="faq-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="faq-help-box card-soft">
            <div className="help-box-content">
              <h3>Vous avez une question spécifique ?</h3>
              <p>
                Je suis à votre entière disposition pour vous guider et vous recommander le produit le plus approprié à votre situation.
              </p>
              <a 
                href={`https://wa.me/${distributor.whatsapp}?text=${encodeURIComponent("Bonjour, j'ai une question sur les produits Dynace Global.")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} /> Poser ma question sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
