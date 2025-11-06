import React from 'react';
import { motion } from 'framer-motion';
import '../styles/NeonButton.css';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 20px rgba(0, 229, 255, 0.6)',
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    },
    disabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  };

  return (
    <motion.button
      className={`neon-button neon-${variant} neon-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      variants={buttonVariants}
      whileHover={disabled ? {} : 'hover'}
      whileTap={disabled ? {} : 'tap'}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={disabled ? 'disabled' : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="neon-text">{children}</span>
      <motion.div 
        className="neon-glow"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <div className="neon-border" />
    </motion.button>
  );
};

export default NeonButton;




