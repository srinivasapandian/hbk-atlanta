import { Link } from "react-router-dom";
import Img from "../components/Img";
import logoImg from "../assets/house_of_biriyani_and_kebabs.svg";

export default function Story({ isMobile }) {
  return (
    <section id="about" className="story">
      {/* Left */}
      <div className="story-left">
        <div className="story-callout">
          <p className="story-callout-text">
            Bringing the authentic taste of South India with our community.
          </p>
        </div>

        <Link to="/menu" className="explore-btn-wrapper">
          <span className="explore-line-long" />
          <span className="explore-btn-text">EXPLORE MENU</span>
          <span className="explore-line-short" />
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

      {/* Center */}
      <div className="story-center">
        <img
          src={logoImg}
          alt="South India Restaurant"
          className="story-main-img"
          style={{ objectFit: "contain", background: "#111" }}
        />
      </div>

      {/* Right */}
      <div className="story-right">
        <h2 className="about-title">About South India Authentic Cuisine</h2>
        <p className="story-para">
          Inspired by family recipes passed down through generations, our chefs
          craft dishes that honor tradition while embracing modern tastes. Every
          spice is carefully selected, every recipe thoughtfully prepared, and
          every dish served with care. From the comforting aroma of freshly made
          sambar to the crisp perfection of golden dosas, we bring the essence
          of South Indian kitchens straight to your table.
        </p>
        <p className="story-para">
          We are dedicated to delivering the true flavors of South India — from
          the bustling streets of Chennai to the serene backwaters of Kerala —
          all under one roof.
        </p>
      </div>
    </section>
  );
}
