import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import SEO from '../components/SEO';
import '../styles/PortfolioPage.css';

const PortfolioPage: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const caseStudies = [
    {
      id: 'healthcare-ai-platform',
      title: 'Healthcare AI Diagnostic Platform',
      industry: 'HealthTech',
      icon: '🏥',
      color: '#28a745',
      challenge: 'A leading healthcare provider needed an AI-powered diagnostic platform to reduce diagnostic errors by 40% and improve patient outcomes. The system needed to process medical imaging data in real-time while maintaining HIPAA compliance.',
      solution: 'We developed a comprehensive AI platform using deep learning models for medical image analysis, integrated with their existing EHR system. The solution included real-time processing capabilities, secure data handling, and a user-friendly interface for healthcare professionals.',
      impact: 'Achieved 42% reduction in diagnostic errors, 35% faster diagnosis times, and 98% accuracy rate. The platform processes over 10,000 scans daily and has improved patient satisfaction scores by 28%.'
    },
    {
      id: 'fintech-payment-system',
      title: 'Scalable Payment Processing System',
      industry: 'FinTech',
      icon: '💳',
      color: '#007bff',
      challenge: 'A fintech startup required a payment processing system capable of handling 1 million transactions per day with 99.99% uptime. The system needed to be PCI DSS compliant and integrate with multiple payment gateways.',
      solution: 'Built a microservices-based payment architecture using Kubernetes for orchestration, Redis for caching, and PostgreSQL for transaction storage. Implemented comprehensive security measures, fraud detection algorithms, and real-time monitoring.',
      impact: 'Successfully handles 1.2M+ transactions daily with 99.99% uptime. Reduced payment processing time by 60% and fraud detection accuracy improved to 99.7%. The system scaled seamlessly during peak periods like Black Friday.'
    },
    {
      id: 'ecommerce-platform',
      title: 'Omnichannel E-Commerce Platform',
      industry: 'E-Commerce',
      icon: '🛒',
      color: '#fd7e14',
      challenge: 'A retail chain needed to unify their online and offline channels into a seamless shopping experience. They required real-time inventory synchronization, AI-powered recommendations, and mobile-first design.',
      solution: 'Developed a cloud-native e-commerce platform with real-time inventory management, AI recommendation engine, and mobile apps. Integrated POS systems with online store, implemented omnichannel fulfillment, and created a unified customer profile system.',
      impact: 'Increased online sales by 85%, improved inventory turnover by 45%, and achieved 4.8/5 customer satisfaction rating. Mobile app downloads reached 500K+ within 6 months, and 65% of orders now include cross-channel features.'
    },
    {
      id: 'gpu-optimization',
      title: 'GPU-Accelerated ML Training',
      industry: 'GPU Computing',
      icon: '⚡',
      color: '#6f42c1',
      challenge: 'A data science company needed to reduce ML model training time from weeks to hours. Their existing CPU-based infrastructure couldn\'t handle the computational requirements for large-scale deep learning models.',
      solution: 'Designed and implemented a GPU-optimized training pipeline using NVIDIA A100 GPUs with custom CUDA kernels. Optimized data loading, implemented mixed-precision training, and created distributed training architecture for scalability.',
      impact: 'Achieved 50x faster training times (from 3 weeks to 10 hours). Reduced infrastructure costs by 70% and enabled experimentation with larger models. Training throughput increased from 2 to 100 samples/second.'
    },
    {
      id: 'retail-analytics',
      title: 'AI-Powered Retail Analytics Platform',
      industry: 'Retail Technology',
      icon: '🏪',
      color: '#20c997',
      challenge: 'A retail chain struggled with inventory management and customer insights. They needed predictive analytics to forecast demand, optimize stock levels, and understand customer behavior patterns across 500+ stores.',
      solution: 'Built an analytics platform using machine learning for demand forecasting, customer segmentation, and inventory optimization. Integrated data from POS systems, customer loyalty programs, and external market data to provide comprehensive insights.',
      impact: 'Reduced inventory costs by 30%, improved stock availability from 85% to 98%, and increased sales by 22% through better product placement. Customer retention improved by 18% with personalized marketing campaigns.'
    },
    {
      id: 'edtech-platform',
      title: 'Learning Management System',
      industry: 'Education & Learning',
      icon: '🎓',
      color: '#17a2b8',
      challenge: 'An educational institution needed a modern LMS to support remote learning for 50,000+ students. The system required video conferencing, assignment management, progress tracking, and mobile accessibility.',
      solution: 'Developed a comprehensive LMS with integrated video conferencing, real-time collaboration tools, automated grading, and analytics dashboard. Built native mobile apps for iOS and Android with offline capabilities.',
      impact: 'Enabled seamless remote learning for 50K+ students with 99.5% uptime. Student engagement increased by 45%, assignment completion rates improved by 38%, and administrative time reduced by 50%. The platform received 4.7/5 rating from users.'
    }
  ];

  return (
    <div className="portfolio-page">
      <SEO
        title="Portfolio - Case Studies & Success Stories"
        description="Explore our portfolio of successful projects across healthcare, fintech, e-commerce, and more. Real-world solutions that drive measurable business impact and digital transformation."
        keywords="NEOTEQ portfolio, case studies, success stories, healthcare AI, fintech solutions, e-commerce platforms, digital transformation projects"
        url="https://www.neoteq.com/portfolio"
      />
      
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h1 className="modern-title">
            <span className="title-line">Our</span>
            <span className="title-accent">Portfolio</span>
          </h1>
          <div className="title-underline" />
          <p className="modern-subtitle">
            Real-world solutions that drive measurable business impact
          </p>
        </div>
        
        <div className="portfolio-grid">
          {caseStudies.map((caseStudy) => (
            <GlassCard 
              key={caseStudy.id} 
              className={`case-study-card ${selectedCase === caseStudy.id ? 'selected' : ''}`}
              glowColor={caseStudy.color}
              onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}
            >
              <div className="case-study-content">
                <div className="case-study-header">
                  <div className="case-study-icon" style={{ backgroundColor: caseStudy.color }}>
                    {caseStudy.icon}
                  </div>
                  <div className="case-study-title-section">
                    <h3>{caseStudy.title}</h3>
                    <span className="case-study-industry">{caseStudy.industry}</span>
                  </div>
                </div>
                
                {selectedCase === caseStudy.id ? (
                  <div className="case-study-details">
                    <div className="case-study-section challenge">
                      <h4 className="section-title challenge">
                        <span className="section-icon">🎯</span>
                        Challenge
                      </h4>
                      <p className="section-content">{caseStudy.challenge}</p>
                    </div>
                    
                    <div className="case-study-section solution">
                      <h4 className="section-title solution">
                        <span className="section-icon">💡</span>
                        Solution
                      </h4>
                      <p className="section-content">{caseStudy.solution}</p>
                    </div>
                    
                    <div className="case-study-section impact">
                      <h4 className="section-title impact">
                        <span className="section-icon">📈</span>
                        Impact
                      </h4>
                      <p className="section-content">{caseStudy.impact}</p>
                    </div>
                  </div>
                ) : (
                  <p className="case-study-preview">
                    Click to view challenge, solution, and impact details...
                  </p>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

