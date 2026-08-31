import { useState, useEffect } from 'react';
import './Testimonials.css';
import { testimonials as initialTestimonials } from '../../data';
import { Star, MessageSquarePlus, X, Quote, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const [testis, setTestis] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', location: '', text: '', rating: 5 });

  useEffect(() => {
    const saved = localStorage.getItem('dynace_testimonials_client2');
    if (saved) {
      try {
        setTestis(JSON.parse(saved));
      } catch {
        setTestis(initialTestimonials);
      }
    } else {
      setTestis(initialTestimonials);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (r) => {
    setFormData({ ...formData, rating: r });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;
    
    const newTestimonial = {
      id: Date.now(),
      name: formData.name,
      location: formData.location || "Client Vérifié",
      text: formData.text,
      rating: formData.rating,
      before: null,
      after: null
    };

    const updated = [newTestimonial, ...testis];
    setTestis(updated);
    localStorage.setItem('dynace_testimonials_client2', JSON.stringify(updated));
    setFormData({ name: '', location: '', text: '', rating: 5 });
    setShowForm(false);
  };

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">
            <Quote size={15} />
            <span>Retours d'Expérience Réels</span>
          </div>
          <h2 className="section-title">Ce que disent nos <span>Clients</span></h2>
          <p className="section-subtitle">
            Des résultats authentiques, des témoignages vérifiés et des vies transformées au quotidien.
          </p>
        </div>

        <div className="testimonials-grid">
          {testis.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="rating-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <span className="verified-badge">
                  <CheckCircle size={13} /> Avis Vérifié
                </span>
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-footer">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  {testimonial.location && (
                    <span className="author-loc">{testimonial.location}</span>
                  )}
                </div>
              </div>

              {testimonial.before && testimonial.after && (
                <div className="testimonial-comparison">
                  <span className="comp-title">Évolution constatée :</span>
                  <div className="comp-images">
                    <div className="comp-box">
                      <img src={testimonial.before} alt="Avant utilisation" loading="lazy" />
                      <span className="comp-label">Avant</span>
                    </div>
                    <div className="comp-box">
                      <img src={testimonial.after} alt="Après utilisation" loading="lazy" />
                      <span className="comp-label comp-after">Après</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="testimonial-cta-center">
          {!showForm ? (
            <button className="btn btn-secondary" onClick={() => setShowForm(true)}>
              <MessageSquarePlus size={19} /> Laisser votre avis sur les produits
            </button>
          ) : (
            <form className="testimonial-form glass" onSubmit={handleSubmit}>
              <div className="form-head">
                <h3>Partagez votre Témoignage</h3>
                <button type="button" className="close-btn" onClick={() => setShowForm(false)}>
                  <X size={22} />
                </button>
              </div>

              <div className="form-group">
                <label>Votre Nom ou Prénom *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Ex: Sophie M." 
                />
              </div>

              <div className="form-group">
                <label>Votre Ville / Pays</label>
                <input 
                  type="text" 
                  name="location" 
                  value={formData.location} 
                  onChange={handleChange} 
                  placeholder="Ex: Douala, Cameroun" 
                />
              </div>

              <div className="form-group">
                <label>Votre Expérience / Avis *</label>
                <textarea 
                  name="text" 
                  rows="4" 
                  required 
                  value={formData.text} 
                  onChange={handleChange} 
                  placeholder="Expliquez comment les produits Dynace Global vous ont aidé..."
                ></textarea>
              </div>

              <div className="form-group rating-selector">
                <label>Votre Note</label>
                <div className="stars-input">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={28} 
                      fill={star <= formData.rating ? "var(--gold)" : "none"} 
                      color={star <= formData.rating ? "var(--gold)" : "var(--border)"}
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleRating(star)}
                    />
                  ))}
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Publier Mon Témoignage
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
