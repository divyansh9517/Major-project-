import React from 'react';
import '../styles/LoaderAnimation.css';

const LoaderAnimation = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-spinner"></div>
        <p className="loader-text">Analyzing content...</p>
        <p className="loader-subtext">Using AI to detect misinformation</p>
      </div>
    </div>
  );
};

export default LoaderAnimation;
