import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/BrochurePage.css';

interface Slide {
  id: string;
  type: string;
  title?: string;
  subtitle?: string;
  content?: any;
}

const BrochurePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides: Slide[] = [
    {
      id: 'cover',
      type: 'cover',
      title: 'NEOTEQ',
      subtitle: 'Engineering the Future with AI and Scalable Intelligence'
    },
    {
      id: 'about',
      type: 'about',
      title: 'About NeoTeq',
      content: {
        mission: 'Delivering cutting-edge AI solutions, scalable infrastructure, and enterprise-grade software to transform businesses worldwide.',
        vision: 'To be the leading partner in AI-driven digital transformation',
        stats: [
          { label: 'Projects', value: '500+' },
          { label: 'Clients', value: '200+' },
          { label: 'Experience', value: '15+ Years' }
        ]
      }
    },
    {
      id: 'services-overview',
      type: 'services-overview',
      title: 'Our Services',
      content: {
        services: [
          { icon: '⚡', title: 'AI GPU Optimization', color: '#00E5FF' },
          { icon: '🤖', title: 'RAG Applications', color: '#00B4D8' },
          { icon: '🏥', title: 'HealthTech', color: '#0096C7' },
          { icon: '🍔', title: 'FoodTech', color: '#0077B6' },
          { icon: '🌱', title: 'EnvironmentTech', color: '#023E8A' },
          { icon: '👔', title: 'Retail Tech', color: '#03045E' }
        ]
      }
    },
    {
      id: 'ai-gpu',
      type: 'service-detail',
      title: 'AI GPU Optimization & Attestation',
      subtitle: 'Maximize Performance, Minimize Cost',
      content: {
        description: 'Custom CUDA/AMD kernel-level optimization for deploying 70B+ parameter models efficiently.',
        features: ['Custom CUDA Kernels', 'TensorRT Optimization', 'LLM Fine-tuning', 'nvTrust Attestation']
      }
    },
    {
      id: 'rag',
      type: 'service-detail',
      title: 'RAG Applications',
      subtitle: 'Intelligent Information Retrieval',
      content: {
        description: 'Build Retrieval-Augmented Generation applications with multi-modal capabilities.',
        features: ['Text-to-Voice', 'Text-to-Video', 'Meeting Summaries', 'Intelligent Chatbots']
      }
    },
    {
      id: 'healthtech',
      type: 'service-detail',
      title: 'HealthTech Solutions',
      subtitle: 'HIPAA-Compliant Healthcare',
      content: {
        description: 'Critical systems for patient safety, doctor workflow, and hospital automation.',
        features: ['HIPAA Compliance', 'Patient Monitoring', 'Workflow Automation', 'Predictive Analytics']
      }
    },
    {
      id: 'foodtech',
      type: 'service-detail',
      title: 'FoodTech Solutions',
      subtitle: 'Smart Supply Chain & Quality',
      content: {
        description: 'AI-powered demand forecasting, blockchain traceability, and quality monitoring.',
        features: ['Demand Forecasting', 'Blockchain Traceability', 'Quality Monitoring', 'Supply Chain Optimization']
      }
    },
    {
      id: 'environmenttech',
      type: 'service-detail',
      title: 'EnvironmentTech Solutions',
      subtitle: 'Sustainable Technology',
      content: {
        description: 'Emission optimization, ESG reporting, and environmental monitoring systems.',
        features: ['Emission Tracking', 'ESG Reporting', 'Environmental Monitoring', 'Carbon Analysis']
      }
    },
    {
      id: 'retail-tech',
      type: 'service-detail',
      title: 'Retail Tech for Garments',
      subtitle: 'Next-Gen Fashion Retail',
      content: {
        description: 'Visual search, virtual try-on, and smart inventory management.',
        features: ['Visual Search', 'Virtual Try-On', 'Smart Inventory', 'AI Recommendations']
      }
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'Our Capabilities',
      content: {
        capabilities: [
          { name: 'AI & LLM Platforms', level: 'Advanced' },
          { name: 'GPU Optimization', level: 'Advanced' },
          { name: 'Web & App Engineering', level: 'Proficient' },
          { name: 'Cloud & Edge', level: 'Proficient' },
          { name: 'Product Engineering', level: 'Proficient' }
        ]
      }
    },
    {
      id: 'development-process',
      type: 'development-process',
      title: 'Our Development Process',
      subtitle: 'Faster & Adaptive Development',
      content: {
        methodology: {
          tagline: 'Agile. Iterative. Continuous.',
          points: [
            'Sprint-based delivery for faster time-to-market',
            'Continuous feedback loops with stakeholders',
            'Adaptive planning and flexible responses to change',
            'Incremental delivery of business value'
          ],
          benefits: [
            'Faster deployment cycles',
            'Higher code quality',
            'Reduced time-to-market',
            'Improved collaboration'
          ]
        },
        tools: [
          { name: 'JIRA', description: 'Project management & tracking', icon: '📋' },
          { name: 'Confluence', description: 'Documentation & collaboration', icon: '📚' },
          { name: 'Bitbucket', description: 'Version control & code review', icon: '🔀' },
          { name: 'Jenkins', description: 'CI/CD automation', icon: '⚙️' },
          { name: 'Kubernetes', description: 'Container orchestration', icon: '☸️' },
          { name: 'DevOps', description: 'End-to-end automation', icon: '🚀' }
        ],
        banner: 'Company-wide standardization on JIRA, Confluence, and Bitbucket ensures seamless collaboration across all teams'
      }
    },
    {
      id: 'why-choose',
      type: 'why-choose',
      title: 'Why Choose NeoTeq?',
      content: {
        advantages: [
          { icon: '🎯', title: 'Expert Team', description: '15+ years of experience' },
          { icon: '⚡', title: 'Fast Delivery', description: 'Agile methodology' },
          { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security' },
          { icon: '📈', title: 'Scalable', description: 'Grows with your business' },
          { icon: '💡', title: 'Innovative', description: 'Cutting-edge solutions' },
          { icon: '🤝', title: 'Partnership', description: 'Long-term relationships' }
        ]
      }
    },
    {
      id: 'success-stories',
      type: 'success-stories',
      title: 'Success Stories',
      content: {
        testimonials: [
          { quote: 'NeoTeq transformed our AI infrastructure, reducing costs by 40%.', author: 'CTO, Tech Corp' },
          { quote: 'Their HealthTech solution improved our patient outcomes significantly.', author: 'Hospital Director' },
          { quote: 'Best technology partner we\'ve worked with.', author: 'CEO, Startup Inc' }
        ],
        metrics: [
          { label: 'Projects Delivered', value: '500+' },
          { label: 'Client Satisfaction', value: '98%' },
          { label: 'Cost Reduction', value: '40% Avg' }
        ]
      }
    },
    {
      id: 'contact',
      type: 'contact',
      title: 'Get In Touch',
      content: {
        email: 'info@neoteq.com',
        phone: '+91 123 456 7890',
        cta: 'Let\'s Build Something Amazing Together'
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleFullscreen = async () => {
    try {
      if (!isFullscreen) {
        const element = document.documentElement;
        if (element.requestFullscreen) {
          await element.requestFullscreen();
        } else if ((element as any).webkitRequestFullscreen) {
          await (element as any).webkitRequestFullscreen();
        } else if ((element as any).msRequestFullscreen) {
          await (element as any).msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (error) {
      // Silently handle fullscreen errors (permissions policy, etc.)
      console.log('Fullscreen not available');
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape' && isFullscreen) handleFullscreen();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullscreen]);

  const handlePrint = () => {
    window.print();
  };

  const renderSlide = (slide: Slide) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="slide-cover">
            <motion.div
              className="cover-logo"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <h1>{slide.title}</h1>
            </motion.div>
            <motion.p
              className="cover-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {slide.subtitle}
            </motion.p>
          </div>
        );

      case 'about':
        return (
          <div className="slide-about">
            <h2>{slide.title}</h2>
            <div className="about-content">
              <div className="about-mission">
                <h3>Mission</h3>
                <p>{slide.content?.mission}</p>
              </div>
              <div className="about-vision">
                <h3>Vision</h3>
                <p>{slide.content?.vision}</p>
              </div>
              <div className="about-stats">
                {slide.content?.stats?.map((stat: any, idx: number) => (
                  <div key={idx} className="stat-box">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'services-overview':
        return (
          <div className="slide-services-overview">
            <h2>{slide.title}</h2>
            <div className="services-grid">
              {slide.content?.services?.map((service: any, idx: number) => (
                <div key={idx} className="service-card" style={{ borderColor: service.color }}>
                  <div className="service-icon" style={{ backgroundColor: service.color }}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        );

      case 'service-detail':
        return (
          <div className="slide-service-detail">
            <h2>{slide.title}</h2>
            {slide.subtitle && <p className="service-subtitle">{slide.subtitle}</p>}
            {slide.content?.description && <p className="service-description">{slide.content.description}</p>}
            {slide.content?.features && slide.content.features.length > 0 && (
              <div className="service-features">
                {slide.content.features.map((feature: string, idx: number) => (
                  <div key={idx} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'capabilities':
        return (
          <div className="slide-capabilities">
            <h2>{slide.title}</h2>
            {slide.content?.capabilities && slide.content.capabilities.length > 0 && (
              <div className="capabilities-list">
                {slide.content.capabilities.map((cap: any, idx: number) => (
                  <div key={idx} className="capability-item">
                    <div className="capability-name">{cap.name}</div>
                    <div className={`capability-level ${cap.level.toLowerCase()}`}>{cap.level}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'development-process':
        return (
          <div className="slide-development-process">
            <h2>{slide.title}</h2>
            {slide.subtitle && <p className="process-subtitle">{slide.subtitle}</p>}
            <div className="process-content">
              <div className="process-left">
                {slide.content?.methodology && (
                  <div className="methodology-section">
                    {slide.content.methodology.tagline && (
                      <h3 className="methodology-tagline">{slide.content.methodology.tagline}</h3>
                    )}
                    {slide.content.methodology.points && slide.content.methodology.points.length > 0 && (
                      <div className="methodology-points">
                        {slide.content.methodology.points.map((point: string, idx: number) => (
                          <div key={idx} className="methodology-point">
                            <span className="point-icon">🔄</span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {slide.content.methodology.benefits && slide.content.methodology.benefits.length > 0 && (
                      <div className="methodology-benefits">
                        <h4>Key Benefits:</h4>
                        <ul>
                          {slide.content.methodology.benefits.map((benefit: string, idx: number) => (
                            <li key={idx}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="process-right">
                <h3>Enterprise Tools</h3>
                {slide.content?.tools && slide.content.tools.length > 0 && (
                  <div className="tools-grid">
                    {slide.content.tools.map((tool: any, idx: number) => (
                      <div key={idx} className="tool-card">
                        <div className="tool-icon">{tool.icon}</div>
                        <div className="tool-name">{tool.name}</div>
                        <div className="tool-description">{tool.description}</div>
                      </div>
                    ))}
                  </div>
                )}
                {slide.content?.banner && (
                  <div className="process-banner">
                    {slide.content.banner}
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'why-choose':
        return (
          <div className="slide-why-choose">
            <h2>{slide.title}</h2>
            <div className="advantages-grid">
              {slide.content?.advantages?.map((adv: any, idx: number) => (
                <div key={idx} className="advantage-card">
                  <div className="advantage-icon">{adv.icon}</div>
                  <h3>{adv.title}</h3>
                  <p>{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'success-stories':
        return (
          <div className="slide-success-stories">
            <h2>{slide.title}</h2>
            <div className="testimonials">
              {slide.content?.testimonials?.map((test: any, idx: number) => (
                <div key={idx} className="testimonial-card">
                  <p className="testimonial-quote">"{test.quote}"</p>
                  <p className="testimonial-author">— {test.author}</p>
                </div>
              ))}
            </div>
            <div className="success-metrics">
              {slide.content?.metrics?.map((metric: any, idx: number) => (
                <div key={idx} className="metric-box">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="slide-contact">
            <h2>{slide.title}</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>{slide.content?.email}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>{slide.content?.phone}</span>
              </div>
            </div>
            <div className="contact-cta">
              <h3>{slide.content?.cta}</h3>
            </div>
          </div>
        );

      default:
        return <div className="slide-default">{slide.title}</div>;
    }
  };

  return (
    <div className={`brochure-page ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="brochure-controls">
        <button onClick={prevSlide} className="control-btn prev-btn" aria-label="Previous slide">
          ‹
        </button>
        <button onClick={nextSlide} className="control-btn next-btn" aria-label="Next slide">
          ›
        </button>
        <button onClick={handleFullscreen} className="control-btn fullscreen-btn" aria-label="Toggle fullscreen">
          {isFullscreen ? '⤓' : '⤢'}
        </button>
        <button onClick={handlePrint} className="control-btn print-btn" aria-label="Print/PDF">
          🖨️
        </button>
      </div>

      <div className="brochure-slides">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="slide"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          >
            {renderSlide(slides[currentSlide])}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="brochure-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="brochure-thumbnails">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${slide.title || slide.id}`}
          >
            <div className="thumbnail-content">
              {slide.type === 'cover' && <div className="thumbnail-cover">{slide.title}</div>}
              {slide.type !== 'cover' && <div className="thumbnail-title">{slide.title}</div>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrochurePage;

