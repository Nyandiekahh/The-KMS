// src/pages/Transactions.js
import React, { useState } from 'react';
import '../styles/transactions.css';

const Transactions = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [dateRange, setDateRange] = useState('month');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Sample data - would come from API in production
  const transactions = [
    {
      id: 'TRX001',
      date: '2024-03-10',
      type: 'contribution',
      amount: 1000,
      status: 'completed',
      reference: 'MPESA-XYZ123',
      description: 'Monthly Contribution',
      balance: 45000
    },
    {
      id: 'TRX002',
      date: '2024-03-08',
      type: 'loan_repayment',
      amount: 5000,
      status: 'completed',
      reference: 'MPESA-ABC456',
      description: 'Loan Repayment',
      balance: 44000
    },
    {
      id: 'TRX003',
      date: '2024-03-05',
      type: 'loan_disbursement',
      amount: -50000,
      status: 'completed',
      reference: 'LOAN-789',
      description: 'Loan Disbursement',
      balance: 49000
    },
    {
      id: 'TRX004',
      date: '2024-03-01',
      type: 'fine',
      amount: -300,
      status: 'pending',
      reference: 'FINE-001',
      description: 'Late Contribution Fine',
      balance: 99000
    }
  ];

  const filterTransactions = () => {
    return transactions.filter(transaction => {
      const matchesSearch = 
        transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.reference.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = filterType === 'all' || transaction.type === filterType;
      
      return matchesSearch && matchesType;
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'failed':
        return 'error';
      default:
        return '';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'contribution':
        return '💰';
      case 'loan_repayment':
        return '💳';
      case 'loan_disbursement':
        return '🏦';
      case 'fine':
        return '⚠️';
      default:
        return '💵';
    }
  };

  return (
    <div className="transactions-page">
      <div className="page-header">
        <h2>Transactions</h2>
      </div>

      <div className="transactions-content">
        <div className="transactions-header">
          <div className="transaction-tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Transactions
            </button>
            <button 
              className={`tab-btn ${activeTab === 'contributions' ? 'active' : ''}`}
              onClick={() => setActiveTab('contributions')}
            >
              Contributions
            </button>
            <button 
              className={`tab-btn ${activeTab === 'loans' ? 'active' : ''}`}
              onClick={() => setActiveTab('loans')}
            >
              Loan Transactions
            </button>
            <button 
              className={`tab-btn ${activeTab === 'fines' ? 'active' : ''}`}
              onClick={() => setActiveTab('fines')}
            >
              Fines & Penalties
            </button>
          </div>

          <div className="transaction-filters">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-controls">
              <select 
                value={dateRange} 
                onChange={(e) => setDateRange(e.target.value)}
                className="date-filter"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
                <option value="custom">Custom Range</option>
              </select>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="type-filter"
              >
                <option value="all">All Types</option>
                <option value="contribution">Contributions</option>
                <option value="loan_repayment">Loan Repayments</option>
                <option value="loan_disbursement">Loan Disbursements</option>
                <option value="fine">Fines</option>
              </select>
              <button className="btn-outline">Export</button>
            </div>
          </div>
        </div>

        <div className="transactions-summary">
          <div className="summary-card">
            <span className="summary-label">Total Contributions</span>
            <span className="summary-value">KSH 45,000</span>
            <span className="summary-change positive">+12% from last month</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">Loan Repayments</span>
            <span className="summary-value">KSH 150,000</span>
            <span className="summary-change positive">+8% from last month</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">Pending Fines</span>
            <span className="summary-value">KSH 900</span>
            <span className="summary-change negative">3 outstanding</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">Account Balance</span>
            <span className="summary-value">KSH 195,000</span>
            <span className="summary-change">Current Balance</span>
          </div>
        </div>

        <div className="transactions-table-container">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Type</th>
                <th>Description</th>
                <th>Reference</th>
                <th>Amount</th>
                <th>Balance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterTransactions().map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>
                    <div className="transaction-date">
                      <span className="date">{new Date(transaction.date).toLocaleDateString()}</span>
                      <span className="time">{new Date(transaction.date).toLocaleTimeString()}</span>
                    </div>
                  </td>
                  <td>
                    <div className="transaction-type">
                      <span className="type-icon">{getTypeIcon(transaction.type)}</span>
                      <span className="type-text">
                        {transaction.type.replace('_', ' ').charAt(0).toUpperCase() + 
                         transaction.type.slice(1).replace('_', ' ')}
                      </span>
                    </div>
                  </td>
                  <td>{transaction.description}</td>
                  <td>
                    <span className="reference-number">{transaction.reference}</span>
                  </td>
                  <td>
                    <span className={`amount ${transaction.amount < 0 ? 'negative' : 'positive'}`}>
                      KSH {Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  </td>
                  <td>
                    <span className="balance">
                      KSH {transaction.balance.toLocaleString()}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge ${getStatusClass(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="View Details">👁️</button>
                      <button className="btn-icon" title="Download Receipt">📄</button>
                      <button className="btn-icon" title="More Options">⋮</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="transactions-pagination">
          <button className="btn-text">Previous</button>
          <div className="pagination-numbers">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>10</button>
          </div>
          <button className="btn-text">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;