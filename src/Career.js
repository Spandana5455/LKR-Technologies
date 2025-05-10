import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LuMapPin } from "react-icons/lu";
import { BsArrowDownRightCircle } from "react-icons/bs";
import './Career.css';
import careerbg from './images/careerbg.png';
import servicesdoticon from './images/servicesdoticon.png';
import careerwhychoose from './images/careerwhychoose.png';
import careerlkr from './images/careerlkr.png';
import training1 from './images/training1.png';
import training2 from './images/training2.png';
import training3 from './images/training3.png';

const positions = [
    { title: "Accountant",text:"Join our team as an accounting intern and support our financial operations.", applybefore: "31 MAY 2025", jobtype: "INTERN" },
    { title: "Digital Marketing",text:"Join our team as a digital marketing intern and boost our online presence.", applybefore: "31 MAY 2025", jobtype: "INTERN" },
    { title: "Business Strategy Executive",text:"Join our team as a business strategy executive and drive our growth.", applybefore: "31 MAY 2025", jobtype: "INTERN" },
    { title: "Mobile App Developer Frontend/Backend",text:"Join our team as a mobile app developer and create powerful apps.", applybefore: "31 MAY 2025", jobtype: "INTERN" },
    { title: "Business Development Manager",text:"Join our team as a business development manager and grow our client base.", applybefore: "31 MAY 2025", jobtype: "INTERN" },
    { title: "Marketing [sales filed]",text:"Join our team as a marketing executive and boost our sales.", applybefore: "31 MAY 2025", jobtype: "INTERN" }
];

