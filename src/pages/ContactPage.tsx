import React from 'react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import '../styles/ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <SEO
        title="Contact Us - Get in Touch"
        description="Get in touch with NEOTEQ for AI solutions, digital transformation services, and technology consulting. Contact our team to discuss your project requirements."
        keywords="contact NEOTEQ, get in touch, technology consulting, AI solutions contact, digital transformation inquiry"
        url="https://www.neoteq.com/contact"
      />
      <Contact />
    </div>
  );
};

export default ContactPage;