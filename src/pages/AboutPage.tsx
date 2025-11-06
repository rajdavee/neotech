import React from 'react';
import About from '../components/About';
import SEO from '../components/SEO';
import '../styles/AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <SEO
        title="About Us - Our Story & Mission"
        description="Learn about NEOTEQ - a leading technology solutions provider specializing in AI, digital transformation, and enterprise software. Discover our mission, values, and expertise."
        keywords="about NEOTEQ, company history, technology company, AI experts, digital transformation team, enterprise software developers"
        url="https://www.neoteq.com/about"
      />
      <About />
    </div>
  );
};

export default AboutPage;