const Career = () => {
    const steps = [
  { id: 1, title: 'Send your CV', description: 'Upload your resume or share your LinkedIn profile. Our team will get in touch if your skills match the role.' },
  { id: 2, title: 'Initial screening', description: 'A short call to understand your background, interests, and expectations.' },
  { id: 3, title: 'Technical interview', description: 'Demonstrate your expertise and problem-solving skills with our technical team.' },
  { id: 4, title: 'Culture Fit Interview', description: 'Meet with leadership or team members to ensure alignment with our values and work style.' },
  { id: 5, title: 'Offer & Onboarding', description: 'Welcome aboard! Get ready to thrive in a supportive and high-growth environment.' },
];
const [activeStep, setActiveStep] = useState(1);

const cards = [
    {
      title: 'B Tech [EEE/ECE/Mechanical]',
      passedOutYear: '2024/2025',
      jobType: 'FULL TIME',
      package: '2.2LPA TO 2.4LPA',
      perks: [
        'Interview opportunities with level 5 MNCs and tech-forward compnies',
        'Free Food & Accommodation during the onboarding and placement period',
        'End-to-end support till placement with dedicated mentorship',
      ],
      location: 'Hyderabad, Telangana, India',
    },
    {
      title: 'Degree/MBA',
      passedOutYear: '2024/2025',
      jobType: 'FULL TIME',
      package: '3LPA TO 4LPA',
      perks: [
        'Interview opportunities with level 5 MNCs and tech-forward compnies',
        'Career growth and skill development workshops throughout the process',
        'End-to-end support till placement with dedicated mentorship',
      ],
      location: 'Hyderabad, Telangana, India',
    },
];

const items = [
    {
      image: training1,
      text: 'Industry-relevant curriculum designed by experienced mentors',
    },
    {
      image: training2,
      text: 'Resume building & soft skills grooming',
    },
    {
      image: training3,
      text: 'Mock interviews with feedback sessions',
    },
  ];

    return (
        <>
        <div className="career-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="career-heading">Be a part of <span className="career-heading-two">building</span> the <span className="career-heading-two">digital</span> future with <span className="career-heading-two">LKR</span></h1>
                        <p className="career-body">Join a team of passionate innovators, engineers, and creators who are shaping the world of technology. Whether you're a coder, designer, strategist, or a problem-solver, your future begins here. </p>
                    </div>
                    <div className="col-md-6">
                        <img src={careerbg} className="career-image" alt="careerbgimage"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container py-5">
            <h2 className="text-center mb-4 career-hiring-heading">Our <span className="career-hiring-heading-two">Hiring Process</span></h2>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="career-hiring-listgroup shadow-sm">
                        {steps.map((step) => (
                            <button key={step.id} className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${activeStep === step.id ? 'active-step' : ''}`}onClick={() => setActiveStep(step.id)}>
                                <span className="career-title">{`0${step.id} _ ${step.title}`}</span>
                                {activeStep === step.id && <BsArrowDownRightCircle  className="step-icon" />}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col-md-6 mt-4  d-flex align-items-center">
                    <p className="career-description">{steps.find((s) => s.id === activeStep).description}</p>
                </div>
            </div>
        </div>

        <div className='pt-4'>
                    <h2 className='it-development-whychoose-heading'>Why <span className='it-development-whychoose-heading-two'>Work With Us</span></h2>
                    <div className='container'>
                        <div className='row pt-4'>
                            <div className='col-md-6'>
                                <div className='it-development-whychoose-pointstart'>
                                    <img src={servicesdoticon} alt='dot' className='icon-gap' />
                                    <span>Accelerated Career Growth</span>
                                </div>
                                <div className='it-development-whychoose-points'>
                                    <img src={servicesdoticon} alt='dot' className='icon-gap' />
                                    <span>Continious Learning</span>
                                </div>
                                <div className='it-development-whychoose-points'>
                                    <img src={servicesdoticon} alt='dot' className='icon-gap' />
                                    <span>FLexible Work Culture</span>
                                </div>
                                <div className='it-development-whychoose-points'>
                                    <img src={servicesdoticon} alt='dot' className='icon-gap' />
                                    <span>Diverse & Inclusive Environment</span>
                                </div>
                                <div className='it-development-whychoose-points'>
                                    <img src={servicesdoticon} alt='dot' className='icon-gap' />
                                    <span>Attractive Compensation</span>
                                </div>
                                <div className='it-development-whychoose-points'>
                                    <img src={servicesdoticon} alt='dot' className='icon-gap' />
                                    <span>Well-being First</span>
                                </div>
                            </div>
        
                            <div className='col-md-6'>
                                <img src={careerwhychoose} className='whyitdevelopment-whychoose-img' alt='whyitdevelopment-whychoose-img'/>
                            </div>
                        </div>
                    </div>
                </div>


        <div className='container pt-4'>
            <h2 className='it-training-courses-heading text-center'>Open <span className='it-training-courses-heading-two'> Positions</span></h2>
            <Container className="py-4">
                <Row>
                    {positions.map((positions, index) => (
                        <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
                            <Card className="h-100 border-0 rounded-4 px-3 py-4 courses-card">
                                <div className="d-flex justify-content-between px-1 ">
                                    <span className='courses-duration'>
                                        <span style={{ color: '#CA2127' }}>APPLY BEFORE</span><br />{positions.applybefore}</span>
                                    <span className='courses-fee'>
                                        <span style={{ color: '#CA2127' }}>Job type</span><br />{positions.jobtype}</span>
                                </div>
                                <Card.Body className="px-1">
                                    <Card.Title className="courses-title">{positions.title}</Card.Title>
                                    <Card.Text className="mb-3 courses-text">{positions.text}</Card.Text>
                                    <hr className='courses-line'/>
                                    <div className="d-flex align-items-center courses-location mb-3">
                                        <LuMapPin className="me-2 text-danger" />Hyderabad, Telangana, India
                                    </div>
                                    <Link to="/jobapplicationform">
                                    <Button variant="" className="w-75 rounded-3 courses-bookbutton">Apply Now</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="career-futurestarts">
                        <span className="career-futurestarts-text">YOUR <br/>FUTURE STARTS HERE </span>
                        <span className="career-futurestarts-dot">.</span>
                    </h1>
                </div>
                <div className="col-md-4">
                    <img src={careerlkr} className="career-futureimg" alt="career-futureimg"/>
                </div>
            </div>
        </div>

        <div className="container text-center py-5">
            <h2 className="careerourmission-heading">Our <span className="careerourmission-heading-two">Mission</span></h2>
            <p className="careerourmission-body pt-2"> We believe in creating pathways, not promises. With deep industry ties and a sharp eye for <br/>talent, we connect passionate engineers with companies that value potential over pedigree.</p>
        </div>
        
        <div className="container">
            <h2 className="text-center fw-bold mb-4 career-applypositions">Who <span className="career-applypositions-two">Can Apply?</span></h2>
            <div className="row justify-content-center">
                {cards.map((card, idx) => (
                    <div key={idx} className="col-md-6 col-lg-5 mb-4">
                        <div className="card h-100 p-4 career-applypositions-card">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="career-applypositions-year"><span style={{ color: '#CA2127' }}>PASSED OUT YEAR</span><br />{card.passedOutYear}</span>
                                <span className="career-applypositions-year"><span style={{ color: '#CA2127' }}>JOB TYPE</span><br />{card.jobType}</span>
                                <span className="career-applypositions-year"><span style={{ color: '#CA2127' }}>PLACEMENT PACKAGE</span><br />{card.package}</span>
                            </div>
                            <h5 className="career-applypositions-title">{card.title}</h5>
                            <ul className="list-unstyled mt-3 mb-4">
                                {card.perks.map((perk, i) => (
                                    <li key={i} className="mb-2 career-applypositions-perks">{perk}</li>
                                ))}
                            </ul>
                            <hr className='courses-line'/>
                            <div className="d-flex align-items-center mb-3">
                                <LuMapPin className="me-2 text-danger" />
                                <span className="career-applypositions-location">{card.location}</span>
                            </div>
                            <Link to="/contact">
                            <Button variant="" className="w-100 rounded-3 career-applynow">Apply Now</Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>


        <div className="container my-5 text-center">
            <h2 className="mb-5">
                <span className="career-training-heading">Training</span>
                <span className="career-training-heading-two"> & Preparation</span>
            </h2>
            <div className="row justify-content-center">
                {items.map((item, idx) => (
                    <div key={idx} className="col-md-4">
                        <div className="d-flex flex-column align-items-start">
                            <img src={item.image} alt="icon"  className="career-training-img"/>
                        </div>
                        <p className="career-training-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Career;