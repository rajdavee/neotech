import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ParticleBackground, RippleEffect, MagneticHover } from './AdvancedAnimations';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleLetsTalk = () => {
    navigate('/contact');
  };

  const handleOurServices = () => {
    navigate('/services');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="hero">
      <ParticleBackground particleCount={40} speed={0.6} color="rgba(0, 229, 255, 0.2)" />
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="visible"
          animate="visible"
        >
          <motion.h1 
            className="hero-title" 
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Engineering the Future with{' '}
            </motion.span>
            <motion.span 
              className="highlight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              AI and Scalable Intelligence
            </motion.span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle" 
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Cutting-edge AI | Scalable Infrastructure | Enterprise-grade Software
          </motion.p>
          <motion.div 
            className="hero-actions" 
            variants={itemVariants}
          >
            <RippleEffect color="rgba(0, 229, 255, 0.4)">
              <MagneticHover strength={0.2}>
                <motion.button 
                  className="primary-btn" 
                  onClick={handleLetsTalk}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 229, 255, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  Request Demo
                </motion.button>
              </MagneticHover>
            </RippleEffect>
            <RippleEffect color="rgba(255, 255, 255, 0.3)">
              <MagneticHover strength={0.2}>
                <motion.button 
                  className="secondary-btn" 
                  onClick={handleOurServices}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  Our Services
                </motion.button>
              </MagneticHover>
            </RippleEffect>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        >
          <div className="hero-graphic">
            <motion.div 
              className="floating-card card-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <div className="card-icon">🚀</div>
              <div className="card-text">Innovation</div>
            </motion.div>
            <motion.div 
              className="floating-card card-2"
              animate={{
                y: [0, -20, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              whileHover={{ scale: 1.1, rotate: -10 }}
            >
              <div className="card-icon">⚡</div>
              <div className="card-text">Performance</div>
            </motion.div>
            <motion.div 
              className="floating-card card-3"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 3, -3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <div className="card-icon">🎯</div>
              <div className="card-text">Precision</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;