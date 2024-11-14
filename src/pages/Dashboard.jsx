// src/pages/Dashboard.jsx
import React from 'react';
import '../styles/dashboard-page.css';

const Dashboard = () => {
  const stats = [
    { label: 'Total Investment', value: 'KSH 50,000', trend: '+12%' },
    { label: 'Available Balance', value: 'KSH 35,000', trend: '+8%' },
    { label: 'Active Loans', value: 'KSH 15,000', trend: '-5%' },
    { label: 'Monthly Interest', value: 'KSH 1,200', trend: '+3%' }
  ];

  const recentTransactions = [
    { type: 'Monthly Contribution', amount: 'KSH 1,000', date: '2024-03-01', status: 'completed' },
    { type: 'Loan Payment', amount: 'KSH 5,000', date: '2024-02-28', status: 'completed' },
    { type: 'Late Fee', amount: 'KSH 300', date: '2024-02-25', status: 'pending' }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-welcome">
        <div>
          <h1>Welcome back, John!</h1>
          <p>Here's what's happening with your account today.</p>
        </div>
        <button className="btn-primary">Quick Loan</button>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-header">
              <span className="stat-label">{stat.label}</span>
              <span className={`stat-trend ${stat.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                {stat.trend}
              </span>
            </div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card contribution-reminder">
          <h3>Monthly Contribution</h3>
          <div className="reminder-content">
            <div className="reminder-info">
              <p>Next contribution due:</p>
              <h4>March 5th, 2024</h4>
              <span className="amount">KSH 1,000</span>
            </div>
            <button className="btn-primary">Contribute Now</button>
          </div>
        </div>

        <div className="dashboard-card loan-status">
          <h3>Loan Status</h3>
          <div className="loan-progress">
            <div className="progress-bar">
              <div className="progress" style={{ width: '65%' }}></div>
            </div>
            <div className="loan-details">
              <div className="loan-info">
                <span>Outstanding</span>
                <h4>KSH 15,000</h4>
              </div>
              <div className="loan-info">
                <span>Paid</span>
                <h4>KSH 35,000</h4>
              </div>
            </div>
            <button className="btn-secondary">View Details</button>
          </div>
        </div>
      </div>

      <div className="dashboard-card transactions">
        <div className="card-header">
          <h3>Recent Transactions</h3>
          <button className="btn-text">View All</button>
        </div>
        <div className="transactions-list">
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="transaction-item">
              <div className="transaction-info">
                <span className="transaction-type">{transaction.type}</span>
                <span className="transaction-date">{transaction.date}</span>
              </div>
              <div className="transaction-status">
                <span className={`status-badge ${transaction.status}`}>
                  {transaction.status}
                </span>
                <span className="transaction-amount">{transaction.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="dashboard-grid">
        <div className="dashboard-card investment-summary">
          <h3>Investment Summary</h3>
          <div className="investment-details">
            <div className="investment-chart">
              {/* Placeholder for chart */}
              <div className="chart-placeholder">
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '80%' }}></div>
                <div className="chart-bar" style={{ height: '40%' }}></div>
                <div className="chart-bar" style={{ height: '90%' }}></div>
                <div className="chart-bar" style={{ height: '70%' }}></div>
              </div>
            </div>
            <div className="investment-stats">
              <div className="stat">
                <span className="stat-title">Share Capital</span>
                <span className="stat-value">KSH 5,000</span>
                <span className="stat-status completed">✓ Completed</span>
              </div>
              <div className="stat">
                <span className="stat-title">Monthly Investments</span>
                <span className="stat-value">KSH 45,000</span>
                <span className="stat-status">On Track</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card upcoming-payments">
          <h3>Upcoming Payments</h3>
          <div className="payments-list">
            <div className="payment-item">
              <div className="payment-date">
                <span className="day">05</span>
                <span className="month">MAR</span>
              </div>
              <div className="payment-details">
                <span className="payment-type">Monthly Contribution</span>
                <span className="payment-amount">KSH 1,000</span>
              </div>
              <button className="btn-outline">Pay Now</button>
            </div>
            <div className="payment-item">
              <div className="payment-date">
                <span className="day">15</span>
                <span className="month">MAR</span>
              </div>
              <div className="payment-details">
                <span className="payment-type">Loan Payment</span>
                <span className="payment-amount">KSH 5,000</span>
              </div>
              <button className="btn-outline">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;