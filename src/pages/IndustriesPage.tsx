import React from 'react';
import { Link } from 'react-router-dom';
import { industries, companyStats, caseStudies } from '../data/content';
import '../styles/IndustriesPage.css';

const IndustriesPage: React.FC = () => {
  return (
    <div className="industries-page">
      {/* Hero Section */}
      <section className="industries-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Industries We Serve</h1>
            <p>
              We bring deep industry expertise and innovative technology solutions across diverse sectors,
              helping businesses transform and thrive in their specific market environments.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="number">{companyStats.industries}</span>
                <span className="label">Industries Served</span>
              </div>
              <div className="hero-stat">
                <span className="number">{companyStats.clients}</span>
                <span className="label">Client Success Stories</span>
              </div>
              <div className="hero-stat">
                <span className="number">{companyStats.countries}</span>
                <span className="label">Global Markets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-grid-section">
        <div className="container">
          <div className="industries-grid">
            {industries.map((industry) => (
              <div key={industry.id} className="industry-card">
                <div className="industry-header">
                  <div className="industry-icon">{industry.icon}</div>
                  <h3>{industry.name}</h3>
                </div>
                <p className="industry-description">{industry.description}</p>

                <div className="industry-challenges">
                  <h4>Key Challenges:</h4>
                  <ul>
                    {industry.challenges.slice(0, 3).map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div className="industry-solutions">
                  <h4>Our Solutions:</h4>
                  <div className="solution-tags">
                    {industry.solutions.slice(0, 3).map((solution, index) => (
                      <span key={index} className="solution-tag">{solution}</span>
                    ))}
                    {industry.solutions.length > 3 && (
                      <span className="solution-tag more">+{industry.solutions.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="industry-actions">
                  <Link to={`/industries/${industry.id}`} className="learn-more-btn">
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

      {/* Success Stories Section */}
      <section className="success-stories">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories Across Industries</h2>
            <p>Real results delivered for businesses across different sectors</p>
          </div>
          <div className="case-studies-grid">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="case-study-card">
                <div className="case-study-header">
                  <h3>{caseStudy.title}</h3>
                  <span className="industry-badge">{caseStudy.industry}</span>
                </div>
                <div className="case-study-content">
                  <div className="case-study-section">
                    <h4>Challenge</h4>
                    <p>{caseStudy.challenge}</p>
                  </div>
                  <div className="case-study-section">
                    <h4>Solution</h4>
                    <p>{caseStudy.solution}</p>
                  </div>
                  <div className="case-study-section">
                    <h4>Results</h4>
                    <p className="results">{caseStudy.results}</p>
                  </div>
                </div>
                <div className="technologies">
                  {caseStudy.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="industry-expertise">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Neotaq for Industry-Specific Solutions?</h2>
            <p>Deep domain knowledge combined with cutting-edge technology expertise</p>
          </div>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">🎯</div>
              <h3>Domain Expertise</h3>
              <p>Deep understanding of industry-specific challenges, regulations, and best practices</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🔧</div>
              <h3>Tailored Solutions</h3>
              <p>Custom solutions designed to address unique business requirements and workflows</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">📊</div>
              <h3>Proven Track Record</h3>
              <p>Successful implementations across multiple industry verticals with measurable results</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🚀</div>
              <h3>Innovation Focus</h3>
              <p>Leveraging emerging technologies to drive competitive advantages in your industry</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🔒</div>
              <h3>Compliance First</h3>
              <p>Ensuring all solutions meet industry standards and regulatory requirements</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🌐</div>
              <h3>Scalable Architecture</h3>
              <p>Future-ready solutions that grow with your business and industry evolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="our-approach">
        <div className="container">
          <div className="section-header">
            <h2>Our Industry-Focused Approach</h2>
            <p>A systematic methodology that combines industry knowledge with technical excellence</p>
          </div>
          <div className="approach-steps">
            <div className="approach-step">
              <div className="step-number">01</div>
              <h3>Industry Analysis</h3>
              <p>Deep dive into your industry landscape, competitive dynamics, and regulatory environment</p>
            </div>
            <div className="approach-step">
              <div className="step-number">02</div>
              <h3>Business Requirements</h3>
              <p>Understanding specific business processes, workflows, and operational challenges</p>
            </div>
            <div className="approach-step">
              <div className="step-number">03</div>
              <h3>Solution Design</h3>
              <p>Architecting tailored solutions that address industry-specific needs and compliance</p>
            </div>
            <div className="approach-step">
              <div className="step-number">04</div>
              <h3>Implementation</h3>
              <p>Agile development with industry best practices and continuous stakeholder engagement</p>
            </div>
            <div className="approach-step">
              <div className="step-number">05</div>
              <h3>Optimization</h3>
              <p>Continuous improvement and optimization based on industry trends and feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industries-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Transform Your Industry with Technology</h2>
            <p>Let's discuss how our industry expertise can help drive innovation and growth in your sector</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Start Your Project</Link>
              <Link to="/services" className="cta-button secondary">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;