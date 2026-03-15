import React, { useState } from 'react';
import '../styles/HistoryTable.css';

const HistoryTable = ({ history, darkMode, onSelectResult }) => {
  const [sortField, setSortField] = useState('timestamp');
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedHistory = [...history].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];

    if (sortField === 'timestamp') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }

    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const getPredictionColor = (label) => {
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

  const getPredictionIcon = (label) => {
    switch (label) {
      case 'fake':
        return '❌';
      case 'misleading':
        return '⚠️';
      case 'real':
        return '✅';
      default:
        return '❓';
    }
  };

  if (!history || history.length === 0) {
    return (
      <div className={`history-empty ${darkMode ? 'dark' : ''}`}>
        <p className="empty-message">📭 No analysis history yet.</p>
        <p className="empty-subtitle">Start analyzing content to build your history.</p>
      </div>
    );
  }

  return (
    <div className={`history-table-wrapper ${darkMode ? 'dark' : ''}`}>
      <h3 className="history-title">📋 Analysis History</h3>

      <div className="table-responsive">
        <table className="history-table">
          <thead>
            <tr>
              <th
                className="sortable"
                onClick={() => handleSort('timestamp')}
              >
                📅 Date
                {sortField === 'timestamp' && (
                  <span className="sort-indicator">
                    {sortOrder === 'asc' ? ' ↑' : ' ↓'}
                  </span>
                )}
              </th>
              <th
                className="sortable"
                onClick={() => handleSort('content')}
              >
                📝 Content Preview
                {sortField === 'content' && (
                  <span className="sort-indicator">
                    {sortOrder === 'asc' ? ' ↑' : ' ↓'}
                  </span>
                )}
              </th>
              <th
                className="sortable"
                onClick={() => handleSort('label')}
              >
                🎯 Prediction
                {sortField === 'label' && (
                  <span className="sort-indicator">
                    {sortOrder === 'asc' ? ' ↑' : ' ↓'}
                  </span>
                )}
              </th>
              <th
                className="sortable"
                onClick={() => handleSort('confidence')}
              >
                📊 Confidence
                {sortField === 'confidence' && (
                  <span className="sort-indicator">
                    {sortOrder === 'asc' ? ' ↑' : ' ↓'}
                  </span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedHistory.map((item) => (
              <tr
                key={item.id}
                className="history-row"
                onClick={() => onSelectResult(item)}
              >
                <td className="date-column">
                  {item.timestamp}
                </td>
                <td className="content-column">
                  <span className="content-preview">{item.content}</span>
                </td>
                <td className="prediction-column">
                  <span
                    className="prediction-badge"
                    style={{
                      backgroundColor: getPredictionColor(item.label),
                    }}
                  >
                    {getPredictionIcon(item.label)} {item.prediction}
                  </span>
                </td>
                <td className="confidence-column">
                  <div className="confidence-display">
                    <span className="confidence-value">
                      {item.confidence}%
                    </span>
                    <div className="mini-bar">
                      <div
                        className="mini-fill"
                        style={{
                          width: `${item.confidence}%`,
                          backgroundColor: getPredictionColor(item.label),
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryTable;
