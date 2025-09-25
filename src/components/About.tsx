import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '99%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Neotaq</h2>
            <p className="about-subtitle">
              Leading the future of technology with innovative solutions
            </p>
            <p>
              At Neotaq, we are passionate about transforming businesses through cutting-edge technology. 
              With over a decade of experience, we specialize in delivering comprehensive digital solutions 
              that drive growth, enhance efficiency, and create competitive advantages for our clients.
            </p>
            <p>
              Our team of expert developers, designers, and strategists work collaboratively to understand 
              your unique challenges and deliver tailored solutions that exceed expectations. From AI-driven 
              applications to scalable cloud infrastructure, we're your trusted partner in digital transformation.
            </p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">✨</div>
                <div>
                  <h4>Innovation First</h4>
                  <p>Leveraging the latest technologies to create groundbreaking solutions</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <div>
                  <h4>Client-Centric</h4>
                  <p>Focusing on your success with personalized service and support</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <div>
                  <h4>Agile Delivery</h4>
                  <p>Fast, efficient project delivery with continuous communication</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <h3>Our Track Record</h3>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;