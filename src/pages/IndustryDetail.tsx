import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import '../styles/IndustryDetail.css';

const IndustryDetail: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const navigate = useNavigate();

  const industryData: { [key: string]: any } = {
    'financial-services': {
      name: 'Financial Services',
      icon: '💳',
      color: '#007bff',
      description: 'Transforming financial services with secure, scalable solutions including digital banking, payment processing, and blockchain applications.',
      challenges: [
        'Regulatory compliance (PCI DSS, GDPR)',
        'Legacy system modernization',
        'Security and fraud prevention',
        'Real-time transaction processing',
        'Customer data protection',
        'Cross-border payment complexities'
      ],
      solutions: [
        'Digital Banking Platforms',
        'Payment Gateway Solutions',
        'Blockchain & Cryptocurrency',
        'Risk Management Systems',
        'Regulatory Compliance Tools',
        'Financial Analytics & Reporting'
      ],
      technologies: ['React', 'Java', 'Python', 'Blockchain', 'AWS', 'PCI DSS'],
      stats: {
        projects: '200+',
        clients: '120+',
        experience: '10+ Years'
      },
      caseStudies: [
        {
          title: 'Digital Banking Transformation',
          client: 'Regional Bank',
          challenge: 'Modernizing legacy banking systems',
          solution: 'Cloud-native digital banking platform',
          results: '40% increase in digital transactions, 60% reduction in processing time'
        },
        {
          title: 'Payment Gateway Integration',
          client: 'E-commerce Platform',
          challenge: 'Secure payment processing at scale',
          solution: 'Multi-provider payment gateway with fraud detection',
          results: '99.9% uptime, 50% reduction in fraud cases'
        }
      ]
    },
    'fintech': {
      name: 'FinTech',
      icon: '💳',
      color: '#007bff',
      description: 'Transforming financial services with secure, scalable solutions including digital banking, payment processing, and blockchain applications.',
      challenges: [
        'Regulatory compliance (PCI DSS, GDPR)',
        'Legacy system modernization',
        'Security and fraud prevention',
        'Real-time transaction processing',
        'Customer data protection',
        'Cross-border payment complexities'
      ],
      solutions: [
        'Digital Banking Platforms',
        'Payment Gateway Solutions',
        'Blockchain & Cryptocurrency',
        'Risk Management Systems',
        'Regulatory Compliance Tools',
        'Financial Analytics & Reporting'
      ],
      technologies: ['React', 'Java', 'Python', 'Blockchain', 'AWS', 'PCI DSS'],
      stats: {
        projects: '200+',
        clients: '120+',
        experience: '10+ Years'
      },
      caseStudies: [
        {
          title: 'Digital Banking Transformation',
          client: 'Regional Bank',
          challenge: 'Modernizing legacy banking systems',
          solution: 'Cloud-native digital banking platform',
          results: '40% increase in digital transactions, 60% reduction in processing time'
        },
        {
          title: 'Payment Gateway Integration',
          client: 'E-commerce Platform',
          challenge: 'Secure payment processing at scale',
          solution: 'Multi-provider payment gateway with fraud detection',
          results: '99.9% uptime, 50% reduction in fraud cases'
        }
      ]
    },
    'ecommerce-retail': {
      name: 'E-Commerce & Retail',
      icon: '🛒',
      color: '#fd7e14',
      description: 'Building scalable e-commerce platforms with advanced features like AI recommendations, omnichannel experiences, and seamless payment integration.',
      challenges: [
        'Omnichannel integration',
        'Inventory management complexity',
        'Customer personalization at scale',
        'Mobile commerce optimization',
        'Supply chain visibility',
        'Seasonal traffic spikes'
      ],
      solutions: [
        'Multi-Channel E-commerce Platforms',
        'AI-Powered Product Recommendations',
        'Inventory Management Systems',
        'Payment Gateway Integration',
        'Mobile Commerce Solutions',
        'Analytics & Business Intelligence'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Shopify'],
      stats: {
        projects: '300+',
        clients: '200+',
        experience: '12+ Years'
      },
      caseStudies: [
        {
          title: 'Omnichannel Retail Platform',
          client: 'Fashion Retail Chain',
          challenge: 'Unifying online and offline experiences',
          solution: 'Integrated omnichannel platform with real-time inventory',
          results: '200% increase in online sales, 150% improvement in mobile conversions'
        },
        {
          title: 'AI-Powered E-commerce',
          client: 'Electronics Retailer',
          challenge: 'Improving product discovery and recommendations',
          solution: 'Machine learning recommendation engine',
          results: '35% increase in average order value, 25% improvement in conversion rate'
        }
      ]
    },
    'ecommerce': {
      name: 'E-Commerce',
      icon: '🛒',
      color: '#fd7e14',
      description: 'Building scalable e-commerce platforms with advanced features like AI recommendations, omnichannel experiences, and seamless payment integration.',
      challenges: [
        'Omnichannel integration',
        'Inventory management complexity',
        'Customer personalization at scale',
        'Mobile commerce optimization',
        'Supply chain visibility',
        'Seasonal traffic spikes'
      ],
      solutions: [
        'Multi-Channel E-commerce Platforms',
        'AI-Powered Product Recommendations',
        'Inventory Management Systems',
        'Payment Gateway Integration',
        'Mobile Commerce Solutions',
        'Analytics & Business Intelligence'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Shopify'],
      stats: {
        projects: '300+',
        clients: '200+',
        experience: '12+ Years'
      },
      caseStudies: [
        {
          title: 'Omnichannel Retail Platform',
          client: 'Fashion Retail Chain',
          challenge: 'Unifying online and offline experiences',
          solution: 'Integrated omnichannel platform with real-time inventory',
          results: '200% increase in online sales, 150% improvement in mobile conversions'
        },
        {
          title: 'AI-Powered E-commerce',
          client: 'Electronics Retailer',
          challenge: 'Improving product discovery and recommendations',
          solution: 'Machine learning recommendation engine',
          results: '35% increase in average order value, 25% improvement in conversion rate'
        }
      ]
    },
    'healthcare': {
      name: 'Healthcare',
      icon: '🏥',
      color: '#28a745',
      description: 'Revolutionizing healthcare delivery with cutting-edge digital solutions, telemedicine platforms, and AI-powered diagnostic tools.',
      challenges: [
        'HIPAA compliance and data security',
        'Interoperability between systems',
        'Patient data privacy',
        'Telemedicine adoption barriers',
        'Regulatory compliance',
        'Integration with existing systems'
      ],
      solutions: [
        'Telemedicine & Remote Patient Monitoring',
        'AI-Powered Diagnostic Systems',
        'Electronic Health Records (EHR)',
        'Healthcare Analytics & Insights',
        'Patient Engagement Platforms',
        'Medical Device Integration'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AI/ML', 'IoT', 'HIPAA Compliance'],
      stats: {
        projects: '150+',
        clients: '75+',
        experience: '8+ Years'
      },
      caseStudies: [
        {
          title: 'Telemedicine Platform',
          client: 'Regional Hospital Network',
          challenge: 'Expanding healthcare access to remote areas',
          solution: 'Comprehensive telemedicine platform with AI diagnostics',
          results: '300% increase in remote consultations, 90% patient satisfaction'
        },
        {
          title: 'AI Diagnostic System',
          client: 'Medical Imaging Center',
          challenge: 'Improving diagnostic accuracy and speed',
          solution: 'AI-powered medical imaging analysis system',
          results: '40% faster diagnosis, 25% improvement in accuracy'
        }
      ]
    },
    'healthtech': {
      name: 'HealthTech',
      icon: '🏥',
      color: '#28a745',
      description: 'Revolutionizing healthcare delivery with cutting-edge digital solutions, telemedicine platforms, and AI-powered diagnostic tools.',
      challenges: [
        'HIPAA compliance and data security',
        'Interoperability between systems',
        'Patient data privacy',
        'Telemedicine adoption barriers',
        'Regulatory compliance',
        'Integration with existing systems'
      ],
      solutions: [
        'Telemedicine & Remote Patient Monitoring',
        'AI-Powered Diagnostic Systems',
        'Electronic Health Records (EHR)',
        'Healthcare Analytics & Insights',
        'Patient Engagement Platforms',
        'Medical Device Integration'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AI/ML', 'IoT', 'HIPAA Compliance'],
      stats: {
        projects: '150+',
        clients: '75+',
        experience: '8+ Years'
      },
      caseStudies: [
        {
          title: 'Telemedicine Platform',
          client: 'Regional Hospital Network',
          challenge: 'Expanding healthcare access to remote areas',
          solution: 'Comprehensive telemedicine platform with AI diagnostics',
          results: '300% increase in remote consultations, 90% patient satisfaction'
        },
        {
          title: 'AI Diagnostic System',
          client: 'Medical Imaging Center',
          challenge: 'Improving diagnostic accuracy and speed',
          solution: 'AI-powered medical imaging analysis system',
          results: '40% faster diagnosis, 25% improvement in accuracy'
        }
      ]
    },
    'education': {
      name: 'Education & Learning',
      icon: '🎓',
      color: '#17a2b8',
      description: 'Enabling digital transformation in education with innovative learning management and delivery systems.',
      challenges: [
        'Remote learning capabilities',
        'Student engagement',
        'Content management',
        'Assessment and grading',
        'Accessibility compliance',
        'Integration with existing systems'
      ],
      solutions: [
        'Learning Management Systems',
        'Virtual Classrooms',
        'Educational Content Platforms',
        'Student Information Systems',
        'Assessment & Testing Platforms',
        'Parent-Teacher Communication Tools'
      ],
      technologies: ['React', 'Node.js', 'Python', 'WebRTC', 'MongoDB', 'AWS'],
      stats: {
        projects: '180+',
        clients: '150+',
        experience: '9+ Years'
      },
      caseStudies: [
        {
          title: 'Virtual Learning Platform',
          client: 'University System',
          challenge: 'Transitioning to online learning during pandemic',
          solution: 'Comprehensive virtual learning management system',
          results: '95% student satisfaction, 80% reduction in dropout rates'
        },
        {
          title: 'AI-Powered Assessment',
          client: 'K-12 School District',
          challenge: 'Automated grading and personalized learning',
          solution: 'AI-driven assessment and adaptive learning platform',
          results: '60% reduction in grading time, 30% improvement in learning outcomes'
        }
      ]
    },
    'gpu': {
      name: 'GPU Computing',
      icon: '🎮',
      color: '#6f42c1',
      description: 'Leveraging GPU acceleration for high-performance computing, AI/ML workloads, and graphics-intensive applications across various industries.',
      challenges: [
        'CUDA optimization complexity',
        'Memory management',
        'Parallel processing efficiency',
        'Cross-platform compatibility',
        'Performance optimization',
        'Scalability challenges'
      ],
      solutions: [
        'CUDA Development & Optimization',
        'Machine Learning Acceleration',
        'Computer Vision Applications',
        'Scientific Computing Solutions',
        'GPU Programming & Optimization',
        'High-Performance Computing'
      ],
      technologies: ['CUDA', 'Python', 'C++', 'OpenCL', 'TensorFlow', 'PyTorch'],
      stats: {
        projects: '100+',
        clients: '60+',
        experience: '7+ Years'
      },
      caseStudies: [
        {
          title: 'AI Model Training Acceleration',
          client: 'Tech Startup',
          challenge: 'Training large AI models at scale',
          solution: 'Optimized GPU cluster for distributed training',
          results: '10x faster training time, 60% cost reduction'
        },
        {
          title: 'Scientific Computing Platform',
          client: 'Research Institution',
          challenge: 'Processing massive scientific datasets',
          solution: 'GPU-accelerated computing platform',
          results: '100x performance improvement, real-time analytics'
        }
      ]
    },
    'retail': {
      name: 'Retail Technology',
      icon: '🏪',
      color: '#20c997',
      description: 'Modernizing retail operations with smart inventory management, customer analytics, and omnichannel experiences that drive sales growth.',
      challenges: [
        'Omnichannel customer experience',
        'Real-time inventory tracking',
        'Customer behavior analytics',
        'Supply chain optimization',
        'POS system integration',
        'Data synchronization'
      ],
      solutions: [
        'Smart Inventory Management',
        'Customer Analytics & Insights',
        'Omnichannel Retail Solutions',
        'Point of Sale (POS) Systems',
        'Mobile Commerce Solutions',
        'Retail Analytics Platform'
      ],
      technologies: ['React', 'Node.js', 'SQL', 'Redis', 'Stripe', 'AWS'],
      stats: {
        projects: '250+',
        clients: '150+',
        experience: '11+ Years'
      },
      caseStudies: [
        {
          title: 'Omnichannel Retail Platform',
          client: 'Fashion Retail Chain',
          challenge: 'Unifying online and offline experiences',
          solution: 'Integrated omnichannel platform with real-time inventory',
          results: '200% increase in online sales, 150% improvement in mobile conversions'
        },
        {
          title: 'AI-Powered Inventory Optimization',
          client: 'Retail Chain',
          challenge: 'Optimizing inventory across multiple locations',
          solution: 'AI-driven inventory management system',
          results: '40% reduction in stockouts, 30% decrease in excess inventory'
        }
      ]
    }
  };

  const industry = industryData[industryId || ''];

  if (!industry) {
    return (
      <div className="industry-detail">
        <div className="industry-container">
          <div className="error-section">
            <h1>Industry Not Found</h1>
            <p>The requested industry page could not be found.</p>
            <NeonButton variant="primary" size="medium">
              Go Back Home
            </NeonButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="industry-detail">
      <div className="industry-container">
        {/* Back Button */}
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          ← Back
        </button>

        {/* Hero Section */}
        <div className="industry-hero">
          <GlassCard className="hero-card" glowColor={industry.color}>
            <div className="hero-content">
              <div className="industry-icon-large" style={{ backgroundColor: industry.color }}>
                {industry.icon}
              </div>
              <h1 className="industry-title">{industry.name}</h1>
              <p className="industry-description">{industry.description}</p>
              
              <div className="industry-stats">
                <div className="stat-item">
                  <div className="stat-number">{industry.stats.projects}</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{industry.stats.clients}</div>
                  <div className="stat-label">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{industry.stats.experience}</div>
                  <div className="stat-label">Experience</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Challenges Section */}
        <div className="challenges-section">
          <h2 className="section-title">Key Challenges</h2>
          <div className="challenges-grid">
            {industry.challenges.map((challenge: string, index: number) => (
              <GlassCard key={index} className="challenge-card" glowColor="#dc3545">
                <div className="challenge-content">
                  <div className="challenge-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#dc3545"/>
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" stroke="#dc3545" strokeWidth="2"/>
                    </svg>
                  </div>
                  <p>{challenge}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="solutions-section">
          <h2 className="section-title">Our Solutions</h2>
          <div className="solutions-grid">
            {industry.solutions.map((solution: string, index: number) => (
              <GlassCard key={index} className="solution-card" glowColor={industry.color}>
                <div className="solution-content">
                  <div className="solution-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={industry.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12L11 14L15 10" stroke={industry.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p>{solution}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="technologies-section">
          <h2 className="section-title">Technologies We Use</h2>
          <div className="tech-tags-container">
            {industry.technologies.map((tech: string, index: number) => (
              <span key={index} className="tech-tag" style={{ borderColor: industry.color }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="case-studies-section">
          <h2 className="section-title">Success Stories</h2>
          <div className="case-studies-grid">
            {industry.caseStudies.map((caseStudy: any, index: number) => (
              <GlassCard key={index} className="case-study-card" glowColor={industry.color}>
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
          <GlassCard className="cta-card" glowColor={industry.color}>
            <div className="cta-content">
              <h2>Ready to Transform Your {industry.name} Business?</h2>
              <p>Let's discuss how our solutions can help you overcome challenges and achieve your goals.</p>
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

export default IndustryDetail;