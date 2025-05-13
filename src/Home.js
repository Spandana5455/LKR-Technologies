import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';
import HeroSection from "./HeroSection";
import Clients from "./Clients";
import Whychooseus from "./Whychooseus";
import Testimonials from "./Testimonials";
import image1 from './images/image1.png';
import rummyludo from './images/rummyludo.png';
import dropquick from './images/dropquick.png';
import hostel from './images/hostel.png';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Clients />
      <div className="container text-center pt-2">
            <h2 className="lkrstory-heading">LKR <span className="lkrstory-heading-two">Story</span></h2>
          </div>
      
          <div className="container lkrstory-section">
          <div className="row">
            <div className="col-md-6">
              <h5 className="lkrstory-head">Who <span className="lkrstory-head-two">We Are</span></h5>
              <p className="lkrstory-text pt-3">Founded on June 16, 2024, LKR Technologies is a forward-thinking IT solutions company built to empower modern businesses with the tools, 
                talent, and technologies they need to thrive in an ever-evolving digital world. Our passion lies in delivering smart, scalable, and future-ready 
                solutions tailored to each client's unique goals.
              </p>
              <p className="lkrstory-text">From startups to enterprises, we partner with organizations to transform ideas into robust digital products and help 
                them stay ahead in the competitive tech landscape.
              </p>
      
              <Link to="/lkrstory" className="home-link"><h5 className="lkr-learn-more">
                Learn more 
                <span className="chevrons">
                  <i className="bi bi-chevron-right"></i>
                  <i className="bi bi-chevron-right no-gap"></i>
                </span>
              </h5></Link>
            </div>
      
            <div className="col-md-6">
              <img src={image1} className="lkrstory-image" alt="lkrstory-image"/>
            </div>
          </div>
          <br/>
          </div>
      <Whychooseus />
      <Testimonials />
      <br/>
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
                <img src={hostel} className="hostel-image" alt="hostel"/>
              </div>
              <div className="col-md-6">
                <p className="hostel-text"><span className="hostel-start-text">Hostel PG </span>A smart hostel management solution developed to automate administrative tasks and enhance the resident experience. Features 
                  include digital room allocation, visitor tracking, payment management, and maintenance request handling-accessible through a user-friendly dashboard.
                </p>
              </div>
            </div>

            <div class="explore-wrapper">
            <Link to="/ourprojects" className="home-link"><h5 className="lkr-explore-more">
            Explore more 
          <span className="chevrons">
            <i className="bi bi-chevron-right"></i>
            <i className="bi bi-chevron-right no-gap"></i>
          </span>
        </h5></Link>
        </div>
          </div>
    </>
  );
}
