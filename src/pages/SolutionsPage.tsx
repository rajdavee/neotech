import React from 'react';
import { Link } from 'react-router-dom';
import { solutions, companyStats, testimonials } from '../data/content';
import '../styles/SolutionsPage.css';

const SolutionsPage: React.FC = () => {
  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Solutions</h1>
            <p>
              Comprehensive business solutions designed to streamline operations, enhance productivity,
              and drive digital transformation across your organization.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="number">{companyStats.products}</span>
                <span className="label">Solutions Delivered</span>
              </div>
              <div className="hero-stat">
                <span className="number">{companyStats.clients}</span>
                <span className="label">Satisfied Clients</span>
              </div>
              <div className="hero-stat">
                <span className="number">99%</span>
                <span className="label">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-grid-section">
        <div className="container">
          <div className="solutions-grid">
            {solutions.map((solution) => (
              <div key={solution.id} className="solution-card">
                <div className="solution-header">
                  <div className="solution-icon">{solution.icon}</div>
                  <h3>{solution.name}</h3>
                </div>
                <p className="solution-description">{solution.description}</p>

                <div className="solution-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {solution.features.slice(0, 4).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                    {solution.features.length > 4 && (
                      <li className="more-features">+{solution.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>

                <div className="solution-benefits">
                  <h4>Benefits:</h4>
                  <div className="benefit-tags">
                    {solution.benefits.slice(0, 3).map((benefit, index) => (
                      <span key={index} className="benefit-tag">{benefit}</span>
                    ))}
                    {solution.benefits.length > 3 && (
                      <span className="benefit-tag more">+{solution.benefits.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="solution-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {solution.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                    {solution.technologies.length > 3 && (
                      <span className="tech-tag more">+{solution.technologies.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="solution-actions">
                  <Link to={`/solutions/${solution.id}`} className="learn-more-btn">
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

      {/* Why Choose Our Solutions */}
      <section className="why-choose-solutions">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Neotaq Solutions?</h2>
            <p>Proven methodology and cutting-edge technology to deliver exceptional business outcomes</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Business-Focused</h3>
              <p>Solutions designed to address real business challenges and drive measurable results</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <h3>Customizable</h3>
              <p>Flexible solutions that can be tailored to your specific requirements and workflows</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚙️</div>
              <h3>Scalable Architecture</h3>
              <p>Built to grow with your business and handle increasing demands seamlessly</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3>Secure & Compliant</h3>
              <p>Enterprise-grade security with compliance to industry standards and regulations</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Fast Implementation</h3>
              <p>Rapid deployment with minimal disruption to your existing operations</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Analytics & Insights</h3>
              <p>Built-in analytics and reporting to track performance and optimize processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="implementation-process">
        <div className="container">
          <div className="section-header">
            <h2>Our Solution Implementation Process</h2>
            <p>A proven methodology that ensures successful solution deployment and adoption</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Assessment & Planning</h3>
              <p>Comprehensive analysis of your current systems and business requirements</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Solution Design</h3>
              <p>Custom solution architecture tailored to your specific needs and objectives</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Development & Configuration</h3>
              <p>Agile development process with regular reviews and stakeholder feedback</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Testing & Quality Assurance</h3>
              <p>Rigorous testing including functional, performance, and user acceptance testing</p>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <h3>Deployment & Training</h3>
              <p>Smooth deployment with comprehensive user training and documentation</p>
            </div>
            <div className="process-step">
              <div className="step-number">06</div>
              <h3>Support & Optimization</h3>
              <p>Ongoing support, maintenance, and continuous improvement services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="client-success">
        <div className="container">
          <div className="section-header">
            <h2>Client Success Stories</h2>
            <p>See how our solutions have transformed businesses across different industries</p>
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

      {/* Solution Categories */}
      <section className="solution-categories">
        <div className="container">
          <div className="section-header">
            <h2>Solution Categories</h2>
            <p>Explore our comprehensive range of business solutions organized by category</p>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">💼</div>
              <h3>Enterprise Solutions</h3>
              <p>Comprehensive business management systems including ERP, CRM, and workflow automation</p>
              <div className="category-solutions">
                <span>ERP Systems</span>
                <span>CRM Platforms</span>
                <span>Business Intelligence</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-icon">📱</div>
              <h3>Digital Platforms</h3>
              <p>Modern digital solutions for customer engagement and online business operations</p>
              <div className="category-solutions">
                <span>E-commerce Platforms</span>
                <span>Mobile Applications</span>
                <span>Web Portals</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-icon">🤖</div>
              <h3>Automation Solutions</h3>
              <p>Intelligent automation tools to streamline processes and improve efficiency</p>
              <div className="category-solutions">
                <span>RPA Solutions</span>
                <span>Workflow Automation</span>
                <span>AI-Powered Tools</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-icon">📊</div>
              <h3>Analytics & Insights</h3>
              <p>Data-driven solutions for business intelligence and performance optimization</p>
              <div className="category-solutions">
                <span>Business Analytics</span>
                <span>Performance Dashboards</span>
                <span>Reporting Tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="solutions-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how our solutions can help streamline your operations and drive growth</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Get Started Today</Link>
              <Link to="/services" className="cta-button secondary">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;