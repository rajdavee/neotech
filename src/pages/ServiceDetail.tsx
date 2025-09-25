import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services, testimonials } from '../data/content';
import '../styles/ServiceDetail.css';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // Get related services (exclude current service)
  const relatedServices = services.filter(s => s.id !== serviceId).slice(0, 3);

  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-detail-hero">
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/services">Services</Link>
              <span>/</span>
              <span>{service.name}</span>
            </div>
            <div className="hero-icon">{service.icon}</div>
            <h1>{service.name}</h1>
            <p className="hero-description">{service.fullDescription}</p>
            <div className="hero-actions">
              <Link to="/contact" className="cta-button primary">Get Started</Link>
              <Link to="/contact" className="cta-button secondary">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="service-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Key Benefits</h2>
            <p>Discover how {service.name} can transform your business operations and drive growth</p>
          </div>
          <div className="benefits-grid">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">✓</div>
                <h3>{benefit}</h3>
                <p>Experience enhanced performance and efficiency with our proven methodologies.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="service-technologies">
        <div className="container">
          <div className="section-header">
            <h2>Technologies We Use</h2>
            <p>Cutting-edge tools and frameworks that power our {service.name} solutions</p>
          </div>
          <div className="technologies-grid">
            {service.technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">⚡</div>
                <h4>{tech}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <h2>Our Implementation Process</h2>
            <p>A structured approach to deliver exceptional {service.name} solutions</p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Discovery & Requirements</h3>
                <p>We analyze your current systems and understand your specific business needs and goals.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Strategic Planning</h3>
                <p>Create detailed project roadmap with clear milestones and deliverables.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Implementation</h3>
                <p>Execute the solution using agile methodologies with regular client feedback.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Testing & Quality Assurance</h3>
                <p>Comprehensive testing to ensure reliability, performance, and security.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h3>Deployment & Support</h3>
                <p>Smooth launch with ongoing maintenance and continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="service-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Success stories from businesses that have transformed with our {service.name} solutions</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.testimonial}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                    <p className="company">{testimonial.company}</p>
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="related-services">
        <div className="container">
          <div className="section-header">
            <h2>Related Services</h2>
            <p>Explore other services that complement your {service.name} solution</p>
          </div>
          <div className="related-services-grid">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.id}
                to={`/services/${relatedService.id}`}
                className="related-service-card"
              >
                <div className="service-icon">{relatedService.icon}</div>
                <h3>{relatedService.name}</h3>
                <p>{relatedService.shortDescription}</p>
                <div className="service-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started with {service.name}?</h2>
            <p>Let's discuss how our {service.name} solutions can help transform your business</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Start Your Project</Link>
              <Link to="/services" className="cta-button secondary">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;