import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import './Bookademo.css';

const Bookademo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    studyLevel: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init('vYrie5CAfK58kpSgl'); 

    emailjs.send('service_zzl4nlh', 'template_yvgods5', formData)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Demo Session Booked',
          text: 'Your request has been submitted successfully!',
          confirmButtonColor: '#4CAF50'
        })
        setFormData({
          firstName: '',
          lastName: '',
          mobile: '',
          email: '',
          studyLevel: '',
          course: '',
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
    <>
      <h2 className="text-center mb-4">
        <span className="bookademo-heading">Book Demo Session</span> 
      </h2>
      <Container className="form-container py-5">
        <Form onSubmit={handleSubmit} className="form-box mx-auto p-4 rounded">
          <Form.Group controlId="firstName" className="mb-3">
            <Form.Label className='bookademo-title'>First Name</Form.Label>
            <Form.Control 
              type="text" 
              name="firstName" 
              placeholder="Enter first name" 
              value={formData.firstName}
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group controlId="lastName" className="mb-3">
            <Form.Label className='bookademo-title'>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              name="lastName" 
              placeholder="Enter last name" 
              value={formData.lastName}
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group controlId="mobile" className="mb-3">
            <Form.Label className='bookademo-title'>Mobile number</Form.Label>
            <Form.Control 
              type="text" 
              name="mobile" 
              placeholder="Enter mobile number" 
              value={formData.mobile}
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group controlId="email" className="mb-3">
            <Form.Label className='bookademo-title'>E-mail</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              placeholder="Enter E-mail" 
              value={formData.email}
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group controlId="studyLevel" className="mb-3">
            <Form.Label className='bookademo-title'>Level of study</Form.Label>
            <Form.Select 
              name="studyLevel" 
              value={formData.studyLevel}
              onChange={handleChange} 
              required
            >
              <option value="">Select Your levels of study</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Professional">Professional</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="course" className="mb-4">
            <Form.Label className='bookademo-title'>Which course are you looking for</Form.Label>
            <Form.Select 
              name="course" 
              value={formData.course}
              onChange={handleChange} 
              required
            >
              <option value="">Select Your Course</option>
              <option value="Testing">Testing</option>
              <option value="Data Base">Data Base</option>
              <option value="Python">Python</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="App Developer">App Developer</option>
            </Form.Select>
          </Form.Group>

          <div className="text-center">
            <Button type="submit" className="submit-btn">Submit</Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Bookademo;

