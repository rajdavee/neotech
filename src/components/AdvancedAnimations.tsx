import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

/**
 * Animated counter component that counts up to a target value
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 60,
    stiffness: 100
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Number(latest));
    });
    return () => unsubscribe();
  }, [spring]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
};

interface ParticleBackgroundProps {
  particleCount?: number;
  speed?: number;
  color?: string;
  className?: string;
}

/**
 * Particle background animation component
 */
export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 50,
  speed = 1,
  color = '#00E5FF',
  className = ''
}) => {
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className={`particle-background ${className}`} aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: particle.duration * speed,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

interface MagneticHoverProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Magnetic hover effect - element follows mouse cursor
 */
export const MagneticHover: React.FC<MagneticHoverProps> = ({
  children,
  strength = 0.3,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

interface RippleEffectProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

/**
 * Ripple effect on click
 */
export const RippleEffect: React.FC<RippleEffectProps> = ({
  children,
  color = '#00E5FF',
  className = ''
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples([...ripples, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  };

  return (
    <div
      ref={ref}
      className={`ripple-container ${className}`}
      onClick={handleClick}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            backgroundColor: color
          }}
          initial={{ width: 0, height: 0, opacity: 0.6 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
    </div>
  );
};

interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
  splitBy?: 'word' | 'character';
}

/**
 * Text reveal animation
 */
export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  delay = 0,
  className = '',
  splitBy = 'word'
}) => {
  const words = splitBy === 'word' ? text.split(' ') : text.split('');
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block', marginRight: splitBy === 'word' ? '0.3em' : '0.05em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
          }}
        >
          {word}
          {splitBy === 'word' ? ' ' : ''}
        </motion.span>
      ))}
    </div>
  );
};

