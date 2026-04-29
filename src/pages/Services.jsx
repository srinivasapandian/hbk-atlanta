import { services } from '../data/servicesData';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services">
      <h2 className="services-title" style={{ textAlign: 'center' }}>Our Services</h2>
      <p className="services-sub">
        We offer dine-in, takeout, and catering services with authentic South Indian flavors,
        warm hospitality, and customized options for every occasion.
      </p>
      <div className="services-row">
        {services.map((svc, i) => (
          <div key={i} className="service-item">
            <div className="service-icon">
              <img src={svc.icon} alt={svc.label} className="service-img" />
            </div>
            <span className="service-label">{svc.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
