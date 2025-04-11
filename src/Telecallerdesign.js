import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Telecallerdesign.css';
import telecallerimage from './images/telecallerimage.png';
import telecallerimg1 from './images/telecallerimg1.png';
import telecallerimg2 from './images/telecallerimg2.png';
import telecallerimg3 from './images/telecallerimg3.png';
import telecallerimg4 from './images/telecallerimg4.png';
import telecallerimg5 from './images/telecallerimg5.png';


const Telecallerdesign = () => {
    return (
        <>
        <div className="telecaller-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="telecaller-heading">Tele caller Support</h1>
                </div>
            </div>
        </div>

        <div className="container-fluid px-0">
            <div className="row  no-gutters  telecaller-imagebg">
                <div className="col-md-6">
                    <img src={telecallerimage} alt="telecallerimage" className="img-fluid telecallerimage w-100" />
                </div>
                <div className="col-md-6">
                    <h4 className="telecaller-head"> Delivering Conversations That Build Customer Trust</h4>
                    <p className="telecaller-text">
                    With a dedicated telecalling team, LKR 
                    <br/>Technologies helps businesses stay 
                    <br/>connected to customers through friendly, 
                    <br/>clear, and professional voice support-
                    <br/>boosting customer satisfaction and conversions.
                    </p>
                </div>
            </div>
        </div>

        <div className="container pt-4">
            <h2 className="telecaller-whatweoffer-heading">What we Offer</h2>
            <div className="row telecaller-whatweoffer-section">
                <div className="col-md-6">
                    <h5 className="telecaller-whatweoffer-head">Lead Generation & Follow-ups</h5>
                    <p className="telecaller-whatweoffer-body">We handle warm and cold calling to nurture leads, schedule demos, and follow up on inquiries effectively.</p>
                </div>

                <div className="col-md-6">
                    <img src={telecallerimg1} className='telecallerimg1' alt='telecallerimg1' />
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <img src={telecallerimg2} className='telecallerimg2' alt='telecallerimg2'/>
                </div>

                <div className="col-md-6">
                    <h5 className="telecaller-whatweoffer-head-right">Appointment Scheduling</h5>
                    <p className="telecaller-whatweoffer-body-right">Our team books meetings, consultations, and callbacks on your behalf with prompt confirmation and updates.</p>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <h5 className="telecaller-whatweoffer-head">Customer Feedback & Surveys</h5>
                    <p className="telecaller-whatweoffer-body">We collect feedback that helps you improve services and understand your customers better.</p>
                </div>

                <div className="col-md-6">
                    <img src={telecallerimg3} className='telecallerimg3' alt='telecallerimg3' />
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <img src={telecallerimg4} className='telecallerimg4' alt='telecallerimg4'/>
                </div>

                <div className="col-md-6">
                    <h5 className="telecaller-whatweoffer-head-right">Customer Support Services</h5>
                    <p className="telecaller-whatweoffer-body-right">We answer incoming queries, resolve issues, and provide assistance to ensure customer retention.</p>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <h5 className="telecaller-whatweoffer-head">Multilingual Communication</h5>
                    <p className="telecaller-whatweoffer-body">We support regional and international audiences with multilingual telecalling professionals.</p>
                </div>

                <div className="col-md-6">
                    <img src={telecallerimg5} className='telecallerimg5' alt='telecallerimg5' />
                </div>
            </div>
        </div>

        </>
    )
}

export default Telecallerdesign;