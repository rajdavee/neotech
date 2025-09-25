import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { companyStats, testimonials, services as servicesData, industries } from '../data/content';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />

      {/* Company Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{companyStats.yearsOfExperience}</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{companyStats.talentPool}</div>
              <div className="stat-label">Talented Professionals</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{companyStats.clients}</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{companyStats.countries}</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{companyStats.offices}</div>
              <div className="stat-label">Global Offices</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{companyStats.products}</div>
              <div className="stat-label">Products Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive technology solutions to drive your digital transformation</p>
          </div>
          <div className="services-grid">
            {servicesData.slice(0, 6).map((service) => (
              <Link to={`/services/${service.id}`} key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.shortDescription}</p>
                <div className="service-arrow">→</div>
              </Link>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="cta-button">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="industries-overview">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Delivering industry-specific solutions across diverse sectors</p>
          </div>
          <div className="industries-grid">
            {industries.slice(0, 6).map((industry) => (
              <Link to={`/industries/${industry.id}`} key={industry.id} className="industry-card">
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </Link>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/industries" className="cta-button">View All Industries</Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Trusted by businesses worldwide</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
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

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how we can help you achieve your digital transformation goals</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Get Started</Link>
              <Link to="/services" className="cta-button secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;