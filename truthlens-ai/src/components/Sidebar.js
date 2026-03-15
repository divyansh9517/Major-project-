import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = ({ darkMode }) => {
  return (
    <aside className={`sidebar ${darkMode ? 'dark' : ''}`}>
      <div className="sidebar-content">
        <h3 className="sidebar-title">Menu</h3>

        <nav className="sidebar-nav">
          <Link to="/detect" className="sidebar-item">
            <span className="icon">✨</span>
            <span>New Analysis</span>
          </Link>
          <Link to="/history" className="sidebar-item">
            <span className="icon">📋</span>
            <span>History</span>
          </Link>
          <Link to="/settings" className="sidebar-item">
            <span className="icon">⚙️</span>
            <span>Settings</span>
          </Link>
          <Link to="/docs" className="sidebar-item">
            <span className="icon">📚</span>
            <span>Documentation</span>
          </Link>
          <Link to="/about" className="sidebar-item">
            <span className="icon">ℹ️</span>
            <span>About</span>
          </Link>
        </nav>

        <div className="sidebar-footer">
          <p className="footer-text">TruthLens AI</p>
          <p className="footer-subtitle">v1.0.0</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
