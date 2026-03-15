import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TextAnalyzerInput from '../components/TextAnalyzerInput';
import ResultCard from '../components/ResultCard';
import ConfidenceChart from '../components/ConfidenceChart';
import LoaderAnimation from '../components/LoaderAnimation';
import Footer from '../components/Footer';
import { analyzeContent } from '../utils/mockAPI';
import '../styles/DetectionDashboard.css';

const DetectionDashboard = ({ darkMode, toggleDarkMode }) => {
  const [textInput, setTextInput] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    if (textInput.trim().length < 10) {
      alert('Please enter at least 10 characters to analyze');
      return;
    }

    setIsLoading(true);

    try {
      const analysisResult = await analyzeContent(textInput);
      setResult(analysisResult);
    } catch (error) {
      console.error('Analysis error:', error);
      alert('Error during analysis. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearInput = () => {
    setTextInput('');
    setResult(null);
  };

  return (
    <div className={`detection-dashboard ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="dashboard-container">
        <Sidebar darkMode={darkMode} />

        <main className="main-content">
          <div className="dashboard-header">
            <h1>Misinformation Detection</h1>
            <p className="dashboard-subtitle">Powered by Advanced AI Analysis</p>
          </div>

          <div className="dashboard-grid">
            {/* Input Section */}
            <div className="input-section">
              <TextAnalyzerInput
                value={textInput}
                onChange={setTextInput}
                onAnalyze={handleAnalyze}
                isLoading={isLoading}
              />

              {textInput && (
                <button className="clear-btn" onClick={handleClearInput}>
                  ✕ Clear Input
                </button>
              )}
            </div>

            {/* Results Section */}
            {result && (
              <div className="results-section">
                <ResultCard result={result} darkMode={darkMode} />
                <ConfidenceChart result={result} darkMode={darkMode} />
              </div>
            )}

            {/* Empty State */}
            {!result && !isLoading && textInput === '' && (
              <div className={`empty-state ${darkMode ? 'dark' : ''}`}>
                <div className="empty-icon">📭</div>
                <h3>No Analysis Yet</h3>
                <p>Enter some content in the text area and click "Analyze Content" to get started.</p>
                <div className="example-box">
                  <p className="example-label">Example:</p>
                  <p className="example-text">
                    "Breaking news: Scientists discover shocking new cure!" [This would be analyzed...]
                  </p>
                </div>
              </div>
            )}
          </div>

          {isLoading && <LoaderAnimation isVisible={true} />}
        </main>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default DetectionDashboard;
