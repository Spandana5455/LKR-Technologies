import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LuMapPin } from "react-icons/lu";
import { Link } from 'react-router-dom';
import './ITtraining.css';
import ittrainingbg from './images/ittrainingbg.png';
import whyittraining from './images/whyittraining.png';
import capgemini from './images/capgemini.png';
import Amazon from './images/Amazon.png';
import Accenture from './images/Accenture.png';
import Tcs from './images/Tcs.png';
import Cognizant from './images/Cognizant.png';
import trainingtickicon from './images/trainingtickicon.png';

const courses = [
    { title: "Python", duration: "3 MONTHS", fees: "25K" },
    { title: "Digital Marketing", duration: "45 DAYS", fees: "25K" },
    { title: "Data Base", duration: "3 MONTHS", fees: "25K" },
    { title: "App Developer", duration: "3 MONTHS", fees: "25K" },
    { title: "Cyber Security", duration: "2 MONTHS", fees: "25K" },
    { title: "Testing", duration: "3 MONTHS", fees: "25K" }
];

const ITtraining = () => {
    return (
        <>
        <div className='it-training-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='it-training-heading'>"Unlock Your Future with IT Training"</h1>
                        <p className='it-training-body'>Gain real-world skills and certifications that put you on the fast track to a thriving IT career</p>
                        <Link to="/bookademo" className="it-training-buttoncustom">Join Our Academy Today</Link>
                    </div>
                    <div className='col-md-6'>
                        <img src={ittrainingbg} className='it-training-image' alt='ittrainingbgimg'/>
                    </div>
                </div>
            </div>
        </div>

        <p className='it-training-point-one text-center pt-4'>100% Placement Assurance - Your Career, Our Commitment!</p>
        <p className='it-training-point-two text-center pb-4'>At LKR Technology we don't just train - we transform careers. Our 100% Placement Assurance is more than <br/>a promise; it's a structured pathway backed by industry connections, personalized mentorship, and real-world projects.</p>

        <div className='it-training-whychoose-section'>
           <h2 className='it-training-whychoose-heading'>Why Choose Us</h2>
            <div className='container it-training-whychoose-card'>
                <div className='row p-4'>
                    <div className='col-md-6'>
                        <p className='it-training-whychoose-pointstart'><img src={trainingtickicon} alt='tick' className='me-2' />Industry-Ready Curriculum - Designed with input from top companies</p>
                        <p className='it-training-whychoose-points'><img src={trainingtickicon} alt='tick' className='me-2' /> Live Projects & Portfolio Building:</p>
                        <p className='it-training-whychoose-points'><img src={trainingtickicon} alt='tick' className='me-2' /> Mock Interviews & Soft Skills - Be confident, be prepared</p>
                        <p className='it-training-whychoose-points'><img src={trainingtickicon} alt='tick' className='me-2' /> Dedicated Placement Support - We work with hiring partners until you're hired</p>
                        <p className='it-training-whychoose-points'><img src={trainingtickicon} alt='tick' className='me-2' /> Lifetime Alumni Access - Stay updated, stay ahead</p>
                        <p className='it-training-whychoose-body'>We measure our success through your success. Join us and become part of our growing list of success stories!</p>
                    </div>
                    <div className='col-md-6'>
                        <img src={whyittraining} className='it-training-whychoose-img' alt='it-training-whychoose-img'/>
                    </div>
                </div>
            </div>
        </div>

        <div className='container pt-4'>
            <h2 className='it-training-courses-heading text-center'>What <span className='it-training-courses-heading-two'>you will learn</span></h2>
            <p className='it-training-courses-body text-center'>Learn in-demand skills through immersive programs taught by industry professionals</p>
            <Container className="py-5">
                <Row>
                    {courses.map((course, index) => (
                        <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
                            <Card className="h-100 border-0 rounded-4 px-3 py-4 courses-card">
                                <div className="d-flex justify-content-between px-1 ">
                                    <span className='courses-duration'>
                                        <span style={{ color: '#CA2127' }}>DURATION</span><br />{course.duration}</span>
                                    <span className='courses-fee'>
                                        <span style={{ color: '#CA2127' }}>FEES</span><br />{course.fees}</span>
                                </div>
                                <Card.Body className="px-1">
                                    <Card.Title className="courses-title">{course.title}</Card.Title>
                                    <Card.Text className="mb-3 courses-text">Real time project experience</Card.Text>
                                    <hr className='courses-line'/>
                                    <div className="d-flex align-items-center courses-location mb-3">
                                        <LuMapPin className="me-2 text-danger" />Hyderabad, Telangana, India
                                    </div>
                                    <Link to="/bookademo">
                                    <Button variant="" className="w-75 rounded-3 courses-bookbutton">Book demo</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>

        <div className='container'>
            <h5 className='hiring-partners-heading'>Our hiring partners</h5>
            <div className='row companiesrow'>
                <div className='col-md-4'>
                    <img src={capgemini} className='capgeminiimg' alt='capgeminiimg'/>
                </div>
                <div className='col-md-4'>
                    <img src={Amazon} className='Amazonimg' alt='Amazonimg'/>
                </div>
                <div className='col-md-4'>
                    <img src={Cognizant} className='Cognizantimg' alt='Cognizantimg'/>
                </div>
            </div>
            <br/>
            <div className='row pt-4 companiestwo'>
                <div className='col-md-6'>
                    <img src={Tcs} className='Tcsimg' alt='Tcsimg'/>
                </div>
                <div className='col-md-6'>
                    <img src={Accenture} className='Accentureimg' alt='Accentureimg'/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ITtraining;