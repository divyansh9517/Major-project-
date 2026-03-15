import React from 'react';
import '../styles/TextAnalyzerInput.css';

const TextAnalyzerInput = ({ value, onChange, onAnalyze, isLoading }) => {
  const charCount = value.length;
  const maxChars = 5000;
  const isValid = charCount > 10;

  return (
    <div className="text-analyzer-input">
      <div className="input-header">
        <h2>Misinformation Analyzer</h2>
        <span className="char-count">
          {charCount} / {maxChars} characters
        </span>
      </div>

      <textarea
        className={`analyzer-textarea ${isLoading ? 'disabled' : ''}`}
        placeholder="Paste your news article, social media post, or any content to analyze..."
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, maxChars))}
        disabled={isLoading}
        maxLength={maxChars}
      />

      <div className="input-footer">
        <p className="helper-text">
          📝 Enter at least 10 characters for analysis
        </p>
        <button
          className={`analyze-btn ${isLoading ? 'loading' : ''} ${!isValid ? 'disabled' : ''}`}
          onClick={onAnalyze}
          disabled={isLoading || !isValid}
        >
          {isLoading ? (
            <>
              <span className="spinner"></span>
              Analyzing...
            </>
          ) : (
            '🔍 Analyze Content'
          )}
        </button>
      </div>
    </div>
  );
};

export default TextAnalyzerInput;
