import React, { useState } from 'react';
import '../styles/TechnologyShowcase.css';

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  color: string;
  proficiency: number;
}

const technologies: Technology[] = [
  {
    id: "cuda",
    name: "CUDA",
    category: "GPU/AI",
    description: "Parallel computing platform for GPU programming and kernel-level optimisation",
    icon: "⚡",
    color: "#1a1a1a",
    proficiency: 95
  },
  {
    id: "pytorch",
    name: "PyTorch",
    category: "AI/ML",
    description: "Deep learning framework for building and training neural networks",
    icon: "🔥",
    color: "#2c3e50",
    proficiency: 92
  },
  {
    id: "tensorrt",
    name: "TensorRT",
    category: "GPU/AI",
    description: "NVIDIA's deep learning inference optimizer for high-performance deployment",
    icon: "🚀",
    color: "#4a4a4a",
    proficiency: 90
  },
  {
    id: "onnx",
    name: "ONNX",
    category: "AI/ML",
    description: "Open Neural Network Exchange format for model interoperability",
    icon: "🔄",
    color: "#555555",
    proficiency: 88
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    category: "AI/ML",
    description: "Transformers library and model hub for state-of-the-art NLP and LLM models",
    icon: "🤗",
    color: "#1a1a1a",
    proficiency: 93
  },
  {
    id: "langchain",
    name: "LangChain",
    category: "AI/ML",
    description: "Framework for building applications with LLMs and agentic AI systems",
    icon: "🔗",
    color: "#2c3e50",
    proficiency: 90
  },
  {
    id: "triton",
    name: "Triton Inference Server",
    category: "GPU/AI",
    description: "Open-source AI inference serving solution for production deployment",
    icon: "⚓",
    color: "#4a4a4a",
    proficiency: 88
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    description: "Modern UI library for building interactive user interfaces",
    icon: "⚛️",
    color: "#555555",
    proficiency: 95
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    description: "JavaScript runtime for scalable server-side applications",
    icon: "🟢",
    color: "#666666",
    proficiency: 90
  },
  {
    id: "python",
    name: "Python",
    category: "Backend",
    description: "Versatile programming language for AI, ML, and web development",
    icon: "🐍",
    color: "#1a1a1a",
    proficiency: 92
  },
  {
    id: "aws",
    name: "AWS",
    category: "Cloud",
    description: "Comprehensive cloud computing platform and services",
    icon: "☁️",
    color: "#2c3e50",
    proficiency: 88
  },
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    description: "Containerization platform for application deployment",
    icon: "🐳",
    color: "#4a4a4a",
    proficiency: 85
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "DevOps",
    description: "Container orchestration platform for scalable deployments",
    icon: "⚓",
    color: "#555555",
    proficiency: 82
  }
];

const TechnologyShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories = ["All", ...Array.from(new Set(technologies.map(tech => tech.category)))];

  const filteredTechnologies = selectedCategory === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <section className="technology-showcase">
      <div className="tech-container">
        <div className="tech-header">
          <h2>Technology Stack</h2>
          <p>12 leading frameworks and tools powering our solutions</p>
        </div>

        <div className="tech-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.id}
              className={`tech-card ${hoveredTech === tech.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="tech-icon" style={{ backgroundColor: tech.color }}>
                {tech.icon}
              </div>
              
              <div className="tech-info">
                <h3>{tech.name}</h3>
                <p className="tech-category">{tech.category}</p>
                <p className="tech-description">{tech.description}</p>
                
                <div className="proficiency-bar">
                  <div className="proficiency-label">
                    <span>Proficiency</span>
                    <span>{tech.proficiency}%</span>
                  </div>
                  <div className="proficiency-track">
                    <div 
                      className="proficiency-fill" 
                      style={{ 
                        width: `${tech.proficiency}%`,
                        backgroundColor: tech.color 
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="tech-overlay">
                <div className="overlay-content">
                  <h4>Why We Use {tech.name}</h4>
                  <p>
                    {tech.name} enables us to build {tech.description.toLowerCase()} 
                    with exceptional performance and reliability.
                  </p>
                  <div className="overlay-stats">
                    <div className="stat">
                      <span className="stat-number">{tech.proficiency}%</span>
                      <span className="stat-label">Expertise</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stats">
          <div className="stat-item">
            <div className="stat-icon">🚀</div>
            <div className="stat-content">
              <h3>25+</h3>
              <p>Technologies Mastered</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">⚡</div>
            <div className="stat-content">
              <h3>95%</h3>
              <p>Average Proficiency</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <h3>500+</h3>
              <p>Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;




