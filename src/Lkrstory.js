import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import image1 from './images/image1.png';
import './Lkrstory.css';
import drivepic from './images/drivepic.png';
import uiIcon from './images/uiIcon.png';
import fullstackicon from './images/fullStackicon.png';
import digital from './images/digital.png';
import game from './images/game.png';
import web from './images/web.png';
import telecall from './images/telecall.png';


const DriveData = [
  {
    icon: "bi-bullseye",
    title: "OUR MISSION",
    highlight: "MISSION",
    description:
      "To deliver high-impact, customized IT solutions that drive innovation, streamline operations, and add measurable value to businesses across industries.",
  },
  {
    icon: "bi-eye",
    title: "OUR VISION",
    highlight: "VISION",
    description:
      "To become a global leader in digital transformation by nurturing talent, embracing innovation, and building technology that shapes a smarter future.",
  },
  {
    icon: "bi-shield",
    title: "OUR VALUES",
    highlight: "VALUES",
    description:
      "To uphold a culture of innovation, excellence, and integrity that empowers our team, strengthens client relationships, and delivers lasting value through every solution we build.",
  },
];

const DriveServicesData = [
  {
    image: uiIcon,
    title: "UI/UX Design",
    description: "Creating Intuitive, Human-Centric Digital Experiences",
  },
  {
    image: fullstackicon,
    title: "Full-Stack Development",
    description: "End-To-End Web And App Solutions",
  },
  {
    image: digital,
    title: "Digital Marketing",
    description: "Performance-Driven Strategies For Brand Growth",
  },
  {
    image: game,
    title: "Game Development",
    description: "Interactive and engaging mobile games",
  },
  {
    image: web,
    title: "Web Development",
    description: "Responsive, clean, and modern website interfaces",
  },
  {
    image: telecall,
    title: "Tele Calling",
    description: "Driving leads and customer engagement through calls",
  },
];
const Lkrstory = () => {
  return (
    <>
    <div className="lkr-story-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="lkr-story-heading">LKR <span className="lkr-story-heading-two">Story</span></h1>
                </div>
            </div>
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

        <h5 className="lkr-learn-more">
          Learn more 
          <span className="chevrons">
            <i className="bi bi-chevron-right"></i>
            <i className="bi bi-chevron-right no-gap"></i>
          </span>
        </h5>
      </div>

      <div className="col-md-6">
        <img src={image1} className="lkrstory-image" alt="lkrstory-image"/>
      </div>
    </div>
    <br/>
    </div>

    <div className="drive-container">
            <h4 className="headers-text">
              What <span className="highlight-text">Drive Us</span>
            </h4>
    
            <div className="row gx-4 gy-5 justify-content-center text-center drive-section">
              {DriveData.map((item, index) => (
                <div
                  key={index}
                  className={`col-12 col-md-6 col-lg-4 drive-card ${
                    index !== DriveData.length - 1 ? "border-md-end" : ""
                  }`}
                >
                  <i className={`bi ${item.icon} drive-icon`}></i>
                  <h5 className="mt-3 fw-bold">
                    OUR <span className="highlight-text">{item.highlight}</span>
                  </h5>
                  <p className="text-muted drive-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
    
          <div className="what-we-do-section">
            <h4 className="headers-text">
              What <span className="highlight-text">We Do</span>
            </h4>
    
            <div className="content-wrapper pt-4">
              <div className="image-container">
                <img className="drive-img" src={drivepic} alt="drive-pic" />
              </div>
    
              <div className="services-carousel">
                {DriveServicesData.map((item, index) => (
                  <div key={index} className="services-card">
                    <div className="react-service-icon">
                      <img src={item.image} alt="service-icon" />
                    </div>
                    <h5 className="service-titles">{item.title}</h5>
                    <p className="service-desc">{item.description}</p>
                    <div className="underline"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    </>
  )
}

export default Lkrstory;


