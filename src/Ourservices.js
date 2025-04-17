import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import './Ourservices.css';
import uidesigner from './images/uidesigner.png';
import fullstack from './images/fullstack.png';
import digitalmarketing from './images/digitalmarketing.png';
import telecaller from './images/telecaller.png';
import webdevelopment from './images/webdevelopment.png';
import gamedeveloper from './images/gamedeveloper.png';



const serviceData = [
  {
    title: "UI/UX Designer",
    description:
      "We craft intuitive and engaging digital experiences that align design with user needs and business goals.",
    image: uidesigner,
    button: "Know more",
    buttonLink: "/uiux-designer",
  },
  {
    title: "Full Stack",
    description:
      "Our developers handle both front-end and back-end with ease, delivering complete and scalable web applications.",
    image: fullstack,
    button: "Know more",
    buttonLink: "/full-stack",
  },
  {
    title: "Digital Marketing",
    description:
      "From SEO to social media, we drive brand visibility and targeted growth through data-driven strategies.",
    image: digitalmarketing,
    button: "Know more",
    buttonLink: "/digital-marketing",
  },
  {
    title: "Tele Caller",
    description:
      "Our trained professionals provide excellent customer communication and lead generation support.",
    image: telecaller,
    button: "Know more",
    buttonLink: "/tele-caller",
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive, and user-centric website designs that reflect your brand and deliver impact.",
    image: webdevelopment,
    button: "Know more",
    buttonLink: "/web-development",
  },
  {
    title: "Game Developer",
    description:
      "We develop interactive, story-rich games with immersive gameplay and cutting-edge technologies.",
    image: gamedeveloper,
    button: "Know more",
    buttonLink: "/game-developer",
  },
];

const Ourservices = () => {
  return (
    <>
    <div className="mainBox pt-4">
      <div className="heading-container">
        <h2 className="our-section">Our</h2>
        <h2 className="service-section">Services</h2>
      </div>

      <div className="service-grid">
        {serviceData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-img" />
            <h5 className="service-title">{service.title}</h5>
            <p className="service-description">{service.description}</p>
            <Link to={service.buttonLink} className="know-more-btn">
              {service.button}
            </Link>
          </div>
        ))}
      </div>
      <br/>
      <br/>
    </div>
    </>
  );
};

export default Ourservices;

 