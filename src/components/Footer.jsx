import { useNavigate } from "react-router-dom";
import { quickLinks } from "../data/navData";
import logoImg from "../assets/house_of_biriyani_and_kebabs.svg";
import maghilImg from "../assets/maghil.png";

export default function Footer({ isMobile }) {
  const navigate = useNavigate();

  function handleQuickLink(name) {
    const map = {
      Home: "/",
      "About Us": {
        path: "/",
        state: { scrollTo: "about", scrollRequestId: Date.now() },
      },
      Menu: "/menu",
      Events: "/events",
      "Contact Us": "/contact",
    };
    const target = map[name];
    if (!target) return;
    if (typeof target === "string") navigate(target);
    else navigate(target.path, { state: target.state });
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <img
            src={logoImg}
            alt="South India Restaurant"
            className="footer-logo-img"
          />
          <p className="footer-brand-text">South India Authentic Cuisine</p>
          <a href="/menu" className="order-btn-footer">
            ORDER NOW
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="footer-col-title">
            <span className="footer-col-title-text">Quick Link</span>
          </h3>
          {quickLinks["Quick Link"].map((name) => (
            <button
              key={name}
              className="footer-link footer-link-button"
              onClick={() => handleQuickLink(name)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3 className="footer-col-title">
            <span className="footer-col-title-text">Contact Us</span>
          </h3>
          <div className="footer-contact">
            <p className="footer-link">Magilhub India Private Limited</p>
            <p className="footer-link">Madurai, Tamil Nadu, India</p>
            <p className="footer-link">Mon – Sun: 11:00 AM – 10:00 PM</p>
            <a href="/contact" className="contact-btn-footer">
              CONTACT US
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="footer-col footer-map">
          <h3 className="footer-col-title-no-underline">Find Us</h3>
          <div className="footer-map-frame">
            <iframe
              title="Restaurant location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0170179997867!2d78.14124307505293!3d9.932540374191774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c530ee0fd7e5%3A0x8036889aed46ab5!2sMagilhub%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1774862224931!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="footer-hours">
            <span className="hours-white">Open Daily 11AM – 10PM</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} South India Authentic Cuisine. Powered by{" "}
          <a
            href="https://magilhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-powered-link"
          >
            <img
              src={maghilImg}
              alt="Magilhub"
              className="footer-powered-img"
            />
            Magilhub
          </a>
        </p>
      </div>
    </footer>
  );
}
