import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";
import maghilImg from "../assets/imgs/maghil.png";

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
            <h2>
              HBK <em>Atlanta.</em>
            </h2>
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
            <a href="tel:+19722945002">+1 972 294 5002</a>
            <span>Mon-Sun - 11.00 - 22.00</span>
            <a
              href="https://maps.google.com/maps?q=11030+Medlock+Bridge+Rd+Johns+Creek+GA+30097"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open maps
            </a>
          </div>
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
