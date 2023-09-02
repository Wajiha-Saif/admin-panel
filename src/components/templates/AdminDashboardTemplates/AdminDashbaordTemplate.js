// src/components/templates/AdminDashboardTemplate.js
import React from 'react';
import Sidebar from '../../organisms/Sidebar';
import Navbar from '../../organisms/Navbar/Navbar';

const AdminDashboardTemplate = ({ children }) => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default AdminDashboardTemplate;
