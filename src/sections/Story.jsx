import { Link } from "react-router-dom";
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
              Serve authentic South Indian cuisine
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
          At Indian Restaurant, we are proud to share the vibrant flavors of South India with our community. Inspired by family recipes passed down through generations, our chefs craft dishes that honor tradition while embracing modern tastes. Every spice is carefully selected, every recipe thoughtfully prepared, and every dish served with care. From the comforting aroma of freshly made sambar to the crisp perfection of golden dosas, we bring the essence of South Indian kitchens straight to your table.
        </p>
        <Link to="/menu" className="explore-btn-wrapper">
            <span className="explore-line-long" />
            <span className="explore-line-short" />
            <span className="explore-btn-text">EXPLORE MENU -></span>
            <span className="explore-line-short" />
            <span className="explore-line-long" />
          </Link>
        <div className="veg-steak-card">
          <div className="veg-steak-overlay" />
          <div className="veg-steak-content">
            <div className="veg-steak-vertical-line" />
            <div className="veg-steak-text-wrap">
              <span className="veg-steak-label">Veg Steak</span>
              <span className="veg-steak-desc">
                Signature grilled specialty
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
