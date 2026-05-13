import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";
import logoImg from "../assets/hbkReference/logo-center.png";
import maghilImg from "../assets/imgs/maghil.png";

const MAP_URL = "https://maps.app.goo.gl/Xe18NtzXKsyCeRmC7";
const MAP_EMBED_URL = "https://www.google.com/maps?q=11030%20Medlock%20Bridge%20Rd%2C%20Johns%20Creek%2C%20GA%2030097&output=embed";

export default function Footer() {
  const navigate = useNavigate();

  function scrollHome(sectionId) {
    navigate("/", {
      state: { scrollTo: sectionId, scrollRequestId: Date.now() },
    });
  }

  return (
    <footer id="contact" className="hb-footer" data-section="contact">
      <div className="hb-footer-wrap">
        <div className="hb-footer-top">
          <div className="hb-footer-brand">
            <Link to="/" className="hb-footer-logo-link" aria-label="House of Biryanis and Kebabs home">
              <img
                src={logoImg}
                alt="House of Biryanis and Kebabs"
                className="hb-footer-logo"
              />
            </Link>
            <p>
              House of Biryanis &amp; Kebabs. A modern South Indian table on
              Medlock Bridge, serving Johns Creek and the Atlanta community.
            </p>
            <div className="hb-footer-actions">
              <button
                type="button"
                className="hb-footer-btn gold"
                onClick={(event) => event.preventDefault()}
              >
                Order online
              </button>
              <Link className="hb-footer-btn" to="/menu">
                View menu
              </Link>
            </div>
          </div>

          <div className="hb-footer-col">
            <h3>The House</h3>
            <button type="button" onClick={() => scrollHome("house")}>
              Our story
            </button>
            <Link to="/menu">Menu</Link>
            <button type="button" onClick={() => scrollHome("services")}>
              Catering
            </button>
            <button type="button" onClick={() => scrollHome("gallery")}>
              Gallery
            </button>
            <button type="button" onClick={() => scrollHome("visit")}>
              Visit
            </button>
          </div>

          <div className="hb-footer-col">
            <h3>Services</h3>
            <span>Dine-in</span>
            <span>Takeout &amp; pickup</span>
            <span>Delivery</span>
            <span>Catering</span>
            <span>Private events</span>
          </div>

          <div className="hb-footer-col">
            <h3>Find us</h3>
            <span>11030 Medlock Bridge Rd</span>
            <span>Johns Creek, GA 30097</span>
            <a href="tel:+19722945002">972-294-5002</a>
            <a href="tel:+19722945044">972-294-5044</a>
            <span>Mon-Sun - 11.00 - 22.00</span>
          </div>
        </div>

        <div className="hb-footer-map-section">
          <div className="hb-footer-map">
            <iframe
              title="House of Biryanis and Kebabs location"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            className="hb-footer-map-link"
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open maps
          </a>
        </div>

        <div className="hb-footer-bottom">
          <span>2026 HBK Atlanta - House of Biryanis &amp; Kebabs</span>
          <span className="hb-footer-powered">
            Powered by
            <a href="https://maghil.com" target="_blank" rel="noopener noreferrer">
              <img src={maghilImg} alt="Maghil" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
