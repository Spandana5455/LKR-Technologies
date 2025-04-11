import React, { useState } from 'react';
import './Jobapplicationform.css';
import { Link } from 'react-router-dom';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobRole: '',
    address: '',
    city: '',
    mobilenumber: '',
    date: '',
    resumelink: null
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
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold jobform-header">Job Application Form</h2>
      <form onSubmit={handleSubmit} className="p-4 bg-white">
        
        
        <div className="row">
          <div className="col-md-6 mb-3 custom-box">
            <label className="fw-bold form-label">First Name</label>
            <input 
              type="text" 
              name="firstName" 
              className="form-control" 
              placeholder="Enter first name" 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6 mb-3 custom-box">
            <label className="fw-bold form-label">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              className="form-control" 
              placeholder="Enter last name" 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        
        <div className="row">
          <div className="col-md-6 mb-3 custom-box">
            <label className="fw-bold form-label">E-mail</label>
            <input 
              type="email" 
              name="email" 
              className="form-control" 
              placeholder="Enter email" 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6 mb-3 custom-box">
            <label className="fw-bold form-label">Job Role</label>
            <select 
              name="jobRole" 
              className="form-control" 
              onChange={handleChange} 
              required
            >
              <option value="">Select Your Job Role</option>
              <option value="UX/UI Designer">UX/UI Designer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Tele-Calling">Tele-Calling</option>
            </select>
          </div>
        </div>

        
        <div className="mb-3 custom-box-address">
          <label className="fw-bold form-label">Address</label>
          <textarea 
            name="address" 
            className="form-control" 
            placeholder="Enter address" 
            onChange={handleChange} 
            required 
          />
        </div>

        
        <div className="row">
          <div className="col-md-6 mb-3 custom-box">
            <label className="form-label">City Name</label>
            <input 
              type="text" 
              name="city" 
              className="form-control" 
              placeholder="Enter city" 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6 mb-3 custom-box">
            <label className="form-label">Mobile Number</label>
            <input 
              type="text" 
              name="mobilenumber" 
              className="form-control" 
              placeholder="Mobile number" 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        
        <div className="row">
          <div className="col-md-6 mb-3 custom-box">
            <label className="form-label">Date</label>
            <input 
              type="date" 
              name="date" 
              className="form-control" 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6 mb-3 custom-box">
            <label className="form-label">Resume Drive link<span className="form-label-text">(General access Anyone with the link)</span></label>
            <input 
              type="link" 
              name="resumelink"
              className="form-control"
              placeholder="google drive link" 
              onChange={handleChange}

              required 
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-center py-5">
          <Link to="/jobappsuccess"><button type="submit" className="btn-color-submit">Submit</button></Link>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;

