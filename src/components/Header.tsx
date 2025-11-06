import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleCTAClick = () => {
    navigate('/contact');
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    }
  };

  const menuVariants = {
    hidden: {
      opacity: isDesktop ? 1 : 0,
      x: isDesktop ? 0 : '100%'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isDesktop ? 0 : 0.3,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    },
    exit: {
      opacity: isDesktop ? 1 : 0,
      x: isDesktop ? 0 : '100%',
      transition: {
        duration: isDesktop ? 0 : 0.2
      }
    }
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">
            <Logo />
          </Link>
        </motion.div>
        <AnimatePresence>
          <motion.nav 
            className={`nav ${isMenuOpen ? 'nav-open' : ''}`}
            variants={menuVariants}
            initial={isDesktop ? "visible" : "hidden"}
            animate={isDesktop ? "visible" : (isMenuOpen ? "visible" : "hidden")}
            exit="exit"
          >
            <ul className="nav-list">
              {/* Home Link */}
              <motion.li 
                className="nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
              >
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                >
                  Home
                </Link>
              </motion.li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown">
                <motion.button
                  className={`nav-link dropdown-toggle ${isActive('/services') ? 'active' : ''}`}
                  onClick={() => handleDropdownToggle('services')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Services
                  <motion.span 
                    className="dropdown-arrow"
                    animate={{ rotate: activeDropdown === 'services' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div 
                      className="dropdown-menu"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link to="/services" className={`dropdown-item ${location.pathname === '/services' ? 'active' : ''}`}>All Services</Link>
                      <Link to="/services/digital-transformation" className="dropdown-item">Digital Transformation</Link>
                      <Link to="/services/team-augmentation" className="dropdown-item">Team Augmentation</Link>
                      <Link to="/services/application-development" className="dropdown-item">Application Development</Link>
                      <Link to="/services/cloud-consulting" className="dropdown-item">Cloud Consulting</Link>
                      <Link to="/services/ai-ml" className="dropdown-item">AI & Machine Learning</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Solutions Dropdown */}
              <li className="nav-item dropdown">
                <motion.button
                  className={`nav-link dropdown-toggle ${isActive('/solutions') ? 'active' : ''}`}
                  onClick={() => handleDropdownToggle('solutions')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solutions
                  <motion.span 
                    className="dropdown-arrow"
                    animate={{ rotate: activeDropdown === 'solutions' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {activeDropdown === 'solutions' && (
                    <motion.div 
                      className="dropdown-menu"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link to="/solutions" className={`dropdown-item ${location.pathname === '/solutions' ? 'active' : ''}`}>All Solutions</Link>
                      <Link to="/solutions/crm" className="dropdown-item">CRM Solutions</Link>
                      <Link to="/solutions/ecommerce" className="dropdown-item">eCommerce Solutions</Link>
                      <Link to="/solutions/erp" className="dropdown-item">ERP Solutions</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* About Us Dropdown (with Blog and Career) */}
              <li className="nav-item dropdown">
                <motion.button
                  className={`nav-link dropdown-toggle ${isActive('/about') || isActive('/insights') || isActive('/careers') ? 'active' : ''}`}
                  onClick={() => handleDropdownToggle('about')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Us
                  <motion.span 
                    className="dropdown-arrow"
                    animate={{ rotate: activeDropdown === 'about' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {activeDropdown === 'about' && (
                    <motion.div 
                      className="dropdown-menu"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link to="/about" className={`dropdown-item ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
                      <Link to="/insights" className={`dropdown-item ${location.pathname === '/insights' || location.pathname.startsWith('/insights/') ? 'active' : ''}`}>Blog & Insights</Link>
                      <Link to="/careers" className={`dropdown-item ${location.pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Direct Links */}
              {[
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'Contact', path: '/contact' }
              ].map((item, index) => (
                <motion.li 
                  key={item.path}
                  className="nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    to={item.path} 
                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </AnimatePresence>
        <div className="header-actions">
          <motion.button 
            className="cta-button" 
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0, 229, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Request Demo
          </motion.button>
          <motion.button 
            className="menu-toggle" 
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;