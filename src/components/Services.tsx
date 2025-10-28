import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from './GlassCard';
import NeonButton from './NeonButton';
import '../styles/Services.css';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/services');
  };

  const services = [
    {
      id: 1,
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Comprehensive digital solutions to modernize your business processes and drive innovation.',
      color: '#007bff',
      features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy', 'Change Management']
    },
    {
      id: 2,
      icon: '💻',
      title: 'Product Engineering',
      description: 'End-to-end product development from concept to deployment with cutting-edge technologies.',
      color: '#28a745',
      features: ['Full-Stack Development', 'UI/UX Design', 'Quality Assurance', 'DevOps Integration']
    },
    {
      id: 3,
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions leveraging artificial intelligence and machine learning capabilities.',
      color: '#ffc107',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning']
    },
    {
      id: 4,
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest frameworks and technologies.',
      color: '#17a2b8',
      features: ['React/Angular/Vue', 'Node.js/Python', 'Progressive Web Apps', 'Performance Optimization']
    },
    {
      id: 5,
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      color: '#6f42c1',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      id: 6,
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance.',
      color: '#fd7e14',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'Microservices', 'Container Orchestration']
    },
    {
      id: 7,
      icon: '🔗',
      title: 'Blockchain',
      description: 'Decentralized solutions and smart contract development for secure transactions.',
      color: '#20c997',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Development', 'Cryptocurrency Integration']
    },
    {
      id: 8,
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      color: '#dc3545',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      id: 9,
      icon: '📊',
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence solutions for data-driven decisions.',
      color: '#6c757d',
      features: ['Business Intelligence', 'Data Visualization', 'Machine Learning', 'Real-time Analytics']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="modern-title">
            <span className="title-line">Our</span>
            <span className="title-accent">Services</span>
          </h2>
          <div className="title-underline" />
          <p className="modern-subtitle">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <GlassCard 
              key={service.id} 
              className={`service-card ${selectedService === service.id ? 'selected' : ''}`}
              glowColor={service.color}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="service-content">
                <div className="service-icon" style={{ backgroundColor: service.color }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                {selectedService === service.id && (
                  <div className="service-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 12L11 14L15 10" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <NeonButton 
                  variant={selectedService === service.id ? "primary" : "secondary"}
                  size="small"
                  onClick={handleLearnMore}
                >
                  {selectedService === service.id ? 'Selected' : 'Learn More'}
                </NeonButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;