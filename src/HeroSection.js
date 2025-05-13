import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './HeroSection.css';
import { Link } from 'react-router-dom';
import heroimage from './images/heroimage.png';

const HeroSection = () => {
  return (
    <>
    <div className="Container herosection">
      <div className="row">
        <div className="col-md-6 hero-section">
        <h1 className="hero-section-heading">LKR Technologies</h1>
        <p className="hero-section-sub-heading">-Smart IT Solution That Supports Your Vision</p>
        <p className="hero-section-body">We deliver intelligent, secure, and scalable IT systems designed to 
          <br/>move with your business-so you can focus on leading,
          <br/>not managing tech.</p>
          <br/>
          <Link to="/contact" className="get-in-touch-link"><button className="get-in-touch-button">Get in Touch</button></Link>
        </div>

        <div className="col-md-6">
          <img src={heroimage} className="hero-image"  alt="hero-image"/>
        </div>
      </div>
      <br/>
    </div>
    </>
  )
}
export default HeroSection;
