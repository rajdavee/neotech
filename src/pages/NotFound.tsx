import React from 'react';
import { useNavigate } from 'react-router-dom';
import NeonButton from '../components/NeonButton';
import '../styles/NotFound.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-message">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="not-found-actions">
            <NeonButton variant="primary" size="medium" onClick={() => navigate('/')}>
              Go Home
            </NeonButton>
            <NeonButton variant="secondary" size="medium" onClick={() => navigate(-1)}>
              Go Back
            </NeonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;


