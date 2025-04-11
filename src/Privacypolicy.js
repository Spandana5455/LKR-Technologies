import React from 'react';
import './Privacypolicy.css';

const Privaypolicy = () => {
    return (
        <>
        <div className="policy-container">
      <h1 className="header-text">
        LKR Technology <span className="privacy-text">Privacy Policy</span>
      </h1>
      <p className="desc-text">Effective Date: April 9, 2025</p>

      <p className="lkr-text">
        At LKR Technologies, your privacy is our priority. This Privacy Policy
        explains how we collect, use, and <br />
        protect your personal information when you interact with our website,
        services, and digital platforms.
      </p>

      <div className="section">
        <h3 className="section-title red">Information We Collect</h3>
        <p>We may collect:</p>
        <ul>
          <li>
            <b>Personal Information:</b> Name, Email, Phone Number, Location,
            Job Role, Company Details (e.g., through forms or job applications)
          </li>
          <li>
            <b>Technical Data:</b> IP Address, Browser Type, OS, Device Info
          </li>
          <li>
            <b>Usage Data:</b> Site Interactions, Click Patterns, Session
            Duration
          </li>
          <li>
            <b>Cookies:</b> To Personalize Content, Analyze Traffic, And Enhance
            UX
          </li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">How We Use Your Information We</h3>
        <p>Use your data to:</p>
        <ul>
          <li>Deliver and improve our services</li>
          <li>Respond to inquiries or job applications</li>
          <li>Personalize the user experience</li>
          <li>
            Send updates, promotions, and service-related communications
          </li>
          <li>Maintain website functionality and security</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">Data Sharing And Disclosure</h3>
        <p>
          We do not sell your personal data. We may share information:
        </p>
        <ul>
          <li>With internal teams (HR, Sales, Development)</li>
          <li>With service providers under strict confidentiality</li>
          <li>When legally required (e.g., government or legal orders)</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">Your Rights</h3>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access or correct your personal data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications</li>
          <li>Restrict certain data uses</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">Data Security</h3>
        <p>
          We implement technical and organizational safeguards to protect<br></br> your
          data from unauthorized access, loss, or misuse.
        </p>
      </div>
      <div className="final-section">
  <h3 className="section-title red">Children's Privacy</h3>
  <p>
    Our Services Are Not Directed At Children Under 13. <br />
    We Do Not Knowingly Collect Data From Minors.
  </p>

  <h3 className="section-title red">Policy Updates</h3>
  <p className="link-text">
    We May Update This Policy Periodically. Changes Will <br></br>Be Posted Here With A Revised Effective Date.
  </p>

  <h3 className="section-title red">Contact Us</h3>
  <p>For Privacy Concerns Or Data Requests:</p>
  <ul>
    <li><b>Email:</b> Contactlkrtechnologies@gmail.com</li>
    <li><b>Phone:</b> +91 9100006517</li>
  </ul>

  <div className="agree-btn-container">
    <button className="agree-btn">Agree</button>
  </div>
</div>

    </div>
        </>
    )
}

export default Privaypolicy;