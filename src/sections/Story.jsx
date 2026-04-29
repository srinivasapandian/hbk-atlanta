import { Link } from "react-router-dom";
import './Story.css';
import foodImg from "../assets/imgs/paaniPori.webp";

export default function Story({ isMobile }) {
  return (
    <section id="about" className="story">
      {/* Left */}
      <div className="story-left">
        <h2 className="story-our-story">Our Story</h2>
        <div className="story-left-bottom">
          <div className="story-callout">
            <p className="story-callout-text">
              Where every biryani tells a story of tradition, spice, and love.
            </p>
          </div>
        </div>
      </div>

      {/* Center */}
      <div className="story-center">
        <img
          src={foodImg}
          alt="South Indian fried snack balls"
          className="story-main-img"
        />
      </div>

      {/* Right */}
      <div className="story-right">
        <p className="story-para">
          At House of Biryanis &amp; Kebabs, we celebrate the art of slow cooking and bold spice. Born from a passion for authentic Mughlai and South Indian flavors, our kitchen blends generations of culinary tradition with a warm, welcoming spirit. Every grain of rice in our biryani is cooked to perfection — fragrant with saffron, enriched with whole spices, and layered with care. From our signature kebabs to creamy curries, each plate carries the soul of our heritage.
        </p>
        <Link to="/menu" className="explore-btn-wrapper">
          <span className="explore-line-long" />
          <span className="explore-line-short" />
          <span className="explore-btn-text">EXPLORE MENU</span>
          <span className="explore-line-short" />
          <span className="explore-line-long" />
        </Link>
        <div className="veg-steak-card">
          <div className="veg-steak-overlay" />
          <div className="veg-steak-content">
            <div className="veg-steak-vertical-line" />
            <div className="veg-steak-text-wrap">
              <span className="veg-steak-label">Veg Steak</span>
              <span className="veg-steak-desc">Signature grilled specialty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
