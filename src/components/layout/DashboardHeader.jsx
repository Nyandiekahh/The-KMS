// src/components/layout/DashboardHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHeader = ({ onMenuClick }) => {
  return (
    <header className="dashboard-header">
      <button className="menu-toggle" onClick={onMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className="header-search">
        <input type="text" placeholder="Search..." />
      </div>
      
      <div className="header-actions">
        <div className="notification-bell">
          <span className="notification-icon">🔔</span>
          <span className="notification-badge">3</span>
        </div>
        
        <div className="user-profile">
          <img src="/profile-placeholder.jpg" alt="Profile" className="profile-image" />
          <div className="profile-info">
            <span className="profile-name">John Doe</span>
            <span className="profile-role">Member</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;