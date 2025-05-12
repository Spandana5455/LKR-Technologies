import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import fb from './images/fb.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
    return (
        <>
        <footer className="footer-container">
              <div className="footer-map m-4">
                <iframe
                  title="LKR Technologies Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3276970219163!2d78.3835950759407!3d17.444022801169506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9184a01bd757%3A0x62d915acf5b7c5a6!2sLKR%20Technologies%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1742289952824!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map-link"
                ></iframe>
              </div>
              <div className="footer-content">
                <div className="footer-section logo-section">
                  <img src={logo} alt="LKR Logo" className="footer-logo" style={{cursor: "pointer" }} onClick={() => navigate("/")} />
                </div>
        
                <div className="footer-section1">
                  <p><Link to="/lkrstory" className="footer-link">LKR Story</Link></p>
                  <p><Link to="/Faqs" className="footer-link">FAQ'S</Link></p>
                  <p><Link to="/jobapplicationform" className="footer-link">Career's</Link></p>
                </div>
        
                <div className="footer-section">
                  <p><Link to="/contact" className="footer-link">Contact Us</Link></p>
                  <p>+91 9100006517</p>
                  <p>contactlkrtechnologies@gmail.com</p>
                </div>
        
                <div className="footer-section">
                  <p><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></p>
                  <p><Link to="/terms-conditions" className="footer-link">Terms and Conditions</Link></p>
                </div>
        
                <div className="footer-section social-section">
                  <p>FOLLOW US ON</p>
                  <div className="social-icons">
                    <img src={fb} alt="face-book" />
                    <img src={instagram} alt="instagram" />
                    <img src={linkedin} alt="linkedin" />
                  </div>
                </div>
              </div>
              
              <div className="footer-bottom">
                <p>© 2024 LKR Technologies. All Rights Reserved</p>
              </div>
            </footer>
        </>
    );
};

export default Footer;

