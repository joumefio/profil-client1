import './Videos.css';
import { videos } from '../../data';
import { PlayCircle, Video } from 'lucide-react';

const Videos = () => {
  return (
    <section id="videos" className="section videos-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">
            <Video size={15} />
            <span>Vidéos & Démonstrations</span>
          </div>
          <h2 className="section-title">Découvrez nos Produits en <span>Vidéo</span></h2>
          <p className="section-subtitle">
            Visionnez les explications, retours d'expérience et présentations officielles des solutions Dynace Global.
          </p>
        </div>

        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-wrapper">
                <video 
                  controls 
                  preload="none" 
                  className="video-player"
                  aria-label={video.title}
                >
                  <source src={video.src} type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>
              </div>
              <div className="video-info">
                <div className="video-icon-pill">
                  <PlayCircle size={18} className="v-icon" />
                </div>
                <h3 className="video-title">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
