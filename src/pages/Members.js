// src/pages/Members.js
import React, { useState } from 'react';
import '../styles/members.css';

const Members = () => {
  const [activeTab, setActiveTab] = useState('directory');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample data - would come from API in production
  const members = [
    {
      id: 1,
      name: 'John Doe',
      membershipNo: 'KMS001',
      joinDate: '2023-01-15',
      status: 'active',
      contributions: 55000,
      shareCapital: 5000,
      contact: {
        email: 'john.doe@example.com',
        phone: '+254700000001'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      membershipNo: 'KMS002',
      joinDate: '2023-02-01',
      status: 'active',
      contributions: 48000,
      shareCapital: 3000,
      contact: {
        email: 'jane.smith@example.com',
        phone: '+254700000002'
      }
    },
    // Add more sample members...
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.membershipNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || member.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const boardMembers = [
    {
      id: 1,
      name: 'Alice Johnson',
      position: 'Chairperson',
      image: '/profile-placeholder.jpg',
      contact: {
        email: 'alice.j@kms.com',
        phone: '+254700000003'
      }
    },
    {
      id: 2,
      name: 'Bob Wilson',
      position: 'Secretary',
      image: '/profile-placeholder.jpg',
      contact: {
        email: 'bob.w@kms.com',
        phone: '+254700000004'
      }
    },
    // Add more board members...
  ];

  return (
    <div className="members-page">
      <div className="page-header">
        <h2>Members</h2>
        <div className="member-tabs">
          <button 
            className={`tab-btn ${activeTab === 'directory' ? 'active' : ''}`}
            onClick={() => setActiveTab('directory')}
          >
            Member Directory
          </button>
          <button 
            className={`tab-btn ${activeTab === 'board' ? 'active' : ''}`}
            onClick={() => setActiveTab('board')}
          >
            Board Members
          </button>
          <button 
            className={`tab-btn ${activeTab === 'requests' ? 'active' : ''}`}
            onClick={() => setActiveTab('requests')}
          >
            Membership Requests
          </button>
        </div>
      </div>

      <div className="members-content">
        {activeTab === 'directory' && (
          <div className="directory-section">
            <div className="directory-header">
              <div className="search-filters">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search by name or membership number..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="filters">
                  <select 
                    value={filterStatus} 
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">All Members</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="directory-actions">
                <button className="btn-outline">Export List</button>
                <button className="btn-primary">Add Member</button>
              </div>
            </div>

            <div className="members-table">
              <table>
                <thead>
                  <tr>
                    <th>Member ID</th>
                    <th>Name</th>
                    <th>Join Date</th>
                    <th>Status</th>
                    <th>Share Capital</th>
                    <th>Total Contributions</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.map(member => (
                    <tr key={member.id}>
                      <td>{member.membershipNo}</td>
                      <td>
                        <div className="member-info">
                          <span className="member-name">{member.name}</span>
                          <span className="member-email">{member.contact.email}</span>
                        </div>
                      </td>
                      <td>{member.joinDate}</td>
                      <td>
                        <span className={`status-badge ${member.status}`}>
                          {member.status}
                        </span>
                      </td>
                      <td>KSH {member.shareCapital}</td>
                      <td>KSH {member.contributions}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-icon" title="View Profile">👤</button>
                          <button className="btn-icon" title="Edit Member">✏️</button>
                          <button className="btn-icon" title="More Options">⋮</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'board' && (
          <div className="board-section">
            <div className="board-grid">
              {boardMembers.map(member => (
                <div key={member.id} className="board-card">
                  <div className="board-member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="board-member-info">
                    <h3>{member.name}</h3>
                    <span className="position">{member.position}</span>
                    <div className="contact-info">
                      <div className="contact-item">
                        <span className="icon">📧</span>
                        <span>{member.contact.email}</span>
                      </div>
                      <div className="contact-item">
                        <span className="icon">📱</span>
                        <span>{member.contact.phone}</span>
                      </div>
                    </div>
                    <div className="board-member-actions">
                      <button className="btn-outline">Message</button>
                      <button className="btn-outline">Schedule Meeting</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="requests-section">
            <div className="requests-header">
              <h3>New Membership Requests</h3>
              <span className="badge">2 Pending</span>
            </div>
            <div className="requests-list">
              <div className="request-card">
                <div className="request-header">
                  <div className="requester-info">
                    <h4>Michael Brown</h4>
                    <span className="date">Applied: 2024-03-01</span>
                  </div>
                  <span className="status-badge pending">Pending Review</span>
                </div>
                <div className="request-details">
                  <div className="detail-row">
                    <span>Email:</span>
                    <strong>michael.b@example.com</strong>
                  </div>
                  <div className="detail-row">
                    <span>Phone:</span>
                    <strong>+254700000005</strong>
                  </div>
                  <div className="detail-row">
                    <span>Occupation:</span>
                    <strong>Software Developer</strong>
                  </div>
                </div>
                <div className="request-actions">
                  <button className="btn-outline">Review Documents</button>
                  <button className="btn-primary">Approve</button>
                  <button className="btn-text">Reject</button>
                </div>
              </div>
              {/* Add more request cards */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Members;