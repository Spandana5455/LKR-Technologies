import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Contactus.css'; 
import contactimage from './images/contactimage.png';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="curved-image-wrapper position-relative">
        <img
          src={contactimage}
          alt="Contact Banner"
          className="img-fluid header-image w-100"
        />
        <h1 className="position-absolute top-50 start-50 translate-middle contactus-heading fw-bold">
          CONTACT US
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          {/* Left Column - Info */}
          <div className="col-md-6 mb-4 pt-5">
            <h2 className="info-heading">How to find us</h2>
            <p className="info-text">If you have any questions, just fill in the contact form, and we will answer you shortly. If you are living nearby, come visit our LKR Technologies Office.</p>
            <h4 className="info-heading">Headquarters</h4>
            <p className="info-text">
              4th Floor, Plot No: 25, 2, 4 And 5,<br />
              Arunodaya Colony,<br />
              Vittal Rao Nagar, Madhapur, Hyderabad,<br />
              Telangana 500081<br />
              +91 9100006517<br />
              contactlkrtechnologies@gmail.com
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">Get In Touch</h2>
            <form>
              <div className="mb-3">
                <label className="form-head">First Name</label>
                <input type="text" className="form-control" placeholder="Enter First Name" />
              </div>
              <div className="mb-3">
                <label className="form-head">Last Name</label>
                <input type="text" className="form-control" placeholder="Enter Last Name" />
              </div>
              <div className="mb-3">
                <label className="form-head">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter Email" />
              </div>
              <div className="mb-3">
                <label className="form-head">Message</label>
                <textarea className="form-control" rows="4" placeholder="Type your message here..."></textarea>
              </div>
            </form>
          </div>
          <div className="contact-us-submit text-center">
          <button type="submit" className="btn contact-submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

