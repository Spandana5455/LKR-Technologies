import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import './Ourprojects.css';
import rummyludo from './images/rummyludo.png';
import dropquick from './images/dropquick.png';
import hostel from './images/hostel.png';
import lebestowimg from './images/lebestowimg.png';
import leairaimg from './images/leairaimg.png';
import importsexports from './images/importsexports.png';
import suitsnsalon from './images/suitsnsalon.png';

const Ourprojects = () => {
  return (
    <>
    <div className="container pt-4">
      <h2 className="our-projects-heading">Our <span className="our-projects-heading-projects">Projects</span></h2>
      <div className="row pt-4">
        <div className="col-md-6">
          <img src={rummyludo} className="rummyludo-image" alt="rummyludo"/>
        </div>
        <div className="col-md-6">
          <p className="rummyludo-text"><span className="rummyludo-start-text">The Rummy Ludo </span>A feature-rich mobile gaming application that merges two classic games-Rummy and Ludo-into one engaging platform. 
            The app offers real-time multiplayer gameplay, tournaments, social matchmaking, and a sleek, intuitive interface to deliver a fun 
            and competitive user experience.
          </p>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-md-6">
        <p className="dropquick-text"><span className="dropquick-start-text">Drop Quick </span>An eCommerce web application built for seamless and efficient online shopping. Designed with modern UI/UX standards, it includes 
            secure payments, product discovery, and real-time order tracking. The platform offers a scalable architecture to support high traffic and an 
            extensive product catalog.
          </p>
        </div>
        <div className="col-md-6">
          <img src={dropquick} className="dropquick-image" alt="dropquick"/>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-md-6">
          <img src={lebestowimg} className="hostel-image" alt="hostel"/>
        </div>
        <div className="col-md-6">
          <p className="hostel-text"><span className="hostel-start-text">Le Bestow </span> is a lifestyle-driven co-living website that offers a seamless, community-first living experience.
          Blending luxury, prime location, and everyday convenience, it allows users to explore fully furnished apartments, enjoy freshly prepared homely Food, and connect with 
          like-minded individuals-all within a single, intuitive digital ecosystem.
          <p>[Check it out: <a href="https://lebestow.com" target="_blank" rel="noopener noreferrer">https://lebestow.com</a>]</p>
          </p>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-md-6">
        <p className="dropquick-text"><span className="dropquick-start-text">The suits Nd salon </span> We designed a complete website for The Suits ND Salon, a premium single-location salon and suite service provider. The site is tailored 
        to reflect their luxurious and professional environment, with a focus on showcasing their services, amenities, and client experience. Featuring a clean and modern 
        interface, it ensures easy navigation, informative content, and enhanced engagement-perfectly aligned with the brand's identity and  customer expectations.
        <p>[Check it out: <a href="https://thesuitssalonspa.com" target="_blank" rel="noopener noreferrer">https://thesuitssalonspa.com</a>]</p>
          </p>
        </div>
        <div className="col-md-6">
          <img src={suitsnsalon} className="suitsnsalon-image" alt="suitsnsalon"/>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-md-6">
          <img src={leairaimg} className="rummyludo-image" alt="leaira"/>
        </div>
        <div className="col-md-6">
          <p className="rummyludo-text"><span className="rummyludo-start-text">Leaira events </span> A vibrant event management Website crafted to reflect elegance and creativity. This platform captures the 
          essence of event planning with a visually appealing design and seamless navigation effectively showcasing services, experiences, and celebrations.
          <p>[Check it out: <a href="https://leairaevents.com" target="_blank" rel="noopener noreferrer">https://leairaevents.com</a>]</p>
          </p>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-md-6">
        <p className="dropquick-text"><span className="dropquick-start-text">Hostel PG </span>Hostel PG App A comprehensive digital Mobile Application designed to simplify hostel and PG operations. This platform streamlines 
        everything from room allocation and visitor tracking to payments and maintenance requests-all through an intuitive, user-friendly interface focused on efficiency and 
        resident satisfaction.
          </p>
        </div>
        <div className="col-md-6">
          <img src={hostel} className="hostel-pg-image" alt="hostel-pg"/>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-md-6">
          <img src={importsexports} className="rummyludo-image" alt="importsexports"/>
        </div>
        <div className="col-md-6">
          <p className="rummyludo-text"><span className="rummyludo-start-text">Imports & Exports </span> A streamlined imports and exports consulting website designed to simplify the process of trading 
          goods between China and India. The site offers a clear, user-friendly experience focused on cost efficiency, compliance, and smooth cross-border trade. it guide users 
          through every step of the process ensuring clarity and confidence in international sourcing.
          <p>[Check it out: <a href="https://www.lkrimportsexports.com/" target="_blank" rel="noopener noreferrer">https://www.lkrimportsexports.com/</a>]</p>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ourprojects;
