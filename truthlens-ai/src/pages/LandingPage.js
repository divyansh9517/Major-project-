import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/LandingPage.css';

const LandingPage = ({ darkMode, toggleDarkMode }) => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze content in real-time.',
    },
    {
      icon: '⭐',
      title: 'Credibility Scoring',
      description: 'Get detailed credibility scores based on multiple factors.',
    },
    {
      icon: '⚡',
      title: 'Real-time Detection',
      description: 'Instant analysis of news articles and social media posts.',
    },
    {
      icon: '📊',
      title: 'Explainable Results',
      description: 'Understand why content is marked as real or fake.',
    },
  ];

  const steps = [
    {
      number: '1',
      icon: '📝',
      title: 'Input Content',
      description: 'Paste your news article, social media post, or any text.',
    },
    {
      number: '2',
      icon: '🔍',
      title: 'AI Analysis',
      description: 'Our AI analyzes the content for misinformation patterns.',
    },
    {
      number: '3',
      icon: '📊',
      title: 'Get Results',
      description: 'Receive detailed analysis with confidence scores.',
    },
  ];

  return (
    <div className={`landing-page ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Detect Misinformation with <span className="highlight">Artificial Intelligence</span>
          </h1>
          <p className="hero-subtitle">
            Analyze news articles, social media posts, and online content to identify fake or misleading information instantly.
          </p>
          <Link to="/detect" className="hero-cta">
            🚀 Start Detection
          </Link>
        </div>
        <div className="hero-graphic">
          <div className="graphic-element">
            <span>🎯</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Why TruthLens AI?</h2>
          <p>Powerful tools designed for accuracy and reliability</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple 3-step process to detect misinformation</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>Ready to Detect Misinformation?</h2>
          <p>Start analyzing content now and get instant credibility scores.</p>
          <Link to="/detect" className="cta-button">
            ✨ Go to Analyzer
          </Link>
        </div>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default LandingPage;
