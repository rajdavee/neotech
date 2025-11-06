import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/GlowingOrb.css';

interface GlowingOrbProps {
  size?: number;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  className?: string;
}

const GlowingOrb: React.FC<GlowingOrbProps> = ({
  size = 300,
  color = '#00E5FF',
  intensity = 'medium',
  position = 'center',
  className = ''
}) => {
  const orbRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const rect = orbRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Limit movement for subtle effect
        setMousePosition({
          x: x * 0.1,
          y: y * 0.1
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const intensityClasses = {
    low: 'intensity-low',
    medium: 'intensity-medium',
    high: 'intensity-high'
  };

  const positionClasses = {
    'top-left': 'position-top-left',
    'top-right': 'position-top-right',
    'bottom-left': 'position-bottom-left',
    'bottom-right': 'position-bottom-right',
    'center': 'position-center'
  };

  return (
    <div 
      ref={orbRef}
      className={`glowing-orb ${intensityClasses[intensity]} ${positionClasses[position]} ${className}`}
      style={{
        '--orb-size': `${size}px`,
        '--orb-color': color,
      } as React.CSSProperties}
    >
      <motion.div
        className="orb-core"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
        }}
      >
        <div className="orb-glow orb-glow-1" />
        <div className="orb-glow orb-glow-2" />
        <div className="orb-glow orb-glow-3" />
      </motion.div>
      
      <motion.div
        className="orb-pulse"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default GlowingOrb;




