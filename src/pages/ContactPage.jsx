import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Phone as PhoneIcon, MessageSquare } from 'lucide-react';
import '../styles/ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Client-side AJAX submission to FormSubmit with in-page success/error handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      const endpoint = 'https://formsubmit.co/magombochikondi40@gmail.com';
      const data = new FormData();
      Object.entries(formData).forEach(([k, v]) => data.append(k, v));
      data.append('_subject', 'New reservation from website');
      data.append('_captcha', 'false');

      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Network response not ok');
      }

      // success
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
      // hide success after a short time
      setTimeout(() => setSuccess(false), 6000);
    } catch (err) {
      console.error('Form submit error', err);
      setError('There was a problem submitting the form. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact & Reservations</h1>
        <p>We'd love to hear from you. Plan your visit today!</p>
      </div>

      <div className="contact-container">
        {/* Contact Information */}
        <section className="contact-info">
          <h2>Get In Touch</h2>
          
          <div className="info-block">
            <div className="info-icon">
              <MapPin size={24} />
            </div>
            <div className="info-content">
              <h3>Location</h3>
              <p>Blantyre City</p>
              <p>Chichiri, Blantyre</p>
              <p>Malawi</p>
              <p className="note">Ample parking available • Wheelchair accessible</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <Phone size={24} />
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p className="highlight">+265 996 522 780</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <Mail size={24} />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p className="highlight">chikondimanagombo40@gmail.com</p>
              <p className="note">Response within 2 hours during business hours</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <Clock size={24} />
            </div>
            <div className="info-content">
              <h3>Hours</h3>
              <p><strong>Monday - Thursday:</strong> 5:00 PM - 10:00 PM</p>
              <p><strong>Friday - Saturday:</strong> 5:00 PM - 11:00 PM</p>
              <p><strong>Sunday:</strong> 4:00 PM - 9:00 PM</p>
              <p className="note">Closed on major holidays</p>
            </div>
          </div>
        </section>
        

        {/* Reservation Form */}
        <section className="reservation-form-section">
          <h2>Make a Reservation</h2>
          <p className="form-subtitle">Book your table for an unforgettable dining experience</p>
          
          {success && (
            <div className="success-message" role="status">
              ✓ Thank you! Your reservation request has been received. We'll confirm shortly!
            </div>
          )}

          {error && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}

          <form
            className="reservation-form"
            action="https://formsubmit.co/chikondimanagombo40@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            aria-busy={submitting}
          >
            {/* FormSubmit hidden fields (kept for non-JS fallback) */}
            <input type="hidden" name="_next" value={window.location.origin + '/'} />
            <input type="hidden" name="_subject" value="New reservation from website" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(999) 456-4567"
                />
              </div>
              <div className="form-group">
                <label htmlFor="guests">Number of Guests *</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8+ Guests</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Preferred Time *</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Special requests field removed */}

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? 'Sending…' : 'Reserve Your Table'}
            </button>
            <p className="form-note">* Required fields</p>
          </form>
        </section>
          {/* Map Section (spans both columns) */}
          <div className="map-placeholder">
            <div className="map-header">
              <MapPin size={20} />
              <h3>Find Us</h3>
            </div>
            <div className="map-container">
              <iframe
                title="Restaurant Location"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9648.10947508102!2d33.75369071348125!3d-13.997740096449814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2smw!4v1764764339364!5m2!1sen!2smw"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
            </div>
          </div>
      </div>

      {/* Additional contact methods removed per request */}
    </div>
  );
}
