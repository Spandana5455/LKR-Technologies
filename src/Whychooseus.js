import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Whychooseus.css';
import photographer from './images/photographer.png';
import image4 from './images/image4.png';  

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section text-white py-5" style={{ backgroundColor: '#000' }}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h2 className="whychoose-us-heading">
          Why <span className="whychoose-us-heading-two">Choose Us</span>
        </h2>
      </div>
      <div className="col-md-6 text-end">
        <img src={photographer} className="photographer-image img-fluid rounded-4" alt="photographer" />
      </div>
    </div>

    <div className="row mt-5 align-items-center text-center">
  <div className="col-12 col-md-3 mb-4">
    <img src={image4} className="img-fluid rounded-4" alt="image4" />
  </div>

 
  <div className="col-12 col-md-3 mb-4">
    <div className="icon-circle mb-3 mx-auto">
      <i className="bi bi-code"></i>
    </div>
    <h5 className="expertise-head">Expertise</h5>
    <p className="expertise-text">
      Backed by senior professionals with deep technical mastery to ensure quality outcomes.
    </p>
  </div>

  <div className="col-12 col-md-3 mb-4">
    <div className="icon-circle mb-3 mx-auto">
      <i className="bi bi-lightning-charge"></i>
    </div>
    <h5 className="expertise-head">Agility</h5>
    <p className="expertise-text">
      Emerging talent brings fresh ideas, fast execution, and real-world learning.
    </p>
  </div>

  <div className="col-12 col-md-3 mb-4">
    <div className="icon-circle mb-3 mx-auto">
      <i className="bi bi-award"></i>
    </div>
    <h5 className="expertise-head">Excellence</h5>
    <p className="expertise-text">
      A culture built on recognition, precision, and long-term career growth.
    </p>
  </div>
</div>
  </div>
</div>

  );
};

export default WhyChooseUs;
