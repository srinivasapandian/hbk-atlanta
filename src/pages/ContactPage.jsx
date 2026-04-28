import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SeoHead, { seoConfig } from '../components/SeoHead';
import ContactSection from '../sections/ContactSection';

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }, []);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <div className="root">
      <SeoHead {...seoConfig.contact} />
      <header><Navbar isMobile={isMobile} /></header>
      <main><ContactSection /></main>
      <Footer isMobile={isMobile} />
    </div>
  );
}
