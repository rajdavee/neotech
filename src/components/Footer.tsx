import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-logo-section">
            <div className="footer-logo">
              <h3>NEOTEQ</h3>
              <p className="footer-tagline">Powering Intelligence</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Social</h4>
            <ul>
              <li><a href="#" aria-label="Facebook">Facebook</a></li>
              <li><a href="#" aria-label="Instagram">Instagram</a></li>
              <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p><a href="mailto:info@neoteq.com">info@neoteq.com</a></p>
              <p><a href="https://www.neoteq.com" target="_blank" rel="noopener noreferrer">www.neoteq.com</a></p>
              <p>Gujarat, India</p>
            </div>
            <p className="build-together">Let's Build Together</p>
            <p className="build-together-subtitle">Let's shape the next generation of intelligent infrastructure.</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2025 by Neoteq. Created by Webworx.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;