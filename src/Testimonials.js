import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Testimonials.css';
import lkr from './images/lkr.png';
import spandana from './images/spandana.png';
import vasavi from './images/vasavi.png';
import shirisha from './images/shirisha.png';
import venky from './images/venky.png';
import lifelkr from './images/lifelkr.png';

const Testimonials = () => {
  const LifeData = [
      {
        profile: spandana,
        logo: lkr,
        content:
          "Challenging and dynamic projects that allow us to solve real-world tech problems and innovate through creative solutions.",
      },
      {
        profile: vasavi,
        logo: lkr,
        content:
          "Defined career growth opportunities with regular promotions and the chance to take on leadership roles in impactful projects.",
      },
      {
        profile: shirisha,
        logo: lkr,
        content:
          "A great place to build experience with a collaborative work culture and ample opportunities for upskilling in cutting-edge technologies.",
      },
      {
        profile: venky,
        logo: lkr,
        content:
          "Team-oriented culture that fosters continuous learning, smooth task execution, and strong peer support.",
      },
    ];
  return (
    <>
     <div className="life-container">
             <h2 className="life-heading">
               Life At <span className="company-name">LKR Technologies</span>
             </h2>
             <img className="group-img" src={lifelkr} alt="Life at LKR" />
           </div>
     
           <div className="card-container">
             {LifeData.map((item, index) => (
              <div className="life-card" key={index}>
              <div className="image-row">
                <img className="profile-img" src={item.profile} alt={`profile-${index}`} />
                <img className="logo-img" src={item.logo} alt="LKR Logo" />
              </div>
              <p className="testimonial-text">"{item.content}"</p>
            </div>
            
             ))}
           </div>
    </>
  );
};


export default Testimonials; 