import './Hero.css';
import { distributor } from '../../data';
import { ArrowRight, ShoppingBag, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} className="badge-icon" />
            <span>{distributor.badge}</span>
          </div>

          <h1 className="hero-title">
            Régénérez Votre <span>Santé</span> & Révélez Votre <span>Vitalité</span>
          </h1>

          <p className="hero-tagline">
            L'excellence des cellules souches végétales et de la phytothérapie moderne au service de votre corps.
          </p>

          <p className="hero-description">
            En tant que distributrice officielle de <strong>Dynace Global</strong>, je vous guide avec bienveillance pour choisir les solutions botaniques haut de gamme adaptées à vos besoins (Rocenta, Urbanism, Collagène, Lyftmax).
          </p>

          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              <ShoppingBag size={19} /> Découvrir les produits
            </a>
            <a href="#contact" className="btn btn-navy">
              Commander maintenant <ArrowRight size={18} />
            </a>
            <a 
              href={`https://wa.me/${distributor.whatsapp}?text=${encodeURIComponent("Bonjour, j'aimerais échanger avec vous concernant les produits Dynace Global.")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
            >
              <MessageCircle size={19} /> Contacter sur WhatsApp
            </a>
          </div>

          <div className="hero-trust-bar">
            <div className="trust-item">
              <ShieldCheck size={20} className="trust-icon" />
              <span>Garantie 100% Authentique Dynace Global</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-dot"></span>
              <span>Suivi & Accompagnement Personnalisé</span>
            </div>
          </div>
        </div>

        <div className="hero-image-col">
          <div className="hero-photo-frame">
            <div className="photo-aura"></div>
            <div className="photo-backdrop"></div>
            <img 
              src={distributor.photo} 
              alt="Distributrice Officielle Dynace Global" 
              className="hero-photo" 
            />

            {/* Badges Flottants de Confiance */}
            <div className="floating-badge badge-top glass">
              <span className="badge-dot"></span>
              <div>
                <strong>Distributrice Certifiée</strong>
                <span>Dynace Global Partenaire</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom glass">
              <div className="badge-avatar-check">✓</div>
              <div>
                <strong>Conseil & Écoute</strong>
                <span>Disponible 7j/7 sur WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
