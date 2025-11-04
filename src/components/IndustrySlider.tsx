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
    id: "healthcare",
    name: "Healthcare",
    description: "Critical systems for patient safety, doctor workflow, and hospital automation. HIPAA-compliant patient logistics and workflow automation.",
    features: [
      "HIPAA-compliant Systems",
      "Patient Safety Solutions",
      "Doctor Workflow Automation",
      "Hospital Administration",
      "Multi-location Management",
      "Real-time Patient Monitoring"
    ],
    technologies: ["React", "Python", "HIPAA Compliance", "Real-time Analytics", "Healthcare AI", "Workflow Automation"],
    icon: "🏥",
    color: "#1a1a1a",
    stats: {
      projects: "50+",
      clients: "25+",
      experience: "10+ Years"
    }
  },
  {
    id: "saas-enterprise",
    name: "SaaS & Enterprise Platforms",
    description: "Scalable frameworks for RAG-powered systems, hardware integration and automation pipelines, and system optimisation.",
    features: [
      "RAG-powered Systems",
      "Hardware Integration",
      "Automation Pipelines",
      "System Optimisation",
      "Enterprise-grade Architecture",
      "Scalable Frameworks"
    ],
    technologies: ["React", "Node.js", "Python", "RAG", "Automation", "Enterprise Architecture"],
    icon: "💼",
    color: "#2c3e50",
    stats: {
      projects: "200+",
      clients: "120+",
      experience: "12+ Years"
    }
  },
  {
    id: "infrastructure-environmental",
    name: "Infrastructure & Environmental Tech",
    description: "Solutions to boost revenue, customer feedback, and marketing performance. Scalable infrastructure solutions.",
    features: [
      "Revenue Optimization",
      "Customer Feedback Systems",
      "Marketing Performance",
      "Infrastructure Solutions",
      "Environmental Tech",
      "Scalable Systems"
    ],
    technologies: ["Python", "AWS", "Analytics", "Infrastructure", "Environmental Tech", "Cloud Solutions"],
    icon: "🌱",
    color: "#4a4a4a",
    stats: {
      projects: "150+",
      clients: "80+",
      experience: "8+ Years"
    }
  },
  {
    id: "ai-platforms-optimisation",
    name: "AI Platforms & Optimisation",
    description: "GPU optimisation solutions. Efficiently deploy 70B+ parameter models on limited GPU infrastructure with custom CUDA/AMD kernel-level optimisation.",
    features: [
      "GPU Optimisation",
      "LLM Deployment",
      "CUDA Kernel Development",
      "Performance Engineering",
      "Cost Reduction",
      "Energy Efficiency"
    ],
    technologies: ["CUDA", "PyTorch", "TensorRT", "ONNX", "Hugging Face", "LangChain", "Triton Inference Server"],
    icon: "🚀",
    color: "#555555",
    stats: {
      projects: "100+",
      clients: "60+",
      experience: "8+ Years"
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
          <h2>Business Domains</h2>
          <p>We serve diverse industries with targeted, data-driven solutions</p>
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
