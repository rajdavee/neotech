import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleLetsTalk = () => {
    navigate('/contact');
  };

  const handleOurServices = () => {
    navigate('/services');
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Engineering the Future with <span className="highlight">AI and Scalable Intelligence</span>
          </h1>
          <p className="hero-subtitle">
            Cutting-edge AI | Scalable Infrastructure | Enterprise-grade Software
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={handleLetsTalk}>Request Demo</button>
            <button className="secondary-btn" onClick={handleOurServices}>Our Services</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-graphic">
            <div className="floating-card card-1">
              <div className="card-icon">🚀</div>
              <div className="card-text">Innovation</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">⚡</div>
              <div className="card-text">Performance</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🎯</div>
              <div className="card-text">Precision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;