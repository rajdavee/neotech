import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import SEO from '../components/SEO';
import '../styles/SolutionDetail.css';

const SolutionDetail: React.FC = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  const navigate = useNavigate();

  const solutionData: { [key: string]: any } = {
    'crm': {
      name: 'CRM Solutions',
      icon: '👤',
      color: '#007bff',
      description: 'Comprehensive customer relationship management solutions that enhance customer engagement and drive sales growth.',
      features: [
        'Customer Data Management',
        'Sales Pipeline Tracking',
        'Marketing Automation',
        'Customer Service Management',
        'Analytics and Reporting',
        'Integration Capabilities'
      ],
      benefits: [
        'Improved customer relationships',
        'Increased sales conversion',
        'Enhanced customer service',
        'Better data insights',
        'Streamlined processes',
        'Better team collaboration'
      ],
      technologies: ['Salesforce', 'Microsoft Dynamics', 'HubSpot', 'Custom CRM Development'],
      stats: {
        projects: '400+',
        clients: '250+',
        experience: '14+ Years'
      },
      caseStudies: [
        {
          title: 'Salesforce Implementation',
          client: 'Enterprise Corporation',
          challenge: 'Disconnected customer data and manual processes',
          solution: 'Custom Salesforce implementation with automated workflows',
          results: '40% increase in sales conversion, 50% time savings'
        },
        {
          title: 'HubSpot Migration',
          client: 'Growing SaaS Company',
          challenge: 'Need for integrated marketing and sales platform',
          solution: 'Complete HubSpot migration with custom integrations',
          results: '60% improvement in lead quality, 35% increase in revenue'
        }
      ]
    },
    'ecommerce': {
      name: 'E-Commerce Solutions',
      icon: '🛍️',
      color: '#28a745',
      description: 'End-to-end e-commerce platforms that deliver exceptional shopping experiences and drive online sales.',
      features: [
        'Product Catalog Management',
        'Shopping Cart and Checkout',
        'Payment Integration',
        'Order Management',
        'Mobile Responsiveness',
        'Inventory Management'
      ],
      benefits: [
        'Increased online sales',
        'Better customer experience',
        'Scalable architecture',
        'Mobile optimization',
        'Secure transactions',
        'Multi-channel selling'
      ],
      technologies: ['Shopify', 'Magento', 'WooCommerce', 'Custom E-commerce Development'],
      stats: {
        projects: '500+',
        clients: '350+',
        experience: '15+ Years'
      },
      caseStudies: [
        {
          title: 'Shopify Plus Migration',
          client: 'Fashion Retail Brand',
          challenge: 'Scaling e-commerce operations for growth',
          solution: 'Shopify Plus implementation with custom theme and apps',
          results: '200% increase in online sales, 99.9% uptime'
        },
        {
          title: 'Custom E-commerce Platform',
          client: 'B2B Marketplace',
          challenge: 'Complex B2B requirements not met by standard solutions',
          solution: 'Custom e-commerce platform with unique workflow',
          results: '10x increase in order processing speed'
        }
      ]
    },
    'erp': {
      name: 'ERP Solutions',
      icon: '📊',
      color: '#ffc107',
      description: 'Enterprise resource planning systems that integrate and streamline business processes across your organization.',
      features: [
        'Financial Management',
        'Human Resources',
        'Supply Chain Management',
        'Manufacturing Execution',
        'Business Intelligence',
        'Project Management'
      ],
      benefits: [
        'Process integration',
        'Improved efficiency',
        'Better data accuracy',
        'Cost reduction',
        'Enhanced reporting',
        'Real-time visibility'
      ],
      technologies: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Custom ERP Development'],
      stats: {
        projects: '300+',
        clients: '180+',
        experience: '16+ Years'
      },
      caseStudies: [
        {
          title: 'SAP Implementation',
          client: 'Manufacturing Company',
          challenge: 'Fragmented systems across multiple locations',
          solution: 'Enterprise-wide SAP ERP implementation',
          results: '30% efficiency improvement, $5M cost savings annually'
        },
        {
          title: 'Cloud ERP Migration',
          client: 'Mid-Size Business',
          challenge: 'Modernizing legacy on-premise ERP',
          solution: 'Microsoft Dynamics 365 cloud migration',
          results: '40% reduction in IT costs, improved remote access'
        }
      ]
    },
    'cms': {
      name: 'Content Management Systems',
      icon: '📝',
      color: '#17a2b8',
      description: 'Flexible content management solutions that empower teams to create, manage, and publish digital content effortlessly.',
      features: [
        'Content Creation and Editing',
        'Multi-channel Publishing',
        'User Management',
        'SEO Optimization',
        'Analytics Integration',
        'Media Library Management'
      ],
      benefits: [
        'Easy content management',
        'Improved collaboration',
        'Better SEO performance',
        'Faster time to market',
        'Cost-effective maintenance',
        'Scalable architecture'
      ],
      technologies: ['WordPress', 'Drupal', 'Strapi', 'Custom CMS Development'],
      stats: {
        projects: '600+',
        clients: '400+',
        experience: '13+ Years'
      },
      caseStudies: [
        {
          title: 'WordPress Multi-Site Network',
          client: 'Media Company',
          challenge: 'Managing content across 50+ websites',
          solution: 'WordPress Multi-Site network with centralized management',
          results: '80% reduction in content management time'
        },
        {
          title: 'Custom CMS Development',
          client: 'Publishing House',
          challenge: 'Unique workflow requirements',
          solution: 'Custom CMS built with modern stack',
          results: '10x faster content publishing, improved SEO'
        }
      ]
    },
    'rpa': {
      name: 'Robotic Process Automation',
      icon: '🤖',
      color: '#6f42c1',
      description: 'Intelligent automation solutions that streamline repetitive tasks and improve operational efficiency.',
      features: [
        'Process Automation',
        'Bot Development',
        'Workflow Optimization',
        'Exception Handling',
        'Performance Monitoring',
        'AI Integration'
      ],
      benefits: [
        'Reduced manual effort',
        'Improved accuracy',
        'Cost savings',
        'Faster processing',
        'Employee satisfaction',
        '24/7 availability'
      ],
      technologies: ['UiPath', 'Blue Prism', 'Automation Anywhere', 'Custom RPA Solutions'],
      stats: {
        projects: '200+',
        clients: '120+',
        experience: '8+ Years'
      },
      caseStudies: [
        {
          title: 'UiPath Deployment',
          client: 'Financial Services',
          challenge: 'Manual data entry consuming 40 hours/week',
          solution: 'Automated invoice processing with UiPath',
          results: '95% time reduction, $200k annual savings'
        },
        {
          title: 'End-to-End Automation',
          client: 'Healthcare Provider',
          challenge: 'Repetitive administrative tasks',
          solution: 'Complete RPA suite for claims processing',
          results: '75% faster processing, 99.9% accuracy'
        }
      ]
    },
    'analytics': {
      name: 'Business Intelligence & Analytics',
      icon: '📈',
      color: '#dc3545',
      description: 'Advanced analytics and business intelligence solutions that transform data into actionable insights for better decision making.',
      features: [
        'Data Visualization',
        'Predictive Analytics',
        'Real-time Dashboards',
        'Report Generation',
        'Data Integration',
        'Machine Learning Integration'
      ],
      benefits: [
        'Data-driven decisions',
        'Improved performance',
        'Cost optimization',
        'Competitive advantage',
        'Risk mitigation',
        'Business intelligence'
      ],
      technologies: ['Tableau', 'Power BI', 'QlikView', 'Custom Analytics Solutions'],
      stats: {
        projects: '350+',
        clients: '250+',
        experience: '12+ Years'
      },
      caseStudies: [
        {
          title: 'Tableau Implementation',
          client: 'Retail Chain',
          challenge: 'Fragmented data, no insights',
          solution: 'Unified BI platform with Tableau',
          results: '25% increase in revenue, better inventory management'
        },
        {
          title: 'Predictive Analytics Platform',
          client: 'Insurance Company',
          challenge: 'Need for predictive risk modeling',
          solution: 'Custom analytics platform with ML',
          results: '30% reduction in claims costs, improved accuracy'
        }
      ]
    }
  };

  const solution = solutionData[solutionId || ''];

  const seoData = useMemo(() => {
    if (!solution) return null;
    
    const solutionName = solution.name;
    const solutionDescription = solution.description;
    const keywords = `${solutionName.toLowerCase()}, enterprise software, ${solution.features?.join(', ').toLowerCase() || ''}, business solutions, ${solutionName.toLowerCase()} platform`;
    
    return {
      title: `${solutionName} - Enterprise Software Solutions`,
      description: `${solutionDescription} ${solutionName} solutions from NEOTEQ. Features include ${solution.features?.slice(0, 3).join(', ') || ''}.`,
      keywords
    };
  }, [solution]);

  if (!solution) {
    return (
      <div className="solution-detail">
        <SEO
          title="Solution Not Found"
          description="The requested solution page could not be found."
          url="https://www.neoteq.com/solutions/not-found"
        />
        <div className="solution-container">
          <div className="error-section">
            <h1>Solution Not Found</h1>
            <p>The requested solution page could not be found.</p>
            <NeonButton variant="primary" size="medium" onClick={() => navigate('/')}>
              Go Back Home
            </NeonButton>
          </div>
        </div>
      </div>
    );
  }

    return (
      <div className="solution-detail">
        {seoData && (
          <SEO
            title={seoData.title}
            description={seoData.description}
            keywords={seoData.keywords}
            url={`https://www.neoteq.com/solutions/${solutionId}`}
          />
        )}
        <div className="solution-container">
        {/* Back Button */}
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          ← Back
        </button>

        {/* Hero Section */}
        <div className="solution-hero">
          <GlassCard className="hero-card" glowColor={solution.color}>
            <div className="hero-content">
              <div className="solution-icon-large" style={{ backgroundColor: solution.color }}>
                {solution.icon}
              </div>
              <h1 className="solution-title">{solution.name}</h1>
              <p className="solution-description">{solution.description}</p>
              
              <div className="solution-stats">
                <div className="stat-item">
                  <div className="stat-number">{solution.stats.projects}</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{solution.stats.clients}</div>
                  <div className="stat-label">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{solution.stats.experience}</div>
                  <div className="stat-label">Experience</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            {solution.features.map((feature: string, index: number) => (
              <GlassCard key={index} className="feature-card" glowColor="#007bff">
                <div className="feature-content">
                  <div className="feature-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p>{feature}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2 className="section-title">Key Benefits</h2>
          <div className="benefits-grid">
            {solution.benefits.map((benefit: string, index: number) => (
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

        {/* Technologies Section */}
        <div className="technologies-section">
          <h2 className="section-title">Technologies We Use</h2>
          <div className="tech-tags-container">
            {solution.technologies.map((tech: string, index: number) => (
              <span key={index} className="tech-tag" style={{ borderColor: solution.color }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="case-studies-section">
          <h2 className="section-title">Success Stories</h2>
          <div className="case-studies-grid">
            {solution.caseStudies.map((caseStudy: any, index: number) => (
              <GlassCard key={index} className="case-study-card" glowColor={solution.color}>
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
          <GlassCard className="cta-card" glowColor={solution.color}>
            <div className="cta-content">
              <h2>Ready to Get Started with {solution.name}?</h2>
              <p>Let's discuss how our solutions can help transform your business.</p>
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

export default SolutionDetail;
