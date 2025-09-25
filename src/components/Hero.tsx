import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            AI-Driven Software Development & 
            <span className="highlight"> Digital Transformation</span>
          </h1>
          <p className="hero-subtitle">
            Empowering businesses with cutting-edge technology solutions, 
            innovative software development, and comprehensive digital transformation services.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Let's Talk</button>
            <button className="secondary-btn">Our Services</button>
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