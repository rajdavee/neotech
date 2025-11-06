import React, { useState } from 'react';
import GlassCard from './GlassCard';
import NeonButton from './NeonButton';
import '../styles/RequestDemo.css';

const RequestDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you soon to schedule a demo.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleCallDemo = () => {
    window.location.href = 'tel:+919825248337';
  };

  return (
    <section className="request-demo-section">
      <div className="request-demo-container">
        <div className="demo-header">
          <h2>Request Demo</h2>
          <p>Experience the power of our innovative solutions firsthand! Request a demo today, and our expert team will be happy to assist you in exploring our products and services tailored to your needs.</p>
        </div>

        <div className="demo-content">
          <div className="demo-form-container">
            <GlassCard className="demo-form-card" glowColor="#1a1a1a">
              <form className="demo-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Mobile Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  ></textarea>
                </div>

                <button type="submit" className="demo-submit-btn">
                  Request Demo
                </button>
              </form>
            </GlassCard>
          </div>

          <div className="demo-alternative">
            <GlassCard className="demo-call-card" glowColor="#2c3e50">
              <h3>Prefer to Call?</h3>
              <p>Call us for assistance and support</p>
              <div className="phone-info">
                <div className="phone-icon">📞</div>
                <div className="phone-number">+91 98252 48337</div>
              </div>
              <NeonButton variant="primary" size="medium" onClick={handleCallDemo}>
                Call for Demo
              </NeonButton>
            </GlassCard>

            <GlassCard className="demo-benefits-card" glowColor="#4a4a4a">
              <h3>What to Expect</h3>
              <ul className="benefits-list">
                <li>
                  <span className="benefit-icon">✓</span>
                  <span>Personalized product walkthrough demonstration</span>
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <span>Expert consultation on your specific needs</span>
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <span>Interactive Q&A session with our team</span>
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <span>Customized solution recommendations and pricing</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestDemo;

