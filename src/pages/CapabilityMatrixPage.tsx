import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import SEO from '../components/SEO';
import '../styles/CapabilityMatrixPage.css';

const CapabilityMatrixPage: React.FC = () => {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);

  const capabilities = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: '🤖',
      color: '#00E5FF',
      description: 'Advanced AI/ML solutions including deep learning, neural networks, and predictive analytics.',
      skills: ['Deep Learning', 'Neural Networks', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face']
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      icon: '☁️',
      color: '#00FFFF',
      description: 'Scalable cloud architectures and DevOps practices for modern applications.',
      skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'CI/CD'],
      tools: ['AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'Jenkins']
    },
    {
      id: 'gpu-computing',
      title: 'GPU Computing',
      icon: '⚡',
      color: '#6f42c1',
      description: 'High-performance GPU optimization and parallel computing solutions.',
      skills: ['CUDA', 'OpenCL', 'GPU Optimization', 'Parallel Computing', 'Performance Tuning'],
      tools: ['CUDA Toolkit', 'cuDNN', 'TensorRT', 'ROCm', 'OpenCL']
    },
    {
      id: 'full-stack',
      title: 'Full-Stack Development',
      icon: '💻',
      color: '#28a745',
      description: 'End-to-end web and mobile application development across all platforms.',
      skills: ['React', 'Node.js', 'Python', 'TypeScript', 'Microservices', 'REST APIs'],
      tools: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      icon: '📊',
      color: '#fd7e14',
      description: 'Building robust data pipelines and analytics platforms for enterprise needs.',
      skills: ['Data Pipelines', 'ETL/ELT', 'Data Warehousing', 'Real-time Processing', 'Data Governance'],
      tools: ['Apache Spark', 'Kafka', 'Snowflake', 'BigQuery', 'Airflow', 'dbt']
    }
  ];

  return (
    <div className="capability-matrix-page">
      <SEO
        title="Capabilities - Technology Expertise & Skills"
        description="Discover NEOTEQ's core capabilities including AI & Machine Learning, Cloud Infrastructure, GPU Computing, Full-Stack Development, and Data Engineering. Expert skills and cutting-edge technologies."
        keywords="AI capabilities, machine learning expertise, cloud infrastructure, GPU computing, full-stack development, data engineering, technology skills, software development capabilities"
        url="https://www.neoteq.com/capabilities"
      />
      
      <div className="capability-container">
        <div className="capability-header">
          <h1 className="modern-title">
            <span className="title-line">Our</span>
            <span className="title-accent">Capability Matrix</span>
          </h1>
          <div className="title-underline" />
          <p className="modern-subtitle">
            Core expertise areas that drive our innovation and delivery excellence
          </p>
        </div>
        
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <GlassCard 
              key={capability.id} 
              className={`capability-card ${selectedCapability === capability.id ? 'selected' : ''}`}
              glowColor={capability.color}
              onClick={() => setSelectedCapability(selectedCapability === capability.id ? null : capability.id)}
            >
              <div className="capability-content">
                <div className="capability-icon" style={{ backgroundColor: capability.color }}>
                  {capability.icon}
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                
                {selectedCapability === capability.id && (
                  <div className="capability-details">
                    <div className="capability-skills">
                      <h4>Core Skills:</h4>
                      <div className="skills-tags">
                        {capability.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="capability-tools">
                      <h4>Technologies & Tools:</h4>
                      <div className="tools-tags">
                        {capability.tools.map((tool, index) => (
                          <span key={index} className="tool-tag">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapabilityMatrixPage;



