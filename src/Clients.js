import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Clients.css';
import leaira from './images/leaira.png';
import lebestow from './images/lebestow.png';
import suits from './images/suits.png';
import mindclues from './images/mindclues.png';


const Clients = () => {
    return (
        <>
        <div className="clients-section">
            <div className="container text-center">
                <h2 className="our-clients-heading">Our <span className="ourclient-heading">Clients</span></h2>
                <div className="row">
                    <div className="col-6 col-sm-3 col-md-3">
                        <img src={leaira} className="leaira-image" alt="leaira-image"/>
                    </div>
                    <div className="col-6 col-sm-3 col-md-3">
                        <img src={lebestow} className="lebestow-image" alt="lebestow-image"/>
                    </div>
                    <div className="col-6 col-sm-3 col-md-3">
                        <img src={suits} className="suits-image" alt="suits-image"/>
                    </div>
                    <div className="col-6 col-sm-3 col-md-3">
                        <img src={mindclues} className="mindclues-image" alt="mindclues-image"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Clients;