import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { StaggerContainer, StaggerItem } from './AnimationUtils';
import '../styles/DetailedTestimonials.css';

const DetailedTestimonials: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Sarah Mitchell',
      role: 'Chief Technology Officer',
      company: 'HealthTech Solutions',
      companyLogo: '🏥',
      rating: 5,
      testimonial: 'NEOTEQ transformed our diagnostic platform with cutting-edge AI. The reduction in diagnostic errors exceeded our expectations, and the team\'s expertise in healthcare technology was exceptional. The platform now processes thousands of scans daily with remarkable accuracy.',
      metrics: [
        { label: 'Error Reduction', value: '42%' },
        { label: 'Processing Speed', value: '35% Faster' },
        { label: 'Accuracy Rate', value: '98%' }
      ],
      industry: 'Healthcare',
      project: 'AI Diagnostic Platform',
      image: '👩‍⚕️'
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      role: 'VP of Engineering',
      company: 'FinTech Innovations',
      companyLogo: '💳',
      rating: 5,
      testimonial: 'Working with NEOTEQ was a game-changer. Their payment processing system handles over a million transactions daily with 99.99% uptime. The microservices architecture they built scales seamlessly, and we\'ve seen a 60% reduction in processing time.',
      metrics: [
        { label: 'Daily Transactions', value: '1.2M+' },
        { label: 'System Uptime', value: '99.99%' },
        { label: 'Processing Time', value: '60% Faster' }
      ],
      industry: 'FinTech',
      project: 'Payment Processing System',
      image: '👨‍💼'
    },
    {
      id: '3',
      name: 'Emily Chen',
      role: 'Digital Transformation Lead',
      company: 'Retail Dynamics',
      companyLogo: '🏪',
      rating: 5,
      testimonial: 'The omnichannel e-commerce platform NEOTEQ developed unified our entire retail operation. Online sales increased by 85%, and customer satisfaction ratings reached 4.8/5. Their understanding of retail technology and customer experience is outstanding.',
      metrics: [
        { label: 'Sales Increase', value: '85%' },
        { label: 'Customer Rating', value: '4.8/5' },
        { label: 'Inventory Turnover', value: '45%' }
      ],
      industry: 'Retail',
      project: 'Omnichannel E-Commerce',
      image: '👩‍💼'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="detailed-testimonials" aria-label="Client Success Stories">
      <div className="testimonials-container">
        <header className="testimonials-header">
          <h2 className="section-title">
            Client <span className="highlight">Success Stories</span>
          </h2>
          <p className="section-subtitle">
            Real results from businesses that transformed with NEOTEQ's AI solutions, digital transformation services, and enterprise software expertise
          </p>
        </header>

        <div className="testimonials-grid" role="list">
          <StaggerContainer staggerDelay={0.2}>
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={testimonial.id} direction="up" distance={50}>
                <motion.article
                  role="listitem"
                  className="testimonial-article"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <GlassCard className="testimonial-card" glowColor="#00E5FF">
                    <header className="testimonial-header">
                      <div className="company-info">
                        <motion.div 
                          className="company-logo" 
                          aria-hidden="true"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {testimonial.companyLogo}
                        </motion.div>
                        <div className="company-details">
                          <span className="company-name">{testimonial.company}</span>
                          <span className="industry-tag">{testimonial.industry}</span>
                        </div>
                      </div>
                      <motion.div 
                        className="testimonial-rating" 
                        aria-label={`${testimonial.rating} out of 5 stars`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                      >
                        {renderStars(testimonial.rating)}
                      </motion.div>
                    </header>

                    <div className="testimonial-content">
                      <motion.blockquote 
                        className="testimonial-quote" 
                        cite={`${testimonial.company} - ${testimonial.name}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {testimonial.testimonial}
                      </motion.blockquote>
                    </div>

                    <motion.div 
                      className="testimonial-metrics" 
                      role="group" 
                      aria-label="Project metrics"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {testimonial.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          className="metric-item"
                          whileHover={{ scale: 1.1, y: -3 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          <div className="metric-value">{metric.value}</div>
                          <div className="metric-label">{metric.label}</div>
                        </motion.div>
                      ))}
                    </motion.div>

                    <footer className="testimonial-footer">
                      <div className="author-info">
                        <motion.div 
                          className="author-avatar" 
                          aria-hidden="true"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {testimonial.image}
                        </motion.div>
                        <div className="author-details">
                          <h4>{testimonial.name}</h4>
                          <p>{testimonial.role}</p>
                          <span className="project-name">{testimonial.project}</span>
                        </div>
                      </div>
                    </footer>
                  </GlassCard>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default DetailedTestimonials;

