import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Webdevelopmentdesign.css';
import webdevelopmentimage from './images/webdevelopmentimage.png';
import webdevelopmentimg1 from './images/webdevelopmentimg1.png';
import webdevelopmentimg2 from './images/webdevelopmentimg2.png';
import webdevelopmentimg3 from './images/webdevelopmentimg3.png';
import webdevelopmentimg4 from './images/webdevelopmentimg4.png';
import webdevelopmentimg5 from './images/webdevelopmentimg5.png';


const Webdevelopmentdesign = () => {
    return (
        <>
        <div className="webdevelopment-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="webdevelopment-heading">Web Development</h1>
                </div>
            </div>
        </div>

        <div className="container-fluid px-0">
            <div className="row  no-gutters  webdevelopment-imagebg">
                <div className="col-md-6">
                    <img src={webdevelopmentimage} alt="webdevelopmentimage" className="img-fluid webdevelopmentimage w-100" />
                </div>
                <div className="col-md-6">
                    <h4 className="webdevelopment-head">Designing Clean, Responsive Websites With Purpose</h4>
                    <p className="webdevelopment-text">
                    We build robust, scalable, and 
                    <br/>performance-driven websites that go 
                    <br/>beyond aesthetics-crafted for 
                    <br/>functionality, speed, and seamless 
                    <br/>integration with your business goals.
                    </p>
                </div>
            </div>
        </div>

        <div className="container pt-4">
            <h2 className="webdevelopment-whatweoffer-heading">What we Offer</h2>
            <div className="row webdevelopment-whatweoffer-section">
                <div className="col-md-6">
                    <h5 className="webdevelopment-whatweoffer-head">Custom-Built Websites</h5>
                    <p className="webdevelopment-whatweoffer-body">We develop websites tailored to your business goals-no templates, just purpose-driven performance.</p>
                </div>

                <div className="col-md-6">
                    <img src={webdevelopmentimg1} className='webdevelopmentimg1' alt='webdevelopmentimg1' />
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <img src={webdevelopmentimg2} className='webdevelopmentimg2' alt='webdevelopmentimg2'/>
                </div>

                <div className="col-md-6">
                    <h5 className="webdevelopment-whatweoffer-head-right">Responsive & Cross-Platform Design</h5>
                    <p className="webdevelopment-whatweoffer-body-right">Optimized for desktops, tablets, and mobile-seamless experience on every screen.</p>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <h5 className="webdevelopment-whatweoffer-head"> E-Commerce Development</h5>
                    <p className="webdevelopment-whatweoffer-body">Secure, scalable e-commerce platforms with streamlined product, payment, and shipping systems.</p>
                </div>

                <div className="col-md-6">
                    <img src={webdevelopmentimg3} className='webdevelopmentimg3' alt='webdevelopmentimg3' />
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <img src={webdevelopmentimg4} className='webdevelopmentimg4' alt='webdevelopmentimg4'/>
                </div>

                <div className="col-md-6">
                    <h5 className="webdevelopment-whatweoffer-head-right">Performance Optimization</h5>
                    <p className="webdevelopment-whatweoffer-body-right">We test designs with real users to uncover pain points, optimize interactions, and refine the experience based on data-not assumptions.</p>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <h5 className="webdevelopment-whatweoffer-head">CMS Integration</h5>
                    <p className="webdevelopment-whatweoffer-body">We implement WordPress, Webflow, or custom CMS solutions so you can update content without writing code.</p>
                </div>

                <div className="col-md-6">
                    <img src={webdevelopmentimg5} className='webdevelopmentimg5' alt='webdevelopmentimg5' />
                </div>
            </div>
        </div>

        </>
    )
}

export default Webdevelopmentdesign;