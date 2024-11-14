// src/pages/Investments.js
import React, { useState } from 'react';
import '../styles/investments.css';

const Investments = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data - would come from API in production
  const investmentData = {
    shareCapital: {
      required: 5000,
      contributed: 3000,
      remaining: 2000,
      deadline: '2024-12-31',
    },
    monthlyContributions: {
      total: 45000,
      current: 1000,
      nextDue: '2024-03-05',
      history: [
        { id: 1, amount: 1000, date: '2024-02-05', status: 'completed' },
        { id: 2, amount: 1000, date: '2024-01-05', status: 'completed' },
        { id: 3, amount: 1000, date: '2023-12-05', status: 'completed' },
      ]
    },
    dividends: {
      lastYear: 12000,
      thisYear: 0,
      history: [
        { year: 2023, amount: 12000, rate: '8%' },
        { year: 2022, amount: 8000, rate: '7%' },
      ]
    }
  };

  const [contributionAmount, setContributionAmount] = useState('1000');

  const handleContribution = (e) => {
    e.preventDefault();
    // TODO: Handle contribution submission
    console.log('Contributing:', contributionAmount);
  };

  return (
    <div className="investments-page">
      <div className="page-header">
        <h2>Investment Management</h2>
        <div className="investment-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'contributions' ? 'active' : ''}`}
            onClick={() => setActiveTab('contributions')}
          >
            Contributions
          </button>
          <button 
            className={`tab-btn ${activeTab === 'dividends' ? 'active' : ''}`}
            onClick={() => setActiveTab('dividends')}
          >
            Dividends
          </button>
        </div>
      </div>

      <div className="investments-content">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="investment-cards">
              <div className="investment-card share-capital">
                <div className="card-header">
                  <h3>Share Capital</h3>
                  <span className="status-pill">In Progress</span>
                </div>
                <div className="progress-container">
                  <div className="progress-circle">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                      <path 
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#eee"
                        strokeWidth="3"
                      />
                      <path 
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3498db"
                        strokeWidth="3"
                        strokeDasharray={`${(investmentData.shareCapital.contributed / investmentData.shareCapital.required) * 100}, 100`}
                      />
                      <text x="18" y="20.35" className="percentage">
                        {Math.round((investmentData.shareCapital.contributed / investmentData.shareCapital.required) * 100)}%
                      </text>
                    </svg>
                  </div>
                  <div className="progress-details">
                    <div className="detail-item">
                      <span>Required</span>
                      <strong>KSH {investmentData.shareCapital.required}</strong>
                    </div>
                    <div className="detail-item">
                      <span>Contributed</span>
                      <strong>KSH {investmentData.shareCapital.contributed}</strong>
                    </div>
                    <div className="detail-item">
                      <span>Remaining</span>
                      <strong>KSH {investmentData.shareCapital.remaining}</strong>
                    </div>
                  </div>
                </div>
                <div className="deadline-info">
                  <span>Completion Deadline</span>
                  <strong>{investmentData.shareCapital.deadline}</strong>
                </div>
                <button className="btn-primary">Make Payment</button>
              </div>

              <div className="investment-card monthly-contribution">
                <div className="card-header">
                  <h3>Monthly Contribution</h3>
                  <span className="status-pill success">Up to Date</span>
                </div>
                <div className="contribution-summary">
                  <div className="summary-item">
                    <span>Total Contributed</span>
                    <strong>KSH {investmentData.monthlyContributions.total}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Monthly Amount</span>
                    <strong>KSH {investmentData.monthlyContributions.current}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Next Due Date</span>
                    <strong>{investmentData.monthlyContributions.nextDue}</strong>
                  </div>
                </div>
                <form onSubmit={handleContribution} className="contribution-form">
                  <div className="form-group">
                    <label>Contribution Amount</label>
                    <div className="input-group">
                      <span className="input-prefix">KSH</span>
                      <input
                        type="number"
                        value={contributionAmount}
                        onChange={(e) => setContributionAmount(e.target.value)}
                        min="1000"
                        step="100"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary">Make Contribution</button>
                </form>
              </div>

              <div className="investment-card dividends">
                <div className="card-header">
                  <h3>Dividends Summary</h3>
                  <span className="status-pill info">Annual</span>
                </div>
                <div className="dividends-summary">
                  <div className="summary-item">
                    <span>Last Year (2023)</span>
                    <strong>KSH {investmentData.dividends.lastYear}</strong>
                  </div>
                  <div className="summary-item">
                    <span>This Year (2024)</span>
                    <strong>KSH {investmentData.dividends.thisYear}</strong>
                    <span className="note">Paid in December</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contributions' && (
          <div className="contributions-section">
            <div className="contributions-header">
              <h3>Contribution History</h3>
              <div className="filter-controls">
                <select className="filter-select">
                  <option value="all">All Time</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>
            </div>
            <div className="contributions-table">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {investmentData.monthlyContributions.history.map((item) => (
                    <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>Monthly Contribution</td>
                      <td>KSH {item.amount}</td>
                      <td>
                        <span className={`status-badge ${item.status}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn-text">Download</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'dividends' && (
          <div className="dividends-section">
            <div className="dividends-header">
              <h3>Dividends History</h3>
            </div>
            <div className="dividends-grid">
              {investmentData.dividends.history.map((item) => (
                <div key={item.year} className="dividend-card">
                  <div className="dividend-year">{item.year}</div>
                  <div className="dividend-details">
                    <div className="detail-row">
                      <span>Amount</span>
                      <strong>KSH {item.amount}</strong>
                    </div>
                    <div className="detail-row">
                      <span>Rate</span>
                      <strong>{item.rate}</strong>
                    </div>
                    <button className="btn-text">View Statement</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Investments;