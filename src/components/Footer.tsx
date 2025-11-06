import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setEmail('');
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Information Section */}
          <div className="footer-section footer-logo-section">
            <div className="footer-logo">
              <h3>
                <span className="logo-neo">Neo</span>
                <span className="logo-teq">Teq</span>
              </h3>
              <p className="footer-company-description">
                Pioneering AI and GPU optimization solutions that transform businesses across industries. Empowering innovation through cutting-edge technology.
              </p>
            </div>
            <div className="footer-contact-details">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:contact@neoteq.ai">contact@neoteq.ai</a>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Silicon Valley, CA</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/insights">Blog</Link></li>
              <li><Link to="/careers">Career</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">AI GPU Optimization</Link></li>
              <li><Link to="/services">RAG Applications</Link></li>
              <li><Link to="/services">HealthTech</Link></li>
              <li><Link to="/services">FoodTech</Link></li>
              <li><Link to="/services">EnvironmentTech</Link></li>
              <li><Link to="/services">Retail Tech</Link></li>
              <li><Link to="/services#capability">Capability Matrix</Link></li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div className="footer-section">
            <h4>Solutions</h4>
            <ul>
              <li><Link to="/solutions">AI Solutions</Link></li>
              <li><Link to="/solutions">Industry Solutions</Link></li>
              <li><Link to="/solutions">Custom Solutions</Link></li>
            </ul>
          </div>

          {/* Portfolio Section */}
          <div className="footer-section">
            <h4>Portfolio</h4>
            <ul>
              <li><Link to="/brochure">Company Brochure</Link></li>
              <li><Link to="/portfolio">Documentation</Link></li>
              <li><Link to="/portfolio">Case Studies</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              {/* Empty as per image */}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section footer-newsletter">
            <h4>Stay Updated</h4>
            <p className="newsletter-description">
              Get the latest insights on AI, GPU optimization, and industry trends.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-input-wrapper">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  className="newsletter-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="newsletter-spinner"></div>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              {submitStatus === 'success' && (
                <div className="newsletter-success">
                  Thank you for subscribing!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="newsletter-error">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p className="footer-copyright">
                © 2025 NeoTeq. All rights reserved. Built with AI-powered excellence.
              </p>
              <button className="cookie-manage-btn">Manage cookies or opt out</button>
            </div>
            <div className="footer-bottom-right">
              <div className="social-icons">
                <a 
                  href="https://www.linkedin.com/company/neoteq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-link"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.twitter.com/neoteq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-link"
                  aria-label="Twitter"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@neoteq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-link"
                  aria-label="YouTube"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <div className="footer-legal-links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-of-service">Terms of Service</Link>
                <Link to="/cookie-policy">Cookie Policy</Link>
                <Link to="/security">Security</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
