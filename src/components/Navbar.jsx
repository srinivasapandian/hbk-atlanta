import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "../data/navData";
import logoImg from "../assets/house_of_biriyani_and_kebabs.svg";
import badge1 from "../assets/imgs/halalCertificate.png";
import badge2 from "../assets/imgs/HBK-35+-Locations-Logo-PNG.png";

const routeToSection = {
  "/": "home",
  "/menu": "menu",
  "/events": "events",
  "/contact": "contact",
};

const mobileDrawerOrder = [
  "home",
  "about",
  "menu",
  "services",
  "events",
  "gallery",
  "contact",
];

const mobileLabelOverrides = {
  services: "Catering",
  events: "Blog",
  gallery: "Buffet",
};

export default function Navbar({ isMobile }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setActiveSection(routeToSection[location.pathname] || "home");
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      setDrawerOpen(false);
      return;
    }
    const id = requestAnimationFrame(() => setDrawerOpen(true));
    return () => cancelAnimationFrame(id);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function scrollToSection(sectionId) {
    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: sectionId, scrollRequestId: Date.now() },
      });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleNavClick(item) {
    setMenuOpen(false);
    const pageRoutes = {
      home: "/",
      menu: "/menu",
    };

    if (pageRoutes[item.id]) {
      navigate(pageRoutes[item.id]);
    } else {
      scrollToSection(item.id);
    }
  }

  function isActive(item) {
    return item.id === activeSection;
  }

  const mobileDrawerLinks = mobileDrawerOrder
    .map((id) => navItems.find((item) => item.id === id))
    .filter(Boolean)
    .map((item) => ({
      ...item,
      name: mobileLabelOverrides[item.id] || item.name,
    }));

  return (
    <>
    <nav className="nav">
      {/* Desktop top row: Halal badge | Logo | 30+ Locations badge */}
      <div className="nav-top-row">
        <div className="nav-badge-group">
          <img src={badge1} alt="Halal Certified" className="nav-badge-img" />
          <Link
            to="/"
            className="nav-logo-link"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={logoImg}
              alt="House of Biryanis & Kebabs"
              className="navbar-logo-img"
            />
          </Link>
          <img src={badge2} alt="30+ Locations" className="nav-badge-img" />
        </div>
      </div>

      {/* Mobile header layout */}
      <div className="header-top-bar">
        <span className="header-left-spacer" aria-hidden="true" />
        <Link
          to="/"
          className="header-main-logo"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logoImg}
            alt="House of Biryanis & Kebabs"
            className="header-main-logo-img"
          />
        </Link>
        <button
          className="hamburger-btn"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMenuOpen(true)}
          type="button"
        >
          ☰
        </button>
      </div>
      <div className="header-side-badges">
        <img src={badge1} alt="Halal Certified" />
        <img src={badge2} alt="30+ Locations" />
      </div>

      {/* Bottom row: nav links + order online button */}
      <div className="nav-bottom-row">
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link${isActive(item) ? " nav-link-active" : ""}`}
              onClick={() => handleNavClick(item)}
              type="button"
            >
              {item.name}
            </button>
          ))}
        </div>
        <button
          className="order-btn-wrapper"
          style={{ cursor: "default" }}
          onClick={(e) => e.preventDefault()}
          type="button"
        >
          Order Online
        </button>
      </div>

    </nav>

      {/* Mobile drawer — rendered in <body> to escape nav's stacking context */}
      {menuOpen && createPortal(
        <>
          <div
            className={`backdrop${drawerOpen ? " backdrop-open" : ""}`}
            onClick={() => setMenuOpen(false)}
            role="presentation"
          />
          <aside
            className={`drawer${drawerOpen ? " drawer-open" : ""}`}
            id="mobile-drawer"
            aria-hidden={!menuOpen}
          >
            <button
              className="drawer-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              type="button"
            >
              ✕
            </button>
            <nav className="drawer-nav">
              {mobileDrawerLinks.map((item) => (
                <button
                  key={item.id}
                  className={`drawer-link${
                    isActive(item) ? " drawer-link-active" : ""
                  }`}
                  onClick={() => handleNavClick(item)}
                  type="button"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </aside>
        </>,
        document.body
      )}
    </>
  );
}
