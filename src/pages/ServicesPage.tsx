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
      id: 'staff-augmentation',
      title: 'Staff Augmentation',
      icon: '👥',
      color: '#1a1a1a',
      description: 'Our experts, your team - flexible, skilled, and aligned to your vision.',
      features: ['Remote Team Integration', 'Specialized Expertise', 'Agile Methodology', 'Direct Communication']
    },
    {
      id: 'product-engineering',
      title: 'Product Engineering',
      icon: '🚀',
      color: '#2c3e50',
      description: 'Full-cycle development - from architecture to maintenance.',
      features: ['Full-cycle Development', 'Architecture Design', 'Quality Assurance', 'Maintenance & Support']
    },
    {
      id: 'dedicated-hires',
      title: 'Dedicated Hires',
      icon: '💼',
      color: '#4a4a4a',
      description: 'Build your in-house capability with vetted professionals.',
      features: ['Vetted Professionals', 'In-house Capability', 'Long-term Partnerships', 'Dedicated Resources']
    },
    {
      id: 'turnkey-projects',
      title: 'Turnkey Projects',
      icon: '🎯',
      color: '#555555',
      description: 'End-to-end solutions, delivered on time and at scale.',
      features: ['End-to-end Solutions', 'On-time Delivery', 'Scalable Architecture', 'Complete Ownership']
    },
    {
      id: 'ai-llm-platforms',
      title: 'AI & LLM Platforms',
      icon: '🤖',
      color: '#1a1a1a',
      description: 'Agentic AI, RAG, automation, and distributed intelligence.',
      features: ['Agentic AI', 'RAG Infrastructure', 'Automation', 'Distributed Intelligence']
    },
    {
      id: 'gpu-optimisation',
      title: 'GPU Optimisation',
      icon: '⚡',
      color: '#2c3e50',
      description: 'Custom CUDA/AMD kernel-level optimisation for performance and energy efficiency.',
      features: ['Custom CUDA Kernels', 'Performance Engineering', 'Energy Efficiency', 'Cost Reduction']
    },
    {
      id: 'healthcare-ai',
      title: 'Healthcare AI Stack',
      icon: '🏥',
      color: '#4a4a4a',
      description: 'HIPAA-compliant patient logistics and workflow automation.',
      features: ['HIPAA Compliance', 'Patient Logistics', 'Workflow Automation', 'Healthcare Analytics']
    },
    {
      id: 'cloud-edge-deployments',
      title: 'Cloud & Edge Deployments',
      icon: '☁️',
      color: '#555555',
      description: 'Containerised AI solutions with adaptive scaling and real-time monitoring.',
      features: ['Containerised Solutions', 'Adaptive Scaling', 'Real-time Monitoring', 'Edge Computing']
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
            We deliver technology partnerships designed for scalability and trust
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
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
