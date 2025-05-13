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
              <li className={`nav-item dropdown ${openDropdown === 'services' ? 'show' : ''}`}
              onMouseEnter={() => !isMobile && setOpenDropdown('services')}
              onMouseLeave={() => !isMobile && setOpenDropdown(null)}>
                <span className="nav-link" role="button" onClick={() => isMobile && toggleDropdown('services')}> Services </span>
                <ul className={`dropdown-menu ${openDropdown === 'services' ? 'show' : ''}`}>
                  <li>
                    <Link className="dropdown-item" to="/ittraining" onClick={() => { setOpenDropdown(null); setIsOpen(false); }}> IT Training </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/itdevelopment" onClick={() => { setOpenDropdown(null); setIsOpen(false); }}> IT Development </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/itstaffing" onClick={() => { setOpenDropdown(null); setIsOpen(false); }}> IT Staffing </Link>
                  </li>
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
