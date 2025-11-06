import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import NeonButton from '../components/NeonButton';
import SEO from '../components/SEO';
import '../styles/PlaceholderPage.css';

interface PlaceholderPageProps {
  title: string;
  description: string;
  keywords?: string;
  icon?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ 
  title, 
  description, 
  keywords = '',
  icon = '🚀'
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="placeholder-page">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        url={`https://www.neoteq.com${location.pathname}`}
      />
      
      <div className="placeholder-container">
        <GlassCard className="placeholder-card" glowColor="#00E5FF">
          <div className="placeholder-content">
            <div className="placeholder-icon">{icon}</div>
            <h1 className="placeholder-title">{title}</h1>
            <p className="placeholder-description">{description}</p>
            <p className="placeholder-message">
              This page is currently under development. We're working hard to bring you amazing content and features.
            </p>
            
            <div className="placeholder-actions">
              <NeonButton 
                variant="primary" 
                size="medium" 
                onClick={() => navigate('/')}
              >
                Return to Home
              </NeonButton>
              <NeonButton 
                variant="secondary" 
                size="medium" 
                onClick={() => navigate(-1)}
              >
                Go Back
              </NeonButton>
            </div>

            <div className="placeholder-links">
              <h3>Explore Our Site</h3>
              <div className="quick-links">
                <button onClick={() => navigate('/services')}>Services</button>
                <button onClick={() => navigate('/solutions')}>Solutions</button>
                <button onClick={() => navigate('/industries')}>Industries</button>
                <button onClick={() => navigate('/portfolio')}>Portfolio</button>
                <button onClick={() => navigate('/contact')}>Contact</button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default PlaceholderPage;

