import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/preloader/Preloader';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Loans from './pages/Loans';
import Investments from './pages/Investments';
import Members from './pages/Members';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Transactions from './pages/Transactions';
import './styles/variables.css';
import './styles/main.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('member');

  useEffect(() => {
    // Clear any existing auth state
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    
    // Simulate initial loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setUserRole('admin');
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userRole', 'admin');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('member');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Root Route - Always render Home */}
            <Route path="/" element={<Home />} />
            
            {/* Auth Routes */}
            <Route 
              path="/login" 
              element={
                isAuthenticated ? 
                <Navigate to="/dashboard" replace /> : 
                <Login onLogin={handleLogin} />
              } 
            />
            <Route 
              path="/register" 
              element={
                isAuthenticated ? 
                <Navigate to="/dashboard" replace /> : 
                <Register />
              } 
            />

            {/* Dashboard Routes */}
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <DashboardLayout 
                    userRole={userRole} 
                    onLogout={handleLogout}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="loans" element={<Loans />} />
              <Route path="investments" element={<Investments />} />
              <Route path="transactions" element={<Transactions />} />
              <Route 
                path="members" 
                element={
                  userRole === 'admin' ? 
                  <Members /> : 
                  <Navigate to="/dashboard" replace />
                }
              />
              <Route 
                path="reports" 
                element={
                  userRole === 'admin' ? 
                  <Reports /> : 
                  <Navigate to="/dashboard" replace />
                }
              />
              <Route path="settings" element={<Settings userRole={userRole} />} />
            </Route>

            {/* 404 Route */}
            <Route path="*" element={
              <div className="not-found">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <button 
                  onClick={() => window.history.back()}
                  className="btn-primary"
                >
                  Go Back
                </button>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;