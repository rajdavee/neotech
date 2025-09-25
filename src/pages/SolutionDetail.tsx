import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { solutions, testimonials, industries } from '../data/content';
import '../styles/SolutionDetail.css';

const SolutionDetail: React.FC = () => {
  const { solutionId } = useParams<{ solutionId: string }>();

  const solution = solutions.find(s => s.id === solutionId);

  if (!solution) {
    return <Navigate to="/404" replace />;
  }

  // Get related industries
  const relatedIndustries = industries.slice(0, 3);

  return (
    <div className="solution-detail">
      {/* Hero Section */}
      <section className="solution-detail-hero">
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/solutions">Solutions</Link>
              <span>/</span>
              <span>{solution.name}</span>
            </div>
            <div className="hero-icon">{solution.icon}</div>
            <h1>{solution.name}</h1>
            <p className="hero-description">{solution.description}</p>
            <div className="hero-actions">
              <Link to="/contact" className="cta-button primary">Get This Solution</Link>
              <Link to="/contact" className="cta-button secondary">Schedule Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="solution-features">
        <div className="container">
          <div className="section-header">
            <h2>Key Features</h2>
            <p>Comprehensive functionality designed to meet your business needs</p>
          </div>
          <div className="features-grid">
            {solution.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">✨</div>
                <h3>{feature}</h3>
                <p>Advanced functionality that enhances your business operations and user experience.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="solution-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Business Benefits</h2>
            <p>Measurable impact on your organization's performance and growth</p>
          </div>
          <div className="benefits-grid">
            {solution.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">📈</div>
                <h3>{benefit}</h3>
                <p>Drive significant improvements in efficiency, productivity, and business outcomes.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="solution-technologies">
        <div className="container">
          <div className="section-header">
            <h2>Technology Stack</h2>
            <p>Built with industry-leading technologies and frameworks</p>
          </div>
          <div className="technologies-grid">
            {solution.technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">⚡</div>
                <h4>{tech}</h4>
                <p>Enterprise-grade technology ensuring reliability, scalability, and performance.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="implementation-timeline">
        <div className="container">
          <div className="section-header">
            <h2>Implementation Process</h2>
            <p>Structured approach to ensure successful deployment and adoption</p>
          </div>
          <div className="timeline-steps">
            <div className="timeline-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Discovery & Planning</h3>
                <p>Analyze requirements and create detailed implementation roadmap</p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>System Configuration</h3>
                <p>Configure the solution to match your specific business processes</p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Data Migration</h3>
                <p>Secure transfer of existing data with validation and testing</p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Training & Go-Live</h3>
                <p>User training and smooth transition to the new solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="solution-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Success stories from businesses using our {solution.name}</p>
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

      {/* Industries Section */}
      <section className="solution-industries">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Our {solution.name} solution is trusted across various industries</p>
          </div>
          <div className="industries-grid">
            {relatedIndustries.map((industry) => (
              <Link
                key={industry.id}
                to={`/industries/${industry.id}`}
                className="industry-card"
              >
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="solution-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Implement {solution.name}?</h2>
            <p>Let's discuss how this solution can transform your business operations</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Get Started Now</Link>
              <Link to="/solutions" className="cta-button secondary">View All Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetail;