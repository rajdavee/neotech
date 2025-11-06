import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      icon: '🤖',
      title: 'AI & LLM Platforms',
      description: 'Agentic AI, RAG, automation, and distributed intelligence.',
      color: '#1a1a1a',
      features: ['Agentic AI', 'RAG Infrastructure', 'Automation', 'Distributed Intelligence']
    },
    {
      id: 2,
      icon: '⚡',
      title: 'GPU Optimisation',
      description: 'Custom kernel-level performance engineering to reduce cost and improve throughput.',
      color: '#2c3e50',
      features: ['Custom CUDA Kernels', 'Performance Engineering', 'Cost Reduction', 'Throughput Improvement']
    },
    {
      id: 3,
      icon: '🌐',
      title: 'Web & App Engineering',
      description: 'MERN-based, secure, and scalable web ecosystems.',
      color: '#4a4a4a',
      features: ['MERN Stack', 'Secure Applications', 'Scalable Architecture', 'Enterprise-grade Development']
    },
    {
      id: 4,
      icon: '☁️',
      title: 'Cloud & Edge Deployments',
      description: 'Containerised AI solutions with adaptive scaling and real-time monitoring.',
      color: '#555555',
      features: ['Containerised Solutions', 'Adaptive Scaling', 'Real-time Monitoring', 'Edge Computing']
    },
    {
      id: 5,
      icon: '🚀',
      title: 'Product Engineering & Support',
      description: 'From concept to continuous delivery.',
      color: '#666666',
      features: ['Full-cycle Development', 'Architecture Design', 'Continuous Delivery', 'Ongoing Support']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="modern-title">
            <span className="title-line">Our</span>
            <span className="title-accent">Services</span>
          </h2>
          <div className="title-underline" />
          <p className="modern-subtitle">
            We deliver technology partnerships designed for scalability and trust
          </p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <GlassCard 
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
                    <motion.div 
                      className="service-features"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4>Key Features:</h4>
                      <ul>
                        {service.features.map((feature, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9 12L11 14L15 10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;