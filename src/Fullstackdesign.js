import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fullstackdesign.css';
import fullstackimage from './images/fullstackimage.png';
import fullstackimg1 from './images/fullstackimg1.png';
import fullstackimg2 from './images/fullstackimg2.png';
import fullstackimg3 from './images/fullstackimg3.png';
import fullstackimg4 from './images/fullstackimg4.png'; 
import fullstackimg5 from './images/fullstackimg5.png';


const Fullstackdesign = () => {
    return (
        <>
        <div className="full-stack-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="full-stack-heading">Full-Stack Development</h1>
                </div>
            </div>
        </div>

        <div className="container-fluid px-0">
            <div className="row  no-gutters  fullstack-imagebg">
                <div className="col-md-6">
                    <img src={fullstackimage} alt="fullstackimage" className="img-fluid fullstackimage w-100" />
                </div>
                <div className="col-md-6">
                    <h4 className="fullstack-head"> Building Scalable Systems That Power Business Growth</h4>
                    <p className="fullstack-text">
                        At LKR Technologies, our full-stack 
                        <br/>development team builds robust, scalable, 
                        <br/>and high-performance applications that 
                        <br/>drive business results — from Front-End 
                        <br/>brilliance to back-end power.
                    </p>
                </div>
            </div>
        </div>

        <div className="container pt-4">
            <h2 className="fullstack-whatweoffer-heading">What we Offer</h2>
            <div className="row fullstack-whatweoffer-section">
                <div className="col-md-6">
                    <h5 className="fullstack-whatweoffer-head">Frontend Development</h5>
                    <p className="fullstack-whatweoffer-body">We build responsive, dynamic interfaces using React, Angular, and Vue.js-designed to deliver fast, engaging, and accessible user experiences.</p>
                </div>

                <div className="col-md-6">
                    <img src={fullstackimg1} className='fullstackimg1' alt='fullstackimg1' />
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <img src={fullstackimg2} className='fullstackimg2' alt='fullstackimg2'/>
                </div>

                <div className="col-md-6">
                    <h5 className="fullstack-whatweoffer-head-right">Backend Development</h5>
                    <p className="fullstack-whatweoffer-body-right">Our backend systems are built with Node.js, Python, Laravel, and more-offering security, scalability, and seamless integration with your workflows.</p>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <h5 className="fullstack-whatweoffer-head">API Integration & Microservices</h5>
                    <p className="fullstack-whatweoffer-body">We develop modular, maintainable architectures through REST APIs and microservices-enabling fast deployment and better scalability.</p>
                </div>

                <div className="col-md-6">
                    <img src={fullstackimg3} className='fullstackimg3' alt='fullstackimg3' />
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <img src={fullstackimg4} className='fullstackimg4' alt='fullstackimg4'/>
                </div>

                <div className="col-md-6">
                    <h5 className="fullstack-whatweoffer-head-right">Database Architecture</h5>
                    <p className="fullstack-whatweoffer-body-right">Our experts design and manage structured and unstructured databases like MongoDB, MySQL, and PostgreSQL for optimized data access and storage.</p>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <h5 className="fullstack-whatweoffer-head">Deployment & Support</h5>
                    <p className="fullstack-whatweoffer-body">We ensure secure, efficient cloud deployment with ongoing maintenance and performance optimization for uninterrupted service.</p>
                </div>

                <div className="col-md-6">
                    <img src={fullstackimg5} className='fullstackimg5' alt='fullstackimg5' />
                </div>
            </div>
        </div>

        </>
    )
}

export default Fullstackdesign;