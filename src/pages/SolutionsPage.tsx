import React from 'react';
import SolutionsSlider from '../components/SolutionsSlider';
import SEO from '../components/SEO';
import '../styles/SolutionsPage.css';

const SolutionsPage: React.FC = () => {
  return (
    <div className="solutions-page">
      <SEO
        title="Solutions - Enterprise Software Solutions"
        description="Explore NEOTEQ's comprehensive enterprise software solutions including CRM, E-Commerce, ERP, and Content Management Systems. Scalable solutions for your business needs."
        keywords="CRM solutions, e-commerce platforms, ERP systems, enterprise software, business solutions, customer relationship management, content management systems"
        url="https://www.neoteq.com/solutions"
      />
      
      <SolutionsSlider />
    </div>
  );
};

export default SolutionsPage;