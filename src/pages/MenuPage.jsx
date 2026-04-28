import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SeoHead, { seoConfig } from '../components/SeoHead';
import MenuSection from '../sections/MenuSection';

export default function MenuPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }, []);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <div className="root">
      <SeoHead {...seoConfig.menu} />
      <header><Navbar isMobile={isMobile} /></header>
      <main><MenuSection isMobile={isMobile} standalone /></main>
      <Footer isMobile={isMobile} />
    </div>
  );
}
