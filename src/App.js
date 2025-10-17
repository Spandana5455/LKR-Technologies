import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./Navbar";
import Home from "./Home";
import Contactus from "./Contactus";
import Ourprojects from "./Ourprojects";
import Jobapplicationform from "./Jobapplicationform";
import Footer from "./Footer";
import Faqs from "./Faqs";
import Ourservices from "./Ourservices";
import Clients from "./Clients";
import Whychooseus from "./Whychooseus";
import Lkrstory from "./Lkrstory";
import UIdesign from "./UIdesign";
import Fullstackdesign from "./Fullstackdesign";
import Digitalmarketingdesign from "./Digitalmarketingdesign";
import Telecallerdesign from "./Telecallerdesign";
import Webdevelopmentdesign from "./Webdevelopmentdesign";
import Gamedeveloperdesign from "./Gamedeveloperdesign";
import Privacypolicy from "./Privacypolicy";
import Termsandconditions from "./Termsandconditions";
import Datadeletion from "./Datadeletion";
import JobAppSuccess from "./Jobappsuccess";
import ScrollTop from "./scrollTop";
import ITtraining from "./ITtraining"; 
import ITDevelopment from "./ITDevelopment";
import ITStaffing from "./ITStaffing";
import Career from "./Career";
import Bookademo from "./Bookademo";
import Whatsapp from "./Whatsapp"; 

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <ScrollTop />

        {/* Floating WhatsApp Button */}
        <Whatsapp />

        <Container className="my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/services" element={<Ourservices />} />
            <Route path="/ittraining" element={<ITtraining />} />
            <Route path="/itdevelopment" element={<ITDevelopment />} />
            <Route path="/itstaffing" element={<ITStaffing />} />
            <Route path="/career" element={<Career />} />
            <Route path="/jobapplicationform" element={<Jobapplicationform />} />
            <Route path="/ourprojects" element={<Ourprojects />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/whychooseus" element={<Whychooseus />} />
            <Route path="/lkrstory" element={<Lkrstory />} />
            <Route path="/uiux-designer" element={<UIdesign />} />
            <Route path="/full-stack" element={<Fullstackdesign />} />
            <Route path="/digital-marketing" element={<Digitalmarketingdesign />} />
            <Route path="/tele-caller" element={<Telecallerdesign />} />
            <Route path="/web-development" element={<Webdevelopmentdesign />} />
            <Route path="/game-developer" element={<Gamedeveloperdesign />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} />
            <Route path="/terms-conditions" element={<Termsandconditions />} />
            <Route path="/data-deletion" element={<Datadeletion />} />
            <Route path="/jobappsuccess" element={<JobAppSuccess />} />
            <Route path="/bookademo" element={<Bookademo />} />

            {/* 404 fallback route */}
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </Router>
  );
};

export default App;



