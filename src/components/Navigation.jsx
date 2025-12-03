import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          Tidye
        </NavLink>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Menu</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link nav-link-cta active" : "nav-link nav-link-cta"} onClick={closeMenu}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
