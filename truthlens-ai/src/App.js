import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Pages
import LandingPage from './pages/LandingPage';
import DetectionDashboard from './pages/DetectionDashboard';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';
import AboutPage from './pages/AboutPage';
import DocsPage from './pages/DocsPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Optionally store the preference in localStorage
    localStorage.setItem('truthlensDarkMode', !darkMode);
  };

  // Load dark mode preference on component mount
  React.useEffect(() => {
    const savedDarkMode = localStorage.getItem('truthlensDarkMode') === 'true';
    if (savedDarkMode) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<LandingPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route
            path="/detect"
            element={<DetectionDashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route
            path="/history"
            element={<HistoryPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route
            path="/settings"
            element={<SettingsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route
            path="/about"
            element={<AboutPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route
            path="/docs"
            element={<DocsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
