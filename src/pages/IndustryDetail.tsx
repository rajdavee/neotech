import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { industries, services, caseStudies } from '../data/content';
import '../styles/IndustryDetail.css';

const IndustryDetail: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();

  const industry = industries.find(i => i.id === industryId);

  if (!industry) {
    return <Navigate to="/404" replace />;
  }

  // Get related services based on industry relevance
  const relatedServices = services.slice(0, 4);
  
  // Get relevant case study
  const relevantCaseStudy = caseStudies.find(cs => 
    cs.industry.toLowerCase().includes(industry.name.toLowerCase().split(' ')[0])
  );

  return (
    <div className="industry-detail">
      {/* Hero Section */}
      <section className="industry-detail-hero">
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/industries">Industries</Link>
              <span>/</span>
              <span>{industry.name}</span>
            </div>
            <div className="hero-icon">{industry.icon}</div>
            <h1>{industry.name}</h1>
            <p className="hero-description">{industry.description}</p>
            <div className="hero-actions">
              <Link to="/contact" className="cta-button primary">Get Industry Consultation</Link>
              <Link to="/contact" className="cta-button secondary">Request Case Study</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="industry-challenges">
        <div className="container">
          <div className="section-header">
            <h2>Industry Challenges We Address</h2>
            <p>Understanding the unique challenges facing {industry.name} businesses</p>
          </div>
          <div className="challenges-grid">
            {industry.challenges.map((challenge, index) => (
              <div key={index} className="challenge-card">
                <div className="challenge-icon">⚠️</div>
                <h3>{challenge}</h3>
                <p>Our specialized solutions address this critical challenge through innovative technology and industry best practices.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="industry-solutions">
        <div className="container">
          <div className="section-header">
            <h2>Our {industry.name} Solutions</h2>
            <p>Tailored technology solutions designed specifically for your industry</p>
          </div>
          <div className="solutions-grid">
            {industry.solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-icon">✅</div>
                <h3>{solution}</h3>
                <p>Comprehensive solution that addresses your specific business needs with proven methodologies.</p>
                <Link to="/contact" className="solution-link">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      {relevantCaseStudy && (
        <section className="industry-case-study">
          <div className="container">
            <div className="section-header">
              <h2>Success Story: {relevantCaseStudy.title}</h2>
              <p>Real results delivered for a {industry.name} client</p>
            </div>
            <div className="case-study-content">
              <div className="case-study-main">
                <div className="case-study-section">
                  <h3>The Challenge</h3>
                  <p>{relevantCaseStudy.challenge}</p>
                </div>
                <div className="case-study-section">
                  <h3>Our Solution</h3>
                  <p>{relevantCaseStudy.solution}</p>
                </div>
                <div className="case-study-section results-section">
                  <h3>Results Achieved</h3>
                  <p className="results">{relevantCaseStudy.results}</p>
                </div>
              </div>
              <div className="case-study-sidebar">
                <div className="client-info">
                  <h4>Client</h4>
                  <p>{relevantCaseStudy.client}</p>
                </div>
                <div className="technologies-used">
                  <h4>Technologies Used</h4>
                  <div className="tech-badges">
                    {relevantCaseStudy.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="related-services">
        <div className="container">
          <div className="section-header">
            <h2>Services for {industry.name}</h2>
            <p>Technology services that drive transformation in your industry</p>
          </div>
          <div className="services-grid">
            {relatedServices.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.shortDescription}</p>
                <div className="service-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="industry-expertise">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Neotaq for {industry.name}?</h2>
            <p>Deep industry expertise combined with cutting-edge technology solutions</p>
          </div>
          <div className="expertise-grid">
            <div className="expertise-item">
              <div className="expertise-icon">🎯</div>
              <h3>Industry Focus</h3>
              <p>Specialized knowledge of {industry.name} regulations, workflows, and best practices</p>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon">🔧</div>
              <h3>Custom Solutions</h3>
              <p>Tailored technology solutions that address your specific industry challenges</p>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon">📊</div>
              <h3>Proven Results</h3>
              <p>Track record of successful implementations in the {industry.name} sector</p>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Leveraging emerging technologies to give you competitive advantages</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Transform Your {industry.name} Business</h2>
            <p>Let's discuss how our industry expertise can drive innovation and growth for your organization</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Start Your Project</Link>
              <Link to="/industries" className="cta-button secondary">View All Industries</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;