import { useNavigate, Link } from "react-router-dom";
import "./Story.css";
import foodImg from "../assets/HBK Images/14.jpeg";

export default function Story({ isMobile }) {
  const navigate = useNavigate();
  const scrollToMenu = () => {
    navigate("/", {
      state: { scrollTo: "menu", scrollRequestId: Date.now() },
    });
  };
  return (
    <section id="about" className="story">
      {/* Left */}
      <div className="story-left">
        <h2 className="story-our-story">OUR STORY</h2>
        <div className="story-left-bottom">
          <div className="story-callout">
            <p className="story-callout-text">
              Serve authentic <br /> South Indian <br /> cuisine
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
          At Indian Restaurant, we are proud to share the vibrant flavors of
          South India with our community. Proudly serving the Atlanta community,
          our doors have been open to food lovers across Georgia and beyond.
          Inspired by family recipes passed down through generations, our chefs
          craft dishes that honor tradition while embracing modern tastes. Every
          spice is carefully selected, every recipe thoughtfully prepared, and
          every dish served with care. From the comforting aroma of freshly made
          sambar to the crisp perfection of golden dosas, we bring the essence
          of South Indian kitchens straight to your table.
        </p>
        <Link
          to="/menu"
          className="explore-btn-wrapper"
          style={{ textDecoration: "none" }}
        >
          <span className="explore-btn-text">Explore Menu &rarr;</span>
        </Link>
        <div className="veg-steak-card">
          <div className="veg-steak-overlay" />
          <div className="veg-steak-content">
            <div className="veg-steak-vertical-line" />
            <div className="veg-steak-text-wrap">
              <span className="veg-steak-label">CHICKEN KEBAB</span>
              <span className="veg-steak-desc">
                Juicy Tandoori chicken Kebab served with savory sauce.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
