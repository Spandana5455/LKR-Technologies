import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Career.css';
import careerbg from './images/careerbg.png';

const Career = () => {
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
        </>
    )
}

export default Career;