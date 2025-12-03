import { useState } from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import '../styles/HomePage.css';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section 
        className="hero"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1400&h=700&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Tidye</h1>
          <p>Experience Authentic Flavors & Warm Hospitality</p>
          <div className="hero-ctas">
            <a href="/menu" className="cta-button primary">View Menu</a>
            <a href="/contact" className="cta-button secondary">Order Online</a>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="quick-info">
        <div className="info-card">
          <Clock size={32} strokeWidth={1.5} style={{ marginBottom: '12px' }} />
          <h3>Hours</h3>
          <p>Mon-Thu: 5PM - 10PM</p>
          <p>Fri-Sat: 5PM - 11PM</p>
          <p>Sunday: 4PM - 9PM</p>
        </div>
        <div className="info-card">
          <MapPin size={32} strokeWidth={1.5} style={{ marginBottom: '12px' }} />
          <h3>Location</h3>
          <p>Blantyre City</p>
          <p>Chichiri, Blantyre</p>
          <p>Malawi</p>
          <p>Easy parking available</p>
        </div>
        <div className="info-card">
          <Phone size={32} strokeWidth={1.5} style={{ marginBottom: '12px' }} />
          <h3>Contact</h3>
          <p>Call: (995)-622-780</p>
          <p>Email: hello@tidye.com</p>
          <p>Reserve a table today</p>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="featured-section">
        <h2>Our Specialties</h2>
        <div className="featured-dishes">
          <div className="dish-card">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" 
              alt="Signature Steak"
            />
            <h3>Signature Steak</h3>
            <p>Prime cut, grilled to perfection with herbs and spices</p>
            <p className="price">MK 38,500</p>
          </div>
          <div className="dish-card">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" 
              alt="Pasta Carbonara"
            />
            <h3>Pasta Carbonara</h3>
            <p>Traditional Italian pasta with bacon, eggs, and parmesan</p>
            <p className="price">MK 20,900</p>
          </div>
          <div className="dish-card">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" 
              alt="Fresh Salmon"
            />
            <h3>Fresh Salmon</h3>
            <p>Atlantic salmon with lemon butter sauce and vegetables</p>
            <p className="price">MK 31,900</p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="about-text">
          <h2>About TIdye</h2>
          <p>
            Founded in 2015, TIdye has been a beloved destination for food enthusiasts seeking authentic,
            locally-sourced cuisine prepared with passion and expertise. Our chef-owner brings decades of experience
            from around the world to create unforgettable dining experiences.
          </p>
          <a href="/about" className="learn-more-btn">Learn More About Us</a>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1504674900945-ab22fe8c31f5?w=500&h=400&fit=crop" 
          alt="Restaurant interior"
          className="about-image"
        />
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Dine with Us?</h2>
        <p>Make a reservation or place an order online</p>
        <div className="cta-buttons">
          <a href="/contact" className="cta-button primary-large">Make Reservation</a>
          <a href="/menu" className="cta-button secondary-large">Explore Menu</a>
        </div>
      </section>
    </div>
  );
}
