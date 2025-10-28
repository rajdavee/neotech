import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import '../styles/ServicesPage.css';

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleExplore = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  const services = [
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: '🚀',
      color: '#007bff',
      description: 'Comprehensive digital solutions to modernize your business processes and drive innovation.',
      features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy', 'Change Management']
    },
    {
      id: 'team-augmentation',
      title: 'Team Augmentation',
      icon: '👥',
      color: '#28a745',
      description: 'Scale your development team with skilled professionals who integrate seamlessly into your workflow.',
      features: ['Remote Team Integration', 'Specialized Expertise', 'Agile Methodology', 'Direct Communication']
    },
    {
      id: 'application-development',
      title: 'Application Development',
      icon: '💻',
      color: '#17a2b8',
      description: 'Custom application development from concept to deployment with cutting-edge technologies.',
      features: ['Full-Stack Development', 'UI/UX Design', 'Quality Assurance', 'DevOps Integration']
    },
    {
      id: 'cloud-consulting',
      title: 'Cloud Consulting',
      icon: '☁️',
      color: '#fd7e14',
      description: 'Expert cloud consulting and migration services to optimize your infrastructure.',
      features: ['Cloud Migration', 'Architecture Design', 'Cost Optimization', 'Security Best Practices']
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: '🤖',
      color: '#ffc107',
      description: 'Intelligent solutions leveraging artificial intelligence and machine learning capabilities.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning']
    },
    {
      id: 'web-development',
      title: 'Web Development',
      icon: '🌐',
      color: '#17a2b8',
      description: 'Modern, responsive web applications built with the latest frameworks and technologies.',
      features: ['React/Angular/Vue', 'Node.js/Python', 'Progressive Web Apps', 'Performance Optimization']
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      icon: '📱',
      color: '#6f42c1',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      id: 'blockchain',
      title: 'Blockchain',
      icon: '🔗',
      color: '#20c997',
      description: 'Decentralized solutions and smart contract development for secure transactions.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Development', 'Cryptocurrency Integration']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: '🔒',
      color: '#dc3545',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    }
  ];

  return (
    <div className="services-page">
      <div className="services-container">
        <div className="services-header">
          <h1 className="modern-title">
            <span className="title-line">Our</span>
            <span className="title-accent">Services</span>
          </h1>
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
                  onClick={() => handleExplore(service.id)}
                >
                  {selectedService === service.id ? 'Selected' : 'Explore'}
                </NeonButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
