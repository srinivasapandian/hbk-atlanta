import { useNavigate } from "react-router-dom";
import "./Footer.css";
import { quickLinks } from "../data/navData";
import maghilImg from "../assets/imgs/maghil.png";

const serviceLinks = [
  "Dine-in",
  "Take way",
  "Delivery",
  "Catering",
  "Private Events",
];
const newsletterItems = ["Offer", "Updates", "Announcements"];

export default function Footer({ isMobile }) {
  const navigate = useNavigate();

  function handleQuickLink(name) {
    const pageMap = {
      Home: "/",
      "About Us": "/#about",
      Menu: "/#menu",
      Blog: "/",
      Events: "/events",
      "Contact Us": "/contact",
    };
    const path = pageMap[name];
    if (!path) return;

    if (path.startsWith("/#")) {
      const sectionId = path.substring(2);
      navigate("/", {
        state: { scrollTo: sectionId, scrollRequestId: Date.now() },
      });
    } else {
      navigate(path);
    }
  }

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Column 1 – Quick Link */}
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

          {/* Column 2 – Services */}
          <div className="footer-col">
            <h3 className="footer-col-title">
              <span className="footer-col-title-text">Services</span>
            </h3>
            {serviceLinks.map((item) => (
              <span key={item} className="footer-link">
                {item}
              </span>
            ))}
          </div>

          {/* Column 3 – Newsletter */}
          <div className="footer-col">
            <h3 className="footer-col-title">
              <span className="footer-col-title-text">Newsletter</span>
            </h3>
            {newsletterItems.map((item) => (
              <span key={item} className="footer-link">
                {item}
              </span>
            ))}
          </div>

          {/* Column 4 – Lets Stay In Touch */}
          <div className="footer-col">
            <h3 className="footer-col-title">Lets Stay In Touch</h3>
            <button
              className="order-online-btn"
              style={{ cursor: "default" }}
              onClick={(e) => e.preventDefault()}
            >
              Order Online
            </button>
          </div>
        </div>

        <div className="footer-map-wrapper">
          <iframe
            title="South India Restaurant map"
            src="https://maps.google.com/maps?q=11030+Medlock+Bridge+Rd+Johns+Creek+GA+30097&output=embed"
            className="footer-map-frame"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="footer-policy-links">
          Privacy Policy | Terms &amp; Conditions | Refund Policy
        </p>

        <div className="footer-bottom">
          <span className="footer-copy">© Power By&nbsp;</span>
          <a
            href="https://maghil.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-maghil-link"
          >
            <img src={maghilImg} alt="Maghil" className="footer-maghil-img" />
          </a>
          <span className="footer-copy">&nbsp;2026</span>
        </div>
      </div>
    </footer>
  );
}
