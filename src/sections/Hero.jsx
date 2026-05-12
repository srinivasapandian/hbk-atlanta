import Img from "../components/Img";
import "./Hero.css";
import heroBg from "../assets/imgs/biriyaniInLeaf.png";
import featImg1 from "../assets/imgs/friedRice-360.webp";
import featImg2 from "../assets/imgs/frenchSoup-360.webp";
import badge1 from "../assets/imgs/halalCertificate.png";
import badge2 from "../assets/imgs/HBK-35+-Locations-Logo-PNG.png";

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
        <div className="hero-badges-mobile" aria-hidden="true">
          <img src={badge2} alt="Halal Certified" />
          <img src={badge1} alt="35+ Locations" />
        </div>
        <p className="hero-sub">WELCOME TO</p>
        <h1 className="hero-title">
          HOUSE OF BIRYANIS &amp; KEBABS
          <span
            style={{
              position: "absolute",
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              border: 0,
            }}
          >
            House of Biryanis & Kebabs – Authentic Indian Restaurant
          </span>
        </h1>
        <div className="hero-location-divider" aria-hidden="true" />
        <p className="hero-location"><span aria-hidden="true"></span> ATLANTA</p>
      </div>

      {/* Floating featured dish card — bottom right of hero */}
      <div className="featured-card">
        <span className="featured-card-icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </span>
        <div className="featured-inner">
          <div className="featured-item">
            <div className="feat-img-wrap">
              <Img
                className="feat-img"
                src={featImg1}
                alt="Veg Biryani"
                loading="lazy"
                decoding="async"
                width="160"
                height="120"
              />
            </div>
            <div className="feat-text">
              <span className="feat-name">Veg Biryani</span>
              <span className="feat-desc">
                Fragrant rice with mixed vegetables and spices.
              </span>
            </div>
          </div>
          <div className="feat-divider" />
          <div className="featured-item">
            <div className="feat-img-wrap">
              <Img
                className="feat-img"
                src={featImg2}
                alt="Creamy Mushroom Soup"
                loading="lazy"
                decoding="async"
                width="160"
                height="120"
              />
            </div>
            <div className="feat-text">
              <span className="feat-name">Creamy Mushroom Soup</span>
              <span className="feat-desc">
                Rich and smooth with a deep umami depth.
              </span>
            </div>
          </div>
        </div>
        <span className="feat-atlanta-tag"></span>
      </div>
    </section>
  );
}
