import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';

const AboutPage = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`about-page ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="page-container">
        <Sidebar darkMode={darkMode} />

        <main className="main-content">
          <div className="page-header">
            <h1>About TruthLens AI</h1>
            <p className="page-subtitle">Fighting misinformation with intelligent detection</p>
          </div>

          <div className="about-content">
            {/* Mission Section */}
            <section className="about-section hero-section">
              <div className="section-content">
                <h2>🎯 Our Mission</h2>
                <p>
                  TruthLens AI is dedicated to combating misinformation and promoting media literacy in the digital age. We believe that access to reliable information tools is essential for informed decision-making in society.
                </p>
                <p>
                  Our goal is to empower users with intelligent AI-driven detection capabilities to identify potentially false or misleading content quickly and effectively.
                </p>
              </div>
            </section>

            {/* What We Do Section */}
            <section className="about-section features-section">
              <h2>💼 What We Do</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🔍</div>
                  <h3>Intelligent Detection</h3>
                  <p>
                    Advanced pattern recognition to identify suspicious language, sensationalism, and unverifiable claims in text content.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">📊</div>
                  <h3>Confidence Scoring</h3>
                  <p>
                    Clear, transparent confidence scores help you understand the likelihood of content being misinformation.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">💾</div>
                  <h3>Local Storage</h3>
                  <p>
                    All analysis data stays on your device. We don't store your data on external servers for maximum privacy.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">🌙</div>
                  <h3>User-Friendly Interface</h3>
                  <p>
                    Clean, intuitive design with dark mode support for comfortable use anytime, anywhere.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">📈</div>
                  <h3>Analysis History</h3>
                  <p>
                    Track all your previous analyses to build your fact-checking expertise over time.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">⚡</div>
                  <h3>Fast & Efficient</h3>
                  <p>
                    Get instant results on your content analysis without complex setup or external dependencies.
                  </p>
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section className="about-section how-it-works">
              <h2>🔧 How It Works</h2>
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Input Analysis</h3>
                  <p>
                    You provide text content that you want to analyze for potential misinformation.
                  </p>
                </div>

                <div className="step-arrow">→</div>

                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Pattern Recognition</h3>
                  <p>
                    Our AI analyzes the content for suspicious language patterns, sensationalism, and unverifiable claims.
                  </p>
                </div>

                <div className="step-arrow">→</div>

                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Scoring</h3>
                  <p>
                    The system calculates a confidence score based on detected misinformation indicators.
                  </p>
                </div>

                <div className="step-arrow">→</div>

                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Results</h3>
                  <p>
                    You receive detailed analysis with confidence scores and detected keywords.
                  </p>
                </div>
              </div>
            </section>

            {/* Technology Section */}
            <section className="about-section tech-section">
              <h2>🚀 Technology Stack</h2>
              <div className="tech-stack">
                <div className="tech-item">
                  <h3>Frontend</h3>
                  <ul>
                    <li><strong>React 18.3.1</strong> - UI Library</li>
                    <li><strong>React Router</strong> - Navigation</li>
                    <li><strong>Chart.js</strong> - Data Visualization</li>
                    <li><strong>CSS3</strong> - Styling</li>
                  </ul>
                </div>

                <div className="tech-item">
                  <h3>Features</h3>
                  <ul>
                    <li><strong>Local Storage</strong> - Client-side data persistence</li>
                    <li><strong>Dark Mode</strong> - Theme customization</li>
                    <li><strong>Responsive Design</strong> - Mobile & Desktop support</li>
                    <li><strong>Real-time Analysis</strong> - Instant results</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy Section */}
            <section className="about-section privacy-section">
              <h2>🔒 Privacy & Security</h2>
              <p>
                <strong>Your privacy is our priority.</strong>
              </p>
              <ul className="privacy-list">
                <li>✅ <strong>No data collection:</strong> We don't collect or store your personal information</li>
                <li>✅ <strong>Local processing:</strong> All analysis happens on your device</li>
                <li>✅ <strong>No external calls:</strong> Your content never leaves your browser</li>
                <li>✅ <strong>Open source ready:</strong> Code transparency is important to us</li>
                <li>✅ <strong>User control:</strong> You can clear all your data anytime</li>
              </ul>
            </section>

            {/* Team Section */}
            <section className="about-section team-section">
              <h2>👥 Team & Development</h2>
              <p>
                TruthLens AI is developed by a dedicated team of engineers and AI researchers committed to making the internet safer and more truthful.
              </p>
              <p>
                <strong>Current Version:</strong> 1.0.0 <br />
                <strong>Last Updated:</strong> March 2026 <br />
                <strong>Status:</strong> Active Development
              </p>
            </section>

            {/* Vision Section */}
            <section className="about-section vision-section">
              <h2>🌟 Our Vision</h2>
              <p>
                We envision a future where:
              </p>
              <ul className="vision-list">
                <li>🌍 People have easy access to misinformation detection tools</li>
                <li>📚 Media literacy is enhanced through interactive tools</li>
                <li>🤝 Everyone can participate in creating a more truthful information ecosystem</li>
                <li>🚀 AI technology is used responsibly to help, not harm</li>
              </ul>
            </section>

            {/* Contact Section */}
            <section className="about-section contact-section">
              <h2>📞 Get in Touch</h2>
              <p>
                Interested in TruthLens AI? Have feedback or suggestions? We'd love to hear from you!
              </p>
              <div className="contact-links">
                <a href="mailto:support@truthlens-ai.com" className="contact-link">
                  📧 Email: support@truthlens-ai.com
                </a>
                <a href="#github" className="contact-link">
                  💻 GitHub: github.com/truthlens-ai
                </a>
                <a href="#twitter" className="contact-link">
                  𝕏 Twitter: @truthlensai
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default AboutPage;
