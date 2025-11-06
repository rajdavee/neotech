import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './AdvancedAnimations';
import '../styles/Stats.css';

const Stats: React.FC = () => {
  const stats = [
    { number: 500, label: 'Projects Delivered', icon: '🎯', suffix: '+' },
    { number: 200, label: 'Happy Clients', icon: '😊', suffix: '+' },
    { number: 15, label: 'Years Experience', icon: '⭐', suffix: '+' },
    { number: 50, label: 'Team Members', icon: '👥', suffix: '+' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="stats-section">
      <div className="stats-container">
        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="stat-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="stat-icon"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: 'easeInOut'
                }}
              >
                {stat.icon}
              </motion.div>
              <div className="stat-number">
                <AnimatedCounter 
                  value={stat.number} 
                  suffix={stat.suffix}
                  className="animated-counter"
                />
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

