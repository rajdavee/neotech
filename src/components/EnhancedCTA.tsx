import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import NeonButton from './NeonButton';
import { FloatingAnimation } from './AnimationUtils';
import '../styles/EnhancedCTA.css';

const EnhancedCTA: React.FC = () => {
  const navigate = useNavigate();

  const handleRequestDemo = () => {
    navigate('/contact');
  };

  const handleViewPortfolio = () => {
    navigate('/portfolio');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleScheduleCall = () => {
    window.location.href = 'tel:+911234567890';
  };

  return (
    <section className="enhanced-cta" aria-label="Call to Action">
      <div className="cta-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="cta-main-card" glowColor="#00E5FF">
            <div className="cta-content">
              <header className="cta-header">
                <motion.h2
                  className="cta-title"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Ready to Transform Your <span className="highlight">Business?</span>
                </motion.h2>
                <motion.p
                  className="cta-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Join hundreds of successful companies that have accelerated their growth with NEOTEQ's cutting-edge AI solutions, digital transformation services, and enterprise technology expertise.
                </motion.p>
              </header>

              <nav className="cta-actions" aria-label="Action buttons">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <NeonButton
                    variant="primary"
                    size="large"
                    onClick={handleRequestDemo}
                    className="cta-button-primary"
                    aria-label="Request a demo of our technology solutions"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    Request Demo
                  </NeonButton>
                </motion.div>

                {[
                  { onClick: handleViewPortfolio, label: 'View our portfolio of successful projects', icon: 'portfolio', text: 'View Portfolio' },
                  { onClick: handleScheduleCall, label: 'Schedule a call with our technology consultants', icon: 'call', text: 'Schedule Call' },
                  { onClick: handleLearnMore, label: 'Learn more about our technology services', icon: 'info', text: 'Learn More' }
                ].map((button, index) => (
                  <motion.div
                    key={button.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <NeonButton
                      variant="secondary"
                      size="large"
                      onClick={button.onClick}
                      className="cta-button-secondary"
                      aria-label={button.label}
                    >
                      {button.icon === 'portfolio' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <line x1="3" y1="9" x2="21" y2="9"/>
                          <line x1="9" y1="21" x2="9" y2="9"/>
                        </svg>
                      )}
                      {button.icon === 'call' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      )}
                      {button.icon === 'info' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" y1="16" x2="12" y2="12"/>
                          <line x1="12" y1="8" x2="12.01" y2="8"/>
                        </svg>
                      )}
                      {button.text}
                    </NeonButton>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                className="cta-trust-indicators" 
                role="group" 
                aria-label="Trust indicators"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {[
                  { icon: '✓', text: 'Free Consultation' },
                  { icon: '✓', text: 'No Commitment' },
                  { icon: '✓', text: 'Expert Team' }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="trust-item"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.7 + index * 0.1,
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="trust-icon" aria-hidden="true">{item.icon}</span>
                    <span className="trust-text">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          className="cta-side-cards"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <article className="cta-side-card-wrapper">
            <GlassCard className="cta-side-card" glowColor="#00B4D8">
              <div className="side-card-content">
                <FloatingAnimation amplitude={15} delay={0}>
                  <div className="side-card-icon" aria-hidden="true">📞</div>
                </FloatingAnimation>
                <h3>Talk to an Expert</h3>
                <p>Schedule a call with our technology consultants and AI specialists</p>
                <NeonButton variant="secondary" size="small" onClick={handleScheduleCall} aria-label="Call our technology experts">
                  Call Now
                </NeonButton>
              </div>
            </GlassCard>
          </article>

          <article className="cta-side-card-wrapper">
            <GlassCard className="cta-side-card" glowColor="#0096C7">
              <div className="side-card-content">
                <FloatingAnimation amplitude={15} delay={0.5}>
                  <div className="side-card-icon" aria-hidden="true">📧</div>
                </FloatingAnimation>
                <h3>Get in Touch</h3>
                <p>Drop us a message and we'll respond within 24 hours with expert guidance</p>
                <NeonButton variant="secondary" size="small" onClick={handleRequestDemo} aria-label="Contact us for technology solutions">
                  Contact Us
                </NeonButton>
              </div>
            </GlassCard>
          </article>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedCTA;

