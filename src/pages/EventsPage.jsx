import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SeoHead, { seoConfig } from '../components/SeoHead';
import EventsSection from '../sections/EventsSection';

export default function EventsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }, []);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <div className="root">
      <SeoHead {...seoConfig.events} />
      <header><Navbar isMobile={isMobile} /></header>
      <main><EventsSection isMobile={isMobile} standalone /></main>
      <Footer isMobile={isMobile} />
    </div>
  );
}
