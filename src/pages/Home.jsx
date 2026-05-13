import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHead, { seoConfig } from "../components/SeoHead";
import menuItems, { categories } from "../data/menuData";
import { services } from "../data/servicesData";
import { galleryImages } from "../data/galleryData";
import logoImg from "../assets/hbkReference/logo-center.png";
import badgeLocations from "../assets/hbkReference/badge-1.png";
import badgeHalal from "../assets/hbkReference/badge-2.png";
import heroMain from "../assets/hbkReference/dish-2.jpg";
import heroSide from "../assets/hbkReference/biryani.jpg";
import storyMain from "../assets/hbkReference/dish-1.jpg";
import storySide from "../assets/hbkReference/chicken-kebab.jpg";
import featureBg from "../assets/hbkReference/feature.png";
import biryaniImg from "../assets/hbkReference/biryani.jpg";
import kebabImg from "../assets/hbkReference/chicken-kebab.jpg";
import mushroomImg from "../assets/hbkReference/mushroom-soup.jpg";
import dishOne from "../assets/hbkReference/dish-1.jpg";
import dishTwo from "../assets/hbkReference/dish-2.jpg";

const sectionRouteMap = {
  "/": "home",
  "/home": "home",
  "/about-us": "house",
  "/services": "services",
  "/gallery": "gallery",
  "/contact-us": "visit",
};

const menuFallbackImages = [
  biryaniImg,
  kebabImg,
  dishOne,
  dishTwo,
  mushroomImg,
  heroMain,
  storyMain,
  storySide,
];

const pillars = [
  {
    kicker: "01 / Provenance",
    title: "Spice ground the morning of.",
    body: "Whole spices toasted by hand and blended in small batches for the day's service.",
  },
  {
    kicker: "02 / Fire",
    title: "Tandoor heat and charcoal finish.",
    body: "Kebabs are marinated deeply, fired hot, and served with the aroma of live flame.",
  },
  {
    kicker: "03 / Patience",
    title: "Dum biryani, sealed and slow.",
    body: "Layered rice, tender vegetables or meat, and house masala come together over time.",
  },
  {
    kicker: "04 / Hospitality",
    title: "A table for the long evening.",
    body: "Dine in, take out, or cater a celebration with the same warm kitchen care.",
  },
];

function useRevealOnScroll() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function useRouteScroll() {
  const location = useLocation();

  useEffect(() => {
    const target =
      location.state?.scrollTo || sectionRouteMap[location.pathname] || "home";
    let attempts = 0;

    function tryScroll() {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({
          behavior: target === "home" ? "auto" : "smooth",
          block: "start",
        });
        return;
      }
      if (attempts < 120) {
        attempts += 1;
        requestAnimationFrame(tryScroll);
      }
    }

    requestAnimationFrame(tryScroll);
  }, [
    location.pathname,
    location.state?.scrollTo,
    location.state?.scrollRequestId,
  ]);
}

function OrderButton({ className = "" }) {
  return (
    <button
      type="button"
      className={`hb-btn ${className}`}
      onClick={(event) => event.preventDefault()}
    >
      Order Online <span aria-hidden="true">-&gt;</span>
    </button>
  );
}

function Hero() {
  return (
    <section id="home" className="hb-hero" data-section="home">
      <div className="hb-hero-bg" />
      <div className="hb-wrap hb-hero-inner">
        <div className="hb-hero-copy">
          <p className="hb-serial">EST. 2018 - JOHNS CREEK, GA - NO. 011030</p>
          <h1 className="hb-hero-title">
            <span>House of</span>
            <span className="hb-gold">Biryanis</span>
            <span>&amp; Kebabs.</span>
          </h1>
          <p className="hb-hero-sub">
            A modern South Indian table set against ember glow, brass, and
            family recipes. Every spice is carefully selected, every dish served
            with care.
          </p>
          <div className="hb-actions">
            <OrderButton />
            <Link className="hb-btn hb-btn-ghost" to="/menu">
              Explore the menu <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
          <div className="hb-meta" aria-label="Restaurant highlights">
            <div>
              <span>Service</span>
              <strong>Dine-in - Takeout</strong>
            </div>
            <div>
              <span>Cuisine</span>
              <strong>South Indian</strong>
            </div>
            <div>
              <span>Today</span>
              <strong className="hb-open">Open now</strong>
            </div>
          </div>
        </div>

        <div className="hb-hero-art" aria-hidden="true">
          <span className="hb-ticker">No. 011030 - Medlock Bridge - Atlanta</span>
          <div className="hb-frame hb-frame-main">
            <img src={heroMain} alt="" />
          </div>
          <div className="hb-frame hb-frame-side">
            <img src={heroSide} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Slow-cooked dum biryani",
    "Charcoal kebabs",
    "Stone-ground spice",
    "Family-style feasts",
    "Atlanta - Johns Creek",
  ];
  return (
    <div className="hb-marquee" aria-hidden="true">
      <div className="hb-marquee-track">
        {[...items, ...items].map((item, index) => (
          <span className="hb-marquee-item" key={`${item}-${index}`}>
            {item}
            <span />
          </span>
        ))}
      </div>
    </div>
  );
}

