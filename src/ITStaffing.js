import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col, Card} from 'react-bootstrap';
import './ITStaffing.css';
import whyitstaffing from './images/whyitstaffing.png';
import servicesdoticon from './images/servicesdoticon.png';
import itstaffing1 from './images/itstaffing1.png';
import itstaffing2 from './images/itstaffing2.png';
import itstaffing3 from './images/itstaffing3.png';
import itstaffing4 from './images/itstaffing4.png';
import itstaffing5 from './images/itstaffing5.png';
import staffingpath1 from './images/staffingpath1.png';
import staffingpath2 from './images/staffingpath2.png';
import staffingpath3 from './images/staffingpath3.png';
import staffingpath4 from './images/staffingpath4.png';

const services = [
  {
    image: itstaffing1,
    text: `Rapid placement of skilled professionals for short- or medium term assignments. Ideal for scaling teams quickly without long-term commitments.`
  },
  {
    image: itstaffing2,
    text: `Evaluate candidates in real-world scenarios before making a long-term hiring decision.`
  },
  {
    image: itstaffing3,
    text: `We identify and recruit permanent employees who align with your company’s values and technical needs.`
  },
  {
    image: itstaffing4,
    text: `Deploy entire technical teams to complete projects, from software development to cloud migration.`
  },
  {
    image: itstaffing5,
    text: `Talent available across geographic preferences. Work with remote or hybrid professionals anywhere.`
  }
];

const steps = [
  {
    title: 'Resume Screening',
    img: staffingpath1,
  },
  {
    title: 'Skills Assessment',
    img: staffingpath2,
  },
  {
    title: 'Interview Preparation',
    img: staffingpath3,
  },
  {
    title: 'Perfect Role Matching',
    img:staffingpath4,
  },
];

const roles = [
  { title: "Development & Engineering", color: "gray" },
  { title: "Cloud & Infrastructure", color: "pink" },
  { title: "Cybersecurity", color: "gray" },
  { title: "Data & AI", color: "pink" },
  { title: "QA & Testing", color: "gray" },
  { title: "Project Management", color: "pink" },
];

const ITStaffing = () => {
    return (
        <>
        <div className='itstaffing-section'>
            <div className='container'>
                <h1 className='itstaffing-heading'>Build </h1>
                <h2 className='itstaffing-subheading'>Your IT Dream Team</h2>
                <h2 className='itstaffing-subheadingtwo'>Faster <span className='itstaffing-subheading-line'>|</span> Smarter <span className='itstaffing-subheading-line'>|</span> Stronger</h2>
                <p className='itstaffing-body'>We connect you with pre-vetted, highly skilled IT professionals on-demand, on-site, or remote. Whether you're scaling fast or tackling complex digital transformation, we have the talent you need.</p>
            </div>
        </div>

        <Container className="my-5">
          <h2 className="text-center mb-4 staffingservices-heading">Our IT  <span className="staffingservices-heading-two">Staffing Services</span></h2>
          <Row className="g-4 justify-content-center">
            {services.map((service, index) => (
              <Col xs={12} sm={6} md={4} lg={4} key={index} className="d-flex justify-content-center">
                <div className="staffingservice-card">
                  <img src={service.image} alt="staffing" className="staffingservice-img" />
                  <div className="staffingoverlay">
                    <p className="staffingoverlay-text">{service.text}</p>
                  </div>
                </div>
              </Col>
            ))}
         </Row>
        </Container>

          <div className='pt-4'>
            <h2 className='it-development-whychoose-heading'>Why <span className='it-development-whychoose-heading-two'>Choose Us</span></h2>
                <div className='container'>
                    <div className='row pt-4'>
                        <div className='col-md-6'>
                            <div className='it-development-whychoose-pointstart'>
                                <img src={servicesdoticon} alt='dot' className='icon-gap' />
                                    <span>Curated Talent Pool</span>
                            </div>
                            <div className='it-development-whychoose-points'>
                                <img src={servicesdoticon} alt='dot' className='icon-gap' />
                                    <span>Rapid Delivery</span>
                            </div>
                            <div className='it-development-whychoose-points'>
                                <img src={servicesdoticon} alt='dot' className='icon-gap' />
                                    <span>Global Expertise</span>
                            </div>
                            <div className='it-development-whychoose-points'>
                                <img src={servicesdoticon} alt='dot' className='icon-gap' />
                                    <span>Full Tech Stack Coverage</span>
                            </div>
                            <div className='it-development-whychoose-points'>
                                <img src={servicesdoticon} alt='dot' className='icon-gap' />
                                    <span>Flexible Engagement Models</span>
                            </div>
                            <div className='it-development-whychoose-points'>
                                <img src={servicesdoticon} alt='dot' className='icon-gap' />
                                    <span>Dedicated Account Management</span>
                            </div>
                        </div>
                
                        <div className='col-md-6'>
                            <img src={whyitstaffing} className='whyitdevelopment-whychoose-img' alt='whyitdevelopment-whychoose-img'/>
                        </div>
                    </div>
                </div>
          </div>

          <div className="text-center">
            <h3 className="section-title">
              <span className="staffing-heading">How <span className="staffing-heading-two">We Work</span></span>
            </h3>
            <div className="steps-container d-flex justify-content-center flex-wrap how-we-work-section ">
              {steps.map((step, index) => (
                <div className="step-card text-center" key={index}>
                  <img src={step.img} alt={step.title} className="step-image" />
                  <h5 className="step-title mt-3">{step.title}</h5>
                </div>
              ))}
           </div>
          </div>

          <Container className="my-5">
            <h3 className="text-center mb-4">
              <span className="staffingroles-heading">Roles</span>{" "}
              <span className="staffingroles-heading-two">We Specialize In</span>
            </h3>
            <Row>
              {roles.map((role, index) => (
                <Col key={index} md={4} className="mb-4">
                  <Card className={`role-card ${role.color}`}>
                    <Card.Body>
                      <Card.Title className="role-title">{role.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </>
    )
}

export default ITStaffing;