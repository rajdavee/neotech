import React, { ReactNode, useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/ScrollReveal.css';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom' | 'rotate';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  amount?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  className = '',
  amount = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-200px',
    amount
  });

  // Check if element is already in viewport on mount
  const [isInitiallyVisible, setIsInitiallyVisible] = useState(false);

  useEffect(() => {
    // Use setTimeout to ensure DOM is fully rendered
    const checkVisibility = () => {
      if (ref.current) {
        const element = ref.current as HTMLElement;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // If element is already in viewport (above fold), make it visible immediately
        // Check if top is less than viewport height and bottom is greater than 0
        if (rect.top < windowHeight * 1.5 && rect.bottom > -100) {
          setIsInitiallyVisible(true);
        }
      }
    };

    // Check immediately and after a short delay to catch any layout shifts
    checkVisibility();
    const timeoutId = setTimeout(checkVisibility, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  const getVariants = () => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    };

    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: baseTransition }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0, transition: baseTransition }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0, transition: baseTransition }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0, transition: baseTransition }
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: baseTransition }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: baseTransition }
        };
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate: -10, scale: 0.9 },
          visible: { opacity: 1, rotate: 0, scale: 1, transition: baseTransition }
        };
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: baseTransition }
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial={isInitiallyVisible ? "visible" : "hidden"}
      animate={isInView || isInitiallyVisible ? 'visible' : 'hidden'}
      variants={variants}
      className={`scroll-reveal ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;



