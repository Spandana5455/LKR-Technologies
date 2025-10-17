import React from 'react';
import './Privacypolicy.css';

const Privaypolicy = () => {
    return (
        <>
        <div className="policy-container">
      <h1 className="header-text">
         <span className="privacy-text">Privacy Policy</span>
      </h1>
      {/* <p className="desc-text">Effective Date: April 9, 2025</p> */}

      <p className="lkr-text">
        Welcome to <strong>LKR Technologies</strong>. This Privacy Policy explains how we collect, use, and protect your personal information when you use our tenant management application and services.
      </p>
      <p className="lkr-text">The terms "We" / "Us" / "Our" refer to <strong>LKR Technologies Pvt.Ltd</strong>, and "You" / "Your" refer to users.
      <br></br>By using our services, you agree to this Privacy Policy. If you do not agree, please do not use our services.</p>

      <div className="section">
        <h3 className="section-title red">Information We Collect</h3>
        <p>We collect the following information to provide our tenant management services:</p>
        <ul>
          <li><strong>Name and contact information</strong> (phone number, email address)</li>
          <li><strong>Profile details</strong> (gender, date of birth, profile picture)</li>
          <li><strong>Address information</strong> (permanent address, city, state, PIN code)</li>
          <li><strong>Family information</strong> (parent names and phone numbers for emergency contact)</li>
          <li><strong>Identity documents</strong> (Aadhaar, PAN, Driving License, Passport)</li>
          <li><strong>Bank account details</strong> (for security deposit refunds)</li>
          <li><strong>Payment information</strong> (rent, dues, transaction history)</li>
          <li><strong>Property details</strong> (property name, unit number, rent amount, deposit)</li>
          <li><strong>Tenancy information</strong> (lease dates, roommate details)</li>
          <li><strong>Service usage</strong> (complaints, support tickets, app usage)</li>
          <li><strong>Technical information</strong> (device type, IP address, login history)</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">How We Use Your Information </h3>
        <p>Your information is used to:</p>
        <ul>
          <li><strong>Provide tenant services</strong> - Account management, property booking, check-in process</li>
          <li><strong>Process payments</strong> - Rent collection, dues management, refunds</li>
          <li><strong>Verify identity</strong>- Background checks, police verification, KYC compliance</li>
          <li><strong>Communicate with you</strong> - Service updates, payment reminders, important notifications</li>
          <li><strong>Share with property owners</strong>- Your property owner/manager receives your information for tenancy management and compliance</li>
          <li><strong>Improve our services</strong>- Analyze usage patterns and enhance user experience</li>
          <li><strong>Comply with legal requirements</strong> - GST compliance, business records, regulatory obligations</li>
          <li><strong>Ensure security</strong>- Fraud prevention, account security</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">Communication with You</h3>
        <p>
          We send you payment-related notifications through:
        </p>
        <ul>
          <li><strong>WhatsApp</strong> - For quick payment alerts</li>
          <li><strong>SMS</strong> - For payment notifications</li>
          <li><strong>Email</strong> - For payment receipts and details</li>
          <li><strong>In-app notifications</strong> - For real-time payment updates</li>
        </ul>

        <h3 className="section-title red">Payment Alerts (Can be opted out)</h3>
        <p>By using our services, you consent to receive:</p>
        <ul>
          <li><strong>By using our services, you consent to receive:</strong>- Alerts before rent/payment due dates</li>
          <li><strong>Payment confirmations</strong>- Confirmation when payment is received</li>
          <li><strong>Receipt notifications</strong>- Payment receipts and transaction details</li>
        </ul>
        <p>These messages are essential for service delivery and can be opted out.</p>
        <p>For any questions about communications, contact our support team at [contactlkrtechnologies@gmail.com]</p>
      </div>

      <div className="section">
        <h3 className="section-title red">Information Sharing</h3>
        <p>With Property Owners/Managers</p>
        <p><strong>Important</strong>: If you are staying in a LKR Technologies managed property, your complete information (including personal details, documents, and photos) is shared with your property owner/manager for:</p>
        <ul>
          <li>Tenancy management and verification</li>
          <li>Legal compliance and security</li>
          <li>Emergency contact purposes</li>
          <li>Service delivery and maintenance</li>
        </ul>
        <p>You can view your property owner's details in the "Profile" section of the app.</p>
        <p>With Third Parties</p>
        <p>We <strong>do not sell</strong> your personal information. We share information only with:</p>
        <ul>
          <li><strong>Service providers</strong>- Payment gateways, cloud storage, messaging services</li>
          <li><strong>Business compliance</strong>- GST, tax filings, business records</li>
        </ul>
        <p>All service providers are contractually bound to protect your data.</p>
      </div>

      <div className="section">
        <h3 className="section-title red">Data Security</h3>
        <p>
          We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
        </p>
      </div>
      <div className="final-section">
  <h3 className="section-title red">Your Rights</h3>
  <p>
    You have the right to:
  </p>
  <h5><strong>Access & Correction</strong></h5>
  <ul>
    <li>View your profile information in the app</li>
    <li>Update your personal details anytime</li>
    <li>Request a copy of your data</li>
  </ul>

  <h5><strong>Data Deletion</strong></h5>
  <p>To delete your data from our records:</p>
  <p><strong>Option 1:</strong> In-App Request - Go to Profile → Settings → Delete Account - Follow the on-screen instructions
    <br></br><strong>Option 2:</strong> Email Request - Send email to [contactlkrtechnologies@gmail.com] - Subject: "Data Deletion Request" - Include: Your name, phone number, and tenant ID
  </p>
  <p><strong>Note:</strong> Some information may be retained for legal compliance (GST, business records, tax filings).</p>

  <h5><strong>Withdraw Consent</strong></h5>
  <ul>
    <li>Delete your account to withdraw consent</li>
    <li>Contact support team at [contactlkrtechnologies@gmail.com] for assistance</li>
  </ul>

  <h3 className="section-title red">Contact Us</h3>
  <p>For privacy-related questions, data deletion requests, or other concerns:</p>
  <ul>
    <li><strong>Company Name:</strong> LKR Technologies Pvt.Ltd</li>
    <li><strong>Brand Name:</strong>LKR Technologies Pvt.Ltd</li>
    <li><strong>Website URL:</strong><a href='https://lkrtechnologies.com/'  target="_blank" rel="noopener noreferrer">https://lkrtechnologies.com/</a></li>
    <li><strong>Email:</strong> <a href="mailto:contactlkrtechnologies@gmail.com">contactlkrtechnologies@gmail.com</a>{" "}</li>
    <li><strong>Phone:</strong> +91 9100006517</li>
    <li><strong>Registered Office:</strong> 4th Floor, Plot No: 25, 2, 4 And 5, Arunodaya Colony, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081</li>
    <li><strong>Support Hours:</strong> 10AM - 6PM </li>
  </ul>

  <h3 className="section-title red">Data Deletion Request Form</h3>
  <p>If you wish to delete your data, please provide the following information:</p>
  <p><strong>Submit via email to:</strong>  <a href="mailto:contactlkrtechnologies@gmail.com">contactlkrtechnologies@gmail.com</a>{" "}</p>
  <p><strong>Required Information:</strong>-Full Name, Phone Number, Email Address,Tenant ID (if known),Reason for deletion (optional).</p>
  <p><strong>Note:</strong> Some information may be retained for legal compliance (GST records, tax filings, rental agreements).</p>
</div>

    </div>
        </>
    )
}

export default Privaypolicy;