import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from './Testimonials';
import TechnologyShowcase from './TechnologyShowcase';
import CallToAction from './CallToAction';
import ParticleBackground from './ParticleBackground';
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
  }, [isVisible]);

  return (
    <>
      <ParticleBackground />
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
                Leading the future of technology with innovative solutions
              </p>
              
              <div className="description-cards">
                <GlassCard className="description-card" glowColor="#007bff">
                  <p>
                    At Neoteq, we are passionate about transforming businesses through cutting-edge technology. 
                    With over a decade of experience, we specialize in delivering comprehensive digital solutions 
                    that drive growth, enhance efficiency, and create competitive advantages for our clients.
                  </p>
                </GlassCard>
                
                <GlassCard className="description-card" glowColor="#0056b3">
                  <p>
                    Our team of expert developers, designers, and strategists work collaboratively to understand 
                    your unique challenges and deliver tailored solutions that exceed expectations. From AI-driven 
                    applications to scalable cloud infrastructure, we're your trusted partner in digital transformation.
                  </p>
                </GlassCard>
              </div>
              
              <div className="about-features">
                <GlassCard className="feature-card" glowColor="#28a745">
                  <div className="feature">
                    <div className="feature-icon modern-icon">✨</div>
                    <div>
                      <h4>Innovation First</h4>
                      <p>Leveraging the latest technologies to create groundbreaking solutions</p>
                    </div>
                  </div>
                </GlassCard>
                
                <GlassCard className="feature-card" glowColor="#007bff">
                  <div className="feature">
                    <div className="feature-icon modern-icon">🎯</div>
                    <div>
                      <h4>Client-Centric</h4>
                      <p>Focusing on your success with personalized service and support</p>
                    </div>
                  </div>
                </GlassCard>
                
                <GlassCard className="feature-card" glowColor="#ffc107">
                  <div className="feature">
                    <div className="feature-icon modern-icon">⚡</div>
                    <div>
                      <h4>Agile Delivery</h4>
                      <p>Fast, efficient project delivery with continuous communication</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
            
            <div className="about-stats" id="about-stats">
              <GlassCard className="stats-card" glowColor="#007bff">
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
      
      <Testimonials />
      <TechnologyShowcase />
      <CallToAction />
    </>
  );
};

export default About;