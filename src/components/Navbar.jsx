import { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';
import { navItems } from "../data/navData";
import logoImg from "../assets/house_of_biriyani_and_kebabs.svg";
import badge1 from "../assets/imgs/halalCertificate.png";
import badge2 from "../assets/imgs/30+location.jpg";

const routeToSection = {
  "/": "home",
  "/menu": "menu",
  "/events": "events",
  "/contact": "contact",
};

export default function Navbar({ isMobile }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isHome = useMemo(() => location.pathname === "/", [location.pathname]);

  useEffect(() => {
    setActiveSection(routeToSection[location.pathname] || "home");
  }, [location.pathname]);

  function handleNavClick(item) {
    setMenuOpen(false);
    const sectionId = item.id;

    if (sectionId === "menu") {
      navigate("/menu");
      return;
    }
    if (sectionId === "events") {
      navigate("/events");
      return;
    }
    if (sectionId === "contact") {
      navigate("/contact");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: sectionId, scrollRequestId: Date.now() },
      });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function isActive(item) {
    return item.id === activeSection;
  }

  return (
    <nav className="nav">
      {/* Top row: Halal badge | Logo | 30+ Locations badge */}
      <div className="nav-top-row">
        <div className="nav-badge-group">
          <img src={badge1} alt="Halal Certified" className="nav-badge-img" />
          <Link to="/" className="nav-logo-link" onClick={() => setMenuOpen(false)}>
            <img src={logoImg} alt="House of Biryanis & Kebabs" className="navbar-logo-img" />
          </Link>
          <img src={badge2} alt="30+ Locations" className="nav-badge-img" />
        </div>
        {isMobile && (
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        )}
      </div>

      {/* Bottom row: nav links + order online button */}
      {!isMobile && (
        <div className="nav-bottom-row">
          <div className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link${isActive(item) ? " nav-link-active" : ""}`}
                onClick={() => handleNavClick(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <button
            className="order-btn-wrapper"
            onClick={() => navigate("/menu")}
          >
            ORDER ONLINE
          </button>
        </div>
      )}

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-link${isActive(item) ? " mobile-link-active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </button>
          ))}
          <button
            className="mobile-order-btn"
            onClick={() => {
              setMenuOpen(false);
              navigate("/menu");
            }}
          >
            ORDER ONLINE
          </button>
        </div>
      )}
    </nav>
  );
}
