import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ data }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'On Track': return '#28a745';
      case 'In Progress': return '#007bff';
      case 'Behind Schedule': return '#ffc107';
      case 'Nearly Complete': return '#17a2b8';
      default: return '#6c757d';
    }
  };

  return (
    <div className="item-list">
      {data.map(item => (
        <Link 
          key={item.id} 
          to={`/item/${item.id}`}
          className="item-card"
        >
          <div className="item-header">
            <h3>{item.name}</h3>
            <span 
              className="status-badge"
              style={{ backgroundColor: getStatusColor(item.status) }}
            >
              {item.status}
            </span>
          </div>
          
          <div className="item-details">
            <div className="detail">
              <span>Category:</span>
              <span>{item.category}</span>
            </div>
            <div className="detail">
              <span>Budget:</span>
              <span>${item.budget.toLocaleString()}</span>
            </div>
            <div className="detail">
              <span>Team Size:</span>
              <span>{item.teamSize} people</span>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
            <span className="progress-text">{item.progress}% Complete</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;