import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">CRM Dashboard</div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Customers</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div className="user">User</div>
    </header>
  );
};

export default Header;