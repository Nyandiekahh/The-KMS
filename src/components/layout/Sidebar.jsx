// src/components/layout/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '💰', label: 'My Investments', path: '/dashboard/investments' },
    { icon: '💳', label: 'Loans', path: '/dashboard/loans' },
    { icon: '📝', label: 'Transactions', path: '/dashboard/transactions' },
    { icon: '👥', label: 'Members', path: '/dashboard/members' },
    { icon: '📈', label: 'Reports', path: '/dashboard/reports' },
    { icon: '⚙️', label: 'Settings', path: '/dashboard/settings' }
  ];

  return (
    <aside className={`dashboard-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <img src="/logo.png" alt="KMS Sacco" className="sidebar-logo" />
        <h2>KMS SACCO</h2>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }
            end={item.path === '/dashboard'}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="investment-summary">
          <div className="summary-item">
            <span className="summary-label">Total Investment</span>
            <span className="summary-value">KSH 50,000</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Monthly Contribution</span>
            <span className="summary-value">KSH 1,000</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;