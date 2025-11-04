import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleCTAClick = () => {
    navigate('/contact');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('services')}
              >
                Services
                <span className="dropdown-arrow">▼</span>
              </button>
              {activeDropdown === 'services' && (
                <div className="dropdown-menu">
                  <Link to="/services" className="dropdown-item">All Services</Link>
                  <Link to="/services/digital-transformation" className="dropdown-item">Digital Transformation</Link>
                  <Link to="/services/team-augmentation" className="dropdown-item">Team Augmentation</Link>
                  <Link to="/services/application-development" className="dropdown-item">Application Development</Link>
                  <Link to="/services/cloud-consulting" className="dropdown-item">Cloud Consulting</Link>
                  <Link to="/services/ai-ml" className="dropdown-item">AI & Machine Learning</Link>
                </div>
              )}
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('industries')}
              >
                Industries
                <span className="dropdown-arrow">▼</span>
              </button>
              {activeDropdown === 'industries' && (
                <div className="dropdown-menu">
                  <Link to="/industries" className="dropdown-item">All Industries</Link>
                  <Link to="/industries/financial-services" className="dropdown-item">Financial Services</Link>
                  <Link to="/industries/ecommerce-retail" className="dropdown-item">eCommerce & Retail</Link>
                  <Link to="/industries/healthcare" className="dropdown-item">Healthcare</Link>
                  <Link to="/industries/education" className="dropdown-item">Education</Link>
                </div>
              )}
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('solutions')}
              >
                Solutions
                <span className="dropdown-arrow">▼</span>
              </button>
              {activeDropdown === 'solutions' && (
                <div className="dropdown-menu">
                  <Link to="/solutions" className="dropdown-item">All Solutions</Link>
                  <Link to="/solutions/crm" className="dropdown-item">CRM Solutions</Link>
                  <Link to="/solutions/ecommerce" className="dropdown-item">eCommerce Solutions</Link>
                  <Link to="/solutions/erp" className="dropdown-item">ERP Solutions</Link>
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/insights" className="nav-link">Insights</Link>
            </li>
            <li className="nav-item">
              <Link to="/careers" className="nav-link">Careers</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="cta-button" onClick={handleCTAClick}>Request Demo</button>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;