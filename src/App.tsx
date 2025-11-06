import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ScrollProgressIndicator, CursorGlow } from './components/ScrollProgress';

// Page imports
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import IndustriesPage from './pages/IndustriesPage';
import IndustryDetail from './pages/IndustryDetail';
import SolutionsPage from './pages/SolutionsPage';
import SolutionDetail from './pages/SolutionDetail';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import InsightsPage from './pages/InsightsPage';
import BlogPost from './pages/BlogPost';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import PlaceholderPage from './pages/PlaceholderPage';
import BrochurePage from './pages/BrochurePage';

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/services/:serviceId" element={<PageTransition><ServiceDetail /></PageTransition>} />
        <Route path="/industries" element={<PageTransition><IndustriesPage /></PageTransition>} />
        <Route path="/industries/:industryId" element={<PageTransition><IndustryDetail /></PageTransition>} />
        <Route path="/solutions" element={<PageTransition><SolutionsPage /></PageTransition>} />
        <Route path="/solutions/:solutionId" element={<PageTransition><SolutionDetail /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/insights" element={<PageTransition><InsightsPage /></PageTransition>} />
        <Route path="/insights/:blogId" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><CareersPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PlaceholderPage title="Privacy Policy" description="We are committed to protecting your privacy and personal data. Learn about how we collect, use, and protect your information." keywords="privacy policy, data protection, GDPR, data privacy" icon="🔒" /></PageTransition>} />
        <Route path="/terms-of-service" element={<PageTransition><PlaceholderPage title="Terms of Service" description="Read our terms and conditions for using our services and platform. Understand your rights and responsibilities." keywords="terms of service, terms and conditions, legal terms" icon="📜" /></PageTransition>} />
        <Route path="/cookie-policy" element={<PageTransition><PlaceholderPage title="Cookie Policy" description="Learn about how we use cookies and similar technologies to enhance your browsing experience and provide personalized content." keywords="cookie policy, cookies, tracking, web analytics" icon="🍪" /></PageTransition>} />
        <Route path="/security" element={<PageTransition><PlaceholderPage title="Security" description="Our commitment to data protection and security. Learn about our practices for safeguarding your personal information and maintaining the highest security standards." keywords="security, data security, information security, cybersecurity" icon="🛡️" /></PageTransition>} />
        <Route path="/data-protection" element={<PageTransition><PlaceholderPage title="Data Protection" description="Our commitment to data protection and security. Learn about our practices for safeguarding your personal information." keywords="data protection, GDPR compliance, data security, information security" icon="🛡️" /></PageTransition>} />
        <Route path="/brochure" element={<PageTransition><BrochurePage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgressIndicator />
      <CursorGlow />
      <div className="App">
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;