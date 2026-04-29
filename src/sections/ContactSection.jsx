import { useState, useMemo } from 'react';
import './ContactSection.css';
import Button from '../components/Button';

const EMPTY = { name: '', email: '', phone: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) errors.email = 'Email is required.';
  else if (!EMAIL_RE.test(form.email)) errors.email = 'Please enter a valid email.';
  if (form.phone && form.phone.replace(/\D/g, '').length < 7) errors.phone = 'Please enter a valid phone number.';
  if (!form.message.trim()) errors.message = 'Message is required.';
  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submitted) setErrors(validate({ ...form, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setForm(EMPTY);
      setErrors({});
    }
  }

  return (
    <section className="contact-page" id="contact-page">
      <div className="contact-page-header">
        <h1 className="contact-page-title">Contact Us</h1>
        <p className="contact-page-subtitle">Reach us for reservations, private events, and general enquiries.</p>
      </div>

      <div className="contact-top-grid">
        <article className="contact-card">
          <h2 className="contact-card-title">Location</h2>
          <p className="contact-card-text">Magilhub India Private Limited</p>
          <p className="contact-card-text">Madurai, Tamil Nadu, India</p>
          <p className="contact-card-text">Mon – Sun: 11:00 AM – 10:00 PM</p>
        </article>
        <article className="contact-card">
          <h2 className="contact-card-title">Address</h2>
          <p className="contact-card-text">Magilhub India Private Limited</p>
          <p className="contact-card-text">Madurai, Tamil Nadu</p>
          <p className="contact-card-text">India</p>
        </article>
      </div>

      <div className="contact-map-wrap">
        <h2 className="contact-block-title">Find Us on Map</h2>
        <div className="contact-map-frame">
          <iframe
            title="Restaurant location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0170179997867!2d78.14124307505293!3d9.932540374191774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c530ee0fd7e5%3A0x8036889aed46ab5!2sMagilhub%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1774862224931!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <div className="contact-form-wrap">
        <h2 className="contact-block-title">Send us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form-grid">
            <label className="contact-field">
              <span>Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" />
              {errors.name && <small>{errors.name}</small>}
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" />
              {errors.email && <small>{errors.email}</small>}
            </label>
          </div>
          <label className="contact-field">
            <span>Phone Number</span>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number" />
            {errors.phone && <small>{errors.phone}</small>}
          </label>
          <label className="contact-field">
            <span>Message</span>
            <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell us what you need" />
            {errors.message && <small>{errors.message}</small>}
          </label>
          <Button type="submit" className="contact-submit-btn">SEND MESSAGE</Button>
          {submitted && !hasErrors && (
            <p className="contact-success">Thanks! We received your message.</p>
          )}
        </form>
      </div>
    </section>
  );
}
