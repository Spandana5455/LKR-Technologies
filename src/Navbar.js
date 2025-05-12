import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './images/logo.png'; 
import './Navbar.css'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  const isMobile = window.innerWidth < 992;
  
  return (
    <div className="navbar-section">
      <nav className="navbar navbar-expand-lg container-fluid">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="logo-image" alt="LKR Logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lkrstory" onClick={() => setIsOpen(false)}>LKR Story</Link>
              </li>
              <li className="nav-item dropdown"
              onMouseEnter={!isMobile ? () => setOpenDropdown('services') : null}
              onMouseLeave={!isMobile ? () => setOpenDropdown(null) : null}
              onClick={isMobile ? () => toggleDropdown('services') : null}
              >
                <span className="nav-link" role="button">Services </span>
                <ul className={`dropdown-menu vertical-dropdown ${openDropdown === 'services' ? 'show' : ''}`}>
                  <li className="dropdown-item" onClick={() => handleNavigate('/ittraining')}>IT Training</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/itdevelopment')}>IT Development</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/itstaffing')}>IT Staffing</li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourprojects" onClick={() => setIsOpen(false)}>Our Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/career" onClick={() => setIsOpen(false)}>Career</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-light btn-sm rounded-pill" to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  );
};
export default Navbar;
