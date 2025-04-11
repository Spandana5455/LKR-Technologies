import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './images/logo.png'; 
import './Navbar.css'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
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
              <li className="nav-item">
                <Link className="nav-link" to="/services" onClick={() => setIsOpen(false)}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourprojects" onClick={() => setIsOpen(false)}>Our Projects</Link>
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
