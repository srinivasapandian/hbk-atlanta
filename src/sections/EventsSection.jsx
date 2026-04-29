import { useState } from 'react';
import './EventsSection.css';
import { Link } from 'react-router-dom';
import { events } from '../data/eventsData';
import redirectIcon from '../assets/imgs/redirect.png';

function EventCard({ event, expanded, onClick, isMobile }) {
  return (
    <div
      className={`event-card event-card-expandable ${expanded ? 'event-card-expanded' : 'event-card-collapsed'}`}
      style={{ flex: expanded ? 2.2 : 1 }}
      onClick={onClick}
    >
      <img src={event.image} alt={event.title} className="event-img" loading="lazy" />
      <div className="event-overlay" />
      <span className="event-date">{event.date}</span>
      
      <div className={`event-body ${expanded ? 'event-body-visible' : 'event-body-hidden'}`}>
        <h3 className="event-title">{event.title}</h3>
        <p className="event-desc">{event.desc}</p>
      </div>
      {!expanded && (
        <div className="event-collapsed-title-wrap">
          <h3 className="event-collapsed-title">{event.title}</h3>
        </div>
      )}
    </div>
  );
}

export default function EventsSection({ isMobile, standalone = false }) {
  const [expanded, setExpanded] = useState(0);
  const displayEvents = standalone ? events : events.slice(0, 4);

  if (standalone) {
    return (
      <section id="events" className={`events events-standalone`}>
        <h2 className="event-section-title">Events &amp; Offers</h2>
        <div className="events-grid events-grid-standalone">
          {events.map((event, i) => (
            <div key={i} className="event-card" style={{ minHeight: 380 }}>
              <img src={event.image} alt={event.title} className="event-img" loading="lazy" />
              <div className="event-overlay" />
              <span className="event-date">{event.date}</span>
              <div className="event-body event-body-visible">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-desc">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="events">
      <h2 className="event-section-title">Events &amp; Offers</h2>

      {isMobile ? (
        <div className={`events-expandable-grid events-expandable-grid-mobile`}>
          {displayEvents.map((event, i) => (
            <EventCard
              key={i}
              event={event}
              expanded={expanded === i}
              onClick={() => setExpanded(i)}
              isMobile={isMobile}
            />
          ))}
        </div>
      ) : (
        <div className="events-expandable-grid">
          {displayEvents.map((event, i) => (
            <EventCard
              key={i}
              event={event}
              expanded={expanded === i}
              onClick={() => setExpanded(i)}
              isMobile={isMobile}
            />
          ))}
        </div>
      )}

      <div className="events-actions">
        <Link to="/events" className="events-action-btn">VIEW ALL EVENTS</Link>
        <Link to="/contact" className="events-action-btn">BOOK A TABLE</Link>
      </div>
    </section>
  );
}
