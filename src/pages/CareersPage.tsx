import React from 'react';
import { Link } from 'react-router-dom';
import { companyValues, globalOffices } from '../data/content';
import '../styles/CareersPage.css';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: 'senior-react-developer',
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      level: 'Senior',
      description: 'Join our frontend team to build cutting-edge web applications using React, TypeScript, and modern tools.'
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote',
      type: 'Full-time',
      level: 'Senior',
      description: 'Design and implement scalable cloud solutions for our enterprise clients using AWS, Azure, and GCP.'
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'Product',
      location: 'London, UK',
      type: 'Full-time',
      level: 'Mid-level',
      description: 'Lead product strategy and roadmap for our AI-powered business solutions platform.'
    },
    {
      id: 'ux-designer',
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Bangalore, India',
      type: 'Full-time',
      level: 'Mid-level',
      description: 'Create intuitive and engaging user experiences for our suite of enterprise applications.'
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Berlin, Germany',
      type: 'Full-time',
      level: 'Senior',
      description: 'Build and maintain CI/CD pipelines, container orchestration, and infrastructure automation.'
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      department: 'AI/ML',
      location: 'New York, NY',
      type: 'Full-time',
      level: 'Mid-level',
      description: 'Develop machine learning models and data analytics solutions for our enterprise clients.'
    }
  ];

  const benefits = [
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: '💰',
      title: 'Competitive Compensation',
      description: 'Competitive salary, equity options, and performance-based bonuses'
    },
    {
      icon: '🌴',
      title: 'Flexible Time Off',
      description: 'Unlimited PTO policy and flexible work arrangements'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Training budget, conferences, certifications, and skill development programs'
    },
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Flexible remote work options and modern home office setup allowance'
    },
    {
      icon: '🎆',
      title: 'Innovation Time',
      description: '20% time for personal projects and innovation initiatives'
    }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Join Our Team</h1>
            <p>
              Be part of a dynamic team that's shaping the future of technology.
              We're looking for passionate individuals who want to make a real impact
              and grow their careers with us.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="number">500+</span>
                <span className="label">Team Members</span>
              </div>
              <div className="hero-stat">
                <span className="number">12</span>
                <span className="label">Global Offices</span>
              </div>
              <div className="hero-stat">
                <span className="number">4.8/5</span>
                <span className="label">Employee Rating</span>
              </div>
              <div className="hero-stat">
                <span className="number">{jobOpenings.length}</span>
                <span className="label">Open Positions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="company-culture">
        <div className="container">
          <div className="culture-content">
            <div className="culture-text">
              <h2>Our Culture & Values</h2>
              <p>
                At Neotaq, we believe that great technology comes from great people.
                Our culture is built on collaboration, innovation, and continuous learning.
                We foster an environment where everyone can thrive and make meaningful contributions.
              </p>
              <ul className="culture-highlights">
                <li>✨ Innovation-driven environment</li>
                <li>🤝 Collaborative and inclusive culture</li>
                <li>🚀 Opportunities for rapid growth</li>
                <li>🌍 Global perspective and impact</li>
              </ul>
            </div>
            <div className="culture-values">
              <div className="values-grid">
                {companyValues.slice(0, 4).map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="employee-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Benefits & Perks</h2>
            <p>We invest in our people with comprehensive benefits and unique perks</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="open-positions">
        <div className="container">
          <div className="section-header">
            <h2>Current Openings</h2>
            <p>Find your next opportunity and join our growing team</p>
          </div>
          
          {/* Department Filter */}
          <div className="department-filter">
            <button className="filter-btn active">All Departments</button>
            <button className="filter-btn">Engineering</button>
            <button className="filter-btn">Product</button>
            <button className="filter-btn">Design</button>
            <button className="filter-btn">Cloud Services</button>
          </div>
          
          <div className="jobs-grid">
            {jobOpenings.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <div className="job-title">
                    <h3>{job.title}</h3>
                    <div className="job-badges">
                      <span className="department-badge">{job.department}</span>
                      <span className="level-badge">{job.level}</span>
                    </div>
                  </div>
                  <div className="job-meta">
                    <div className="job-location">📍 {job.location}</div>
                    <div className="job-type">🕰️ {job.type}</div>
                  </div>
                </div>
                
                <p className="job-description">{job.description}</p>
                
                <div className="job-actions">
                  <Link to={`/careers/${job.id}`} className="view-details-btn">
                    View Details
                  </Link>
                  <button className="apply-btn">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Neotaq */}
      <section className="life-at-neotaq">
        <div className="container">
          <div className="section-header">
            <h2>Life at Neotaq</h2>
            <p>Get a glimpse into our work environment and team activities</p>
          </div>
          <div className="life-grid">
            <div className="life-card">
              <div className="life-image">💻</div>
              <h3>Modern Workspace</h3>
              <p>State-of-the-art offices with collaborative spaces and latest technology</p>
            </div>
            <div className="life-card">
              <div className="life-image">🎉</div>
              <h3>Team Events</h3>
              <p>Regular team building activities, hackathons, and celebration events</p>
            </div>
            <div className="life-card">
              <div className="life-image">🎓</div>
              <h3>Learning Culture</h3>
              <p>Continuous learning opportunities, mentorship programs, and knowledge sharing</p>
            </div>
            <div className="life-card">
              <div className="life-image">🌎</div>
              <h3>Global Impact</h3>
              <p>Work on projects that make a difference for clients around the world</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="employee-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Team Says</h2>
            <p>Hear from our employees about their experience working at Neotaq</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Working at Neotaq has been an incredible journey. The opportunities for growth and the supportive team environment make it a great place to advance your career."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Alex Johnson</h4>
                  <p>Senior Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The culture of innovation and learning at Neotaq is amazing. I've been able to work on cutting-edge projects and continuously develop my skills."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Chen</h4>
                  <p>Product Manager</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The flexibility and work-life balance at Neotaq allow me to do my best work while maintaining a healthy personal life. It's a company that truly cares about its people."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Michael Rodriguez</h4>
                  <p>UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="office-locations">
        <div className="container">
          <div className="section-header">
            <h2>Our Locations</h2>
            <p>Join our global team with offices around the world</p>
          </div>
          <div className="locations-grid">
            {globalOffices.map((office, index) => (
              <div key={index} className="location-card">
                <div className="location-icon">🏢</div>
                <h3>{office.city}</h3>
                <p className="country">{office.country}</p>
                <p className="address">{office.address}</p>
                <div className="location-contact">
                  <span>{office.phone}</span>
                  <span>{office.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Team?</h2>
            <p>Don't see a perfect match? We're always looking for talented individuals to join our growing team.</p>
            <div className="cta-buttons">
              <button className="cta-button primary">Send Your Resume</button>
              <Link to="/contact" className="cta-button secondary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;