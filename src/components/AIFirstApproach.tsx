import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import '../styles/AIFirstApproach.css';

const AIFirstApproach: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business challenges and opportunities. We analyze your data, workflows, and goals to design an AI-first strategy.',
      icon: '🔍',
      color: '#00E5FF'
    },
    {
      number: '02',
      title: 'AI Model Development',
      description: 'Build custom AI models tailored to your needs. Leverage cutting-edge frameworks like PyTorch, TensorFlow, and LLMs for optimal performance.',
      icon: '🤖',
      color: '#00B4D8'
    },
    {
      number: '03',
      title: 'Integration & Deployment',
      description: 'Seamlessly integrate AI solutions into your existing infrastructure. Deploy with GPU optimization for maximum efficiency and scale.',
      icon: '⚡',
      color: '#0096C7'
    },
    {
      number: '04',
      title: 'Optimization & Scale',
      description: 'Continuously optimize and scale your AI systems. Monitor performance, refine models, and expand capabilities as your business grows.',
      icon: '🚀',
      color: '#0077B6'
    }
  ];

  return (
    <section className="ai-first-approach" aria-label="AI-First Approach">
      <div className="ai-container">
        <header className="ai-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="highlight">AI-First Approach</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A proven 4-step methodology that transforms your business with intelligent automation, machine learning solutions, and AI-driven insights
          </motion.p>
        </header>

        <ol className="process-steps" aria-label="AI implementation process">
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            >
              <GlassCard className="step-card" glowColor={step.color}>
                <div className="step-number" aria-hidden="true">{step.number}</div>
                <div className="step-icon-wrapper">
                  <div className="step-icon" style={{ backgroundColor: step.color }} aria-hidden="true">
                    {step.icon}
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="step-connector" aria-hidden="true">
                    <svg width="2" height="60" viewBox="0 0 2 60" fill="none">
                      <path
                        d="M1 0L1 60"
                        stroke={step.color}
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                )}
              </GlassCard>
            </motion.li>
          ))}
        </ol>

        <aside className="ai-outcome" aria-label="AI implementation results">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <GlassCard className="outcome-card" glowColor="#00E5FF">
              <div className="outcome-content">
                <h3>Delivering Measurable Results</h3>
                <div className="outcome-metrics" role="group" aria-label="Performance metrics">
                  <div className="metric">
                    <span className="metric-value">85%</span>
                    <span className="metric-label">Faster Decision Making</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">60%</span>
                    <span className="metric-label">Cost Reduction</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">3x</span>
                    <span className="metric-label">Performance Improvement</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </aside>
      </div>
    </section>
  );
};

export default AIFirstApproach;
