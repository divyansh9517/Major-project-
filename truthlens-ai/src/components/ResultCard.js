import React, { useState } from 'react';
import '../styles/ResultCard.css';

const ResultCard = ({ result, darkMode }) => {
  const [copied, setCopied] = useState(false);

  if (!result) return null;

  const getLabelColor = (label) => {
    switch (label) {
      case 'fake':
        return '#ef4444';
      case 'misleading':
        return '#f97316';
      case 'real':
        return '#22c55e';
      default:
        return '#2563eb';
    }
  };

  const copyToClipboard = () => {
    const textToCopy = `Prediction: ${result.prediction}\nConfidence: ${result.confidence}%\nExplanation: ${result.explanation}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`result-card ${darkMode ? 'dark' : ''}`}>
      <div className="result-header">
        <h3>Analysis Result</h3>
        <button
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={copyToClipboard}
          title="Copy result"
        >
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
      </div>

      <div className="result-content">
        {/* Prediction Label */}
        <div className="prediction-section">
          <p className="prediction-label">Prediction</p>
          <div
            className="prediction-badge"
            style={{ borderColor: getLabelColor(result.label) }}
          >
            <span
              className="badge-label"
              style={{ color: getLabelColor(result.label) }}
            >
              {result.label === 'fake' && '❌'}
              {result.label === 'misleading' && '⚠️'}
              {result.label === 'real' && '✅'}
            </span>
            <span className="badge-text">{result.prediction}</span>
          </div>
        </div>

        {/* Confidence Score */}
        <div className="confidence-section">
          <p className="section-label">Confidence Score</p>
          <div className="confidence-bars">
            <div className="bar-item">
              <label>Likely Real</label>
              <div className="progress-bar">
                <div
                  className="progress-fill green"
                  style={{ width: `${result.realConfidence}%` }}
                ></div>
              </div>
              <span className="bar-value">{result.realConfidence}%</span>
            </div>

            <div className="bar-item">
              <label>Likely Fake</label>
              <div className="progress-bar">
                <div
                  className="progress-fill red"
                  style={{ width: `${result.fakeConfidence}%` }}
                ></div>
              </div>
              <span className="bar-value">{result.fakeConfidence}%</span>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="explanation-section">
          <p className="section-label">Explanation</p>
          <div className="explanation-text">
            {result.explanation}
          </div>

          {/* Detected Keywords */}
          {result.detectedKeywords && result.detectedKeywords.length > 0 && (
            <div className="keywords-section">
              <p className="keywords-label">🚩 Suspicious Keywords Detected:</p>
              <div className="keywords-list">
                {result.detectedKeywords.map((keyword, idx) => (
                  <span key={idx} className="keyword-tag">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Metadata */}
        <div className="result-metadata">
          <span className="meta-item">
            📅 {result.timestamp}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
