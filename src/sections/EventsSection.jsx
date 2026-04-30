import "./EventsSection.css";
import { Link } from "react-router-dom";
import { events } from "../data/eventsData";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <img
        src={event.image}
        alt={event.title}
        className="event-img"
        loading="lazy"
      />
      <div className="event-overlay" />
      <span className="event-date">{event.date}</span>
      <Link
        to="/"
        className="event-go-btn"
        aria-label="Go to home page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </Link>
      <div className="event-body">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-desc">{event.desc}</p>
      </div>
    </div>
  );
}

export default function EventsSection({ standalone = false }) {
  const displayEvents = standalone ? events : events.slice(0, 4);

  return (
    <section id="events" className={`events ${standalone ? 'events-standalone' : ''}`}>
      <h2 className="event-section-title">Events</h2>
      <div className="events-grid">
        {displayEvents.map((event, i) => (
          <EventCard key={i} event={event} />
        ))}
      </div>
    </section>
  );
}

