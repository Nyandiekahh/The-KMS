// src/components/layout/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footer.css';

const Footer = ({ isDashboard = false }) => {
  const currentYear = new Date().getFullYear();

  if (isDashboard) {
    return (
      <footer className="dashboard-footer">
        <div className="footer-content">
          <p>© {currentYear} KMS Sacco. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/dashboard/settings">Terms of Service</Link>
            <Link to="/dashboard/settings">Privacy Policy</Link>
            <a href="mailto:support@kmssacco.com">Support</a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>About KMS Sacco</h3>
            <p>Empowering young people through financial cooperation and emergency support. Join us in building a stronger financial future together.</p>
            <div className="social-links">
              <a href="https://wa.me/yourwhatsapp" className="social-link">📱</a>
              <a href="https://facebook.com/kmssacco" className="social-link">📘</a>
              <a href="https://instagram.com/kmssacco" className="social-link">📸</a>
              <a href="https://twitter.com/kmssacco" className="social-link">🐦</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Join Now</Link></li>
              <li><a href="mailto:contact@kmssacco.com">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/register">Savings</Link></li>
              <li><Link to="/register">Emergency Loans</Link></li>
              <li><Link to="/register">Investments</Link></li>
              <li><Link to="/register">Financial Advice</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <span className="icon">📍</span>
                <span>Nairobi, Kenya</span>
              </li>
              <li>
                <span className="icon">📞</span>
                <span>+254 700 000000</span>
              </li>
              <li>
                <span className="icon">✉️</span>
                <span>info@kmssacco.com</span>
              </li>
              <li>
                <span className="icon">⏰</span>
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© {currentYear} KMS Sacco. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
              <Link to="/">Help Center</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;