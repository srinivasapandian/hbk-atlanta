import "./ContactStrip.css";
import halalBadge from "../assets/imgs/halalCertificate.png";
import locationsBadge from "../assets/imgs/HBK-35+-Locations-Logo-PNG.png";
import brandBadge from "../assets/house_of_biriyani_and_kebabs.svg";

export default function ContactStrip() {
  return (
    <section
      className="contact-strip"
      aria-label="Restaurant contact highlights"
    >
      <div className="contact-strip-inner">
        <div className="contact-strip-col">
          <span className="contact-strip-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path
                d="M12 22s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="10"
                r="2.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </span>
          <div className="contact-strip-text-wrap">
            <p className="contact-strip-text">11030 Medlock Bridge Rd,</p>
            <p className="contact-strip-text">Johns Creek, GA 30097</p>
          </div>
        </div>

        <div className="contact-strip-center">
          <img
            src={locationsBadge}
            alt="Halal Certified"
            className="contact-strip-badge"
          />
          <img
            src={brandBadge}
            alt="House of Biryanis & Kebabs"
            className="contact-strip-logo"
          />
          <img
            src={halalBadge}
            alt="30+ Locations"
            className="contact-strip-badge"
          />
        </div>

        <div className="contact-strip-col contact-strip-col-right">
          <span className="contact-strip-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path
                d="M4 5.5c0 7.5 6 13 13 13l2.5-2.5c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0l-1.8 1.8a11 11 0 0 1-5.6-5.6L9.5 6c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0L4 4.5z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="contact-strip-text-wrap">
            <p className="contact-strip-label">Have Question?</p>
            <p className="contact-strip-text contact-strip-text-strong">
              FREE 972-294-5002,
            </p>
            <p className="contact-strip-text">972-294-5044</p>
          </div>
        </div>
      </div>
    </section>
  );
}
