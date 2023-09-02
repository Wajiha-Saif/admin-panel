// src/components/organisms/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        {/* Add more links for other sections */}
      </ul>
    </aside>
  );
};

export default Sidebar;
