import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../styles/DocsPage.css';

const DocsPage = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`docs-page ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="page-container">
        <Sidebar darkMode={darkMode} />

        <main className="main-content">
          <div className="page-header">
            <h1>Documentation</h1>
            <p className="page-subtitle">Learn how to use TruthLens AI effectively</p>
          </div>

          <div className="docs-content">
            {/* Getting Started Section */}
            <section className="doc-section">
              <h2>🚀 Getting Started</h2>
              <p>
                TruthLens AI is an intelligent misinformation detection system designed to help you identify potentially false or misleading content. Follow this guide to get started.
              </p>

              <h3>1. Access the Detection Dashboard</h3>
              <p>
                Navigate to the <strong>"Detect"</strong> page from the sidebar or navbar. This is where you can analyze text for potential misinformation.
              </p>

              <h3>2. Input Your Content</h3>
              <p>
                Paste or type the text you want to analyze in the input box. The content can be:
              </p>
              <ul>
                <li>News headlines or articles</li>
                <li>Social media posts</li>
                <li>Claims or statements</li>
                <li>Any text content you want verified</li>
              </ul>

              <h3>3. Analyze the Content</h3>
              <p>
                Click the <strong>"Analyze"</strong> button to process your content. The system will analyze it and provide a confidence score within seconds.
              </p>
            </section>

            {/* Understanding Results Section */}
            <section className="doc-section">
              <h2>📊 Understanding Results</h2>

              <h3>Confidence Scores Explained</h3>
              <p>
                TruthLens AI provides confidence scores on a scale from 0-100%:
              </p>

              <div className="result-types">
                <div className="result-type real">
                  <h4>✅ Likely Real (Low Fake Score)</h4>
                  <p>
                    Content appears to be factually accurate with minimal misinformation indicators. Confidence in authenticity is high.
                  </p>
                </div>

                <div className="result-type misleading">
                  <h4>⚠️ Misleading Content (Medium Score)</h4>
                  <p>
                    Content contains some suspicious patterns or uses language that could be exaggerated. Review carefully.
                  </p>
                </div>

                <div className="result-type fake">
                  <h4>❌ Fake News (High Fake Score)</h4>
                  <p>
                    Content shows strong indicators of misinformation including sensational language, unverifiable claims, or emotional manipulation.
                  </p>
                </div>
              </div>

              <h3>Detected Keywords</h3>
              <p>
                The system identifies suspicious keywords and patterns such as:
              </p>
              <ul>
                <li><strong>Sensational words:</strong> "breaking," "shocking," "must watch"</li>
                <li><strong>Absolute language:</strong> "always," "never," "guarantee"</li>
                <li><strong>Emotional words:</strong> "devastating," "outrageous," "horrifying"</li>
                <li><strong>Unverifiable sources:</strong> "anonymous sources," "insiders claim"</li>
              </ul>
            </section>

            {/* History Section */}
            <section className="doc-section">
              <h2>📋 Using Your History</h2>

              <h3>View Past Analyses</h3>
              <p>
                All your previous analyses are automatically saved in the <strong>"History"</strong> page. Click on any entry to view detailed results and breakdowns.
              </p>

              <h3>Track Patterns</h3>
              <p>
                Use your analysis history to track common misinformation patterns and improve your fact-checking skills.
              </p>

              <h3>Clear History</h3>
              <p>
                You can clear your entire history from the History page by clicking the <strong>"Clear All History"</strong> button. This action cannot be undone.
              </p>
            </section>

            {/* Settings Section */}
            <section className="doc-section">
              <h2>⚙️ Customization</h2>

              <h3>Dark Mode</h3>
              <p>
                Toggle dark mode on or off using the moon/sun icon in the navbar, or access the toggle in the Settings page for more options.
              </p>

              <h3>Notifications & Analytics</h3>
              <p>
                Manage your preferences for notifications and analytics tracking in the Settings page.
              </p>
            </section>

            {/* Best Practices Section */}
            <section className="doc-section">
              <h2>💡 Best Practices</h2>

              <h3>Tips for Effective Misinformation Detection</h3>
              <ol>
                <li>
                  <strong>Cross-check sources:</strong> Always verify claims with multiple reliable sources before sharing.
                </li>
                <li>
                  <strong>Watch for emotional triggers:</strong> Be cautious of content designed to provoke strong emotions.
                </li>
                <li>
                  <strong>Check publication dates:</strong> Old news presented as new can be misleading.
                </li>
                <li>
                  <strong>Verify author credentials:</strong> Check if the author is an expert in the field.
                </li>
                <li>
                  <strong>Use the confidence score as a guide:</strong> Remember this is an AI tool, not absolute truth.
                </li>
              </ol>
            </section>

            {/* FAQ Section */}
            <section className="doc-section">
              <h2>❓ Frequently Asked Questions</h2>

              <div className="faq-item">
                <h4>Is TruthLens AI 100% accurate?</h4>
                <p>
                  No tool is 100% accurate. TruthLens AI uses pattern recognition to identify suspicious indicators, but human verification is always recommended for important decisions.
                </p>
              </div>

              <div className="faq-item">
                <h4>What happens to my data?</h4>
                <p>
                  All analysis data is stored locally in your browser (localStorage). No data is sent to external servers.
                </p>
              </div>

              <div className="faq-item">
                <h4>Can I use this for professional fact-checking?</h4>
                <p>
                  TruthLens AI is best used as a first-pass screening tool. For professional fact-checking, combine this with manual research and expert verification.
                </p>
              </div>

              <div className="faq-item">
                <h4>How often is the detection algorithm updated?</h4>
                <p>
                  Our detection patterns are continuously improved based on emerging misinformation tactics.
                </p>
              </div>

              <div className="faq-item">
                <h4>Can I export my analysis history?</h4>
                <p>
                  Currently, you can view your analysis history in detail. Export functionality is coming in a future update.
                </p>
              </div>
            </section>

            {/* Support Section */}
            <section className="doc-section">
              <h2>🆘 Support</h2>
              <p>
                For issues, suggestions, or feedback, please contact our support team or visit our GitHub repository.
              </p>
              <p>
                <strong>Email:</strong> support@truthlens-ai.com <br />
                <strong>Version:</strong> 1.0.0
              </p>
            </section>
          </div>
        </main>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default DocsPage;
