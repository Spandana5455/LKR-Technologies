import React from "react";
import successicon from './images/successicon.png';
import "./Jobappsuccess.css";

const JobAppSuccess = () => {
    return (
        <div className="sucess-container">
            <h3>Your Job Application Was Submitted Successfully</h3>
            <img className="sucess" src={successicon} alt="success-icon" />
        </div>
    );
};

export default JobAppSuccess;
