import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import NeonButton from './NeonButton';
import { StaggerContainer, StaggerItem } from './AnimationUtils';
import '../styles/IndustriesWeTransform.css';

const IndustriesWeTransform: React.FC = () => {
  const navigate = useNavigate();

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: '🏥',
      color: '#28a745',
      description: 'Revolutionizing healthcare delivery with AI-powered diagnostic tools, telemedicine platforms, and HIPAA-compliant solutions.',
      stats: '50+ Projects',
      keySolutions: ['Telemedicine', 'AI Diagnostics', 'EHR Systems'],
      link: '/industries/healthcare'
    },
    {
      id: 'fintech',
      name: 'FinTech',
      icon: '💳',
      color: '#007bff',
      description: 'Transforming financial services with secure payment processing, digital banking platforms, and blockchain solutions.',
      stats: '100+ Projects',
      keySolutions: ['Payment Gateways', 'Digital Banking', 'Blockchain'],
      link: '/industries/financial-services'
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce',
      icon: '🛒',
      color: '#fd7e14',
      description: 'Building scalable e-commerce platforms with AI recommendations, omnichannel experiences, and seamless integrations.',
      stats: '150+ Projects',
      keySolutions: ['E-Commerce Platforms', 'AI Recommendations', 'Omnichannel'],
      link: '/industries/ecommerce-retail'
    },
    {
      id: 'education',
      name: 'Education',
      icon: '🎓',
      color: '#17a2b8',
      description: 'Enabling digital transformation in education with innovative learning management systems and virtual classrooms.',
      stats: '75+ Projects',
      keySolutions: ['LMS Platforms', 'Virtual Classrooms', 'E-Learning'],
      link: '/industries/education'
    },
    {
      id: 'retail',
      name: 'Retail Technology',
      icon: '🏪',
      color: '#20c997',
      description: 'Modernizing retail operations with smart inventory management, customer analytics, and omnichannel solutions.',
      stats: '120+ Projects',
      keySolutions: ['Inventory Management', 'Customer Analytics', 'POS Systems'],
      link: '/industries/ecommerce-retail'
    },
    {
      id: 'gpu-computing',
      name: 'GPU Computing',
      icon: '⚡',
      color: '#6f42c1',
      description: 'Leveraging GPU acceleration for high-performance computing, AI/ML workloads, and graphics-intensive applications.',
      stats: '80+ Projects',
      keySolutions: ['CUDA Optimization', 'ML Acceleration', 'HPC Solutions'],
      link: '/capabilities'
    }
  ];

  const handleExplore = (link: string) => {
    navigate(link);
  };

  return (
    <section className="industries-we-transform" aria-label="Industries We Transform">
      <div className="industries-container">
        <header className="industries-header">
          <h2 className="section-title">
            Industries We <span className="highlight">Transform</span>
          </h2>
          <p className="section-subtitle">
            Empowering businesses across diverse sectors with cutting-edge technology solutions, AI-powered platforms, and digital transformation services
          </p>
        </header>

        <div className="industries-grid" role="list">
          <StaggerContainer staggerDelay={0.15}>
            {industries.map((industry) => (
              <StaggerItem key={industry.id} direction="up" distance={40}>
                <article
                  role="listitem"
                  className="industry-article"
                >
                  <GlassCard
                    className="industry-card"
                    glowColor={industry.color}
                    hoverScale={true}
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }
                    }}
                  >
                    <div className="industry-card-content">
                      <motion.div 
                        className="industry-icon-wrapper" 
                        style={{ background: `linear-gradient(135deg, ${industry.color}15 0%, ${industry.color}05 100%)` }}
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="industry-icon" style={{ backgroundColor: industry.color }} aria-hidden="true">
                          {industry.icon}
                        </div>
                      </motion.div>
                      
                      <div className="industry-info">
                        <h3>{industry.name} Technology Solutions</h3>
                        <p className="industry-description">{industry.description}</p>
                        
                        <div className="industry-stats">
                          <motion.span 
                            className="stats-badge"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          >
                            {industry.stats}
                          </motion.span>
                        </div>
                        
                        <ul className="industry-solutions">
                          {industry.keySolutions.map((solution, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <span className="solution-tag">{solution}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <footer className="industry-card-footer">
                        <NeonButton
                          variant="secondary"
                          size="small"
                          onClick={() => handleExplore(industry.link)}
                          aria-label={`Explore ${industry.name} technology solutions`}
                        >
                          Explore {industry.name}
                        </NeonButton>
                      </footer>
                    </div>
                  </GlassCard>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeTransform;

