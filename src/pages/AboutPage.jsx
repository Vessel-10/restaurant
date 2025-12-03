import { Leaf, Users, Heart, Globe } from 'lucide-react';
import '../styles/AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About TIdye</h1>
        <p>A Journey of Passion, Quality, and Community</p>
      </section>

      {/* Story Section */}
      <section className="about-content">
        <div className="about-section">
          <img 
            src="https://images.unsplash.com/photo-1504674900945-ab22fe8c31f5?w=500&h=400&fit=crop" 
            alt="Restaurant exterior"
            className="about-image"
          />
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              TIdye was founded in 2015 by Chef Marco Romano and his family with a simple vision:
              to create a space where exceptional food meets warm hospitality. What started as a small neighborhood
              restaurant has grown into a beloved destination for food enthusiasts from across the city.
            </p>
            <p>
              Every dish on our menu is crafted with care, using the freshest local ingredients sourced from
              trusted farmers and suppliers within our community. We believe that great food begins with great ingredients.
            </p>
          </div>
        </div>

        <div className="about-section reverse">
          <img 
            src="https://images.unsplash.com/photo-1583270335223-14ad11cc5caa?w=500&h=400&fit=crop" 
            alt="Chef in kitchen"
            className="about-image"
          />
          <div className="about-text">
            <h2>Chef & Team</h2>
            <p>
              Chef Marco Romano brings 25+ years of culinary expertise, having trained under renowned chefs
              in Italy, France, and Spain. His passion for authentic cuisine and commitment to excellence is evident
              in every plate that leaves our kitchen.
            </p>
            <p>
              Our kitchen team is composed of dedicated chefs who share Marco's philosophy of quality and innovation.
              Together, they create dishes that honor traditional recipes while embracing modern techniques.
            </p>
          </div>
        </div>

        <div className="about-section">
          <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b0543831?w=500&h=400&fit=crop" 
            alt="Restaurant dining area"
            className="about-image"
          />
          <div className="about-text">
              <h2>Ambiance & Experience</h2>
            <p>
                Our restaurant features warm, rustic décor with exposed brick walls, wooden beams, and soft lighting
                that creates an intimate yet lively atmosphere. Whether you're celebrating a special occasion or enjoying
                a casual dinner with friends, TIdye is the perfect setting.
            </p>
            <p>
              We pride ourselves on exceptional service. Our staff is trained to anticipate your needs and ensure
              that every visit is memorable and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <Leaf size={40} className="value-icon" />
            <h3>Quality</h3>
            <p>Only the finest ingredients and uncompromising standards in everything we do.</p>
          </div>
          <div className="value-card">
            <Users size={40} className="value-icon" />
            <h3>Authenticity</h3>
            <p>Traditional recipes and techniques passed down through generations, with respectful innovation.</p>
          </div>
          <div className="value-card">
            <Heart size={40} className="value-icon" />
            <h3>Hospitality</h3>
            <p>Every guest is treated like family. Exceptional service is our promise to you.</p>
          </div>
          <div className="value-card">
            <Globe size={40} className="value-icon" />
            <h3>Community</h3>
            <p>Supporting local farmers, producers, and businesses. We're part of this neighborhood.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Experience TIdye</h2>
        <p>Visit us soon and discover why we're the neighborhood's favorite restaurant</p>
        <div className="cta-buttons">
          <a href="/menu" className="cta-btn primary">View Menu</a>
          <a href="/contact" className="cta-btn secondary">Make Reservation</a>
        </div>
      </section>
    </div>
  );
}
