import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlassCard from './GlassCard';
import NeonButton from './NeonButton';
import '../styles/SolutionsSlider.css';

interface Service {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  color: string;
  features: string[];
  technologies: string[];
}

const ServicesSliderPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const services: Service[] = [
    {
      id: 'ai-gpu-optimization',
      icon: '⚡',
      title: 'AI GPU Optimization & Attestation',
      tagline: 'Maximize Performance, Minimize Cost',
      description: 'Custom CUDA/AMD kernel-level optimization for deploying 70B+ parameter models efficiently on limited GPU infrastructure. Includes TensorRT optimization, LLM fine-tuning, and nvTrust attestation for secure AI deployments.',
      color: '#00E5FF',
      features: [
        'Kernel-level GPU tuning',
        'LLM fine-tuning & quantization',
        'GPU Attestation with nvTrust'
      ],
      technologies: ['CUDA', 'TensorRT', 'PyTorch', 'Triton', 'ONNX']
    },
    {
      id: 'rag-applications',
      icon: '🤖',
      title: 'RAG Applications',
      tagline: 'Intelligent Information Retrieval',
      description: 'Interactive AI systems combining retrieval, reasoning, and response—creating intelligent agents grounded in your data.',
      color: '#00B4D8',
      features: [
        'Text → Voice multilingual AI',
        'Text → Video generation',
        'Meeting summaries & insights'
      ],
      technologies: ['LangChain', 'Hugging Face', 'OpenAI', 'Nuclia']
    },
    {
      id: 'healthtech',
      icon: '🏥',
      title: 'HealthTech',
      tagline: 'HIPAA-Compliant Healthcare Solutions',
      description: 'AI-powered healthcare platforms that automate workflows, enhance patient care, and maintain HIPAA compliance.',
      color: '#0096C7',
      features: [
        'Multi-location hospital management',
        'Real-time patient monitoring',
        'Predictive analytics'
      ],
      technologies: ['99.9% uptime', 'HIPAA-compliant', 'IoT integration']
    },
    {
      id: 'foodtech',
      icon: '🍔',
      title: 'FoodTech',
      tagline: 'Smart Supply Chain & Quality Assurance',
      description: 'AI-powered demand forecasting, blockchain traceability, and quality monitoring for food supply chains. Reduce waste, ensure food safety, and optimize inventory management.',
      color: '#0077B6',
      features: [
        'AI demand forecasting',
        'Blockchain traceability',
        'Quality monitoring'
      ],
      technologies: ['Python', 'Blockchain', 'IoT Sensors', 'Machine Learning']
    },
    {
      id: 'environmenttech',
      icon: '🌱',
      title: 'EnvironmentTech',
      tagline: 'Sustainable Technology Solutions',
      description: 'Emission optimization, ESG reporting, and environmental monitoring systems. Help organizations reduce their carbon footprint and achieve sustainability goals through data-driven insights.',
      color: '#023E8A',
      features: [
        'Emission optimization',
        'ESG reporting',
        'Environmental monitoring'
      ],
      technologies: ['Python', 'AWS', 'Analytics', 'IoT', 'ESG Frameworks']
    },
    {
      id: 'retail-tech',
      icon: '👔',
      title: 'Retail Tech for Garments',
      tagline: 'Next-Gen Fashion Retail',
      description: 'Visual search, virtual try-on, and smart inventory management for garment retail. Enhance customer experience with AI-powered recommendations and reduce returns through virtual fitting.',
      color: '#03045E',
      features: [
        'Visual search',
        'Virtual try-on',
        'Smart inventory'
      ],
      technologies: ['Computer Vision', 'AR/VR', 'Machine Learning', 'E-commerce']
    }
  ];

  const paginate = useCallback((newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === services.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? services.length - 1 : prevIndex - 1;
      }
    });
  }, [services.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, paginate]);

  const handleLearnMore = () => {
    navigate(`/services/${services[currentIndex].id}`);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Calculate which 3 cards to show (current, next, prev)
  const getVisibleCards = () => {
    const cards = [];
    const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;
    
    cards.push({ service: services[prevIndex], position: 'left', index: prevIndex });
    cards.push({ service: services[currentIndex], position: 'center', index: currentIndex });
    cards.push({ service: services[nextIndex], position: 'right', index: nextIndex });
    
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="solutions-slider-section">
      <div className="solutions-slider-container">
        <motion.div 
          className="solutions-slider-header"
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
            Comprehensive AI solutions tailored to transform your industry
          </p>
        </motion.div>

        <div className="slider-wrapper">
          <div className="slider-viewport">
            <div className="solutions-cards-grid">
              {visibleCards.map((card, idx) => (
                <motion.div
                  key={`${card.index}-${currentIndex}`}
                  className={`solution-card ${card.position}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: card.position === 'center' ? 1 : 0.6,
                    scale: card.position === 'center' ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard 
                    className="solution-card-inner"
                    glowColor={card.service.color}
                    intensity="medium"
                  >
                    <div className="solution-card-content">
                      <motion.div 
                        className="solution-icon"
                        style={{ backgroundColor: card.service.color }}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        {card.service.icon}
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {card.service.title}
                      </motion.h3>
                      
                      <motion.p
                        className="solution-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {card.service.description}
                      </motion.p>

                      <motion.div 
                        className="solution-features"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <ul>
                          {card.service.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div 
                        className="solution-technologies"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        {card.service.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </motion.div>

                      {card.position === 'center' && (
                        <motion.div
                          className="solution-button-wrapper"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 }}
                        >
                          <NeonButton 
                            variant="primary"
                            size="medium"
                            onClick={handleLearnMore}
                            className="solution-learn-more-btn"
                          >
                            Learn More
                          </NeonButton>
                        </motion.div>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            className="slider-nav slider-nav-prev"
            onClick={() => paginate(-1)}
            aria-label="Previous service"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            className="slider-nav slider-nav-next"
            onClick={() => paginate(1)}
            aria-label="Next service"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="slider-dots">
            {services.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSliderPage;

