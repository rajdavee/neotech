import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Comprehensive digital solutions to modernize your business processes and drive innovation.'
    },
    {
      id: 2,
      icon: '💻',
      title: 'Product Engineering',
      description: 'End-to-end product development from concept to deployment with cutting-edge technologies.'
    },
    {
      id: 3,
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions leveraging artificial intelligence and machine learning capabilities.'
    },
    {
      id: 4,
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest frameworks and technologies.'
    },
    {
      id: 5,
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.'
    },
    {
      id: 6,
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance.'
    },
    {
      id: 7,
      icon: '🔗',
      title: 'Blockchain',
      description: 'Decentralized solutions and smart contract development for secure transactions.'
    },
    {
      id: 8,
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.'
    },
    {
      id: 9,
      icon: '📊',
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence solutions for data-driven decisions.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Comprehensive technology solutions tailored to your business needs</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;