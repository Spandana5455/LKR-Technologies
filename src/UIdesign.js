import React from 'react';
import uxDesign2 from './images/uxDesign2.png';
import ux1 from './images/ux1.png';
import ux2 from './images/ux2.png';
import ux3 from './images/ux3.png';
import ux4 from './images/ux4.png';
import ux5 from './images/ux5.png';
import './UIdesign.css';


const UIdesign = () => {
    return (
        <>
        <div className="uidesign-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="uidesign-heading">UI UX design</h1>
                </div>
            </div>
        </div>

        <div className="container-fluid px-0">
            <div className="row  no-gutters  uidesign-imagebg">
                <div className="col-md-6">
                    <img src={uxDesign2} alt="uidesignimage" className="img-fluid uidesignimage w-100" />
                </div>
                <div className="col-md-6">
                    <h4 className="uidesign-head">Designing Digital Experiences That Feel Natural</h4>
                    <p className="uidesign-text">
                    At LKR Technologies, we create intuitive, 
                    <br/>aesthetically pleasing interfaces that 
                    <br/>elevate user satisfaction. Our human-
                    <br/>centered design approach ensures your 
                    <br/>users don't just use your product-they 
                    <br/>enjoy the journey.
                    </p>
                </div>
            </div>
        </div>

        <div className="container pt-4">
            <h2 className="uidesign-whatweoffer-heading">What we Offer</h2>
            <div className="row uidesign-whatweoffer-section">
                <div className="col-md-6">
                    <h5 className="uidesign-whatweoffer-head">UX Research & Strategy</h5>
                    <p className="uidesign-whatweoffer-body">We begin with deep user insights, competitive analysis, and stakeholder interviews to define a user-first design strategy that aligns with your business goals.</p>
                </div>

                <div className="col-md-6">
                    <img src={ux1} className='ux1' alt='ux1' />
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <img src={ux2} className='ux2' alt='ux2'/>
                </div>

                <div className="col-md-6">
                    <h5 className="uidesign-whatweoffer-head-right">Wireframes & Prototypes</h5>
                    <p className="uidesign-whatweoffer-body-right">From low-fidelity sketches to interactive prototypes, we visualize the flow and layout of your product-reducing development rework and validating ideas early.</p>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <h5 className="uidesign-whatweoffer-head">Visual interface Design</h5>
                    <p className="uidesign-whatweoffer-body">We craft pixel-perfect, modern, and brand-aligned visuals that elevate your digital identity while maintaining consistency, clarity, and accessibility.</p>
                </div>

                <div className="col-md-6">
                    <img src={ux3} className='ux3' alt='ux3' />
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <img src={ux4} className='ux4' alt='ux4'/>
                </div>

                <div className="col-md-6">
                    <h5 className="uidesign-whatweoffer-head-right">Usability Testing</h5>
                    <p className="uidesign-whatweoffer-body-right">We test designs with real users to uncover pain points, optimize interactions, and refine the experience based on data-not assumptions.</p>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <h5 className="uidesign-whatweoffer-head">Mobile & Web UI Design</h5>
                    <p className="uidesign-whatweoffer-body">Whether it's a mobile app or a web platform, we ensure your interface adapts seamlessly across devices and delivers a smooth, responsive experience.</p>
                </div>

                <div className="col-md-6">
                    <img src={ux5} className='ux5' alt='ux5' />
                </div>
            </div>
        </div>

        </>
    )
}

export default UIdesign;