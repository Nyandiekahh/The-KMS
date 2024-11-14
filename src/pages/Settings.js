// src/pages/Settings.js
import React, { useState } from 'react';
import '../styles/settings.css';

const Settings = ({ userRole = 'admin' }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+254700000000',
    profileImage: '/profile-placeholder.jpg'
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: true,
    loanUpdates: true,
    contributionReminders: true,
    monthlyStatement: true,
    generalAnnouncements: false
  });

  const [saccoSettings, setSaccoSettings] = useState({
    minimumContribution: 1000,
    shareCapitalAmount: 5000,
    membershipFee: 1000,
    loanInterestRate: 3,
    nonMemberInterestRate: 20,
    lateFeeAmount: 300,
    contributionDeadline: 5
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // TODO: Handle profile update
    console.log('Profile update:', profileData);
  };

  const handleNotificationUpdate = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSaccoSettingUpdate = (e) => {
    e.preventDefault();
    // TODO: Handle sacco settings update
    console.log('Sacco settings update:', saccoSettings);
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <h2>Settings</h2>
        <div className="settings-tabs">
          <button 
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile Settings
          </button>
          <button 
            className={`tab-btn ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </button>
          <button 
            className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </button>
          {userRole === 'admin' && (
            <button 
              className={`tab-btn ${activeTab === 'sacco' ? 'active' : ''}`}
              onClick={() => setActiveTab('sacco')}
            >
              Sacco Settings
            </button>
          )}
        </div>
      </div>

      <div className="settings-content">
        {activeTab === 'profile' && (
          <div className="profile-settings">
            <div className="settings-card">
              <div className="card-header">
                <h3>Profile Information</h3>
                <p>Update your personal information and contact details</p>
              </div>
              
              <form onSubmit={handleProfileUpdate} className="settings-form">
                <div className="profile-image-section">
                  <div className="profile-image">
                    <img src={profileData.profileImage} alt="Profile" />
                  </div>
                  <div className="profile-image-actions">
                    <button type="button" className="btn-outline">Change Photo</button>
                    <button type="button" className="btn-text">Remove</button>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary">Save Changes</button>
                  <button type="button" className="btn-text">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="notification-settings">
            <div className="settings-card">
              <div className="card-header">
                <h3>Notification Preferences</h3>
                <p>Manage how you receive notifications and updates</p>
              </div>

              <div className="notification-options">
                <div className="notification-group">
                  <h4>General Notifications</h4>
                  
                  <div className="notification-item">
                    <div className="notification-info">
                      <span className="notification-title">Email Alerts</span>
                      <span className="notification-desc">Receive important updates via email</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={notifications.emailAlerts}
                        onChange={() => handleNotificationUpdate('emailAlerts')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="notification-item">
                    <div className="notification-info">
                      <span className="notification-title">SMS Alerts</span>
                      <span className="notification-desc">Receive important updates via SMS</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={notifications.smsAlerts}
                        onChange={() => handleNotificationUpdate('smsAlerts')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="notification-group">
                  <h4>Activity Notifications</h4>
                  
                  <div className="notification-item">
                    <div className="notification-info">
                      <span className="notification-title">Loan Updates</span>
                      <span className="notification-desc">Updates about your loan applications and payments</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={notifications.loanUpdates}
                        onChange={() => handleNotificationUpdate('loanUpdates')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="notification-item">
                    <div className="notification-info">
                      <span className="notification-title">Contribution Reminders</span>
                      <span className="notification-desc">Monthly contribution due date reminders</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={notifications.contributionReminders}
                        onChange={() => handleNotificationUpdate('contributionReminders')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="notification-item">
                    <div className="notification-info">
                      <span className="notification-title">Monthly Statement</span>
                      <span className="notification-desc">Receive monthly account statements</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={notifications.monthlyStatement}
                        onChange={() => handleNotificationUpdate('monthlyStatement')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="security-settings">
            <div className="settings-card">
              <div className="card-header">
                <h3>Security Settings</h3>
                <p>Manage your account security and login preferences</p>
              </div>

              <div className="security-options">
                <div className="password-section">
                  <h4>Change Password</h4>
                  <form className="password-form">
                    <div className="form-group">
                      <label>Current Password</label>
                      <input type="password" />
                    </div>
                    <div className="form-group">
                      <label>New Password</label>
                      <input type="password" />
                    </div>
                    <div className="form-group">
                      <label>Confirm New Password</label>
                      <input type="password" />
                    </div>
                    <button type="submit" className="btn-primary">Update Password</button>
                  </form>
                </div>

                <div className="two-factor-section">
                  <h4>Two-Factor Authentication</h4>
                  <p>Add an extra layer of security to your account</p>
                  <button className="btn-outline">Enable 2FA</button>
                </div>

                <div className="sessions-section">
                  <h4>Active Sessions</h4>
                  <div className="session-item">
                    <div className="session-info">
                      <span className="device">Chrome on Windows</span>
                      <span className="location">Nairobi, Kenya</span>
                    </div>
                    <button className="btn-text">Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sacco' && userRole === 'admin' && (
          <div className="sacco-settings">
            <div className="settings-card">
              <div className="card-header">
                <h3>Sacco Configuration</h3>
                <p>Manage Sacco-wide settings and parameters</p>
              </div>

              <form onSubmit={handleSaccoSettingUpdate} className="settings-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Minimum Monthly Contribution (KSH)</label>
                    <input
                      type="number"
                      value={saccoSettings.minimumContribution}
                      onChange={(e) => setSaccoSettings({
                        ...saccoSettings,
                        minimumContribution: Number(e.target.value)
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Share Capital Amount (KSH)</label>
                    <input
                      type="number"
                      value={saccoSettings.shareCapitalAmount}
                      onChange={(e) => setSaccoSettings({
                        ...saccoSettings,
                        shareCapitalAmount: Number(e.target.value)
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Member Interest Rate (%)</label>
                    <input
                      type="number"
                      value={saccoSettings.loanInterestRate}
                      onChange={(e) => setSaccoSettings({
                        ...saccoSettings,
                        loanInterestRate: Number(e.target.value)
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Non-Member Interest Rate (%)</label>
                    <input
                      type="number"
                      value={saccoSettings.nonMemberInterestRate}
                      onChange={(e) => setSaccoSettings({
                        ...saccoSettings,
                        nonMemberInterestRate: Number(e.target.value)
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Late Fee Amount (KSH)</label>
                    <input
                      type="number"
                      value={saccoSettings.lateFeeAmount}
                      onChange={(e) => setSaccoSettings({
                        ...saccoSettings,
                        lateFeeAmount: Number(e.target.value)
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contribution Deadline (Day of Month)</label>
                    <input
                      type="number"
                      min="1"
                      max="31"
                      value={saccoSettings.contributionDeadline}
                      onChange={(e) => setSaccoSettings({
                        ...saccoSettings,
                        contributionDeadline: Number(e.target.value)
                      })}
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary">Save Changes</button>
                  <button type="button" className="btn-text">Reset to Defaults</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;