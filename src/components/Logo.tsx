import React from 'react';
import { LOGO_SVG_DATA, LOGO_SVG_DATA_VARIANT_2, LOGO_CONFIG } from '../assets/logoData';
import '../styles/Logo.css';

interface LogoProps {
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Logo: React.FC<LogoProps> = ({ className = '', onClick, variant = 'primary' }) => {
  const logoToShow = variant === 'secondary' ? LOGO_SVG_DATA_VARIANT_2 : LOGO_SVG_DATA;

  return (
    <div className={`logo-container ${className}`} onClick={onClick}>
      <div 
        className="logo-svg"
        dangerouslySetInnerHTML={{ __html: logoToShow }}
      />
    </div>
  );
};

export default Logo;


