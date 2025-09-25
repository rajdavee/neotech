import React from 'react';
import { Link } from 'react-router-dom';
import { companyStats, leadership, companyValues, globalOffices, testimonials } from '../data/content';
import '../styles/AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Neotaq</h1>
            <p>
              We are a leading technology company dedicated to driving digital transformation
              and innovation for businesses worldwide. With deep expertise and a commitment to excellence,
              we help organizations unlock their full potential through cutting-edge technology solutions.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="number">{companyStats.yearsOfExperience}</span>
                <span className="label">Years of Excellence</span>
              </div>
              <div className="hero-stat">
                <span className="number">{companyStats.clients}</span>
                <span className="label">Satisfied Clients</span>
              </div>
              <div className="hero-stat">
                <span className="number">{companyStats.countries}</span>
                <span className="label">Countries Served</span>
              </div>
              <div className="hero-stat">
                <span className="number">{companyStats.talentPool}</span>
                <span className="label">Expert Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                To empower businesses with innovative technology solutions that drive growth,
                enhance efficiency, and create lasting competitive advantages in an ever-evolving
                digital landscape.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">🔭</div>
              <h2>Our Vision</h2>
              <p>
                To be the world's most trusted technology partner, recognized for delivering
                exceptional solutions that transform businesses and improve lives through the
                power of innovation and digital excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="company-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do and shape our company culture</p>
          </div>
          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership-team">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Leadership</h2>
            <p>Experienced leaders driving innovation and excellence in everything we do</p>
          </div>
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <img src={leader.image} alt={leader.name} />
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="position">{leader.position}</p>
                  <p className="bio">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="global-presence">
        <div className="container">
          <div className="section-header">
            <h2>Global Presence</h2>
            <p>Serving clients worldwide with local expertise and global capabilities</p>
          </div>
          <div className="offices-grid">
            {globalOffices.map((office, index) => (
              <div key={index} className="office-card">
                <div className="office-icon">🏢</div>
                <h3>{office.city}, {office.country}</h3>
                <div className="office-details">
                  <p className="address">{office.address}</p>
                  <p className="contact">
                    <span className="phone">{office.phone}</span>
                    <span className="email">{office.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="company-timeline">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Key milestones in our growth and evolution as a technology leader</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2008</div>
              <div className="timeline-content">
                <h3>Company Founded</h3>
                <p>Started as a small team with a vision to transform businesses through technology</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2012</div>
              <div className="timeline-content">
                <h3>Global Expansion</h3>
                <p>Opened our first international office and expanded our service offerings</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h3>1000+ Projects</h3>
                <p>Reached a major milestone of 1000+ successful project implementations</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Digital Innovation Hub</h3>
                <p>Established dedicated centers for AI, ML, and emerging technology research</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>Industry Recognition</h3>
                <p>Awarded "Technology Partner of the Year" by leading industry associations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="about-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Trusted by businesses worldwide for delivering exceptional results</p>
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

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Neotaq?</h2>
            <p>The advantages that set us apart in the competitive technology landscape</p>
          </div>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">🏆</div>
              <h3>Proven Track Record</h3>
              <p>Over {companyStats.yearsOfExperience} years of delivering successful projects across diverse industries</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">👥</div>
              <h3>Expert Team</h3>
              <p>A diverse team of {companyStats.talentPool}+ skilled professionals with deep technical expertise</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">🌐</div>
              <h3>Global Reach</h3>
              <p>Presence in {companyStats.countries}+ countries with local support and global delivery capabilities</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">🚀</div>
              <h3>Innovation Focus</h3>
              <p>Continuous investment in R&D and emerging technologies to stay ahead of the curve</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">🔒</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality processes and industry certifications ensuring excellence in delivery</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">🤝</div>
              <h3>Partnership Approach</h3>
              <p>Long-term partnerships built on trust, transparency, and mutual success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Partner With Us?</h2>
            <p>Let's discuss how we can help transform your business with innovative technology solutions</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Get In Touch</Link>
              <Link to="/careers" className="cta-button secondary">Join Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;