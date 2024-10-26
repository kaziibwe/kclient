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

        <li class="nav-item dropdown pe-3">

          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src={`${IMAGE_URL}/${user.image}`} alt="Profile" class="rounded-circle"/>
            
            <span class="d-none d-md-block dropdown-toggle ps-2">{user ?user.name:null}</span>
          </a>

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6>{user ?user.name:null}</h6>
              <span>{user ?user.name:null}</span>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i class="bi bi-person"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i class="bi bi-gear"></i>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                <i class="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"/>
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <i class="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
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
            <Link to={'/'} className="nav-link collapsed" href="index.html">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
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
            <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <Link to={`/product`}>
                  <i className="bi bi-circle"></i><span>manage Product</span>
                </Link>
              </li>
            </ul>

            <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <Link to={`/ProductGallary`}>
                  <i className="bi bi-circle"></i><span>manage ProductGallary</span>
                </Link>
              </li>
            </ul>
            <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <Link to={`/step`}>
                  <i className="bi bi-circle"></i><span>manage Step</span>
                </Link>
              </li>
            </ul>

            <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <Link to={`/ingredient`}>
                  <i className="bi bi-circle"></i><span>manage Ingredient</span>
                </Link> 
                
              </li>
            </ul>
          </li>

          <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-journal-text"></i><span>Manage Orders</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="forms-elements.html">
              <i className="bi bi-circle"></i><span>Ordered</span>
            </a>
          </li>
          <li>
            <a href="forms-validation.html">
              <i className="bi bi-circle"></i><span>Prepared</span>
            </a>
          </li>
          <li>
            <a href="forms-layouts.html">
              <i className="bi bi-circle"></i><span>Onderivary</span>
            </a>
          </li>
       
          <li>
            <a href="forms-editors.html">
              <i className="bi bi-circle"></i><span>all orders</span>
            </a>
          </li>
        
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-layout-text-window-reverse"></i><span>Manage Payments</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="tables-general.html">
              <i className="bi bi-circle"></i><span>Order with cash</span>
            </a>
          </li>
          <li>
            <a href="tables-data.html">
              <i className="bi bi-circle"></i><span>Pay on delivary</span>
            </a>
          </li>
          <li>
            <a href="tables-data.html">
              <i className="bi bi-circle"></i><span>today and total cash</span>
            </a>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-bar-chart"></i><span>Manage Events</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="charts-chartjs.html">
              <i className="bi bi-circle"></i><span>Manage Parties</span>
            </a>
          </li>
          <li>
            <a href="charts-apexcharts.html">
              <i className="bi bi-circle"></i><span>Manage weddings</span>
            </a>
          </li>
         
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-gem"></i><span>Manage </span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="icons-bootstrap.html">
              <i className="bi bi-circle"></i><span>Derivary</span>
            </a>
          </li>
          <li>
            <Link to={'/derivaryman'}>
              <i className="bi bi-circle"></i><span>Derivarymen</span>
            </Link>
          </li>
          <li>
            <Link to={'/vendor'} >
              <i className="bi bi-circle"></i><span>vendors</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin'} >
              <i className="bi bi-circle"></i><span>Admin</span>
            </Link>
          </li>

          <li>
            <Link to={'/user'} >
              <i className="bi bi-circle"></i><span>User</span>
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
