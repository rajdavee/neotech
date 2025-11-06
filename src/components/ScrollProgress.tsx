import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Scroll Progress Indicator Component
 */
export const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="scroll-progress-indicator"
      style={{
        scaleX,
        transformOrigin: 'left'
      }}
    />
  );
};

/**
 * Cursor Glow Effect Component
 */
export const CursorGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="cursor-glow"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        opacity: isVisible ? 0.3 : 0
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
      style={{
        position: 'fixed',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9999,
        left: '-300px',
        top: '-300px',
        mixBlendMode: 'screen'
      }}
    />
  );
};

