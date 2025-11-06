import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from './GlassCard';
import NeonButton from './NeonButton';
import '../styles/About.css';

const About: React.FC = () => {
  const navigate = useNavigate();
  const [animatedStats, setAnimatedStats] = useState([
    { number: 0, label: 'Projects Delivered', suffix: '+', target: 500 },
    { number: 0, label: 'Happy Clients', suffix: '+', target: 50 },
    { number: 0, label: 'Years Experience', suffix: '+', target: 10 },
    { number: 0, label: 'Success Rate', suffix: '%', target: 99 }
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about-stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      animatedStats.forEach((stat, index) => {
        let currentStep = 0;
        const increment = stat.target / steps;

        const timer = setInterval(() => {
          currentStep++;
          const newValue = Math.min(Math.floor(increment * currentStep), stat.target);
          
          setAnimatedStats(prev => prev.map((s, i) => 
            i === index ? { ...s, number: newValue } : s
          ));

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="title-section">
              <h2 className="modern-title">
                <span className="title-line">About</span>
                <span className="title-accent">Neoteq</span>
              </h2>
              <div className="title-underline" />
            </div>
            
            <p className="about-subtitle modern-subtitle">
              We blend innovation, precision, and experience to create intelligent digital ecosystems for modern enterprises
            </p>
            
            <div className="description-cards">
              <GlassCard className="description-card" glowColor="#1a1a1a">
                <p>
                  At Neoteq, we blend innovation, precision, and experience to create intelligent digital ecosystems for modern enterprises.
                  With over 30 years of combined experience, our team operates at the intersection of AI, Cloud Infrastructure, and Modern Web Technologies - building scalable systems that drive measurable impact.
                </p>
              </GlassCard>
              
              <GlassCard className="description-card" glowColor="#2c3e50">
                <p>
                  We combine the agility of a startup with the reliability of an enterprise, delivering mission-critical software solutions across healthcare, infrastructure, and AI-driven industries.
                </p>
              </GlassCard>
            </div>
            
            <div className="about-features">
              <GlassCard className="feature-card" glowColor="#1a1a1a">
                <div className="feature">
                  <div className="feature-icon modern-icon">✨</div>
                  <div>
                    <h4>Our Approach</h4>
                    <p>We design with clarity, develop with precision, and deliver with accountability</p>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard className="feature-card" glowColor="#2c3e50">
                <div className="feature">
                  <div className="feature-icon modern-icon">🎯</div>
                  <div>
                    <h4>Our Expertise</h4>
                    <p>We specialise in enterprise-grade development, AI integration, and GPU optimisation - helping businesses harness next-generation technology for sustainable growth</p>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard className="feature-card" glowColor="#4a4a4a">
                <div className="feature">
                  <div className="feature-icon modern-icon">⚡</div>
                  <div>
                    <h4>Partnership Focus</h4>
                    <p>Every project is a partnership, not a transaction</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
          
          <div className="about-stats" id="about-stats">
            <GlassCard className="stats-card" glowColor="#1a1a1a">
              <h3 className="stats-title">Our Track Record</h3>
              <div className="stats-grid">
                {animatedStats.map((stat, index) => (
                  <div key={index} className="stat-item modern-stat">
                    <div className="stat-number modern-number">
                      {stat.number}{stat.suffix}
                    </div>
                    <div className="stat-label modern-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="cta-buttons">
                <NeonButton variant="primary" size="medium" onClick={() => navigate('/contact')}>
                  Get Started
                </NeonButton>
                <NeonButton variant="secondary" size="medium" onClick={() => navigate('/about')}>
                  Learn More
                </NeonButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;