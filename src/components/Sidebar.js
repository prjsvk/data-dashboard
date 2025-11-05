import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useData } from '../contexts/DataContext';

const Sidebar = () => {
  const { searchTerm, setSearchTerm, darkMode, toggleDarkMode } = useData();
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>📊 Data Dashboard</h2>
      </div>
      
      <div className="sidebar-content">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <nav className="sidebar-nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            📈 Dashboard
          </Link>
        </nav>

        <div className="sidebar-actions">
          <button 
            onClick={toggleDarkMode}
            className="theme-toggle"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <div className="sidebar-info">
          <h4>About This Dashboard</h4>
          <p>Monitor project performance, budgets, and team progress in real-time.</p>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">84%</span>
              <span className="stat-label">Avg Progress</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;