import React from 'react';
import '../styles/GlassCard.css';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: 'low' | 'medium' | 'high';
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  glowColor = '#667eea',
  intensity = 'medium',
  onClick
}) => {
  const intensityClasses = {
    low: 'glass-low',
    medium: 'glass-medium',
    high: 'glass-high'
  };

  return (
    <div 
      className={`glass-card ${intensityClasses[intensity]} ${className}`}
      style={{ '--glow-color': glowColor } as React.CSSProperties}
      onClick={onClick}
    >
      <div className="glass-content">
        {children}
      </div>
      <div className="glass-reflection" />
    </div>
  );
};

export default GlassCard;
