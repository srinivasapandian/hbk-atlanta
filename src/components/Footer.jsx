import { useNavigate } from "react-router-dom";
import './Footer.css';
import { quickLinks } from "../data/navData";
import logoImg from "../assets/house_of_biriyani_and_kebabs.svg";

const serviceLinks = ["Dine-in", "Take way", "Delivery", "Catering", "Private Events"];
const newsletterItems = ["Offer", "Updates", "Announcements"];

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
        {/* Column 1 – Logo */}
        <div className="footer-brand">
          <img
            src={logoImg}
            alt="South India Restaurant"
            className="footer-logo-img"
          />
          <p className="footer-policy-links">
            Privacy Policy&nbsp;|&nbsp;Terms &amp; Conditions&nbsp;|&nbsp;Refund Policy
          </p>
        </div>

        {/* Column 2 – Quick Link */}
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

        {/* Column 3 – Services */}
        <div className="footer-col">
          <h3 className="footer-col-title">
            <span className="footer-col-title-text">Services</span>
          </h3>
          {serviceLinks.map((item) => (
            <span key={item} className="footer-link">{item}</span>
          ))}
        </div>

        {/* Column 4 – Newsletter */}
        <div className="footer-col">
          <h3 className="footer-col-title">
            <span className="footer-col-title-text">Newsletter</span>
          </h3>
          {newsletterItems.map((item) => (
            <span key={item} className="footer-link">{item}</span>
          ))}
        </div>

        {/* Column 5 – Lets Stay In Touch */}
        <div className="footer-col">
          <h3 className="footer-col-title-no-underline">Lets Stay In Touch</h3>
          <a href="/menu" className="order-online-btn">ORDER ONLINE</a>
          <p className="footer-hours-text">Mon–Sun: 11:00 AM – 10:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© Power By Maghil 2026</p>
      </div>
    </footer>
  );
}
