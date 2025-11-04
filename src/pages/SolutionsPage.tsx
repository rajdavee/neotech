import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import '../styles/SolutionsPage.css';

const SolutionsPage: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleExplore = (solutionId: string) => {
    navigate(`/solutions/${solutionId}`);
  };

  const solutions = [
    {
      id: "crm",
      name: "CRM Solutions",
      icon: "👤",
      color: "#1a1a1a",
      description: "Comprehensive customer relationship management solutions that enhance customer engagement and drive sales growth.",
      features: ["Customer Data Management", "Sales Pipeline Tracking", "Marketing Automation", "Customer Service Management", "Analytics and Reporting"],
      benefits: ["Improved customer relationships", "Increased sales conversion", "Enhanced customer service", "Better data insights", "Streamlined processes"],
      technologies: ["Salesforce", "Microsoft Dynamics", "HubSpot", "Custom CRM Development"]
    },
    {
      id: "ecommerce",
      name: "E-Commerce Solutions",
      icon: "🛍️",
      color: "#2c3e50",
      description: "End-to-end e-commerce platforms that deliver exceptional shopping experiences and drive online sales.",
      features: ["Product Catalog Management", "Shopping Cart and Checkout", "Payment Integration", "Order Management", "Mobile Responsiveness"],
      benefits: ["Increased online sales", "Better customer experience", "Scalable architecture", "Mobile optimization", "Secure transactions"],
      technologies: ["Shopify", "Magento", "WooCommerce", "Custom E-commerce Development"]
    },
    {
      id: "erp",
      name: "ERP Solutions",
      icon: "📊",
      color: "#4a4a4a",
      description: "Enterprise resource planning systems that integrate and streamline business processes across your organization.",
      features: ["Financial Management", "Human Resources", "Supply Chain Management", "Manufacturing Execution", "Business Intelligence"],
      benefits: ["Process integration", "Improved efficiency", "Better data accuracy", "Cost reduction", "Enhanced reporting"],
      technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Custom ERP Development"]
    },
    {
      id: "cms",
      name: "Content Management Systems",
      icon: "📝",
      color: "#555555",
      description: "Flexible content management solutions that empower teams to create, manage, and publish digital content effortlessly.",
      features: ["Content Creation and Editing", "Multi-channel Publishing", "User Management", "SEO Optimization", "Analytics Integration"],
      benefits: ["Easy content management", "Improved collaboration", "Better SEO performance", "Faster time to market", "Cost-effective maintenance"],
      technologies: ["WordPress", "Drupal", "Strapi", "Custom CMS Development"]
    },
    {
      id: "rpa",
      name: "Robotic Process Automation",
      icon: "🤖",
      color: "#1a1a1a",
      description: "Intelligent automation solutions that streamline repetitive tasks and improve operational efficiency.",
      features: ["Process Automation", "Bot Development", "Workflow Optimization", "Exception Handling", "Performance Monitoring"],
      benefits: ["Reduced manual effort", "Improved accuracy", "Cost savings", "Faster processing", "Employee satisfaction"],
      technologies: ["UiPath", "Blue Prism", "Automation Anywhere", "Custom RPA Solutions"]
    },
    {
      id: "analytics",
      name: "Business Intelligence & Analytics",
      icon: "📈",
      color: "#2c3e50",
      description: "Advanced analytics and business intelligence solutions that transform data into actionable insights for better decision making.",
      features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "Report Generation", "Data Integration"],
      benefits: ["Data-driven decisions", "Improved performance", "Cost optimization", "Competitive advantage", "Risk mitigation"],
      technologies: ["Tableau", "Power BI", "QlikView", "Custom Analytics Solutions"]
    }
  ];

  return (
    <div className="solutions-page">
      <div className="solutions-container">
        <div className="solutions-header">
          <h1 className="modern-title">
            <span className="title-line">Our</span>
            <span className="title-accent">Solutions</span>
          </h1>
          <div className="title-underline" />
          <p className="modern-subtitle">
            Comprehensive solutions for your business challenges
          </p>
        </div>
        
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <GlassCard 
              key={solution.id} 
              className={`solution-card ${selectedSolution === solution.id ? 'selected' : ''}`}
              glowColor={solution.color}
              onClick={() => setSelectedSolution(selectedSolution === solution.id ? null : solution.id)}
            >
              <div className="solution-content">
                <div className="solution-icon" style={{ backgroundColor: solution.color }}>
                  {solution.icon}
                </div>
                <h3>{solution.name}</h3>
                <p>{solution.description}</p>
                
                {selectedSolution === solution.id && (
                  <div className="solution-details">
                    <div className="solution-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {solution.features.map((feature, index) => (
                          <li key={index}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9 12L11 14L15 10" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="solution-benefits">
                      <h4>Benefits:</h4>
                      <ul>
                        {solution.benefits.map((benefit, index) => (
                          <li key={index}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#1a1a1a"/>
                              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" stroke="#1a1a1a" strokeWidth="2"/>
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="solution-technologies">
                      <h4>Technologies:</h4>
                      <div className="tech-tags">
                        {solution.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <NeonButton 
                  variant={selectedSolution === solution.id ? "primary" : "secondary"}
                  size="small"
                  onClick={() => handleExplore(solution.id)}
                >
                  {selectedSolution === solution.id ? 'Selected' : 'Explore'}
                </NeonButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;