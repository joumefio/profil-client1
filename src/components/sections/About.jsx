import './About.css';
import { distributor } from '../../data';
import { CheckCircle2, ShieldCheck, HeartHandshake, Sparkles, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <div className="about-image-col">
          <div className="about-photo-wrapper">
            <div className="about-backdrop"></div>
            <img 
              src={distributor.photo} 
              alt="Votre Conseillère Dynace Global" 
              className="about-photo" 
            />

            <div className="about-badge-experience glass">
              <div className="exp-icon-wrap">
                <Award size={28} className="exp-icon" />
              </div>
              <div>
                <span className="exp-title">100% Naturel</span>
                <span className="exp-sub">Cellules Souches Végétales</span>
              </div>
            </div>

            <div className="about-partner-card glass">
              <img src="/assets/dynace-logo.png" alt="Dynace Global" className="partner-logo" />
              <span>Partenaire Officiel Agréé</span>
            </div>
          </div>
        </div>

        <div className="about-content-col">
          <div className="section-tag">
            <Sparkles size={15} />
            <span>À Propos de Votre Distributrice</span>
          </div>

          <h2 className="about-title">
            Un Engagement Pour Votre <span>Santé</span> et Votre <span>Bien-Être</span>
          </h2>

          <p className="about-text">
            {distributor.about}
          </p>

          <div className="about-mission-quote">
            <div className="quote-bar"></div>
            <p>"{distributor.mission}"</p>
          </div>

          <div className="about-values-grid">
            {distributor.values.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="val-icon-box">
                  <CheckCircle2 size={18} className="val-icon" />
                </div>
                <div>
                  <h4>{val.title}</h4>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-cta-row">
            <a 
              href={`https://wa.me/${distributor.whatsapp}?text=${encodeURIComponent("Bonjour, j'aimerais échanger avec vous pour un conseil santé personnalisé.")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <HeartHandshake size={18} /> Demander un Conseil Personnalisé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
