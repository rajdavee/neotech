import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down';
}

/**
 * Parallax scrolling effect component
 */
export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'down'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'down' ? [0, -100 * speed] : [0, 100 * speed]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

/**
 * Container with stagger animation for children
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  className = ''
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';
  distance?: number;
  duration?: number;
}

/**
 * Individual item for stagger animation
 */
export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  direction = 'up',
  distance = 30,
  duration = 0.5
}) => {
  const getVariant = () => {
    const base = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }
      }
    };

    switch (direction) {
      case 'up':
        return {
          ...base,
          hidden: { ...base.hidden, y: distance },
          visible: { ...base.visible, y: 0 }
        };
      case 'down':
        return {
          ...base,
          hidden: { ...base.hidden, y: -distance },
          visible: { ...base.visible, y: 0 }
        };
      case 'left':
        return {
          ...base,
          hidden: { ...base.hidden, x: distance },
          visible: { ...base.visible, x: 0 }
        };
      case 'right':
        return {
          ...base,
          hidden: { ...base.hidden, x: -distance },
          visible: { ...base.visible, x: 0 }
        };
      case 'fade':
        return {
          ...base,
          hidden: { ...base.hidden, scale: 0.9 },
          visible: { ...base.visible, scale: 1 }
        };
      case 'zoom':
        return {
          ...base,
          hidden: { ...base.hidden, scale: 0.8 },
          visible: { ...base.visible, scale: 1 }
        };
      default:
        return base;
    }
  };

  return (
    <motion.div variants={getVariant()}>
      {children}
    </motion.div>
  );
};

interface FloatingAnimationProps {
  children: ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

/**
 * Floating animation component
 */
export const FloatingAnimation: React.FC<FloatingAnimationProps> = ({
  children,
  amplitude = 20,
  duration = 3,
  delay = 0,
  className = ''
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  );
};

interface PulseGlowProps {
  children: ReactNode;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

/**
 * Pulse glow effect wrapper
 */
export const PulseGlow: React.FC<PulseGlowProps> = ({
  children,
  color = '#00E5FF',
  intensity = 'medium',
  className = ''
}) => {
  const intensityMap = {
    low: 0.3,
    medium: 0.6,
    high: 1
  };

  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          `0 0 20px ${color}${Math.round(intensityMap[intensity] * 50)}`,
          `0 0 40px ${color}${Math.round(intensityMap[intensity] * 80)}`,
          `0 0 20px ${color}${Math.round(intensityMap[intensity] * 50)}`
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  );
};

