import React, { useState } from 'react';
import { globalOffices } from '../data/content';
import '../styles/ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        service: ''
      });
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get In Touch</h1>
            <p>
              Ready to start your digital transformation journey? We'd love to hear from you.
              Contact us today to discuss your project requirements and discover how we can help
              drive innovation and growth for your business.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-method">
                <div className="method-icon">✉️</div>
                <h3>Email</h3>
                <p>hello@neotaq.com</p>
              </div>
              <div className="contact-method">
                <div className="method-icon">🕰️</div>
                <h3>Response Time</h3>
                <p>Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {submitMessage && (
                <div className="success-message">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="application-development">Application Development</option>
                      <option value="cloud-consulting">Cloud Consulting</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div className="contact-info">
              <div className="info-card">
                <h3>Let's Start a Conversation</h3>
                <p>
                  Whether you're looking to transform your business with cutting-edge technology
                  or need expert guidance on your digital journey, we're here to help.
                </p>
                
                <div className="contact-details">
                  <div className="detail-item">
                    <div className="detail-icon">📍</div>
                    <div>
                      <h4>Headquarters</h4>
                      <p>123 Tech Avenue<br />New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">📞</div>
                    <div>
                      <h4>Phone</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">✉️</div>
                    <div>
                      <h4>Email</h4>
                      <p>hello@neotaq.com</p>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">🕰️</div>
                    <div>
                      <h4>Business Hours</h4>
                      <p>Monday - Friday<br />9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>
                
                <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href="#" className="social-link">🐦</a>
                    <a href="#" className="social-link">🔗</a>
                    <a href="#" className="social-link">📱</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="global-offices">
        <div className="container">
          <div className="section-header">
            <h2>Our Global Offices</h2>
            <p>With offices around the world, we provide local support with global expertise</p>
          </div>
          <div className="offices-grid">
            {globalOffices.map((office, index) => (
              <div key={index} className="office-card">
                <div className="office-header">
                  <div className="office-icon">🏢</div>
                  <h3>{office.city}</h3>
                  <p className="country">{office.country}</p>
                </div>
                <div className="office-details">
                  <div className="detail">
                    <div className="detail-icon">📍</div>
                    <p>{office.address}</p>
                  </div>
                  <div className="detail">
                    <div className="detail-icon">📞</div>
                    <p>{office.phone}</p>
                  </div>
                  <div className="detail">
                    <div className="detail-icon">✉️</div>
                    <p>{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about working with Neotaq</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How quickly can you start my project?</h3>
              <p>We typically begin new projects within 1-2 weeks after contract signing, depending on project complexity and resource availability.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide ongoing support?</h3>
              <p>Yes, we offer comprehensive post-launch support including maintenance, updates, and technical assistance to ensure your solution continues to perform optimally.</p>
            </div>
            <div className="faq-item">
              <h3>What industries do you specialize in?</h3>
              <p>We have expertise across multiple industries including financial services, healthcare, retail, manufacturing, and more. Our solutions are tailored to each sector's specific needs.</p>
            </div>
            <div className="faq-item">
              <h3>Can you work with our existing systems?</h3>
              <p>Absolutely. We specialize in system integration and can work with your existing infrastructure to ensure seamless connectivity and data flow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;