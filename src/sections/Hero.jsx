import Img from '../components/Img';
import './Hero.css';
import heroBg from '../assets/imgs/biriyaniInTaj.png';
import featImg1 from '../assets/imgs/friedRice-360.webp';
import featImg2 from '../assets/imgs/frenchSoup-360.webp';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <img
        src={heroBg}
        alt="House of Biryanis & Kebabs signature dish"
        className="hero-bg-image"
        fetchPriority="high"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-sub">WELCOME TO</p>
        <h1 className="hero-title">
          HOUSE OF BIRYANIS &amp; KEBABS
          <span
            style={{
              position: 'absolute', width: 1, height: 1, padding: 0,
              margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap', border: 0,
            }}
          >
            House of Biryanis & Kebabs – Authentic Indian Restaurant
          </span>
        </h1>
      </div>

      {/* Floating featured dish card — bottom right of hero */}
      <div className="featured-card">
        <div className="featured-inner">
          <div className="featured-item">
            <Img
              className="feat-img"
              src={featImg1}
              alt="Veg Biryani"
              loading="lazy"
              decoding="async"
              width="160"
              height="120"
            />
            <div className="feat-text">
              <span className="feat-name">Veg Biryani</span>
              <span className="feat-desc">Fragrant rice with mixed vegetables and spices.</span>
            </div>
          </div>
          <div className="feat-divider" />
          <div className="featured-item">
            <Img
              className="feat-img"
              src={featImg2}
              alt="Creamy Mushroom Soup"
              loading="lazy"
              decoding="async"
              width="160"
              height="120"
            />
            <div className="feat-text">
              <span className="feat-name">Creamy Mushroom Soup</span>
              <span className="feat-desc">Rich and smooth with a deep umami depth.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
