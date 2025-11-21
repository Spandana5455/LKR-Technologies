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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.104140828237!2d78.37412897594083!3d17.454728950860183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93003f227805%3A0x37d602bf9f6eab75!2sJains%20Ravi%20Gayathri%20Heights!5e0!3m2!1sen!2sin!4v1763709241731!5m2!1sen!2sin"
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
                  <p>+91 7032324242</p>
                  <p>info@lkrtechnologies.com</p>
                </div>
        
                <div className="footer-section">
                  <p><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></p>
                  <p><Link to="/terms-conditions" className="footer-link">Terms and Conditions</Link></p>
                  <p><Link to="/data-deletion" className="footer-link">Data Deletion</Link></p>
                </div>
        
                <div className="footer-section social-section">
                  <p>FOLLOW US ON</p>
                  <div className="social-icons">
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img src={fb} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/lkrtechnologies/?hl=en" target="_blank" rel="noopener noreferrer">
                      <img src={instagram} alt="instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/lkr-technologies-285a40362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <img src={linkedin} alt="linkedin" />
                    </a>
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

