import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import SEO from '../components/SEO';
import '../styles/IndustriesPage.css';

const IndustriesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleExplore = (industryId: string) => {
    navigate(`/industries/${industryId}`);
  };

  const industries = [
    {
      id: "healthtech",
      name: "HealthTech",
      icon: "🏥",
      color: "#28a745",
      description: "Revolutionizing healthcare delivery with cutting-edge digital solutions, telemedicine platforms, and AI-powered diagnostic tools.",
      features: ["Telemedicine & Remote Patient Monitoring", "AI-Powered Diagnostic Systems", "Electronic Health Records (EHR)", "Healthcare Analytics & Insights"],
      challenges: ["HIPAA compliance and data security", "Interoperability between systems", "Patient data privacy", "Telemedicine adoption barriers"]
    },
    {
      id: "fintech",
      name: "FinTech",
      icon: "💳",
      color: "#007bff",
      description: "Transforming financial services with secure, scalable solutions including digital banking, payment processing, and blockchain applications.",
      features: ["Digital Banking Platforms", "Payment Gateway Solutions", "Blockchain & Cryptocurrency", "Risk Management Systems"],
      challenges: ["Regulatory compliance (PCI DSS, GDPR)", "Legacy system modernization", "Security and fraud prevention", "Real-time transaction processing"]
    },
    {
      id: "ecommerce",
      name: "E-Commerce",
      icon: "🛒",
      color: "#fd7e14",
      description: "Building scalable e-commerce platforms with advanced features like AI recommendations, omnichannel experiences, and seamless payment integration.",
      features: ["Multi-Channel E-commerce Platforms", "AI-Powered Product Recommendations", "Inventory Management Systems", "Payment Gateway Integration"],
      challenges: ["Omnichannel integration", "Inventory management complexity", "Customer personalization at scale", "Mobile commerce optimization"]
    },
    {
      id: "gpu",
      name: "GPU Computing",
      icon: "🎮",
      color: "#6f42c1",
      description: "Leveraging GPU acceleration for high-performance computing, AI/ML workloads, and graphics-intensive applications across various industries.",
      features: ["CUDA Development & Optimization", "Machine Learning Acceleration", "Computer Vision Applications", "Scientific Computing Solutions"],
      challenges: ["CUDA optimization complexity", "Memory management", "Parallel processing efficiency", "Cross-platform compatibility"]
    },
    {
      id: "retail",
      name: "Retail Technology",
      icon: "🏪",
      color: "#20c997",
      description: "Modernizing retail operations with smart inventory management, customer analytics, and omnichannel experiences that drive sales growth.",
      features: ["Smart Inventory Management", "Customer Analytics & Insights", "Omnichannel Retail Solutions", "Point of Sale (POS) Systems"],
      challenges: ["Omnichannel customer experience", "Real-time inventory tracking", "Customer behavior analytics", "Supply chain optimization"]
    },
    {
      id: "education",
      name: "Education & Learning",
      icon: "🎓",
      color: "#17a2b8",
      description: "Enabling digital transformation in education with innovative learning management and delivery systems.",
      features: ["Learning Management Systems", "Virtual Classrooms", "Educational Content Platforms", "Student Information Systems"],
      challenges: ["Remote learning capabilities", "Student engagement", "Content management", "Assessment and grading"]
    }
  ];

  return (
    <div className="industries-page">
      <SEO
        title="Industries - Technology Solutions by Industry"
        description="NEOTEQ provides cutting-edge technology solutions across HealthTech, FinTech, E-Commerce, GPU Computing, Retail, and Education industries. Industry-specific expertise and tailored solutions."
        keywords="healthtech solutions, fintech technology, e-commerce platforms, GPU computing, retail technology, education technology, industry-specific solutions, healthcare IT, financial technology"
        url="https://www.neoteq.com/industries"
      />
      
      <div className="industries-container">
        <div className="industries-header">
          <h1 className="modern-title">
            <span className="title-line">Industries</span>
            <span className="title-accent">We Serve</span>
          </h1>
          <div className="title-underline" />
          <p className="modern-subtitle">
            We provide cutting-edge technology solutions across various industries
          </p>
        </div>
        
        <div className="industries-grid">
          {industries.map((industry) => (
            <GlassCard 
              key={industry.id} 
              className={`industry-card ${selectedIndustry === industry.id ? 'selected' : ''}`}
              glowColor={industry.color}
              onClick={() => setSelectedIndustry(selectedIndustry === industry.id ? null : industry.id)}
            >
              <div className="industry-content">
                <div className="industry-icon" style={{ backgroundColor: industry.color }}>
                  {industry.icon}
                </div>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
                
                {selectedIndustry === industry.id && (
                  <div className="industry-details">
                    <div className="industry-features">
                      <h4>Our Solutions:</h4>
                      <ul>
                        {industry.features.map((feature, index) => (
                          <li key={index}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9 12L11 14L15 10" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="industry-challenges">
                      <h4>Key Challenges:</h4>
                      <ul>
                        {industry.challenges.map((challenge, index) => (
                          <li key={index}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#ffc107"/>
                              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" stroke="#ffc107" strokeWidth="2"/>
                            </svg>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <NeonButton 
                  variant={selectedIndustry === industry.id ? "primary" : "secondary"}
                  size="small"
                  onClick={() => handleExplore(industry.id)}
                >
                  {selectedIndustry === industry.id ? 'Selected' : 'Explore'}
                </NeonButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;