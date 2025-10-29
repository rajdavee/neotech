import React, { useState } from 'react';
import '../styles/NeonButton.css';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = ''
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <button
      className={`neon-button neon-${variant} neon-${size} ${isPressed ? 'pressed' : ''} ${className}`}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      <span className="neon-text">{children}</span>
      <div className="neon-glow" />
      <div className="neon-border" />
    </button>
  );
};

export default NeonButton;




