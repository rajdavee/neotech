import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import '../styles/ServiceDetail.css';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const serviceData: { [key: string]: any } = {
    'digital-transformation': {
      name: 'Digital Transformation',
      icon: '🚀',
      color: '#007bff',
      description: 'Comprehensive digital solutions to modernize your business processes and drive innovation across all departments.',
      benefits: [
        'Increased operational efficiency',
        'Enhanced customer experience',
        'Reduced operational costs',
        'Improved decision-making capabilities',
        'Competitive market advantage',
        'Scalable business growth'
      ],
      services: [
        'Digital Strategy Consulting',
        'Process Automation',
        'Legacy System Modernization',
        'Change Management',
        'Digital Roadmap Development',
        'Technology Assessment'
      ],
      technologies: ['AWS', 'Azure', 'Kubernetes', 'Microservices', 'API Gateway', 'CI/CD'],
      stats: {
        projects: '500+',
        clients: '300+',
        experience: '15+ Years'
      },
      caseStudies: [
        {
          title: 'Enterprise Digital Overhaul',
          client: 'Fortune 500 Company',
          challenge: 'Modernizing legacy systems and processes',
          solution: 'Complete digital transformation with cloud migration',
          results: '40% cost reduction, 3x faster operations'
        },
        {
          title: 'Retail Digital Platform',
          client: 'Global Retail Chain',
          challenge: 'Transitioning from brick-and-mortar to omnichannel',
          solution: 'Integrated digital platform with real-time analytics',
          results: '200% increase in online sales, 150% customer satisfaction'
        }
      ]
    },
    'team-augmentation': {
      name: 'Team Augmentation',
      icon: '👥',
      color: '#28a745',
      description: 'Scale your development team with skilled professionals who integrate seamlessly into your workflow and deliver quality results.',
      benefits: [
        'Access to expert talent',
        'Faster project delivery',
        'Reduced hiring costs',
        'Specialized skill sets',
        'Flexible engagement models',
        'Knowledge transfer'
      ],
      services: [
        'Remote Team Integration',
        'Specialized Expertise',
        'Agile Methodology',
        'Direct Communication',
        'Dedicated Resources',
        'Quality Assurance'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'],
      stats: {
        projects: '1000+',
        clients: '500+',
        experience: '12+ Years'
      },
      caseStudies: [
        {
          title: 'Tech Startup Scaling',
          client: 'Fast-Growing Startup',
          challenge: 'Need for rapid development with limited team',
          solution: 'Augmented team of 15 specialists across stack',
          results: 'Delivered 6 months ahead of schedule, 50% cost savings'
        },
        {
          title: 'Enterprise Team Boost',
          client: 'Fortune 500 Corp',
          challenge: 'Specialized skills needed for critical project',
          solution: 'Dedicated team of ML engineers and architects',
          results: 'Successfully launched AI platform in 4 months'
        }
      ]
    },
    'application-development': {
      name: 'Application Development',
      icon: '💻',
      color: '#17a2b8',
      description: 'Custom application development from concept to deployment using cutting-edge technologies and best practices.',
      benefits: [
        'Tailored solutions',
        'Scalable architecture',
        'Modern tech stack',
        'Quality assurance',
        'Fast time-to-market',
        'Ongoing support'
      ],
      services: [
        'Full-Stack Development',
        'UI/UX Design',
        'Quality Assurance',
        'DevOps Integration',
        'API Development',
        'Cloud Deployment'
      ],
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'],
      stats: {
        projects: '800+',
        clients: '400+',
        experience: '14+ Years'
      },
      caseStudies: [
        {
          title: 'SaaS Platform Development',
          client: 'B2B Software Company',
          challenge: 'Building scalable multi-tenant SaaS platform',
          solution: 'Full-stack application with microservices architecture',
          results: '10k+ users, 99.9% uptime, $5M ARR within 2 years'
        },
        {
          title: 'Enterprise Application Suite',
          client: 'Financial Institution',
          challenge: 'Modernizing customer-facing applications',
          solution: 'React-based web application with API integration',
          results: '80% improvement in user satisfaction, 60% faster load times'
        }
      ]
    },
    'cloud-consulting': {
      name: 'Cloud Consulting',
      icon: '☁️',
      color: '#fd7e14',
      description: 'Expert cloud consulting and migration services to optimize your infrastructure, reduce costs, and enhance performance.',
      benefits: [
        'Cost optimization',
        'Improved scalability',
        'Enhanced security',
        'Better performance',
        'Reduced downtime',
        'Disaster recovery'
      ],
      services: [
        'Cloud Migration',
        'Architecture Design',
        'Cost Optimization',
        'Security Best Practices',
        'Cloud Strategy',
        'DevOps & CI/CD'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Docker'],
      stats: {
        projects: '600+',
        clients: '350+',
        experience: '13+ Years'
      },
      caseStudies: [
        {
          title: 'AWS Migration & Optimization',
          client: 'E-commerce Platform',
          challenge: 'Moving from on-premise to AWS cost-effectively',
          solution: 'Phased migration strategy with auto-scaling',
          results: '40% cost reduction, 3x faster load times, 99.99% uptime'
        },
        {
          title: 'Multi-Cloud Strategy',
          client: 'Healthcare Provider',
          challenge: 'Compliant, secure cloud infrastructure for medical data',
          solution: 'HIPAA-compliant multi-cloud architecture',
          results: '100% compliance, zero breaches, 50% lower costs'
        }
      ]
    },
    'ai-ml': {
      name: 'AI & Machine Learning',
      icon: '🤖',
      color: '#ffc107',
      description: 'Intelligent solutions leveraging artificial intelligence and machine learning to transform your business operations.',
      benefits: [
        'Predictive insights',
        'Process automation',
        'Better decision making',
        'Personalized experiences',
        'Competitive edge',
        'Innovation acceleration'
      ],
      services: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Deep Learning',
        'Recommendation Systems',
        'Chatbots & Virtual Assistants'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'HuggingFace', 'MLOps'],
      stats: {
        projects: '300+',
        clients: '200+',
        experience: '10+ Years'
      },
      caseStudies: [
        {
          title: 'AI-Powered Fraud Detection',
          client: 'Financial Services',
          challenge: 'Detecting fraudulent transactions in real-time',
          solution: 'ML-powered fraud detection system with 99.5% accuracy',
          results: '95% fraud reduction, $2M saved annually'
        },
        {
          title: 'Predictive Maintenance System',
          client: 'Manufacturing Company',
          challenge: 'Reducing equipment downtime',
          solution: 'IoT-based predictive maintenance with ML analytics',
          results: '60% reduction in unplanned downtime, 40% cost savings'
        }
      ]
    },
    'healthcare-ai': {
      name: 'Healthcare AI Stack',
      icon: '🏥',
      color: '#1a1a1a',
      description: 'HIPAA-compliant patient logistics and workflow automation. Critical systems for patient safety, doctor workflow, and hospital automation.',
      benefits: [
        'HIPAA compliance',
        'Patient safety enhancement',
        'Workflow automation',
        'Multi-location management',
        'Real-time monitoring',
        'Seamless data analytics'
      ],
      services: [
        'HIPAA-compliant Systems',
        'Patient Logistics',
        'Workflow Automation',
        'Hospital Administration',
        'Multi-location Synchronisation',
        'Real-time Patient Monitoring'
      ],
      technologies: ['React', 'Python', 'HIPAA Compliance', 'Real-time Analytics', 'Healthcare AI', 'Workflow Automation'],
      stats: {
        projects: '50+',
        clients: '25+',
        experience: '10+ Years'
      },
      caseStudies: [
        {
          title: 'Healthcare Administration',
          client: 'Hospitals Network',
          challenge: 'Hospitals needed a unified, HIPAA-compliant system for multi-location management and real-time patient monitoring.',
          solution: 'Neoteq Health - a comprehensive hospital administration suite enabling multi-location synchronisation, real-time data analytics, and secured data handling.',
          results: '99.9% uptime, seamless real-time monitoring across distributed facilities, fully compliant with security regulations'
        }
      ]
    },
    'gpu-optimisation': {
      name: 'GPU Optimisation',
      icon: '⚡',
      color: '#2c3e50',
      description: 'Custom CUDA/AMD kernel-level optimisation for performance and energy efficiency. Efficiently deploy 70B+ parameter models on limited GPU infrastructure.',
      benefits: [
        'Cost reduction',
        'Improved throughput',
        'Energy efficiency',
        'Performance optimization',
        'Maintained accuracy',
        'Scalable infrastructure'
      ],
      services: [
        'Custom CUDA Kernel Development',
        'AMD Kernel Optimisation',
        'Dynamic Quantisation (INT8/FP16)',
        'Inference Path Re-engineering',
        'TensorRT Integration',
        'Layer Fusion'
      ],
      technologies: ['CUDA', 'PyTorch', 'TensorRT', 'ONNX', 'Hugging Face', 'LangChain', 'Triton Inference Server'],
      stats: {
        projects: '100+',
        clients: '60+',
        experience: '8+ Years'
      },
      caseStudies: [
        {
          title: 'GPU Optimisation',
          client: 'AI Platform Company',
          challenge: 'High GPU costs and inefficient utilisation leading to scalability issues.',
          solution: 'Custom CUDA kernel optimisation, dynamic quantisation (INT8/FP16), and inference path re-engineering with TensorRT and layer fusion.',
          results: '42% improvement in throughput, 37% power reduction, 40% cost reduction in GPU operations, maintained accuracy with optimised inference path'
        }
      ]
    },
    'staff-augmentation': {
      name: 'Staff Augmentation',
      icon: '👥',
      color: '#28a745',
      description: 'Our experts, your team - flexible, skilled, and aligned to your vision.',
      benefits: [
        'Access to expert talent',
        'Faster project delivery',
        'Reduced hiring costs',
        'Specialized skill sets',
        'Flexible engagement models',
        'Knowledge transfer'
      ],
      services: [
        'Remote Team Integration',
        'Specialized Expertise',
        'Agile Methodology',
        'Direct Communication',
        'Dedicated Resources',
        'Quality Assurance'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'],
      stats: {
        projects: '1000+',
        clients: '500+',
        experience: '12+ Years'
      },
      caseStudies: [
        {
          title: 'Tech Startup Scaling',
          client: 'Fast-Growing Startup',
          challenge: 'Need for rapid development with limited team',
          solution: 'Augmented team of 15 specialists across stack',
          results: 'Delivered 6 months ahead of schedule, 50% cost savings'
        }
      ]
    },
    'product-engineering': {
      name: 'Product Engineering',
      icon: '🚀',
      color: '#17a2b8',
      description: 'Full-cycle development - from architecture to maintenance.',
      benefits: [
        'Full-cycle development',
        'Scalable architecture',
        'Modern tech stack',
        'Quality assurance',
        'Fast time-to-market',
        'Ongoing support'
      ],
      services: [
        'Architecture Design',
        'Full-Stack Development',
        'Quality Assurance',
        'DevOps Integration',
        'Maintenance & Support',
        'Continuous Delivery'
      ],
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'],
      stats: {
        projects: '800+',
        clients: '400+',
        experience: '14+ Years'
      },
      caseStudies: [
        {
          title: 'SaaS Platform Development',
          client: 'B2B Software Company',
          challenge: 'Building scalable multi-tenant SaaS platform',
          solution: 'Full-stack application with microservices architecture',
          results: '10k+ users, 99.9% uptime, $5M ARR within 2 years'
        }
      ]
    },
    'dedicated-hires': {
      name: 'Dedicated Hires',
      icon: '💼',
      color: '#4a4a4a',
      description: 'Build your in-house capability with vetted professionals.',
      benefits: [
        'Vetted professionals',
        'In-house capability',
        'Long-term partnerships',
        'Dedicated resources',
        'Deep integration',
        'Knowledge retention'
      ],
      services: [
        'Professional Vetting',
        'Team Integration',
        'Long-term Engagement',
        'Dedicated Resources',
        'Performance Management',
        'Continuous Support'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'],
      stats: {
        projects: '500+',
        clients: '250+',
        experience: '10+ Years'
      },
      caseStudies: [
        {
          title: 'Enterprise Team Building',
          client: 'Fortune 500 Corp',
          challenge: 'Building dedicated in-house AI capability',
          solution: 'Dedicated team of ML engineers and architects integrated into client organization',
          results: 'Successfully launched AI platform in 4 months, built lasting in-house capability'
        }
      ]
    },
    'turnkey-projects': {
      name: 'Turnkey Projects',
      icon: '🎯',
      color: '#555555',
      description: 'End-to-end solutions, delivered on time and at scale.',
      benefits: [
        'End-to-end solutions',
        'On-time delivery',
        'Scalable architecture',
        'Complete ownership',
        'Reduced complexity',
        'Risk mitigation'
      ],
      services: [
        'Project Planning',
        'Architecture Design',
        'Full Development',
        'Deployment & Launch',
        'Post-launch Support',
        'Complete Handover'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'],
      stats: {
        projects: '600+',
        clients: '300+',
        experience: '13+ Years'
      },
      caseStudies: [
        {
          title: 'Enterprise Platform Launch',
          client: 'Global Corporation',
          challenge: 'Complete digital platform from concept to launch',
          solution: 'End-to-end turnkey project with full ownership and delivery',
          results: 'Launched on schedule, 100% feature completion, 50% cost savings vs traditional approach'
        }
      ]
    },
    'ai-llm-platforms': {
      name: 'AI & LLM Platforms',
      icon: '🤖',
      color: '#1a1a1a',
      description: 'Agentic AI, RAG, automation, and distributed intelligence.',
      benefits: [
        'Agentic AI capabilities',
        'RAG infrastructure',
        'Process automation',
        'Distributed intelligence',
        'Scalable AI systems',
        'Enterprise integration'
      ],
      services: [
        'Agentic AI Development',
        'RAG Infrastructure',
        'LLM Integration',
        'Automation Systems',
        'Distributed Intelligence',
        'AI Platform Engineering'
      ],
      technologies: ['Python', 'LangChain', 'Hugging Face', 'OpenAI', 'RAG', 'Vector Databases'],
      stats: {
        projects: '200+',
        clients: '150+',
        experience: '8+ Years'
      },
      caseStudies: [
        {
          title: 'Enterprise RAG Platform',
          client: 'Financial Services',
          challenge: 'Building contextual AI system with real-time data',
          solution: 'Distributed RAG infrastructure with real-time data layers',
          results: '90% accuracy improvement, 5x faster response times, scalable to enterprise level'
        }
      ]
    },
    'cloud-edge-deployments': {
      name: 'Cloud & Edge Deployments',
      icon: '☁️',
      color: '#fd7e14',
      description: 'Containerised AI solutions with adaptive scaling and real-time monitoring.',
      benefits: [
        'Adaptive scaling',
        'Real-time monitoring',
        'Containerised solutions',
        'Edge computing',
        'Cost optimization',
        'High availability'
      ],
      services: [
        'Cloud Migration',
        'Edge Deployment',
        'Container Orchestration',
        'Adaptive Scaling',
        'Real-time Monitoring',
        'Performance Optimization'
      ],
      technologies: ['Kubernetes', 'Docker', 'AWS', 'Azure', 'Edge Computing', 'Terraform'],
      stats: {
        projects: '400+',
        clients: '250+',
        experience: '10+ Years'
      },
      caseStudies: [
        {
          title: 'Edge AI Deployment',
          client: 'Manufacturing Company',
          challenge: 'Deploying AI models at edge with low latency requirements',
          solution: 'Containerised edge deployment with adaptive scaling and real-time monitoring',
          results: '99.9% uptime, 50% latency reduction, 40% cost savings'
        }
      ]
    }
  };

  const service = serviceData[serviceId || ''];

  if (!service) {
    return (
      <div className="service-detail">
        <div className="service-container">
          <div className="error-section">
            <h1>Service Not Found</h1>
            <p>The requested service page could not be found.</p>
            <NeonButton variant="primary" size="medium" onClick={() => navigate('/')}>
              Go Back Home
            </NeonButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail">
      <div className="service-container">
        {/* Back Button */}
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          ← Back
        </button>

        {/* Hero Section */}
        <div className="service-hero">
          <GlassCard className="hero-card" glowColor={service.color}>
            <div className="hero-content">
              <div className="service-icon-large" style={{ backgroundColor: service.color }}>
                {service.icon}
              </div>
              <h1 className="service-title">{service.name}</h1>
              <p className="service-description">{service.description}</p>
              
              <div className="service-stats">
                <div className="stat-item">
                  <div className="stat-number">{service.stats.projects}</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{service.stats.clients}</div>
                  <div className="stat-label">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{service.stats.experience}</div>
                  <div className="stat-label">Experience</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2 className="section-title">Key Benefits</h2>
          <div className="benefits-grid">
            {service.benefits.map((benefit: string, index: number) => (
              <GlassCard key={index} className="benefit-card" glowColor="#28a745">
                <div className="benefit-content">
                  <div className="benefit-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p>{benefit}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="services-offered-section">
          <h2 className="section-title">Our Services</h2>
          <div className="services-offered-grid">
            {service.services.map((serviceOffered: string, index: number) => (
              <GlassCard key={index} className="service-offered-card" glowColor={service.color}>
                <div className="service-offered-content">
                  <div className="service-offered-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={service.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p>{serviceOffered}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="technologies-section">
          <h2 className="section-title">Technologies We Use</h2>
          <div className="tech-tags-container">
            {service.technologies.map((tech: string, index: number) => (
              <span key={index} className="tech-tag" style={{ borderColor: service.color }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="case-studies-section">
          <h2 className="section-title">Success Stories</h2>
          <div className="case-studies-grid">
            {service.caseStudies.map((caseStudy: any, index: number) => (
              <GlassCard key={index} className="case-study-card" glowColor={service.color}>
                <div className="case-study-content">
                  <h3>{caseStudy.title}</h3>
                  <div className="case-study-details">
                    <div className="detail-item">
                      <strong>Client:</strong> {caseStudy.client}
                    </div>
                    <div className="detail-item">
                      <strong>Challenge:</strong> {caseStudy.challenge}
                    </div>
                    <div className="detail-item">
                      <strong>Solution:</strong> {caseStudy.solution}
                    </div>
                    <div className="detail-item">
                      <strong>Results:</strong> {caseStudy.results}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <GlassCard className="cta-card" glowColor={service.color}>
            <div className="cta-content">
              <h2>Ready to Get Started with {service.name}?</h2>
              <p>Let's discuss how our services can help transform your business.</p>
              <div className="cta-buttons">
                <NeonButton variant="primary" size="large" onClick={() => navigate('/contact')}>
                  Get Started Today
                </NeonButton>
                <NeonButton variant="secondary" size="large" onClick={() => navigate('/contact')}>
                  Schedule Consultation
                </NeonButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
