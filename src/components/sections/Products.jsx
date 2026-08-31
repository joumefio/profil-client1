import './Products.css';
import { products, distributor } from '../../data';
import { ShoppingBag, MessageCircle, Check, Sparkles } from 'lucide-react';

const Products = () => {
  const handleQuickOrder = (productName) => {
    const selectEl = document.querySelector('select[name="produit"]');
    if (selectEl) {
      selectEl.value = productName;
      selectEl.dispatchEvent(new Event('change', { bubbles: true }));
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">
            <Sparkles size={15} />
            <span>Gamme Botanique Dynace Global</span>
          </div>
          <h2 className="section-title">Nos Solutions de <span>Santé</span> & de <span>Vitalité</span></h2>
          <p className="section-subtitle">
            Formulés avec les ingrédients naturels les plus purs pour régénérer vos cellules, booster votre immunité et restaurer votre harmonie.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-media">
                <img 
                  src={product.image} 
                  alt={`${product.name} - ${product.tagline} | Dynace Global`} 
                  loading="lazy" 
                  className="product-image" 
                />
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
                <span className="product-tagline-overlay">{product.tagline}</span>
              </div>

              <div className="product-body">
                <div className="product-title-row">
                  <h3 className="product-name">{product.name}</h3>
                  {product.price && (
                    <div className="product-pricing">
                      <span className="product-price">{product.price}</span>
                      {product.packaging && <span className="product-packaging">/ {product.packaging}</span>}
                    </div>
                  )}
                </div>

                <p className="product-desc">{product.description}</p>

                <div className="product-benefits">
                  <span className="benefits-label">Bienfaits Reconnus :</span>
                  <ul className="benefits-list">
                    {product.benefits.slice(0, 4).map((b, idx) => (
                      <li key={idx}>
                        <Check size={15} className="benefit-check" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="product-actions">
                  <button 
                    onClick={() => handleQuickOrder(product.name)}
                    className="btn btn-primary product-btn-order"
                  >
                    <ShoppingBag size={17} /> Commander
                  </button>

                  <a 
                    href={`https://wa.me/${distributor.whatsapp}?text=${encodeURIComponent(`Bonjour, je souhaite commander le produit ${product.name} (${product.price || ''}). Pouvez-vous m'indiquer la disponibilité et les modalités de livraison ?`)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-whatsapp product-btn-wa"
                    aria-label={`Commander ${product.name} sur WhatsApp`}
                  >
                    <MessageCircle size={17} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
