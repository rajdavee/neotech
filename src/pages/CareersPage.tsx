import React from 'react';
import SEO from '../components/SEO';
import '../styles/CareersPage.css';

const CareersPage: React.FC = () => {
  return (
    <div className="careers-page">
      <SEO
        title="Careers - Join Our Team"
        description="Join NEOTEQ and build the future with us. Explore exciting career opportunities in AI, cloud computing, software development, and technology innovation. Work with cutting-edge technologies and world-class teams."
        keywords="careers, jobs, technology careers, software engineering jobs, AI jobs, cloud computing careers, developer positions, technology jobs, NEOTEQ careers"
        url="https://www.neoteq.com/careers"
      />
      
      <div className="container">
        <h1>Careers</h1>
        <p>Join our team and build the future with us.</p>
      </div>
    </div>
  );
};

export default CareersPage;