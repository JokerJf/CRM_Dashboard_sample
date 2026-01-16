import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = (menuName) => {
    if (expandedMenu === menuName) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menuName);
    }
  };

  const menuItems = [
    {
      name: 'Profile',
      icon: 'fa-user',
      subItems: [
        { name: 'Profile', path: '/profile' },
      ],
    },
    {
      name: 'Report',
      icon: 'fa-chart-line',
      subItems: [
        { name: 'Graphs', path: '/graphs' },
        { name: 'Texts', path: '/texts' },
      ],
    },
    {
      name: 'Channels',
      icon: 'fa-comments',
      subItems: [
        { name: 'Email', path: '/email' },
        { name: 'Phone Call', path: '/phone-call' },
        { name: 'Online Chat', path: '/online-chat' },
      ],
    },
    {
      name: 'Tickets Status',
      icon: 'fa-ticket-alt',
      subItems: [
        { name: 'Created', path: '/created' },
        { name: 'Open', path: '/open' },
        { name: 'Responded', path: '/responded' },
        { name: 'Solved', path: '/solved' },
        { name: 'other', path: '/other' },
        { name: 'Deleted', path: '/deleted' },
      ],
    },
    {
      name: 'Full Tickets Report',
      icon: 'fa-file-alt',
      subItems: [
        { name: 'Download report', path: '/download-report' },
        { name: 'Download', path: '/download' },
      ],
    },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-section">
        <h2>CRM Dashboard</h2>
      </div>
      
      <nav className="menu">
        {menuItems.map((item) => (
          <div key={item.name} className="menu-item-wrapper">
            <div 
              className={`menu-item ${item.name === expandedMenu ? 'active' : ''}`}
              onClick={() => item.subItems && toggleMenu(item.name)}
            >
              <div className="menu-title">
                <i className={`fas ${item.icon}`}></i>
                <span>{item.name}</span>
                {item.subItems && (
                  <i className={`fas fa-chevron-down ${item.name === expandedMenu ? 'rotated' : ''}`}></i>
                )}
              </div>
            </div>
            
            {item.subItems && expandedMenu === item.name && (
              <div className="sub-menu">
                {item.subItems.map((subItem) => (
                  <Link 
                    key={subItem.name} 
                    to={subItem.path} 
                    className="sub-menu-item"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;