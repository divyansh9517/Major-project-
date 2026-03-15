import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HistoryTable from '../components/HistoryTable';
import ResultCard from '../components/ResultCard';
import ConfidenceChart from '../components/ConfidenceChart';
import Footer from '../components/Footer';
import { getHistory, clearHistory } from '../utils/mockAPI';
import '../styles/HistoryPage.css';

const HistoryPage = ({ darkMode, toggleDarkMode }) => {
  const [history, setHistory] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  useEffect(() => {
    const historyData = getHistory();
    setHistory(historyData);
  }, []);

  const handleSelectResult = (result) => {
    setSelectedResult(result);
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear all history? This action cannot be undone.')) {
      clearHistory();
      setHistory([]);
      setSelectedResult(null);
    }
  };

  return (
    <div className={`history-page ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="page-container">
        <Sidebar darkMode={darkMode} />

        <main className="main-content">
          <div className="page-header">
            <div className="header-title">
              <h1>Analysis History</h1>
              <p className="page-subtitle">View your previous analyses</p>
            </div>
            {history.length > 0 && (
              <button className="clear-history-btn" onClick={handleClearHistory}>
                🗑️ Clear All History
              </button>
            )}
          </div>

          <div className="history-layout">
            <div className="history-table-section">
              <HistoryTable
                history={history}
                darkMode={darkMode}
                onSelectResult={handleSelectResult}
              />
            </div>

            {selectedResult && (
              <div className="result-details-section">
                <div className="details-header">
                  <h3>Result Details</h3>
                  <button
                    className="close-details"
                    onClick={() => setSelectedResult(null)}
                  >
                    ✕
                  </button>
                </div>
                <ResultCard result={selectedResult} darkMode={darkMode} />
                <ConfidenceChart result={selectedResult} darkMode={darkMode} />
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default HistoryPage;
