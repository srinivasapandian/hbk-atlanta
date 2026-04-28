import { useRef, useState } from 'react';
import Img from '../components/Img';
import { galleryImages } from '../data/galleryData';

export default function Gallery({ isMobile }) {
  const scrollRef = useRef(null);
  const [scrollPct, setScrollPct] = useState(0);

  function handleScroll() {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const max = scrollWidth - clientWidth;
    setScrollPct(max > 0 ? (scrollLeft / max) * 100 : 0);
  }

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-header">
        <h2 className="gallery-title" style={{ textAlign: 'left', marginBottom: 24 }}>Gallery</h2>
      </div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="gallery-scroll hide-scrollbar"
        style={isMobile ? { scrollSnapType: 'x mandatory', padding: '0 24px 24px' } : undefined}
      >
        {galleryImages.map((src, i) => (
          <img
            key={i}
            src={src}
            className="gallery-img"
            style={isMobile ? { width: '85%', height: 'auto', aspectRatio: '1', scrollSnapAlign: 'center' } : undefined}
            alt={`gallery ${i + 1}`}
            loading="lazy"
          />
        ))}
      </div>
      <div
        className="gallery-progress-container"
        style={isMobile ? { width: 'calc(100% - 48px)', margin: '0 auto' } : undefined}
      >
        <div
          className="gallery-progress-bar"
          style={{
            backgroundColor: '#e8c76a',
            width: '20%',
            left: `${scrollPct * 0.8}%`,
            transition: 'left 0.1s ease-out',
          }}
        />
      </div>
    </section>
  );
}
