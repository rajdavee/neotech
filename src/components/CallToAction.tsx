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
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Let's discuss how our cutting-edge technology solutions can drive your success. 
              Get a free consultation and discover the possibilities.
            </p>
            
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <span>Free Consultation</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <span>Quick Response</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <span>Custom Solutions</span>
              </div>
            </div>
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
        
        <div className="cta-visual">
          <div className="floating-elements">
            <div className="element element-1">💻</div>
            <div className="element element-2">🌐</div>
            <div className="element element-3">📱</div>
            <div className="element element-4">☁️</div>
            <div className="element element-5">🤖</div>
            <div className="element element-6">⚡</div>
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



