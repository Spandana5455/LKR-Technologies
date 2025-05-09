import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import "bootstrap/dist/css/bootstrap.min.css";
import './Contactus.css'; 
import contactimage from './images/contactimage.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    user_email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init('_IrMPIBYjQ-KTOLVu'); // Replace with your EmailJS public key

    emailjs
      .send('service_bss9p7d', 'template_c3871op', formData)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent',
          text: 'Thank you for getting in touch!',
          confirmButtonColor: '#4CAF50',
        });
        setFormData({
          name: '',
          user_email: '',
          phone: '',
          message: '',
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong: ' + JSON.stringify(error),
          confirmButtonColor: '#d33',
        });
      });
  };

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

      <div className="container">
        <div className="row">
          {/* Left Column - Info */}
          <div className="col-md-6 mb-4 pt-5">
            <h2 className="info-heading">How to find us</h2>
            <p className="info-text">
              If you have any questions, just fill in the contact form, and we will answer you shortly.
              If you are living nearby, come visit our LKR Technologies Office.
            </p>
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
          <div className="col-md-6 pt-5">
            <h2 className="fw-bold mb-4">Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-head">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-head">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-head">Mobile Number</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Enter Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-head">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="contact-us-submit text-center">
                <button type="submit" className="btn contact-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


