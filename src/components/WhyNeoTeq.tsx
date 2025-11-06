import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { StaggerContainer, StaggerItem, FloatingAnimation } from './AnimationUtils';
import { AnimatedCounter } from './AdvancedAnimations';
import '../styles/WhyNeoTeq.css';

const WhyNeoTeq: React.FC = () => {
  const benefits = [
    {
      title: 'Proven Track Record',
      description: '15+ years of delivering cutting-edge technology solutions with measurable business impact.',
      icon: '🏆',
      metrics: '800+ Successful Projects',
      color: '#00E5FF'
    },
    {
      title: 'AI Expertise',
      description: 'Deep specialization in AI, ML, and GPU optimization with industry-leading proficiency levels.',
      icon: '🤖',
      metrics: '95% Average Proficiency',
      color: '#00B4D8'
    },
    {
      title: 'Global Reach',
      description: 'Serving clients across 35+ countries with 12 offices worldwide and multilingual support.',
      icon: '🌍',
      metrics: '35+ Countries',
      color: '#0096C7'
    },
    {
      title: 'Industry Recognition',
      description: 'Award-winning solutions recognized by leading technology organizations and industry bodies.',
      icon: '⭐',
      metrics: 'Multiple Awards',
      color: '#0077B6'
    }
  ];

  const metrics = [
    {
      value: '15+',
      label: 'Years of Experience',
      icon: '📅'
    },
    {
      value: '2,500+',
      label: 'Expert Professionals',
      icon: '👥'
    },
    {
      value: '800+',
      label: 'Happy Clients',
      icon: '😊'
    },
    {
      value: '1,200+',
      label: 'Products Delivered',
      icon: '🚀'
    }
  ];

  const awards = [
    {
      title: 'ISO 27001 Certified',
      description: 'Information Security Management',
      icon: '🔒'
    },
    {
      title: 'SOC 2 Type II',
      description: 'Security & Compliance',
      icon: '🛡️'
    },
    {
      title: 'GDPR Compliant',
      description: 'Data Protection Standards',
      icon: '⚖️'
    },
    {
      title: 'Industry Excellence',
      description: 'Technology Innovation Award',
      icon: '🏅'
    }
  ];

  return (
    <section className="why-neoteq" aria-label="Why Choose NEOTEQ">
      <div className="why-container">
        <header className="why-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why <span className="highlight">NEOTEQ</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The trusted partner for enterprise technology transformation with proven results, industry recognition, and cutting-edge AI solutions
          </motion.p>
        </header>

        {/* Key Metrics */}
        <section className="metrics-section" aria-label="Company metrics">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StaggerContainer staggerDelay={0.1}>
              <div className="metrics-grid" role="list">
                {metrics.map((metric, index) => (
                  <StaggerItem key={index} direction="zoom" distance={20}>
                    <article role="listitem" className="metric-article">
                      <GlassCard className="metric-card" glowColor="#00E5FF">
                        <FloatingAnimation amplitude={10} delay={index * 0.2}>
                          <div className="metric-icon">{metric.icon}</div>
                        </FloatingAnimation>
                        <motion.div 
                          className="metric-value"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            type: 'spring', 
                            stiffness: 200, 
                            damping: 15,
                            delay: index * 0.1 + 0.3
                          }}
                        >
                          <AnimatedCounter 
                            value={parseInt(metric.value.replace(/[^0-9]/g, ''))} 
                            suffix={metric.value.includes('+') ? '+' : ''}
                            className="animated-counter"
                          />
                        </motion.div>
                        <div className="metric-label">{metric.label}</div>
                      </GlassCard>
                    </article>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </motion.div>
        </section>

        {/* Benefits */}
        <section className="benefits-section" aria-label="Key benefits">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <StaggerContainer staggerDelay={0.15}>
              <div className="benefits-grid" role="list">
                {benefits.map((benefit, index) => (
                  <StaggerItem key={index} direction="up" distance={30}>
                    <article role="listitem" className="benefit-article">
                      <GlassCard
                        className="benefit-card"
                        glowColor={benefit.color}
                        whileHover={{
                          scale: 1.05,
                          y: -8,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <motion.div 
                          className="benefit-icon-wrapper"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="benefit-icon" style={{ backgroundColor: benefit.color }} aria-hidden="true">
                            {benefit.icon}
                          </div>
                        </motion.div>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                        <motion.div 
                          className="benefit-metric"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          <span>{benefit.metrics}</span>
                        </motion.div>
                      </GlassCard>
                    </article>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </motion.div>
        </section>

        {/* Awards & Certifications */}
        <section className="awards-section" aria-label="Awards and certifications">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="awards-title">Awards & Certifications</h3>
            <div className="awards-grid" role="list">
              {awards.map((award, index) => (
                <article key={index} role="listitem" className="award-article">
                  <GlassCard className="award-card" glowColor="#00E5FF">
                    <div className="award-icon" aria-hidden="true">{award.icon}</div>
                    <h4>{award.title}</h4>
                    <p>{award.description}</p>
                  </GlassCard>
                </article>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default WhyNeoTeq;

