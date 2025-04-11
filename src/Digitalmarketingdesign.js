import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Digitalmarketingdesign.css';
import digitalmarketingimage from './images/digitalmarketingimage.png';
import digitalmarketingimg1 from './images/digitalmarketingimg1.png';
import digitalmarketingimg2 from './images/digitalmarketingimg2.png';
import digitalmarketingimg3 from './images/digitalmarketingimg3.png';
import digitalmarketingimg4 from './images/digitalmarketingimg4.png';
import digitalmarketingimg5 from './images/digitalmarketingimg5.png';


const Digitalmarketingdesign = () => {
    return (
        <>
        <div className="digital-marketing-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="digital-marketing-heading">Digital marketing</h1>
                </div>
            </div>
        </div>

        <div className="container-fluid px-0">
            <div className="row  no-gutters  digital-marketing-imagebg">
                <div className="col-md-6">
                    <img src={digitalmarketingimage} alt="digital-marketingimage" className="img-fluid digital-marketingimage w-100" />
                </div>
                <div className="col-md-6">
                    <h4 className="digital-marketing-head">Crafting Campaigns That Connect, Convert, and Grow</h4>
                    <p className="digital-marketing-text">
                    Our marketing team at LKR Technologies 
                    <br/>helps you build a strong, measurable digital 
                    <br/>presence that drives real business growth
                    <br/>-with strategies tailored to your brand's 
                    <br/>voice and goals.
                    </p>
                </div>
            </div>
        </div>

        <div className="container pt-4">
            <h2 className="digital-marketing-whatweoffer-heading">What we Offer</h2>
            <div className="row digital-marketing-whatweoffer-section">
                <div className="col-md-6">
                    <h5 className="digital-marketing-whatweoffer-head"> SEO & SEM</h5>
                    <p className="digital-marketing-whatweoffer-body">We optimize your content and website for search engines while running smart paid campaigns to boost traffic and conversions.</p>
                </div>

                <div className="col-md-6">
                    <img src={digitalmarketingimg1} className='digital-marketingimg1' alt='digital-marketingimg1' />
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <img src={digitalmarketingimg2} className='digital-marketingimg2' alt='digital-marketingimg2'/>
                </div>

                <div className="col-md-6">
                    <h5 className="digital-marketing-whatweoffer-head-right">Social Media Management</h5>
                    <p className="digital-marketing-whatweoffer-body-right">We manage your online community with branded content, campaigns, and real-time engagement that builds trust and visibility.</p>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <h5 className="digital-marketing-whatweoffer-head"> Google & Meta Ads</h5>
                    <p className="digital-marketing-whatweoffer-body">Our certified experts create and manage high-performing ad campaigns across Google, Facebook, Instagram, and YouTube.</p>
                </div>

                <div className="col-md-6">
                    <img src={digitalmarketingimg3} className='digital-marketingimg3' alt='digital-marketingimg3' />
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <img src={digitalmarketingimg4} className='digital-marketingimg4' alt='digital-marketingimg4'/>
                </div>

                <div className="col-md-6">
                    <h5 className="digital-marketing-whatweoffer-head-right"> Content Creation</h5>
                    <p className="digital-marketing-whatweoffer-body-right">We craft compelling content — blogs, videos, visuals — that informs, engages, and converts your audience.</p>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <h5 className="digital-marketing-whatweoffer-head">Email Marketing & Automation</h5>
                    <p className="digital-marketing-whatweoffer-body">From drip campaigns to newsletters, we help you stay top of mind with smart email workflows.</p>
                </div>

                <div className="col-md-6">
                    <img src={digitalmarketingimg5} className='digital-marketingimg5' alt='digital-marketingimg5' />
                </div>
            </div>
        </div>

        </>
    )
}

export default Digitalmarketingdesign;