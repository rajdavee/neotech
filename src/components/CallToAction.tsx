import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CallToAction.css';

const CallToAction: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleScheduleCall = () => {
    navigate('/contact');
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Why Neoteq</h2>
            <h3>We Deliver More Than Code - We Deliver Confidence</h3>
            <p>
              Our foundation lies in building scalable, reliable, and secure systems - the kind that power enterprises forward.
            </p>
            
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">✨</div>
                <span>Decades of collective experience</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <span>Proven performance metrics</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <span>Transparent engagement models</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <span>Domain-driven innovation</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <span>Continuous collaboration and support</span>
              </div>
            </div>
            
            <p className="partnership-message">
              Every project is a partnership, not a transaction.
            </p>
            
            <div className="engagement-models">
              <h4>Engagement Models</h4>
              <div className="engagement-list">
                <span>• Fixed-scope Projects</span>
                <span>• Retainer-based Teams</span>
                <span>• Co-development Partnerships</span>
              </div>
            </div>
            
            <p className="global-engagement">
              <strong>Global Engagement:</strong> We collaborate with partners worldwide - delivering measurable digital transformation across healthcare, technology, and industrial domains.
            </p>
            
            <p className="trusted-partner">
              Whether you're building a platform, optimising systems, or scaling AI capabilities, Neoteq is your trusted engineering partner.
            </p>
          </div>
          
          <div className="cta-actions">
            <button className="cta-btn primary" onClick={handleGetStarted}>
              <span>Get Started Today</span>
              <div className="btn-icon">→</div>
            </button>
            <button className="cta-btn secondary" onClick={handleScheduleCall}>
              <span>Schedule a Call</span>
              <div className="btn-icon">📞</div>
            </button>
          </div>
        </div>
      </div>
      
      <div className="cta-stats">
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Available</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">48hrs</div>
          <div className="stat-label">Response Time</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;



