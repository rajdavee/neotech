import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlassCard from './GlassCard';
import NeonButton from './NeonButton';
import '../styles/SolutionsSlider.css';

interface Solution {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
  features: string[];
  technologies: string[];
}

const SolutionsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const solutions: Solution[] = [
    {
      id: 'crm',
      icon: '👤',
      title: 'CRM Solutions',
      description: 'Comprehensive customer relationship management solutions that enhance customer engagement and drive sales growth.',
      color: '#00E5FF',
      features: [
        'Customer data management',
        'Sales pipeline tracking',
        'Marketing automation'
      ],
      technologies: ['Salesforce', 'Microsoft Dynamics', 'HubSpot', 'Custom CRM']
    },
    {
      id: 'ecommerce',
      icon: '🛍️',
      title: 'E-Commerce Solutions',
      description: 'End-to-end e-commerce platforms that deliver exceptional shopping experiences and drive online sales.',
      color: '#00B4D8',
      features: [
        'Product catalog management',
        'Shopping cart & checkout',
        'Payment integration'
      ],
      technologies: ['Shopify', 'Magento', 'WooCommerce', 'Custom E-commerce']
    },
    {
      id: 'erp',
      icon: '📊',
      title: 'ERP Solutions',
      description: 'Enterprise resource planning systems that integrate and streamline business processes across your organization.',
      color: '#0096C7',
      features: [
        'Financial management',
        'Supply chain management',
        'Business intelligence'
      ],
      technologies: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Custom ERP']
    },
    {
      id: 'cms',
      icon: '📝',
      title: 'Content Management',
      description: 'Powerful content management systems that enable seamless content creation, management, and delivery.',
      color: '#0077B6',
      features: [
        'Content creation & editing',
        'Multi-channel publishing',
        'SEO optimization'
      ],
      technologies: ['WordPress', 'Drupal', 'Contentful', 'Custom CMS']
    },
    {
      id: 'ai-platforms',
      icon: '🤖',
      title: 'AI Platforms',
      description: 'Intelligent AI platforms that automate processes, provide insights, and enhance decision-making capabilities.',
      color: '#023E8A',
      features: [
        'Machine learning models',
        'Natural language processing',
        'Predictive analytics'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Custom AI']
    },
    {
      id: 'cloud-infrastructure',
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure solutions that ensure high availability, security, and performance.',
      color: '#00E5FF',
      features: [
        'Cloud migration',
        'Auto-scaling',
        'Disaster recovery'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Hybrid Cloud']
    }
  ];

  const paginate = useCallback((newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === solutions.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? solutions.length - 1 : prevIndex - 1;
      }
    });
  }, [solutions.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, paginate]);

  const handleLearnMore = () => {
    navigate(`/solutions/${solutions[currentIndex].id}`);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Calculate which 3 cards to show (current, next, prev)
  const getVisibleCards = () => {
    const cards = [];
    const prevIndex = currentIndex === 0 ? solutions.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === solutions.length - 1 ? 0 : currentIndex + 1;
    
    cards.push({ solution: solutions[prevIndex], position: 'left', index: prevIndex });
    cards.push({ solution: solutions[currentIndex], position: 'center', index: currentIndex });
    cards.push({ solution: solutions[nextIndex], position: 'right', index: nextIndex });
    
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
            <span className="title-accent">Solutions</span>
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
                    glowColor={card.solution.color}
                    intensity="medium"
                  >
                    <div className="solution-card-content">
                      <motion.div 
                        className="solution-icon"
                        style={{ backgroundColor: card.solution.color }}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        {card.solution.icon}
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {card.solution.title}
                      </motion.h3>
                      
                      <motion.p
                        className="solution-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {card.solution.description}
                      </motion.p>

                      <motion.div 
                        className="solution-features"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <ul>
                          {card.solution.features.map((feature, index) => (
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
                        {card.solution.technologies.map((tech, index) => (
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
            aria-label="Previous solution"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            className="slider-nav slider-nav-next"
            onClick={() => paginate(1)}
            aria-label="Next solution"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="slider-dots">
            {solutions.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to solution ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSlider;

