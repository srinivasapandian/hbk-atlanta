import { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';
import { navItems } from "../data/navData";
import logoImg from "../assets/house_of_biriyani_and_kebabs.svg";

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
    if (item.id === activeSection) return true;
    if (item.id === "about" && activeSection === "home" && isHome) return false;
    return false;
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={logoImg}
            alt="South India Restaurant Logo"
            className="navbar-logo-img"
          />
        </Link>

        {!isMobile && (
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
        )}

        {!isMobile && (
          <button
            className="order-btn-wrapper"
            onClick={() => navigate("/menu")}
          >
            ORDER ONLINE
          </button>
        )}

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
            className="order-btn-wrapper"
            style={{ marginTop: 8 }}
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
