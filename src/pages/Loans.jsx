// src/pages/Loans.js
import React, { useState } from 'react';
import '../styles/loans.css';

const Loans = () => {
  const [activeTab, setActiveTab] = useState('apply');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [loanTerm, setLoanTerm] = useState('3');

  const activeLoan = {
    amount: 50000,
    remainingAmount: 35000,
    monthlyPayment: 5000,
    nextPaymentDate: '2024-03-15',
    interestRate: '3%',
    status: 'active'
  };

  const loanHistory = [
    { id: 1, amount: 30000, date: '2023-10-15', status: 'completed', purpose: 'Business' },
    { id: 2, amount: 50000, date: '2024-01-10', status: 'active', purpose: 'Education' },
  ];

  const calculateMonthlyPayment = (amount, term, rate = 0.03) => {
    const monthlyRate = rate;
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / 
                   (Math.pow(1 + monthlyRate, term) - 1);
    return Math.round(payment);
  };

  const handleLoanSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement loan application submission
    console.log({ loanAmount, loanPurpose, loanTerm });
  };

  return (
    <div className="loans-page">
      <div className="page-header">
        <h2>Loan Management</h2>
        <div className="loan-tabs">
          <button 
            className={`tab-btn ${activeTab === 'apply' ? 'active' : ''}`}
            onClick={() => setActiveTab('apply')}
          >
            Apply for Loan
          </button>
          <button 
            className={`tab-btn ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Active Loans
          </button>
          <button 
            className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            Loan History
          </button>
        </div>
      </div>

      <div className="loans-content">
        {activeTab === 'apply' && (
          <div className="loan-application">
            <div className="loan-calculator">
              <h3>Loan Calculator</h3>
              <form onSubmit={handleLoanSubmit}>
                <div className="form-group">
                  <label>Loan Amount (KSH)</label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Purpose of Loan</label>
                  <select
                    value={loanPurpose}
                    onChange={(e) => setLoanPurpose(e.target.value)}
                    required
                  >
                    <option value="">Select purpose</option>
                    <option value="business">Business</option>
                    <option value="education">Education</option>
                    <option value="emergency">Emergency</option>
                    <option value="personal">Personal</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Loan Term (Months)</label>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    required
                  >
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                  </select>
                </div>

                {loanAmount && (
                  <div className="loan-summary">
                    <h4>Loan Summary</h4>
                    <div className="summary-grid">
                      <div className="summary-item">
                        <span>Monthly Payment</span>
                        <strong>KSH {calculateMonthlyPayment(Number(loanAmount), Number(loanTerm))}</strong>
                      </div>
                      <div className="summary-item">
                        <span>Interest Rate</span>
                        <strong>3% per month</strong>
                      </div>
                      <div className="summary-item">
                        <span>Total Repayment</span>
                        <strong>KSH {calculateMonthlyPayment(Number(loanAmount), Number(loanTerm)) * Number(loanTerm)}</strong>
                      </div>
                    </div>
                  </div>
                )}

                <button type="submit" className="btn-primary">Apply for Loan</button>
              </form>
            </div>

            <div className="loan-requirements">
              <h3>Loan Requirements</h3>
              <div className="requirements-list">
                <div className="requirement-item">
                  <span className="requirement-icon">✓</span>
                  <div className="requirement-text">
                    <h4>Minimum Membership Period</h4>
                    <p>Must be an active member for at least 3 months</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <span className="requirement-icon">✓</span>
                  <div className="requirement-text">
                    <h4>Share Capital</h4>
                    <p>Must have completed KSH 5,000 share capital</p>
                  </div>
                </div>
                <div className="requirement-item">
                  <span className="requirement-icon">✓</span>
                  <div className="requirement-text">
                    <h4>Regular Contributions</h4>
                    <p>Must have consistent monthly contributions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'active' && (
          <div className="active-loans">
            <div className="loan-status-card">
              <div className="loan-status-header">
                <h3>Current Loan Status</h3>
                <span className={`status-badge ${activeLoan.status}`}>
                  {activeLoan.status}
                </span>
              </div>
              <div className="loan-progress">
                <div className="progress-stats">
                  <div className="progress-item">
                    <span>Total Loan</span>
                    <strong>KSH {activeLoan.amount}</strong>
                  </div>
                  <div className="progress-item">
                    <span>Remaining</span>
                    <strong>KSH {activeLoan.remainingAmount}</strong>
                  </div>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ 
                      width: `${((activeLoan.amount - activeLoan.remainingAmount) / activeLoan.amount) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
              <div className="loan-details-grid">
                <div className="detail-item">
                  <span>Monthly Payment</span>
                  <strong>KSH {activeLoan.monthlyPayment}</strong>
                </div>
                <div className="detail-item">
                  <span>Next Payment</span>
                  <strong>{activeLoan.nextPaymentDate}</strong>
                </div>
                <div className="detail-item">
                  <span>Interest Rate</span>
                  <strong>{activeLoan.interestRate}</strong>
                </div>
              </div>
              <button className="btn-primary">Make Payment</button>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="loan-history">
            <table className="loan-table">
              <thead>
                <tr>
                  <th>Loan ID</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Purpose</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loanHistory.map(loan => (
                  <tr key={loan.id}>
                    <td>#{loan.id}</td>
                    <td>KSH {loan.amount}</td>
                    <td>{loan.date}</td>
                    <td>{loan.purpose}</td>
                    <td>
                      <span className={`status-badge ${loan.status}`}>
                        {loan.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn-text">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loans;