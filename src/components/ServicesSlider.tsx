import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlassCard from './GlassCard';
import NeonButton from './NeonButton';
import '../styles/ServicesSlider.css';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
  features: string[];
  details?: string;
}

const ServicesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const services: Service[] = [
    {
      id: 1,
      icon: '🤖',
      title: 'AI & LLM Platforms',
      description: 'Agentic AI, RAG, automation, and distributed intelligence.',
      color: '#00E5FF',
      features: ['Agentic AI', 'RAG Infrastructure', 'Automation', 'Distributed Intelligence'],
      details: 'Build intelligent systems that understand context, learn from data, and make autonomous decisions. Our AI platforms leverage cutting-edge LLM technology to create agentic systems capable of complex reasoning and task execution.'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'GPU Optimisation',
      description: 'Custom kernel-level performance engineering to reduce cost and improve throughput.',
      color: '#00B4D8',
      features: ['Custom CUDA Kernels', 'Performance Engineering', 'Cost Reduction', 'Throughput Improvement'],
      details: 'Maximize your GPU investment with custom kernel-level optimizations. We engineer solutions that reduce computational costs while dramatically improving throughput, enabling you to process more data faster and more efficiently.'
    },
    {
      id: 3,
      icon: '🌐',
      title: 'Web & App Engineering',
      description: 'MERN-based, secure, and scalable web ecosystems.',
      color: '#0096C7',
      features: ['MERN Stack', 'Secure Applications', 'Scalable Architecture', 'Enterprise-grade Development'],
      details: 'Create robust, scalable web applications using modern MERN stack technologies. Our engineering approach ensures security, performance, and scalability from day one, delivering enterprise-grade solutions that grow with your business.'
    },
    {
      id: 4,
      icon: '☁️',
      title: 'Cloud & Edge Deployments',
      description: 'Containerised AI solutions with adaptive scaling and real-time monitoring.',
      color: '#0077B6',
      features: ['Containerised Solutions', 'Adaptive Scaling', 'Real-time Monitoring', 'Edge Computing'],
      details: 'Deploy AI solutions anywhere with containerized architectures that scale automatically. Our cloud and edge deployment strategies ensure optimal performance, cost efficiency, and real-time monitoring across distributed environments.'
    },
    {
      id: 5,
      icon: '🚀',
      title: 'Product Engineering & Support',
      description: 'From concept to continuous delivery.',
      color: '#023E8A',
      features: ['Full-cycle Development', 'Architecture Design', 'Continuous Delivery', 'Ongoing Support'],
      details: 'Complete product engineering lifecycle from initial concept through continuous delivery. We design scalable architectures, implement best practices, and provide ongoing support to ensure your product evolves with your business needs.'
    }
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
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
    navigate('/services');
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="services" className="services-slider">
      <div className="services-slider-container">
        <motion.div 
          className="services-slider-header"
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

        <div className="slider-wrapper">
          <div className="slider-viewport">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="slide"
              >
                <GlassCard 
                  className="service-slide-card"
                  glowColor={services[currentIndex].color}
                  intensity="medium"
                >
                  <div className="service-slide-content">
                    <motion.div 
                      className="service-slide-icon"
                      style={{ backgroundColor: services[currentIndex].color }}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      {services[currentIndex].icon}
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {services[currentIndex].title}
                    </motion.h3>
                    
                    <motion.p
                      className="service-slide-description"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {services[currentIndex].description}
                    </motion.p>

                    {services[currentIndex].details && (
                      <motion.p
                        className="service-slide-details"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {services[currentIndex].details}
                      </motion.p>
                    )}
                    
                    <motion.div 
                      className="service-slide-features"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h4>Key Features:</h4>
                      <ul>
                        {services[currentIndex].features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
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
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <NeonButton 
                        variant="primary"
                        size="medium"
                        onClick={handleLearnMore}
                      >
                        Learn More
                      </NeonButton>
                    </motion.div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
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

export default ServicesSlider;

