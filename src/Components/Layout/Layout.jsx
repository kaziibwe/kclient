import React, { useState, useContext} from 'react';
import './Layout.css'; // Ensure you have any custom styles
import { Link } from 'react-router-dom';
import { AppContext } from "../../Contex/AppContext";


const Layout = () => {

// image url
const IMAGE_URL =import.meta.env.KCLIENT_IMAGE_URL;

  


  const { user , setUser} = useContext(AppContext);
// console.log(user)
  // State to track the visibility of the sidebar
  // const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [dropdowns, setDropdowns] = useState({
    products: false,
    orders: false,
    payments: false,
    events: false,
    manage: false,
  });

  const toggleDropdown = (dropdownName) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }));
  };

  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

  const handleProfileMenuToggle = (e) => {
    e.preventDefault();
    setIsProfileMenuVisible((prevVisible) => !prevVisible);
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
        <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none">
          <a class="nav-link nav-icon search-bar-toggle " href="#">
            <i class="bi bi-search"></i>
          </a>
        </li>

        <li class="nav-item dropdown">

          <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i class="bi bi-bell"></i>
            <span class="badge bg-primary badge-number">4</span>
          </a>

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li class="dropdown-header">
              You have 4 new notifications
              <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>

            <li class="notification-item">
              <i class="bi bi-exclamation-circle text-warning"></i>
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider"/>
            </li>

            <li class="notification-item">
              <i class="bi bi-x-circle text-danger"></i>
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider"/>
            </li>

            <li class="notification-item">
              <i class="bi bi-check-circle text-success"></i>
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider"/>
            </li>

            <li class="notification-item">
              <i class="bi bi-info-circle text-primary"></i>
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li class="dropdown-footer">
              <a href="#">Show all notifications</a>
            </li>

          </ul>

        </li>

        <li class="nav-item dropdown">

          <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i class="bi bi-chat-left-text"></i>
            <span class="badge bg-success badge-number">3</span>
          </a>

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li class="dropdown-header">
              You have 3 new messages
              <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>

            <li class="message-item">
              <a href="#">
                <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle"/>
                <div>
                  <h4>Maria Hudson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>4 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>

            <li class="message-item">
              <a href="#">
                <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle"/>
                <div>
                  <h4>Anna Nelson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>6 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>

            <li class="message-item">
              <a href="#">
                <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle"/>
                <div>
                  <h4>David Muldon</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>8 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>

            <li class="dropdown-footer">
              <a href="#">Show all messages</a>
            </li>

          </ul>

        </li>

        <li className="nav-item dropdown pe-3">
      <a 
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#" 
        onClick={handleProfileMenuToggle}
      >
        <img src={`${IMAGE_URL}/${user?.image}`} alt="Profile" className="rounded-circle" />
        <span className="d-none d-md-block dropdown-toggle ps-2">
          {user ? user.name : null}
        </span>
      </a>

      {isProfileMenuVisible && (
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile show">
          <li className="dropdown-header">
            <h6>{user ? user.name : null}</h6>
            <span>{user ? user.name : null}</span>
          </li>
          <li><hr className="dropdown-divider" /></li>

          <li>
            <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span>My Profile</span>
            </a>
          </li>
          <li><hr className="dropdown-divider" /></li>

          <li>
            <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
              <i className="bi bi-gear"></i>
              <span>Account Settings</span>
            </a>
          </li>
          <li><hr className="dropdown-divider" /></li>

          <li>
            <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
              <i className="bi bi-question-circle"></i>
              <span>Need Help?</span>
            </a>
          </li>
          <li><hr className="dropdown-divider" /></li>

          <li>
            <Link className="dropdown-item d-flex align-items-center" to={'/login'}>
              <i className="bi bi-box-arrow-right"></i>
              <span>Sign Out</span>
            </Link>
          </li>
        </ul>
      )}
    </li>

      </ul>
    </nav>






      </header>

      {/* Sidebar */}
      <aside id="sidebar" className={`sidebar ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
      <ul className="sidebar-nav" id="sidebar-nav">

        {/* Dashboard */}
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Manage Products */}
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => toggleDropdown('products')}>
            <i className="bi bi-menu-button-wide"></i>
            <span>Manage Products</span>
            <i className={`bi ms-auto ${dropdowns.products ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </a>
          {dropdowns.products && (
            <ul className="nav-content">
              <li><Link to="/category"><i className="bi bi-circle"></i><span>Manage Category</span></Link></li>
              <li><Link to="/product"><i className="bi bi-circle"></i><span>Manage Product</span></Link></li>
              <li><Link to="/ProductGallary"><i className="bi bi-circle"></i><span>Manage Product Gallery</span></Link></li>
              <li><Link to="/step"><i className="bi bi-circle"></i><span>Manage Step</span></Link></li>
              <li><Link to="/ingredient"><i className="bi bi-circle"></i><span>Manage Ingredient</span></Link></li>
            </ul>
          )}
        </li>

        {/* Manage Orders */}
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => toggleDropdown('orders')}>
            <i className="bi bi-journal-text"></i>
            <span>Manage Orders</span>
            <i className={`bi ms-auto ${dropdowns.orders ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </a>
          {dropdowns.orders && (
            <ul className="nav-content">
              <li><a href="forms-elements.html"><i className="bi bi-circle"></i><span>Ordered</span></a></li>
              <li><a href="forms-validation.html"><i className="bi bi-circle"></i><span>Prepared</span></a></li>
              <li><a href="forms-layouts.html"><i className="bi bi-circle"></i><span>On Delivery</span></a></li>
              <li><a href="forms-editors.html"><i className="bi bi-circle"></i><span>All Orders</span></a></li>
            </ul>
          )}
        </li>

        {/* Manage Payments */}
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => toggleDropdown('payments')}>
            <i className="bi bi-layout-text-window-reverse"></i>
            <span>Manage Payments</span>
            <i className={`bi ms-auto ${dropdowns.payments ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </a>
          {dropdowns.payments && (
            <ul className="nav-content">
              <li><a href="tables-general.html"><i className="bi bi-circle"></i><span>Order with Cash</span></a></li>
              <li><a href="tables-data.html"><i className="bi bi-circle"></i><span>Pay on Delivery</span></a></li>
              <li><a href="tables-data.html"><i className="bi bi-circle"></i><span>Today and Total Cash</span></a></li>
            </ul>
          )}
        </li>

        {/* Manage Events */}
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => toggleDropdown('events')}>
            <i className="bi bi-bar-chart"></i>
            <span>Manage Events</span>
            <i className={`bi ms-auto ${dropdowns.events ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </a>
          {dropdowns.events && (
            <ul className="nav-content">
              <li><a href="charts-chartjs.html"><i className="bi bi-circle"></i><span>Manage Parties</span></a></li>
              <li><a href="charts-apexcharts.html"><i className="bi bi-circle"></i><span>Manage Weddings</span></a></li>
            </ul>
          )}
        </li>

        {/* Manage */}
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => toggleDropdown('manage')}>
            <i className="bi bi-gem"></i>
            <span>Manage</span>
            <i className={`bi ms-auto ${dropdowns.manage ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </a>
          {dropdowns.manage && (
            <ul className="nav-content">
              <li><a href="icons-bootstrap.html"><i className="bi bi-circle"></i><span>Delivery</span></a></li>
              <li><Link to="/derivaryman"><i className="bi bi-circle"></i><span>Deliverymen</span></Link></li>
              <li><Link to="/vendor"><i className="bi bi-circle"></i><span>Vendors</span></Link></li>
              <li><Link to="/admin"><i className="bi bi-circle"></i><span>Admin</span></Link></li>
              <li><Link to="/user"><i className="bi bi-circle"></i><span>User</span></Link></li>
            </ul>
          )}
        </li>

      </ul>
    </aside>

     
    </div>
  );
};

export default Layout;
