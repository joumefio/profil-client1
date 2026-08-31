import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import './Navbar.css';
import { distributor } from '../../data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="logo" aria-label="Accueil Dynace Global">
          <img src="/assets/dynace-logo.png" alt="Dynace Global" className="navbar-logo-img" />
          <div className="logo-text">
            <span className="logo-brand">Dynace<span className="logo-highlight">Global</span></span>
            <span className="logo-sub">Distributrice Agréée</span>
          </div>
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={() => setIsOpen(false)}>Accueil</a>
          <a href="#about" onClick={() => setIsOpen(false)}>À Propos</a>
          <a href="#products" onClick={() => setIsOpen(false)}>Produits</a>
          <a href="#videos" onClick={() => setIsOpen(false)}>Vidéos</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Témoignages</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          <a href="#contact" className="nav-contact-link" onClick={() => setIsOpen(false)}>Commander</a>
          
          <a 
            href={`https://wa.me/${distributor.whatsapp}?text=${encodeURIComponent("Bonjour, je visite votre site Dynace Global et j'aimerais avoir plus de renseignements.")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp nav-cta"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle size={18} /> WhatsApp Direct
          </a>
        </div>

        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Ouvrir le menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
