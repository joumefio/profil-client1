import './Footer.css';
import { distributor } from '../../data';
import { Phone, MapPin, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/assets/dynace-logo.png" alt="Dynace Global" className="footer-logo-img" />
            <span>Dynace<span className="logo-accent">Global</span></span>
          </div>
          <p className="footer-mission">{distributor.mission}</p>
          <div className="footer-trust-badge">
            <ShieldCheck size={16} className="badge-shield" />
            <span>Distributrice Officielle Agréée</span>
          </div>
        </div>

        <div className="footer-nav">
          <h3 className="footer-col-title">Accès Rapide</h3>
          <ul>
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#about">À Propos</a></li>
            <li><a href="#products">Nos Produits</a></li>
            <li><a href="#videos">Vidéos Officielles</a></li>
            <li><a href="#testimonials">Témoignages Clients</a></li>
            <li><a href="#faq">Foire Aux Questions</a></li>
            <li><a href="#contact">Commander un Produit</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3 className="footer-col-title">Contact & Commande</h3>
          <ul className="contact-meta">
            <li>
              <Phone size={17} className="meta-icon" />
              <span>{distributor.phoneDisplay || distributor.whatsapp}</span>
            </li>
            <li>
              <MapPin size={17} className="meta-icon" />
              <span>{distributor.location}</span>
            </li>
          </ul>

          <a 
            href={`https://wa.me/${distributor.whatsapp}?text=${encodeURIComponent("Bonjour, je souhaite contacter votre distributrice officielle Dynace.")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp footer-wa-btn"
          >
            <MessageCircle size={18} /> Échanger sur WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p className="copyright">
            &copy; {currentYear} Dynace Global. Distributrice Indépendante Agréée. Fait avec passion.
          </p>
          <p className="medical-disclaimer">
            Information importante : Les compléments alimentaires Dynace Global soutiennent le bien-être et la vitalité générale. Ils ne constituent pas un avis médical et ne se substituent pas à un traitement prescrit par un professionnel de santé.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
