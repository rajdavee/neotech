import React from 'react';
import '../styles/GPUCircuitDivider.css';

interface GPUCircuitDividerProps {
  variant?: 'horizontal' | 'vertical';
  animated?: boolean;
  color?: string;
}

const GPUCircuitDivider: React.FC<GPUCircuitDividerProps> = ({ 
  variant = 'horizontal', 
  animated = true,
  color = '#1a1a1a'
}) => {
  return (
    <div 
      className={`gpu-circuit-divider ${variant} ${animated ? 'animated' : ''}`}
      style={{ '--circuit-color': color } as React.CSSProperties}
    >
      <svg 
        className="circuit-svg" 
        viewBox="0 0 1200 100" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main horizontal line */}
        <line 
          x1="0" 
          y1="50" 
          x2="1200" 
          y2="50" 
          className="circuit-line main-line"
        />
        
        {/* Vertical connection lines */}
        <line x1="100" y1="0" x2="100" y2="50" className="circuit-line" />
        <line x1="300" y1="50" x2="300" y2="100" className="circuit-line" />
        <line x1="500" y1="0" x2="500" y2="50" className="circuit-line" />
        <line x1="700" y1="50" x2="700" y2="100" className="circuit-line" />
        <line x1="900" y1="0" x2="900" y2="50" className="circuit-line" />
        <line x1="1100" y1="50" x2="1100" y2="100" className="circuit-line" />
        
        {/* Circuit nodes */}
        <circle cx="100" cy="50" r="4" className="circuit-node" />
        <circle cx="300" cy="50" r="4" className="circuit-node" />
        <circle cx="500" cy="50" r="4" className="circuit-node" />
        <circle cx="700" cy="50" r="4" className="circuit-node" />
        <circle cx="900" cy="50" r="4" className="circuit-node" />
        <circle cx="1100" cy="50" r="4" className="circuit-node" />
        
        {/* Branch lines */}
        <line x1="150" y1="50" x2="150" y2="30" className="circuit-line branch" />
        <line x1="150" y1="30" x2="200" y2="30" className="circuit-line branch" />
        <line x1="200" y1="30" x2="200" y2="50" className="circuit-line branch" />
        
        <line x1="350" y1="50" x2="350" y2="70" className="circuit-line branch" />
        <line x1="350" y1="70" x2="400" y2="70" className="circuit-line branch" />
        <line x1="400" y1="70" x2="400" y2="50" className="circuit-line branch" />
        
        <line x1="550" y1="50" x2="550" y2="20" className="circuit-line branch" />
        <line x1="550" y1="20" x2="600" y2="20" className="circuit-line branch" />
        <line x1="600" y1="20" x2="600" y2="50" className="circuit-line branch" />
        
        <line x1="750" y1="50" x2="750" y2="80" className="circuit-line branch" />
        <line x1="750" y1="80" x2="800" y2="80" className="circuit-line branch" />
        <line x1="800" y1="80" x2="800" y2="50" className="circuit-line branch" />
        
        {/* Animated pulse effect */}
        {animated && (
          <>
            <circle cx="0" cy="50" r="3" className="pulse-dot">
              <animate
                attributeName="cx"
                values="0;1200;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="0" cy="50" r="2" className="pulse-dot pulse-delay">
              <animate
                attributeName="cx"
                values="0;1200;0"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
          </>
        )}
        
        {/* Glow effects */}
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default GPUCircuitDivider;

