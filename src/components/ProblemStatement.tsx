import React, { useState, useEffect } from 'react';
import GlassCard from './GlassCard';
import '../styles/ProblemStatement.css';

const ProblemStatement: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState([
    { number: 0, label: 'Industry Gap', suffix: '%', target: 90 },
    { number: 0, label: 'Infrastructure Increase', suffix: '%', target: 30 },
    { number: 0, label: 'Vehicle Density Increase', suffix: 'x', target: 3 }
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('problem-stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      animatedStats.forEach((stat, index) => {
        let currentStep = 0;
        const increment = stat.target / steps;

        const timer = setInterval(() => {
          currentStep++;
          const newValue = Math.min(Math.floor(increment * currentStep), stat.target);
          
          setAnimatedStats(prev => prev.map((s, i) => 
            i === index ? { ...s, number: newValue } : s
          ));

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      });
    }
  }, [isVisible]);

  const problems = [
    {
      icon: '⚠️',
      title: 'Technological Gap',
      description: 'A staggering 90% of industry solutions lack essential advanced technology, creating critical gaps in efficiency and effectiveness.',
      color: '#1a1a1a'
    },
    {
      icon: '📡',
      title: 'Communication Gap',
      description: 'Critical information often arrives late, preventing timely interventions and hindering effective decision-making processes.',
      color: '#2c3e50'
    },
    {
      icon: '📝',
      title: 'Manual Processes',
      description: 'Vital operations are processed manually, causing delays in critical decision-making and significantly reducing overall efficiency.',
      color: '#4a4a4a'
    },
    {
      icon: '📄',
      title: 'Paper-Based Systems',
      description: 'Physical forms and paper records instead of digital systems slow down operations and limit accessibility and data sharing.',
      color: '#555555'
    }
  ];

  const challenges = [
    'Delay in critical operations',
    'Inadequate infrastructure',
    'High cost and accessibility issues',
    'Poor coordination',
    'Rural and urban gaps'
  ];

  return (
    <section className="problem-statement-section">
      <div className="problem-statement-container">
        <div className="problem-header">
          <h2>Real Problems and Current Scenario</h2>
          <p>Understanding the challenges we solve</p>
        </div>

        <div className="challenges-list">
          <GlassCard className="challenges-card" glowColor="#1a1a1a">
            <h3>Current Industry Challenges</h3>
            <ul className="challenges-items">
              {challenges.map((challenge, index) => (
                <li key={index}>
                  <span className="challenge-icon">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="problems-grid">
          {problems.map((problem, index) => (
            <GlassCard 
              key={index} 
              className="problem-card" 
              glowColor={problem.color}
            >
              <div className="problem-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="problem-stats" id="problem-stats">
          <GlassCard className="stats-card" glowColor="#1a1a1a">
            <h3>Industry Statistics</h3>
            <div className="stats-grid">
              {animatedStats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="stats-note">
              Over the past decade, operational requirements have increased threefold, while infrastructure support has grown by only 30%, creating a significant gap that needs to be addressed.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;

