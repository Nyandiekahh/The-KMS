import React from 'react';
import { Link } from 'react-router-dom';
import FinanceAnimation from '../components/animations/FinanceAnimation';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to KMS Sacco</h1>
          <p>Empowering young people through financial cooperation and emergency support</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">Join Now</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-shape">
            <FinanceAnimation />
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose KMS Sacco?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
              </svg>
            </div>
            <h3>Emergency Loans</h3>
            <p>Quick access to emergency funds when you need them most</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600">
                <path fill="currentColor" d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
              </svg>
            </div>
            <h3>Competitive Rates</h3>
            <p>3% monthly interest rate for members, building your financial future</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600">
                <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3>Community Growth</h3>
            <p>Join a community of young professionals supporting each other</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600">
                <path fill="currentColor" d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
              </svg>
            </div>
            <h3>Digital First</h3>
            <p>Manage your account and track progress through our web portal</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Join KMS Sacco</h3>
            <p>Register and contribute your initial share capital of KSH 5,000</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Monthly Investment</h3>
            <p>Contribute minimum KSH 1,000 monthly by the 5th</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Access Benefits</h3>
            <p>Apply for loans at competitive rates and grow with the community</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Join KMS Sacco today and take control of your financial future</p>
          <Link to="/register" className="btn btn-primary">Create Account</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;