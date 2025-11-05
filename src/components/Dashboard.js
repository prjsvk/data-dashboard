import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import ItemList from './ItemList';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import LoadingSpinner from './LoadingSpinner';

const Dashboard = () => {
  const { data, loading, error } = useData();
  const [showCharts, setShowCharts] = useState(true);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Project Dashboard</h1>
        <div className="dashboard-controls">
          <button 
            onClick={() => setShowCharts(!showCharts)}
            className="toggle-btn"
          >
            {showCharts ? 'Hide Charts' : 'Show Charts'}
          </button>
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <p className="stat-number">{data.length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Budget</h3>
          <p className="stat-number">
            ${data.reduce((sum, item) => sum + item.budget, 0).toLocaleString()}
          </p>
        </div>
        <div className="stat-card">
          <h3>Average Progress</h3>
          <p className="stat-number">
            {Math.round(data.reduce((sum, item) => sum + item.progress, 0) / data.length)}%
          </p>
        </div>
      </div>

      {showCharts && (
        <div className="charts-section">
          <div className="chart-container">
            <Chart1 data={data} />
          </div>
          <div className="chart-container">
            <Chart2 data={data} />
          </div>
        </div>
      )}

      <div className="data-section">
        <h2>Project List</h2>
        <ItemList data={data} />
      </div>
    </div>
  );
};

export default Dashboard;