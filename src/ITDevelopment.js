import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
import './ITDevelopment.css';
import Ourservices from './Ourservices';
import whyitdevelopment from './images/whyitdevelopment.png';
import servicesdoticon from './images/servicesdoticon.png';
import lebestowp1 from './images/lebestowp1.png';
import suitsp2 from './images/suitsp2.png';
import leairap3 from './images/leairap3.png';
import importexportp4 from './images/importexportp4.png';

const projects = [
  {
    title: "Le Bestow Co Living",
    image: lebestowp1,
  },
  {
    title: "The Suits and Salon",
    image: suitsp2,
  },
  {
    title: "Leaira Events",
    image: leairap3,
  },
  {
    title: "Imports and Exports",
    image: importexportp4,
  }
];


const ITDevelopment = () => {
    return (
        <>
        <div className='it-development-section'>
            <div className='container'>
                <h1 className='it-development-heading'>Transform Your <br/>Ideas into Impactful <br/>IT Solutions</h1>
                <p className='it-development-body'>We design and develop scalable digital solutions <br/>tailored to your business needs.</p>
            </div>
        </div>

        <Ourservices />
        <div className='pt-4'>
            <h2 className='it-development-whychoose-heading'>Why <span className='it-development-whychoose-heading-two'>Choose Us</span></h2>
            <div className='container'>
                <div className='row pt-4'>
                    <div className='col-md-6'>
                        <div className='it-development-whychoose-pointstart'>
                            <img src={servicesdoticon} alt='dot' className='icon-gap' />
                            <span>Agile Methods for Speed & Flexibility</span>
                        </div>
                        <div className='it-development-whychoose-points'>
                            <img src={servicesdoticon} alt='dot' className='icon-gap' />
                            <span>Latest Tech Stacks & Best Practices</span>
                        </div>
                        <div className='it-development-whychoose-points'>
                            <img src={servicesdoticon} alt='dot' className='icon-gap' />
                            <span>Transparent Communication Every Step of the Way</span>
                        </div>
                        <div className='it-development-whychoose-points'>
                            <img src={servicesdoticon} alt='dot' className='icon-gap' />
                            <span>Innovative and Effective IT Solutions</span>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <img src={whyitdevelopment} className='whyitdevelopment-whychoose-img' alt='whyitdevelopment-whychoose-img'/>
                    </div>
                </div>
            </div>
        </div>

        <div className='pt-4'>
            <h2 className='text-center it-development-projects-heading'>Our <span className='it-development-projects-heading-two'>Projects</span></h2>
            <div className='container'>
                <div className='row'>
                    {projects.map((project, index) => (
                        <div key={index} className='col-6 col-md-3 mb-4 text-center'>
                            <img src={project.image} className='img-fluid it-development-projects-img' alt={project.title} />
                            <h6 className='it-development-projects-title'>{project.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className='letsbuild-section '>
        <div className='container text-center'>
            <h2 className='letsbuild-heading'>Let's <span className='letsbuild-heading-two'>Build Together</span></h2>
            <p className='letsbuild-body'>Share your idea-we'll bring it to life.</p>
            <Link to="/contact">
            <button className='letsbuild-button'>Contact Us</button>
            </Link>
        </div>
        </div>

        </>
    )
}

export default ITDevelopment;