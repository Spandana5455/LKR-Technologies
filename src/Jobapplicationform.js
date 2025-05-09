import React, { useState } from 'react';
import './Jobapplicationform.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const JobApplicationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    user_email: '',
    job_role: '',
    address: '',
    city: '',
    phone: '',
    date: '',
    drivelink: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init('_IrMPIBYjQ-KTOLVu'); // Replace with your EmailJS public key

    emailjs.send('service_zyn85dk', 'template_gk8qaae', formData)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Application Submitted',
          text: 'Your application has been sent successfully!',
          confirmButtonColor: '#4CAF50'
        }).then(() => {
          navigate('/jobappsuccess');
        });

        setFormData({
          first_name: '',
          last_name: '',
          user_email: '',
          job_role: '',
          address: '',
          city: '',
          phone: '',
          date: '',
          drivelink: ''
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong: ' + JSON.stringify(error),
          confirmButtonColor: '#d33'
        });
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold jobform-header">Job Application Form</h2>
      <form onSubmit={handleSubmit} className="p-4 bg-white">
        
        <div className="row">
          <div className="col-md-6 mb-3 custom-box">
            <label className="fw-bold form-label">First Name</label>
            <input type="text" name="first_name" className="form-control" placeholder="Enter first name" value={formData.first_name} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3 custom-box">
            <label className="fw-bold form-label">Last Name</label>
            <input type="text" name="last_name" className="form-control" placeholder="Enter last name" value={formData.last_name} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3 custom-box">
            <label className="fw-bold form-label">E-mail</label>
            <input type="email" name="user_email" className="form-control" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3 custom-box">
            <label className="fw-bold form-label">Job Role</label>
            <select name="job_role" className="form-control" value={formData.jobRole} onChange={handleChange} required>
              <option value="">Select Your Job Role</option>
              <option value="Accountant">Accountant</option>
              <option value="Digital marketing">Digital marketing</option>
              <option value="Business strategy executive">Business Strategy Executive</option>
              <option value="Mobile App Developer frontend/backend">Mobile App Developer frontend/backend</option>
              <option value="Business development manager">Business Development Manager</option>
              <option value="Marketing [sales filed]">Marketing [sales filed]</option>
            </select>
          </div>
        </div>

        <div className="mb-3 custom-box-address ps-2">
          <label className="fw-bold form-label">Address</label>
          <textarea name="address" className="form-control" placeholder="Enter address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3 custom-box">
            <label className="form-label">City Name</label>
            <input type="text" name="city" className="form-control" placeholder="Enter city" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3 custom-box">
            <label className="form-label">Mobile Number</label>
            <input type="text" name="phone" className="form-control" placeholder="Mobile number" value={formData.mobilenumber} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3 custom-box">
            <label className="form-label">Date</label>
            <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3 custom-box">
            <label className="form-label">
              Resume Drive link <span className="form-label-text">(General access Anyone with the link)</span>
            </label>
            <input type="link" name="drivelink" className="form-control" placeholder="Google Drive link" value={formData.resumelink} onChange={handleChange} required />
          </div>
        </div>

        <div className="d-flex justify-content-center py-5">
          <button type="submit" className="btn-color-submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;


