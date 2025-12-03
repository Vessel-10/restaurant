import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Tidye</h3>
          <p>Experience culinary excellence with locally sourced ingredients and traditional recipes.</p>
        </div>
        <div className="footer-section">
          <h4>Hours</h4>
          <p>Monday - Thursday: 5PM - 10PM</p>
          <p>Friday - Saturday: 5PM - 11PM</p>
          <p>Sunday: 4PM - 9PM</p>
        </div>
        <div className="footer-section contact-section">
          <h4>Contact</h4>
          <p className="contact-line"><MapPin size={14} /> Blantyre City , Malawi</p>
          <p className="contact-line"><Phone size={14} /> +265 996 522 780</p>
          <p className="contact-line"><Mail size={14} /> chikondimanagombo40@gmail.com</p>
          <div className="social-links icons-only contact-social">
            <a href="#facebook" aria-label="Facebook" className="facebook"><Facebook size={18} /></a>
            <a href="#instagram" aria-label="Instagram" className="instagram"><Instagram size={18} /></a>
            <a href="#twitter" aria-label="Twitter" className="twitter"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TIdye. All rights reserved.</p>
      </div>
    </footer>
  );
}
