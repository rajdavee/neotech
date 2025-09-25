import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/content';
import '../styles/ServicesPage.css';

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p>
              Comprehensive technology solutions designed to accelerate your digital transformation
              and drive business growth through innovation and expertise.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="number">500+</span>
                <span className="label">Projects Delivered</span>
              </div>
              <div className="hero-stat">
                <span className="number">15+</span>
                <span className="label">Technology Domains</span>
              </div>
              <div className="hero-stat">
                <span className="number">24/7</span>
                <span className="label">Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.name}</h3>
                </div>
                <p className="service-description">{service.shortDescription}</p>

                <div className="service-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {service.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="tech-tag more">+{service.technologies.length - 4} more</span>
                    )}
                  </div>
                </div>

                <div className="service-actions">
                  <Link to={`/services/${service.id}`} className="learn-more-btn">
                    Learn More
                  </Link>
                  <Link to="/contact" className="get-quote-btn">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Neotaq for Your Technology Needs?</h2>
            <p>We combine deep technical expertise with industry knowledge to deliver exceptional results</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Proven Expertise</h3>
              <p>15+ years of experience delivering complex technology solutions across diverse industries</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Agile Delivery</h3>
              <p>Fast-paced development cycles with continuous integration and deployment practices</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3>Security First</h3>
              <p>Built-in security measures and compliance with industry standards and regulations</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Scalable Solutions</h3>
              <p>Architecture designed to grow with your business and handle increasing demands</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌐</div>
              <h3>Global Reach</h3>
              <p>International presence with local expertise and 24/7 support across time zones</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Innovation Focus</h3>
              <p>Cutting-edge technologies and forward-thinking approaches to solve business challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="our-process">
        <div className="container">
          <div className="section-header">
            <h2>Our Development Process</h2>
            <p>A structured approach that ensures successful project delivery and client satisfaction</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery & Analysis</h3>
              <p>Understanding your business requirements, challenges, and goals through detailed analysis</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Strategy & Planning</h3>
              <p>Creating comprehensive project roadmap with timelines, milestones, and resource allocation</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Design & Development</h3>
              <p>Agile development process with regular reviews, testing, and client feedback integration</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Testing & Quality Assurance</h3>
              <p>Comprehensive testing phases including functional, performance, and security testing</p>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <h3>Deployment & Launch</h3>
              <p>Smooth deployment with minimal downtime and comprehensive launch support</p>
            </div>
            <div className="process-step">
              <div className="step-number">06</div>
              <h3>Support & Maintenance</h3>
              <p>Ongoing support, monitoring, updates, and continuous improvement services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how our services can help transform your business and drive growth</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Get Started Today</Link>
              <Link to="/about" className="cta-button secondary">Learn About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;