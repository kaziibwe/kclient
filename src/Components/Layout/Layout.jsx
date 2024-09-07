import React, { useState } from 'react';
import './Layout.css'; // Ensure you have any custom styles
import { Link } from 'react-router-dom';

const Layout = () => {
  // State to track the visibility of the sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      {/* Header */}
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">NiceAdmin</span>
          </a>
          {/* Toggle button */}
          <i className="bi bi-list toggle-sidebar-btn" onClick={toggleSidebar}></i>
        </div>

        <div className="search-bar">
          <form className="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
          </form>
        </div>

        {/* Navigation */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sidebar */}
      <aside id="sidebar" className={`sidebar ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link collapsed" href="index.html">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-menu-button-wide"></i><span>Manage Products</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <Link to={`/category`}>
                  <i className="bi bi-circle"></i><span>manage Category</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

     
    </div>
  );
};

export default Layout;
