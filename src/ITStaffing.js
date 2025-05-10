import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ITStaffing.css';
import whyitstaffing from './images/whyitstaffing.png';
import servicesdoticon from './images/servicesdoticon.png';

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

        <div></div>






























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
        </>
    )
}

export default ITStaffing;