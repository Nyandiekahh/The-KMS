// src/components/layout/DashboardLayout.js
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import Footer from './Footer';
import '../../styles/dashboard.css';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`dashboard-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar isOpen={sidebarOpen} />
      <div className="dashboard-main">
        <DashboardHeader onMenuClick={toggleSidebar} />
        <div className="dashboard-content">
          <Outlet />
        </div>
        <Footer isDashboard={true} />
      </div>
    </div>
  );
};

export default DashboardLayout;