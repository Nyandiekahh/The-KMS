// src/pages/Reports.js
import React, { useState } from 'react';
import '../styles/reports.css';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('month');

  // Sample data - would come from API in production
  const overviewStats = {
    totalMembers: 150,
    activeLoans: 45,
    totalInvestments: 2500000,
    monthlyContributions: 180000,
    defaultRate: 2.5,
    loanDisbursed: 1800000
  };

  const monthlyData = {
    contributions: [
      { month: 'Jan', amount: 150000 },
      { month: 'Feb', amount: 165000 },
      { month: 'Mar', amount: 180000 },
      // Add more months...
    ],
    loans: [
      { month: 'Jan', disbursed: 500000, repaid: 450000 },
      { month: 'Feb', disbursed: 600000, repaid: 520000 },
      { month: 'Mar', disbursed: 550000, repaid: 480000 },
      // Add more months...
    ]
  };

  return (
    <div className="reports-page">
      <div className="page-header">
        <h2>Reports & Analytics</h2>
        <div className="report-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'financial' ? 'active' : ''}`}
            onClick={() => setActiveTab('financial')}
          >
            Financial Reports
          </button>
          <button 
            className={`tab-btn ${activeTab === 'member' ? 'active' : ''}`}
            onClick={() => setActiveTab('member')}
          >
            Member Reports
          </button>
          <button 
            className={`tab-btn ${activeTab === 'loan' ? 'active' : ''}`}
            onClick={() => setActiveTab('loan')}
          >
            Loan Reports
          </button>
        </div>
      </div>

      <div className="reports-content">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="date-filter">
              <select 
                value={dateRange} 
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
                <option value="all">All Time</option>
              </select>
              <button className="btn-outline">Download Report</button>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon members">👥</div>
                <div className="stat-info">
                  <span className="stat-label">Total Members</span>
                  <h3 className="stat-value">{overviewStats.totalMembers}</h3>
                  <span className="stat-change positive">+12% from last month</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon loans">💰</div>
                <div className="stat-info">
                  <span className="stat-label">Active Loans</span>
                  <h3 className="stat-value">{overviewStats.activeLoans}</h3>
                  <span className="stat-change">Currently Active</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon investments">📈</div>
                <div className="stat-info">
                  <span className="stat-label">Total Investments</span>
                  <h3 className="stat-value">KSH {overviewStats.totalInvestments.toLocaleString()}</h3>
                  <span className="stat-change positive">+8% from last month</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon contributions">💵</div>
                <div className="stat-info">
                  <span className="stat-label">Monthly Contributions</span>
                  <h3 className="stat-value">KSH {overviewStats.monthlyContributions.toLocaleString()}</h3>
                  <span className="stat-change positive">+5% from last month</span>
                </div>
              </div>
            </div>

            <div className="charts-grid">
              <div className="chart-card">
                <div className="card-header">
                  <h3>Monthly Contributions Trend</h3>
                  <div className="card-actions">
                    <button className="btn-text">View Details</button>
                  </div>
                </div>
                <div className="chart-container">
                  {/* Placeholder for chart */}
                  <div className="chart-placeholder">
                    {monthlyData.contributions.map((item, index) => (
                      <div 
                        key={item.month} 
                        className="chart-bar" 
                        style={{ 
                          height: `${(item.amount / 200000) * 100}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <span className="bar-label">{item.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="chart-card">
                <div className="card-header">
                  <h3>Loan Performance</h3>
                  <div className="card-actions">
                    <button className="btn-text">View Details</button>
                  </div>
                </div>
                <div className="loan-metrics">
                  <div className="metric">
                    <span>Total Disbursed</span>
                    <strong>KSH {overviewStats.loanDisbursed.toLocaleString()}</strong>
                  </div>
                  <div className="metric">
                    <span>Default Rate</span>
                    <strong>{overviewStats.defaultRate}%</strong>
                  </div>
                </div>
                <div className="chart-container">
                  {/* Placeholder for loan chart */}
                  <div className="chart-placeholder stacked">
                    {monthlyData.loans.map((item, index) => (
                      <div key={item.month} className="chart-bar-group">
                        <div 
                          className="chart-bar disbursed"
                          style={{ 
                            height: `${(item.disbursed / 700000) * 100}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        />
                        <div 
                          className="chart-bar repaid"
                          style={{ 
                            height: `${(item.repaid / 700000) * 100}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        />
                        <span className="bar-label">{item.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="insights-section">
              <h3>Key Insights</h3>
              <div className="insights-grid">
                <div className="insight-card">
                  <div className="insight-icon">🎯</div>
                  <div className="insight-content">
                    <h4>High Performing Members</h4>
                    <p>25 members have maintained perfect contribution records for the past 6 months</p>
                  </div>
                </div>

                <div className="insight-card">
                  <div className="insight-icon">⚠️</div>
                  <div className="insight-content">
                    <h4>Risk Alert</h4>
                    <p>5 loans are currently at risk of default. Total exposure: KSH 250,000</p>
                  </div>
                </div>

                <div className="insight-card">
                  <div className="insight-icon">💡</div>
                  <div className="insight-content">
                    <h4>Growth Opportunity</h4>
                    <p>Increasing monthly contribution limit could benefit 30% of members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'financial' && (
          <div className="financial-section">
            <div className="report-filters">
              <div className="filter-group">
                <label>Date Range</label>
                <div className="date-inputs">
                  <input type="date" />
                  <span>to</span>
                  <input type="date" />
                </div>
              </div>
              <div className="filter-group">
                <label>Report Type</label>
                <select>
                  <option value="income">Income Statement</option>
                  <option value="balance">Balance Sheet</option>
                  <option value="cash">Cash Flow</option>
                </select>
              </div>
              <button className="btn-primary">Generate Report</button>
            </div>

            <div className="financial-summary">
              {/* Add financial statements and reports here */}
            </div>
          </div>
        )}

        {activeTab === 'member' && (
          <div className="member-reports-section">
            {/* Add member reports content */}
          </div>
        )}

        {activeTab === 'loan' && (
          <div className="loan-reports-section">
            {/* Add loan reports content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;