function StorySection() {
  return (
    <section id="house" className="hb-section" data-section="house">
      <div className="hb-wrap hb-story">
        <div className="hb-story-art reveal">
          <div className="hb-img-tall">
            <img src={storyMain} alt="Signature South Indian dish" />
          </div>
          <div className="hb-img-floating">
            <img src={storySide} alt="Tandoor fired chicken kebab" />
          </div>
          <div className="hb-stamp">
            <strong>N1</strong>
            <span>In Atlanta</span>
          </div>
        </div>
        <div className="hb-story-body reveal delay-1">
          <p className="hb-eyebrow">Our Story</p>
          <h2>
            Authentic South Indian cuisine,{" "}
            <em className="hb-gold">made with care.</em>
          </h2>
          <p className="hb-lead">
            At House of Biryanis &amp; Kebabs, we are proud to share the vibrant
            flavors of South India with the Atlanta community. Inspired by
            family recipes passed down through generations, our chefs craft
            dishes that honor tradition while embracing modern taste.
          </p>
          <p className="hb-lead muted">
            From freshly made sambar to crisp dosas, layered biryanis, and
            tandoor-finished kebabs, the kitchen brings the comfort of South
            Indian homes straight to your table.
          </p>
          <div className="hb-signature">
            <strong>The HBK Kitchen</strong>
            <span>Johns Creek, Atlanta</span>
          </div>
          <Link className="hb-btn hb-btn-gold" to="/menu">
            Explore the menu <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="hb-section-tight">
      <div className="hb-wrap">
        <div className="hb-pillars reveal">
          {pillars.map((pillar) => (
            <article className="hb-pillar" key={pillar.kicker}>
              <span>{pillar.kicker}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuPreview() {
  const tabs = useMemo(() => ["ALL", ...categories.slice(0, 4)], []);
  const [activeTab, setActiveTab] = useState("ALL");

  const dishes = useMemo(() => {
    const pool =
      activeTab === "ALL"
        ? menuItems
        : menuItems.filter((item) => item.category === activeTab);
    return pool.slice(0, 8);
  }, [activeTab]);

  return (
    <section id="menu" className="hb-section hb-menu" data-section="menu">
      <div className="hb-wrap">
        <div className="hb-section-head hb-menu-head">
          <div>
            <p className="hb-eyebrow reveal">Chapter II</p>
            <h2 className="reveal delay-1">
              <em className="hb-gold">The</em> Menu
            </h2>
          </div>
          <div className="reveal delay-2">
            
            <Link className="hb-link" to="/menu">
              View full menu <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>

        <div className="hb-menu-tabs reveal" role="tablist" aria-label="Menu categories">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab}
              className={`hb-menu-tab${activeTab === tab ? " is-active" : ""}`}
              onClick={() => setActiveTab(tab)}
              role="tab"
              aria-selected={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="hb-dish-grid">
          {dishes.map((dish, index) => {
            const featureClass =
              index < 2 ? "hb-dish-feature" : index < 5 ? "hb-dish-medium" : "hb-dish-small";
            const tags = Array.isArray(dish.tags) ? dish.tags : [];
            const isVeg = tags.some((tag) => String(tag).toLowerCase().includes("veg"));
            return (
              <article
                className={`hb-dish ${featureClass} reveal delay-${Math.min(index % 4, 3)}`}
                key={dish.id || `${dish.name}-${index}`}
              >
                <div className="hb-dish-img">
                  <img
                    src={menuFallbackImages[index % menuFallbackImages.length]}
                    alt={dish.name}
                    loading="lazy"
                  />
                  <span className={`hb-dish-tag${isVeg ? " veg" : ""}`}>
                    {isVeg ? "Vegetarian" : dish.category || "Signature"}
                  </span>
                </div>
                <div className="hb-dish-head">
                  <h3>{dish.name}</h3>
                  <span>{dish.price || "Market"}</span>
                </div>
                <p>{dish.description}</p>
              </article>
            );
          })}
        </div>

        <div className="hb-menu-foot reveal">
          <p className="hb-note">Prices in USD - Dine-in - Takeout - Catering</p>
          <div className="hb-actions">
            <OrderButton className="hb-btn-gold" />
            <Link className="hb-btn hb-btn-ghost" to="/menu">
              View more <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="hb-section hb-services" data-section="services">
      <div className="hb-wrap">
        <div className="hb-section-head">
          <div>
            <p className="hb-eyebrow reveal">Our Services</p>
            <h2 className="reveal delay-1">
              <em className="hb-gold">How</em> we serve.
            </h2>
          </div>
          <p className="hb-lead muted reveal delay-2">
            We offer dine-in, takeout, delivery, and catering services with
            authentic South Indian flavors, warm hospitality, and custom options
            for every occasion.
          </p>
        </div>
        <div className="hb-services-grid">
          {services.slice(0, 4).map((service, index) => (
            <article className={`hb-service reveal delay-${index}`} key={service.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.label}</h3>
              <p>
                {index === 0 &&
                  "Careful ingredients, polished service, and dishes prepared with consistency."}
                {index === 1 &&
                  "Order for pickup or delivery and bring the HBK kitchen home."}
                {index === 2 &&
                  "A confident choice for celebrations, family meals, and community gatherings."}
                {index === 3 &&
                  "Custom menus and event support for weddings, parties, and corporate dining."}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section id="visit" className="hb-visit" data-section="visit">
      <div className="hb-visit-pane">
        <p className="hb-eyebrow reveal">Visit</p>
        <h2 className="reveal delay-1">
          Open all week,
          <br />
          <em className="hb-gold">eleven til ten.</em>
        </h2>
        <p className="hb-lead muted reveal delay-2">
          Walk-ins welcome. Order ahead for pickup, delivery, larger parties, or
          catering.
        </p>
        <div className="hb-hours reveal delay-2">
          <span>Monday - Thursday</span>
          <strong>11.00 - 22.00</strong>
          <span className="hb-gold">Friday</span>
          <strong>11.00 - 22.00</strong>
          <span className="hb-gold">Saturday</span>
          <strong>11.00 - 22.00</strong>
          <span>Sunday</span>
          <strong>11.00 - 22.00</strong>
        </div>
        <div className="hb-actions reveal delay-3">
          <OrderButton />
          <a className="hb-btn hb-btn-ghost" href="tel:+19722945002">
            Call the house <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
      <div className="hb-visit-pane hb-visit-map" style={{ "--visit-bg": `url(${featureBg})` }}>
        <p className="hb-eyebrow reveal">Find Us</p>
        <h2 className="reveal delay-1">
          Medlock Bridge,
          <br />
          Johns Creek.
        </h2>
        <div className="hb-contact-lines reveal delay-2">
          <p>
            <span>Address</span>
            11030 Medlock Bridge Rd, Johns Creek, GA 30097
          </p>
          <p>
            <span>Phone</span>
            972-294-5002 , 972-294-5044
          </p>
          
          <p>
            <span>Hours</span>
            Mon-Sun - 11.00 - 22.00
          </p>
        </div>
        <a
          className="hb-btn hb-btn-gold reveal delay-3"
          href="https://maps.app.goo.gl/Xe18NtzXKsyCeRmC7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in maps <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    biryaniImg,
    dishTwo,
    kebabImg,
    mushroomImg,
    dishOne,
    ...galleryImages.slice(0, 2),
  ];

  return (
    <section id="gallery" className="hb-section" data-section="gallery">
      <div className="hb-wrap">
        <div className="hb-section-head hb-gallery-head">
          <div>
            <p className="hb-eyebrow reveal">Gallery</p>
            <h2 className="reveal delay-1">
              <em className="hb-gold">From</em> the kitchen.
            </h2>
          </div>
          <a className="hb-link reveal delay-2" href="#gallery">
            View the full gallery <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
        <div className="hb-gallery-grid reveal">
          {images.slice(0, 6).map((src, index) => (
            <figure className={`hb-gallery-cell c${index + 1}`} key={`${src}-${index}`}>
              <img src={src} alt={`HBK gallery ${index + 1}`} loading="lazy" />
              <figcaption>No. {String(index + 1).padStart(2, "0")}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useRevealOnScroll();
  useRouteScroll();

  return (
    <div className="root hb-page">
      <SeoHead {...seoConfig.home} />
      <div className="hb-progress" aria-hidden="true">
        <div className="hb-progress-bar" />
      </div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Marquee />
        <StorySection />
        <Pillars />
        <MenuPreview />
        <ServicesSection />
        <VisitSection />
        <GallerySection />
      </main>
      <Footer
        logoImg={logoImg}
        badgeLocations={badgeLocations}
        badgeHalal={badgeHalal}
      />
    </div>
  );
}
