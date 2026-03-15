import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../styles/SettingsPage.css';

const SettingsPage = ({ darkMode, toggleDarkMode }) => {
  const [notifications, setNotifications] = React.useState(true);
  const [analytics, setAnalytics] = React.useState(true);
  const [autoSave, setAutoSave] = React.useState(true);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      setNotifications(true);
      setAnalytics(true);
      setAutoSave(true);
      alert('Settings have been reset to default values.');
    }
  };

  return (
    <div className={`settings-page ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="page-container">
        <Sidebar darkMode={darkMode} />

        <main className="main-content">
          <div className="page-header">
            <h1>Settings</h1>
            <p className="page-subtitle">Customize your TruthLens AI experience</p>
          </div>

          <div className="settings-grid">
            {/* Theme Settings */}
            <div className="settings-panel">
              <h3 className="settings-title">🎨 Appearance</h3>
              <div className="settings-item">
                <div className="setting-info">
                  <label className="setting-label">Dark Mode</label>
                  <p className="setting-description">Use dark theme for comfortable viewing</p>
                </div>
                <button
                  className={`toggle-btn ${darkMode ? 'active' : ''}`}
                  onClick={toggleDarkMode}
                >
                  <span className={`toggle-switch ${darkMode ? 'on' : 'off'}`}></span>
                </button>
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="settings-panel">
              <h3 className="settings-title">🔒 Privacy & Security</h3>
              <div className="settings-item">
                <div className="setting-info">
                  <label className="setting-label">Enable Analytics</label>
                  <p className="setting-description">Help us improve by sharing usage data</p>
                </div>
                <button
                  className={`toggle-btn ${analytics ? 'active' : ''}`}
                  onClick={() => setAnalytics(!analytics)}
                >
                  <span className={`toggle-switch ${analytics ? 'on' : 'off'}`}></span>
                </button>
              </div>

              <div className="settings-item">
                <div className="setting-info">
                  <label className="setting-label">Auto-Save Analysis</label>
                  <p className="setting-description">Automatically save analysis history</p>
                </div>
                <button
                  className={`toggle-btn ${autoSave ? 'active' : ''}`}
                  onClick={() => setAutoSave(!autoSave)}
                >
                  <span className={`toggle-switch ${autoSave ? 'on' : 'off'}`}></span>
                </button>
              </div>
            </div>

            {/* Notifications */}
            <div className="settings-panel">
              <h3 className="settings-title">🔔 Notifications</h3>
              <div className="settings-item">
                <div className="setting-info">
                  <label className="setting-label">Enable Notifications</label>
                  <p className="setting-description">Receive updates and alerts</p>
                </div>
                <button
                  className={`toggle-btn ${notifications ? 'active' : ''}`}
                  onClick={() => setNotifications(!notifications)}
                >
                  <span className={`toggle-switch ${notifications ? 'on' : 'off'}`}></span>
                </button>
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="settings-panel">
              <h3 className="settings-title">⚙️ Advanced</h3>
              <div className="settings-item">
                <div className="setting-info">
                  <label className="setting-label">Model Version</label>
                  <p className="setting-description">Currently using: v1.0.0</p>
                </div>
              </div>

              <button className="reset-btn" onClick={handleReset}>
                🔄 Reset to Default
              </button>
            </div>

            {/* About */}
            <div className="settings-panel">
              <h3 className="settings-title">ℹ️ About</h3>
              <div className="about-content">
                <p>
                  <strong>TruthLens AI v1.0.0</strong>
                </p>
                <p>Advanced misinformation detection powered by artificial intelligence.</p>
                <div className="about-links">
                  <a href="#privacy">Privacy Policy</a>
                  <a href="#terms">Terms of Service</a>
                  <a href="#github">GitHub</a>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="settings-panel danger">
              <h3 className="settings-title">⚠️ Danger Zone</h3>
              <button className="delete-btn">🗑️ Delete Account</button>
              <p className="danger-text">This action cannot be undone.</p>
            </div>
          </div>
        </main>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default SettingsPage;
