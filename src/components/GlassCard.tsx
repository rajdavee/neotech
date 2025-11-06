import React from 'react';
import { motion, TargetAndTransition } from 'framer-motion';
import '../styles/GlassCard.css';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: 'low' | 'medium' | 'high';
  neonBorder?: 'electric' | 'aqua' | 'dual' | 'none';
  pulse?: boolean;
  onClick?: () => void;
  hoverScale?: boolean;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  glowColor = '#1a1a1a',
  intensity = 'medium',
  neonBorder = 'none',
  pulse = false,
  onClick,
  hoverScale = true,
  whileHover,
  whileTap
}) => {
  const intensityClasses = {
    low: 'glass-low',
    medium: 'glass-medium',
    high: 'glass-high'
  };

  const neonBorderClasses = {
    electric: 'neon-electric',
    aqua: 'neon-aqua',
    dual: 'neon-dual',
    none: ''
  };

  const classes = [
    'glass-card',
    intensityClasses[intensity],
    neonBorderClasses[neonBorder],
    pulse ? 'neon-pulse' : '',
    className
  ].filter(Boolean).join(' ');

  const defaultWhileHover = hoverScale ? {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }
  } : {};

  const defaultWhileTap = {
    scale: 0.98,
    transition: { duration: 0.1 }
  };

  return (
    <motion.div 
      className={classes}
      style={{ '--glow-color': glowColor } as React.CSSProperties}
      onClick={onClick}
      whileHover={whileHover || defaultWhileHover}
      whileTap={whileTap || defaultWhileTap}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
    >
      <div className="glass-content">
        {children}
      </div>
      <div className="glass-reflection" />
    </motion.div>
  );
};

export default GlassCard;
