import Img from '../components/Img';
import './Hero.css';
import heroBg from '../assets/imgs/beefSteak.jpg';
import featImg1 from '../assets/imgs/friedRice-360.webp';
import featImg2 from '../assets/imgs/frenchSoup-360.webp';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <img
        src={heroBg}
        alt="South India signature dish"
        className="hero-bg-image"
        fetchPriority="high"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-sub">DISCOVER THE SOUL OF</p>
        <h1 className="hero-title">
          <span>SOUTH INDIA</span>
          <span
            style={{
              position: 'absolute', width: 1, height: 1, padding: 0,
              margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap', border: 0,
            }}
          >
            Authentic South Indian Restaurant &amp; Cuisine – Dosas, Idlis &amp; More
          </span>
        </h1>
      </div>

      <div className="featured-card">
        <div className="featured-inner">
          <div className="featured-item">
            <Img
              className="feat-img"
              src={featImg1}
              alt="Veg Biryani"
              loading="lazy"
              decoding="async"
              width="313"
              height="470"
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
              alt="Mushroom Soup"
              loading="lazy"
              decoding="async"
              width="313"
              height="313"
            />
            <div className="feat-text">
              <span className="feat-name">Creamy Mushroom Soup</span>
              <span className="feat-desc">Creamy, smooth mushroom soup with rich flavor.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
