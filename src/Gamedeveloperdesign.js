import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gamedeveloperdesign.css';
import gamedeveloperimage from './images/gamedeveloperimage.png';
import gamedeveloperimg1 from './images/gamedeveloperimg1.png';
import gamedeveloperimg2 from './images/gamedeveloperimg2.png';
import gamedeveloperimg3 from './images/gamedeveloperimg3.png';
import gamedeveloperimg4 from './images/gamedeveloperimg4.png';
import gamedeveloperimg5 from './images/gamedeveloperimg5.png';


const Gamedeveloperdesign = () => {
    return (
        <>
        <div className="gamedeveloper-section">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "100vh" }}>
                    <h1 className="gamedeveloper-heading">Game development</h1>
                </div>
            </div>
        </div>

        <div className="container-fluid px-0">
            <div className="row  no-gutters  gamedeveloper-imagebg">
                <div className="col-md-6">
                    <img src={gamedeveloperimage} alt="gamedeveloperimage" className="img-fluid gamedeveloperimage w-100" />
                </div>
                <div className="col-md-6">
                    <h4 className="gamedeveloper-head">Creating Interactive Worlds That Engage and Entertain</h4>
                    <p className="gamedeveloper-text">
                    Whether you're creating an entertaining 
                    <br/>casual game or a competitive multiplayer 
                    <br/>experience, our game development 
                    <br/>services bring imagination to life with 
                    <br/>seamless performance and eye-catching 
                    <br/>visuals.
                    </p>
                </div>
            </div>
        </div>

        <div className="container pt-4">
            <h2 className="gamedeveloper-whatweoffer-heading">What we Offer</h2>
            <div className="row gamedeveloper-whatweoffer-section">
                <div className="col-md-6">
                    <h5 className="gamedeveloper-whatweoffer-head">Mobile Game Development</h5>
                    <p className="gamedeveloper-whatweoffer-body">We build engaging, optimized games for iOS and Android-from concept to launch.</p>
                </div>

                <div className="col-md-6">
                    <img src={gamedeveloperimg1} className='gamedeveloperimg1' alt='gamedeveloperimg1' />
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <img src={gamedeveloperimg2} className='gamedeveloperimg2' alt='gamedeveloperimg2'/>
                </div>

                <div className="col-md-6">
                    <h5 className="gamedeveloper-whatweoffer-head-right">2D/3D Game Design</h5>
                    <p className="gamedeveloper-whatweoffer-body-right">Our designers create visually compelling environments, characters, and assets that enhance the overall experience.</p>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <h5 className="gamedeveloper-whatweoffer-head">Multiplayer Functionality</h5>
                    <p className="gamedeveloper-whatweoffer-body">We integrate real-time multiplayer features, chat, and leaderboards to keep players connected and competitive.</p>
                </div>

                <div className="col-md-6">
                    <img src={gamedeveloperimg3} className='gamedeveloperimg3' alt='gamedeveloperimg3' />
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <img src={gamedeveloperimg4} className='gamedeveloperimg4' alt='gamedeveloperimg4'/>
                </div>

                <div className="col-md-6">
                    <h5 className="gamedeveloper-whatweoffer-head-right">Game Logic & Mechanics</h5>
                    <p className="gamedeveloper-whatweoffer-body-right">We craft intuitive and challenging gameplay using smooth controls, scoring systems, and reward loops.</p>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-md-6">
                    <h5 className="gamedeveloper-whatweoffer-head">Monetization Strategies</h5>
                    <p className="gamedeveloper-whatweoffer-body">We help integrate ads, in-app purchases, and subscriptions to generate revenue from your game seamlessly.</p>
                </div>

                <div className="col-md-6">
                    <img src={gamedeveloperimg5} className='gamedeveloperimg5' alt='gamedeveloperimg5' />
                </div>
            </div>
        </div>

        </>
    )
}

export default Gamedeveloperdesign;