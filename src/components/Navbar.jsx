import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../assets/hbkReference/logo-center.png";
import badgeHalal from "../assets/hbkReference/badge-2.png";
import badgeLocations from "../assets/hbkReference/badge-1.png";

const navItems = [
  { name: "Home", id: "home", path: "/" },
  { name: "About Us", id: "house", path: "/about-us" },
  { name: "Menu", id: "menu", path: "/menu" },
  { name: "Catering", id: "services", path: "/services" },
  { name: "Contact Us", id: "visit", path: "/contact-us" },
];

const routeToSection = {
  "/": "home",
  "/home": "home",
  "/about-us": "house",
  "/menu": "menu",
  "/services": "services",
  "/gallery": "gallery",
  "/contact-us": "visit",
};

export default function Navbar({ sticky = true }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    routeToSection[location.pathname] || "home",
  );

  useEffect(() => {
    setActiveSection(routeToSection[location.pathname] || "home");
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || 0;
      setIsScrolled(y > 60);

      const bar = document.querySelector(".hb-progress-bar");
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
      }

      let current = routeToSection[location.pathname] || "home";
      document.querySelectorAll("[data-section]").forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.36 && rect.bottom > window.innerHeight * 0.2) {
          current = section.getAttribute("data-section") || current;
        }
      });
      setActiveSection(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  function scrollToSection(id) {
    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: id, scrollRequestId: Date.now() },
      });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleNavClick(item) {
    setIsMenuOpen(false);
    if (item.id === "menu") {
      navigate("/menu");
      return;
    }
    scrollToSection(item.id);
  }

  return (
    <div className={`hb-navwrap${sticky ? "" : " hb-navwrap-static"}${isScrolled ? " is-scrolled" : ""}${isMenuOpen ? " menu-open" : ""}`}>
      <div className="hb-nav-badges">
        <Link to="/" className="hb-badge hb-badge-side" aria-label="30 plus locations">
          <img src={badgeLocations} alt="30 plus locations" />
        </Link>
        <Link to="/" className="hb-badge hb-badge-center" aria-label="House of Biryanis and Kebabs">
          <img src={logoImg} alt="House of Biryanis and Kebabs" />
        </Link>
        <Link to="/" className="hb-badge hb-badge-side" aria-label="Halal certified">
          <img src={badgeHalal} alt="Halal certified" />
        </Link>
      </div>

      <nav className="hb-nav" aria-label="Primary menu">
        <div className="hb-nav-links">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`hb-nav-link${activeSection === item.id ? " is-active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="hb-nav-order"
          onClick={(event) => event.preventDefault()}
        >
          Order Online
        </button>
        <button
          type="button"
          className="hb-nav-menu-toggle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="hb-mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className="hb-mobile-scrim"
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
      />
      <aside
        id="hb-mobile-menu"
        className="hb-mobile-menu"
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className="hb-mobile-close"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        >
          <span />
          <span />
        </button>
        <div className="hb-mobile-links">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`hb-mobile-link${activeSection === item.id ? " is-active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </button>
          ))}
          <button
            type="button"
            className="hb-mobile-order"
            onClick={(event) => event.preventDefault()}
          >
            Order Online
          </button>
        </div>
      </aside>
    </div>
  );
}
