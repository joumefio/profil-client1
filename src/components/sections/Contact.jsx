import { useState } from 'react';
import './Contact.css';
import { distributor, products } from '../../data';
import { Send, CheckCircle2, MessageCircle, Phone, MapPin, Sparkles, RefreshCw, ShieldCheck } from 'lucide-react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    ville: 'Douala',
    pays: 'Cameroun',
    produit: 'Dynace Rocenta',
    quantite: 1,
    adresse: '',
    message: ''
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getSelectedProductDetails = () => {
    return products.find(p => p.name === formData.produit) || products[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nom || !formData.telephone || !formData.adresse) {
      alert("Veuillez renseigner tous les champs obligatoires (*)");
      return;
    }
    // Afficher la confirmation claire avant redirection
    setOrderConfirmed(true);
  };

  const handleProceedWhatsApp = () => {
    const product = getSelectedProductDetails();
    const text = encodeURIComponent(
      `*NOUVELLE COMMANDE DYNACE GLOBAL*\n\n` +
      `*Client:* ${formData.nom} ${formData.prenom}\n` +
      `*Telephone:* ${formData.telephone}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      `*Localisation:* ${formData.ville}, ${formData.pays}\n` +
      `*Adresse de livraison:* ${formData.adresse}\n\n` +
      `*PRODUIT COMMANDE:* ${formData.produit}\n` +
      `*Quantite:* ${formData.quantite}\n` +
      (product.price ? `*Prix unitaire:* ${product.price}\n` : '') +
      (formData.message ? `\n*Message:* ${formData.message}\n` : '') +
      `\nDemande effectuee via la boutique en ligne officielle.`
    );

    window.open(`https://wa.me/${distributor.whatsapp}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setOrderConfirmed(false);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        {/* Colonne Infos Contact & Confiance */}
        <div className="contact-info-col">
          <div className="section-tag">
            <Sparkles size={15} />
            <span>Commande Simple & Sécurisée</span>
          </div>

          <h2 className="contact-title">
            Passez Votre <span>Commande</span> en Toute Confiance
          </h2>

          <p className="contact-desc">
            Sélectionnez votre produit et remplissez vos coordonnées ci-contre. Votre demande sera traitée personnellement avec discrétion, rapidité et professionnalisme.
          </p>

          <div className="contact-card-premium card-soft">
            <div className="card-header-line">
              <span className="live-status-dot"></span>
              <strong>Distributrice Disponible</strong>
            </div>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon"><Phone size={18} /></div>
                <div>
                  <span className="info-label">WhatsApp Direct</span>
                  <span className="info-value">{distributor.phoneDisplay || distributor.whatsapp}</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><MapPin size={18} /></div>
                <div>
                  <span className="info-label">Zone de livraison</span>
                  <span className="info-value">{distributor.location}</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><ShieldCheck size={18} /></div>
                <div>
                  <span className="info-label">Garantie</span>
                  <span className="info-value">Produits 100% Authentiques Scellés</span>
                </div>
              </div>
            </div>

            <a 
              href={`https://wa.me/${distributor.whatsapp}?text=${encodeURIComponent("Bonjour, je souhaite poser une question avant de commander.")}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp w-100"
              style={{ marginTop: '1.5rem' }}
            >
              <MessageCircle size={18} /> Discuter Directement sur WhatsApp
            </a>
          </div>
        </div>

        {/* Colonne Formulaire / Confirmation */}
        <div className="contact-form-col">
          {!orderConfirmed ? (
            <form className="contact-form card-soft" onSubmit={handleSubmit}>
              <h3 className="form-title">Formulaire de Commande Rapide</h3>
              <p className="form-subtitle">Étape 1 sur 2 : Vos coordonnées de livraison</p>

              {/* Sélection Produit & Quantité */}
              <div className="form-row">
                <div className="form-group form-group-flex2">
                  <label htmlFor="produit">Produit Dynace Souhaité *</label>
                  <select 
                    id="produit"
                    name="produit" 
                    value={formData.produit} 
                    onChange={handleChange}
                    className="form-control"
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} {p.price ? `(${p.price})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="quantite">Quantité *</label>
                  <input 
                    type="number" 
                    id="quantite"
                    name="quantite" 
                    min="1" 
                    max="50" 
                    required 
                    value={formData.quantite} 
                    onChange={handleChange} 
                    className="form-control"
                  />
                </div>
              </div>

              {/* Nom & Prénom */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nom">Nom de Famille *</label>
                  <input 
                    type="text" 
                    id="nom"
                    name="nom" 
                    required 
                    value={formData.nom} 
                    onChange={handleChange} 
                    placeholder="Votre nom" 
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="prenom">Prénom</label>
                  <input 
                    type="text" 
                    id="prenom"
                    name="prenom" 
                    value={formData.prenom} 
                    onChange={handleChange} 
                    placeholder="Votre prénom" 
                    className="form-control"
                  />
                </div>
              </div>

              {/* Téléphone & Email */}
              <div className="form-row">
                <div className="form-group">
                  <label>Numéro de Téléphone / WhatsApp *</label>
                  <PhoneInput
                    international
                    defaultCountry="CM"
                    value={formData.telephone}
                    onChange={(val) => setFormData((prev) => ({ ...prev, telephone: val || '' }))}
                    className="phone-custom-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Adresse Email (Optionnel)</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="exemple@email.com" 
                    className="form-control"
                  />
                </div>
              </div>

              {/* Ville & Pays */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="ville">Ville *</label>
                  <input 
                    type="text" 
                    id="ville"
                    name="ville" 
                    required 
                    value={formData.ville} 
                    onChange={handleChange} 
                    placeholder="Ex: Douala, Yaoundé..." 
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pays">Pays *</label>
                  <input 
                    type="text" 
                    id="pays"
                    name="pays" 
                    required 
                    value={formData.pays} 
                    onChange={handleChange} 
                    placeholder="Ex: Cameroun" 
                    className="form-control"
                  />
                </div>
              </div>

              {/* Adresse de livraison */}
              <div className="form-group">
                <label htmlFor="adresse">Quartier & Précision de Livraison *</label>
                <textarea 
                  id="adresse"
                  name="adresse" 
                  rows="2" 
                  required 
                  value={formData.adresse} 
                  onChange={handleChange} 
                  placeholder="Quartier, point de repère ou rue..."
                  className="form-control"
                ></textarea>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message ou Question Spécifique (Optionnel)</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="2" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Précisez un créneau d'appel ou un besoin particulier..."
                  className="form-control"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 form-submit-btn">
                <Send size={18} /> Valider Ma Demande de Commande
              </button>

              <div className="form-note">
                <span>🔒 Vos informations restent strictement confidentielles.</span>
              </div>
            </form>
          ) : (
            /* ÉCRAN DE CONFIRMATION CLAIRE (CONFORME POINT 7) */
            <div className="confirmation-card card-soft">
              <div className="confirm-icon-box">
                <CheckCircle2 size={44} className="confirm-icon" />
              </div>

              <h3 className="confirm-title">Demande Enregistrée Avec Succès !</h3>
              <p className="confirm-desc">
                Merci <strong>{formData.prenom || formData.nom}</strong>. Voici le récapitulatif de votre commande :
              </p>

              <div className="confirm-summary">
                <div className="summary-row">
                  <span className="s-label">Produit :</span>
                  <span className="s-value highlight">{formData.produit}</span>
                </div>
                <div className="summary-row">
                  <span className="s-label">Quantité :</span>
                  <span className="s-value">{formData.quantite} boîte(s)</span>
                </div>
                <div className="summary-row">
                  <span className="s-label">Destinataire :</span>
                  <span className="s-value">{formData.nom} {formData.prenom}</span>
                </div>
                <div className="summary-row">
                  <span className="s-label">Téléphone :</span>
                  <span className="s-value">{formData.telephone}</span>
                </div>
                <div className="summary-row">
                  <span className="s-label">Livraison :</span>
                  <span className="s-value">{formData.adresse}, {formData.ville} ({formData.pays})</span>
                </div>
              </div>

              <div className="confirm-action-box">
                <p className="wa-prompt-text">
                  Pour finaliser immédiatement la livraison et convenir du mode de règlement avec votre distributrice :
                </p>

                <button onClick={handleProceedWhatsApp} className="btn btn-whatsapp w-100 confirm-wa-btn">
                  <MessageCircle size={20} /> Finaliser ma Commande sur WhatsApp
                </button>

                <button onClick={handleReset} className="btn-link-reset">
                  <RefreshCw size={15} /> Modifier mes informations ou commander un autre produit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
