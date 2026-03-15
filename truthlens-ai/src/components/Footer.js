import React from 'react';
import '../styles/Footer.css';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${darkMode ? 'dark' : ''}`}>
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-heading">TruthLens AI</h4>
          <p className="footer-description">
            Advanced misinformation detection powered by artificial intelligence.
            Detect fake news and misleading content instantly.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#github">GitHub</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <div className="social-links">
            <a href="#twitter" aria-label="Twitter" className="social-link">
              𝕏
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="social-link">
              in
            </a>
            <a href="#github" aria-label="GitHub" className="social-link">
              ⚙️
            </a>
            <a href="#email" aria-label="Email" className="social-link">
              ✉️
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} TruthLens AI. All rights reserved.
        </p>
        <p className="footer-credit">
          Built with ❤️ for truth and transparency
        </p>
      </div>
    </footer>
  );
};

export default Footer;
