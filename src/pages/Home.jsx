import { useState, useEffect, useRef } from "react";
import "./Home.css";
import { useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHead, { seoConfig } from "../components/SeoHead";
import Hero from "../sections/Hero";
import Story from "../sections/Story";
import MiniMenu from "../sections/MiniMenu";
import EventsSection from "../sections/EventsSection";
import ContactStrip from "../sections/ContactStrip";

const Services = lazy(() => import("./Services"));
const Gallery = lazy(() => import("./Gallery"));

function SectionSkeleton({ type }) {
  if (type === "footer") {
    return (
      <div
        className="section-skeleton section-skeleton-footer"
        aria-hidden="true"
      >
        <div className="section-skeleton-line" />
        <div className="section-skeleton-line section-skeleton-line-short" />
      </div>
    );
  }
  return (
    <div className="section-skeleton" aria-hidden="true">
      <div className="section-skeleton-line" />
      <div className="section-skeleton-line section-skeleton-line-short" />
      <div className="section-skeleton-cards">
        <div className="section-skeleton-card" />
        <div className="section-skeleton-card" />
        <div className="section-skeleton-card" />
      </div>
    </div>
  );
}

const sectionRouteMap = {
  "/": "home",
  "/home": "home",
  "/events": "events",
  "/contact": "contact",
  "/about-us": "about",
  "/services": "services",
  "/gallery": "gallery",
};
const lazyMap = { services: "services", gallery: "gallery" };

export default function Home() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [loaded, setLoaded] = useState({ services: false, gallery: false });
  const sectionRefs = {
    services: useRef(null),
    gallery: useRef(null),
  };

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const key = entry.target.getAttribute("data-load-section");
          if (key)
            setLoaded((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
        });
      },
      { root: null, rootMargin: "300px 0px", threshold: 0.01 },
    );
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target =
      location.state?.scrollTo || sectionRouteMap[location.pathname] || "home";
    const lazyKey = lazyMap[target];
    if (lazyKey)
      setLoaded((prev) =>
        prev[lazyKey] ? prev : { ...prev, [lazyKey]: true },
      );

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
      if (attempts < 240) {
        attempts++;
        requestAnimationFrame(tryScroll);
      }
    }
    requestAnimationFrame(tryScroll);
  }, [
    location.pathname,
    location.state?.scrollTo,
    location.state?.scrollRequestId,
  ]);

  return (
    <div className="root">
      <SeoHead {...seoConfig.home} />
      <header>
        <Navbar isMobile={isMobile} />
      </header>
      <main>
        <Hero />
        <div className="location-strip">
          📍 Now Serving Atlanta &amp; Surrounding Areas — Johns Creek, GA 30097
        </div>
        <Story isMobile={isMobile} />
        <MiniMenu />
        <EventsSection isMobile={isMobile} />

        <div ref={sectionRefs.services} data-load-section="services" />
        {loaded.services && (
          <Suspense fallback={<SectionSkeleton />}>
            <Services />
          </Suspense>
        )}

        <div ref={sectionRefs.gallery} data-load-section="gallery" />
        {loaded.gallery && (
          <Suspense fallback={<SectionSkeleton />}>
            <Gallery isMobile={isMobile} />
          </Suspense>
        )}
        <ContactStrip />
      </main>
      <Footer isMobile={isMobile} />
    </div>
  );
}
