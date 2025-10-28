import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/IndustrySlider.css';

interface IndustryData {
  id: string;
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: string;
  color: string;
  stats: {
    projects: string;
    clients: string;
    experience: string;
  };
}

const industries: IndustryData[] = [
  {
    id: "healthtech",
    name: "Healthtech",
    description: "Transforming healthcare delivery with cutting-edge digital solutions, telemedicine platforms, AI-powered diagnostics, and advanced patient care systems.",
    features: [
      "Telemedicine & Remote Patient Monitoring",
      "AI-Powered Diagnostic Systems",
      "Electronic Health Records (EHR)",
      "Healthcare Analytics & Insights",
      "Patient Engagement Platforms",
      "Medical Device Integration"
    ],
    technologies: ["React", "Node.js", "Python", "AI/ML", "IoT", "HIPAA Compliance"],
    icon: "🏥",
    color: "#28a745",
    stats: {
      projects: "150+",
      clients: "75+",
      experience: "8+ Years"
    }
  },
  {
    id: "fintech",
    name: "Fintech",
    description: "Revolutionizing financial services with secure, scalable solutions including digital banking, payment processing, blockchain applications, and financial analytics.",
    features: [
      "Digital Banking Platforms",
      "Payment Gateway Solutions",
      "Blockchain & Cryptocurrency",
      "Risk Management Systems",
      "Regulatory Compliance Tools",
      "Financial Analytics & Reporting"
    ],
    technologies: ["React", "Java", "Python", "Blockchain", "AWS", "PCI DSS"],
    icon: "💳",
    color: "#007bff",
    stats: {
      projects: "200+",
      clients: "120+",
      experience: "10+ Years"
    }
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    description: "Building scalable e-commerce platforms with AI recommendations, omnichannel experiences, seamless payment integration, and advanced analytics.",
    features: [
      "Multi-Channel E-commerce Platforms",
      "AI-Powered Product Recommendations",
      "Inventory Management Systems",
      "Payment Gateway Integration",
      "Mobile Commerce Solutions",
      "Analytics & Business Intelligence"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Shopify"],
    icon: "🛒",
    color: "#fd7e14",
    stats: {
      projects: "300+",
      clients: "200+",
      experience: "12+ Years"
    }
  },
  {
    id: "gpu",
    name: "GPU Computing",
    description: "Accelerating high-performance computing with GPU power for AI/ML workloads, deep learning, computer vision, and graphics-intensive applications.",
    features: [
      "CUDA Development & Optimization",
      "Machine Learning Acceleration",
      "Computer Vision Applications",
      "Deep Learning Workloads",
      "Real-time Rendering Systems",
      "Parallel Processing Optimization"
    ],
    technologies: ["CUDA", "OpenCL", "Python", "TensorFlow", "PyTorch", "C++"],
    icon: "🚀",
    color: "#6f42c1",
    stats: {
      projects: "80+",
      clients: "45+",
      experience: "6+ Years"
    }
  },
  {
    id: "retail",
    name: "Retail",
    description: "Transforming retail experiences with omnichannel solutions, POS systems, inventory management, and customer engagement platforms.",
    features: [
      "Omnichannel Retail Solutions",
      "Point of Sale (POS) Systems",
      "Inventory Management",
      "Customer Relationship Management",
      "Retail Analytics & Insights",
      "Mobile Commerce Solutions"
    ],
    technologies: ["React", "Node.js", "Java", "MongoDB", "AWS", "Angular"],
    icon: "🏪",
    color: "#e83e8c",
    stats: {
      projects: "250+",
      clients: "180+",
      experience: "11+ Years"
    }
  }
];

const IndustrySlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length);
    setIsAutoPlaying(false);
  };

  const currentIndustry = industries[currentSlide];

  return (
    <section className="industry-slider-section">
      <div className="industry-slider-container">
        <div className="slider-header">
          <h2>Our Industry Expertise</h2>
          <p>Transforming businesses across diverse sectors with cutting-edge technology solutions</p>
        </div>

        <div className="slider-wrapper">
          <div className="slider-main">
            <div className="slide-content">
              <div className="slide-left">
                <div className="industry-icon" style={{ backgroundColor: currentIndustry.color }}>
                  {currentIndustry.icon}
                </div>
                <div className="industry-info">
                  <h3>{currentIndustry.name}</h3>
                  <p className="industry-description">{currentIndustry.description}</p>
                  
                  <div className="industry-stats">
                    <div className="stat-item">
                      <span className="stat-number">{currentIndustry.stats.projects}</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">{currentIndustry.stats.clients}</span>
                      <span className="stat-label">Clients</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">{currentIndustry.stats.experience}</span>
                      <span className="stat-label">Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slide-right">
                <div className="features-section">
                  <h4>Key Solutions</h4>
                  <div className="features-grid">
                    {currentIndustry.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <div className="feature-dot" style={{ backgroundColor: currentIndustry.color }}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="technologies-section">
                  <h4>Technologies</h4>
                  <div className="tech-tags">
                    {currentIndustry.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag" style={{ borderColor: currentIndustry.color }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="learn-more-section">
                  <Link 
                    to={`/industries/${currentIndustry.id}`} 
                    className="learn-more-btn"
                    style={{ 
                      backgroundColor: currentIndustry.color,
                      borderColor: currentIndustry.color 
                    }}
                  >
                    Learn More About {currentIndustry.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-controls">
            <button className="control-btn prev-btn" onClick={prevSlide}>
              <span>‹</span>
            </button>
            <button className="control-btn next-btn" onClick={nextSlide}>
              <span>›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySlider;
