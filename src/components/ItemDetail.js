import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import LoadingSpinner from './LoadingSpinner';

const ItemDetail = () => {
  const { id } = useParams();
  const { getItemById, loading } = useData();
  const item = getItemById(id);

  if (loading) return <LoadingSpinner />;
  if (!item) return <div className="error-message">Item not found</div>;

  const getStatusColor = (status) => {
    switch (status) {
      case 'On Track': return '#28a745';
      case 'In Progress': return '#007bff';
      case 'Behind Schedule': return '#ffc107';
      case 'Nearly Complete': return '#17a2b8';
      default: return '#6c757d';
    }
  };

  const remainingBudget = item.budget - item.spent;
  const budgetUsage = (item.spent / item.budget) * 100;

  return (
    <div className="item-detail">
      <div className="detail-header">
        <Link to="/" className="back-link">← Back to Dashboard</Link>
        <h1>{item.name}</h1>
        <span 
          className="status-badge large"
          style={{ backgroundColor: getStatusColor(item.status) }}
        >
          {item.status}
        </span>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <h3>Project Overview</h3>
          <p>{item.description}</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h4>Budget Information</h4>
            <div className="stat-details">
              <div className="stat-row">
                <span>Total Budget:</span>
                <span>${item.budget.toLocaleString()}</span>
              </div>
              <div className="stat-row">
                <span>Amount Spent:</span>
                <span>${item.spent.toLocaleString()}</span>
              </div>
              <div className="stat-row">
                <span>Remaining:</span>
                <span>${remainingBudget.toLocaleString()}</span>
              </div>
            </div>
            <div className="budget-bar">
              <div 
                className="budget-used"
                style={{ width: `${budgetUsage}%` }}
              ></div>
            </div>
            <div className="budget-label">{budgetUsage.toFixed(1)}% Budget Used</div>
          </div>

          <div className="stat-card">
            <h4>Timeline</h4>
            <div className="stat-details">
              <div className="stat-row">
                <span>Start Date:</span>
                <span>{new Date(item.startDate).toLocaleDateString()}</span>
              </div>
              <div className="stat-row">
                <span>End Date:</span>
                <span>{new Date(item.endDate).toLocaleDateString()}</span>
              </div>
              <div className="stat-row">
                <span>Duration:</span>
                <span>
                  {Math.ceil((new Date(item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24))} days
                </span>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <h4>Team & Progress</h4>
            <div className="stat-details">
              <div className="stat-row">
                <span>Team Size:</span>
                <span>{item.teamSize} people</span>
              </div>
              <div className="stat-row">
                <span>Category:</span>
                <span>{item.category}</span>
              </div>
              <div className="stat-row">
                <span>Progress:</span>
                <span>{item.progress}%</span>
              </div>
            </div>
            <div className="progress-bar large">
              <div 
                className="progress-fill"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="additional-info">
          <h3>Additional Details</h3>
          <div className="info-grid">
            <div className="info-item">
              <strong>Project ID:</strong> {item.id}
            </div>
            <div className="info-item">
              <strong>Current Phase:</strong> Implementation
            </div>
            <div className="info-item">
              <strong>Risk Level:</strong> Medium
            </div>
            <div className="info-item">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;