import React from 'react';
import ServicesSlider from '../components/ServicesSliderPage';
import SEO from '../components/SEO';
import '../styles/ServicesPage.css';

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      <SEO
        title="Services - AI Solutions & Technology Services"
        description="Explore NEOTEQ's comprehensive AI and technology services including GPU optimization, RAG applications, HealthTech, FoodTech, EnvironmentTech, and Retail Tech solutions."
        keywords="AI services, GPU optimization, RAG applications, HealthTech, FoodTech, EnvironmentTech, Retail Tech, CUDA optimization, HIPAA compliance, blockchain traceability"
        url="https://www.neoteq.com/services"
      />
      
      <ServicesSlider />
    </div>
  );
};

export default ServicesPage;
