import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from './GlassCard';
import NeonButton from './NeonButton';
import '../styles/ProductShowcase.css';

const ProductShowcase: React.FC = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 'cms',
      title: 'Cloud-Based Central Monitoring System',
      description: 'A comprehensive software solution that provides real-time remote monitoring capabilities with live parameter dashboards, interactive graphical views, and detailed historical trend analysis for informed decision-making.',
      icon: '📊',
      color: '#1a1a1a',
      features: [
        'Real-time Remote Monitoring',
        'Live Parameter Dashboard',
        'Graphical View',
        'Historical Trend Analysis'
      ],
      cta: 'Request Demo'
    },
    {
      id: 'automation',
      title: 'Workflow Automation System',
      description: 'Seamless integration with your existing infrastructure to maximize operational efficiency through intelligent workflow automation, reducing documentation time by up to 70%.',
      icon: '⚙️',
      color: '#2c3e50',
      features: [
        'Infrastructure Integration',
        'Intelligent Workflow Automation',
        'Up to 70% Reduction in Documentation Time',
        'Enhanced Operational Quality'
      ],
      cta: 'Request Demo'
    },
    {
      id: 'smart-solutions',
      title: 'Smart Technology Solutions',
      description: 'Advanced technology solutions that enhance operations and transform workflows. Experience faster response times, real-time data sharing, and significantly improved outcomes.',
      icon: '🚀',
      color: '#4a4a4a',
      features: [
        'Faster Response Times',
        'Real-time Data Sharing',
        'Improved Outcomes',
        'Advanced Technology Integration'
      ],
      cta: 'Request Demo'
    }
  ];

  const upcomingProducts = [
    {
      title: 'Telehealth Services',
      description: 'Next-generation digital health services including Tele ICU, Tele Ambulance, and cloud-based emergency management systems for remote patient care.',
      icon: '🏥',
      color: '#555555'
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge AI-powered marketing strategies and intelligent automation systems that drive business growth and efficiency.',
      icon: '🤖',
      color: '#666666'
    },
    {
      title: 'Emergency Management System',
      description: 'Enhanced crisis response capabilities through real-time coordination, intelligent resource allocation, and data-driven decision-making tools.',
      icon: '🚨',
      color: '#777777'
    }
  ];

  const handleRequestDemo = () => {
    navigate('/contact');
  };

  return (
    <section className="product-showcase-section">
      <div className="product-showcase-container">
        <div className="showcase-header">
          <h2>Our Solutions</h2>
          <p>Innovative products designed to transform your operations</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <GlassCard 
              key={product.id} 
              className="product-card" 
              glowColor={product.color}
            >
              <div className="product-icon" style={{ backgroundColor: product.color }}>
                {product.icon}
              </div>
              <h3>{product.title}</h3>
              <p className="product-description">{product.description}</p>
              
              <div className="product-features">
                <h4>Key Features:</h4>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <NeonButton 
                variant="primary" 
                size="medium" 
                onClick={handleRequestDemo}
                className="product-cta"
              >
                {product.cta}
              </NeonButton>
            </GlassCard>
          ))}
        </div>

        <div className="upcoming-section">
          <div className="upcoming-header">
            <h2>Our Upcoming Products and Services</h2>
            <p>Exciting innovations are on the way! We're launching cutting-edge solutions, AI-powered strategies, and next-generation digital services to transform your operations.</p>
          </div>

          <div className="upcoming-grid">
            {upcomingProducts.map((product, index) => (
              <GlassCard 
                key={index} 
                className="upcoming-card" 
                glowColor={product.color}
              >
                <div className="upcoming-icon">{product.icon}</div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

