import React from 'react';
import './Termsandconditions.css';


const Termsandconditions = () => {
    return (
        <>
        <div className="terms-container">
      <h1 className="header-text">
         <span className="terms-text">Terms and Conditions</span>
      </h1>
      {/* <p className="desc1-text">Effective Date: April 9, 2025</p> */}
      <p className="desc-text">
        Welcome to <strong>LKR Technologies.</strong> By using our tenant management application, you agree to these Terms and Conditions. <br></br>The terms "We" / "Us" / "Our" refer to <strong>LKR Technologies Pvt.Ltd</strong>, and "You" / "Your" refer to users.
      </p>

      <div className="section">
        <h3 className="section-title red">Service Agreement</h3>
        <p>Our services include tenant account management, property booking, rent payment processing, complaints, and communication with property owners.</p>
      </div>

      <div className="section">
        <h3 className="section-title red">Account Security</h3>
        <ul>
          <li>Keep your login credentials secure</li>
          <li>Do not share your account with others</li>
          <li>Notify us of any unauthorized access</li>
          <li>We may suspend or terminate accounts for violations</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">Payments</h3>
        <ul>
          <li>Rent and dues must be paid by the due date</li>
          <li>Payment methods: Online payment, UPI, bank transfer</li>
          <li>Late payments may incur additional charges</li>
          <li>Payment confirmations sent via WhatsApp, SMS, and email</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">Cancellation & Move-Out</h3>
        <ul>
          <li>Move-out requests must be submitted through the app</li>
          <li>Notice period as per rental agreement (typically 30 days)</li>
          <li>All dues must be cleared before move-out</li>
          <li>Security deposit refund within few days after move-out</li>
          <li>Deductions may apply for damages or outstanding dues</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">Property Rules</h3>
        <ul>
          <li>Follow all property rules and regulations</li>
          <li>Respect other tenants and property staff</li>
          <li>Not engage in illegal activities</li>
          <li>Register all guests as per property policy</li>
          <li>Violations may result in warnings, fines, or termination</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">Data & Privacy</h3>
        <ul>
          <li>Your information is shared with property owners/managers</li>
          <li>You consent to receive payment alerts via WhatsApp, SMS, and email</li>
          <li>Read our Privacy Policy for details</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">Liability</h3>
        <ul>
          <li>We act as a platform connecting tenants and property owners</li>
          <li>We are not responsible for property conditions or disputes</li>
          <li>You stay at the property at your own risk</li>
          <li>We are not liable for delays due to technical issues or unforeseen circumstances</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">Termination</h3>
        <ul>
          <li>You may delete your account anytime</li>
          <li>We may suspend accounts for violations</li>
          <li>Outstanding dues must be cleared before account deletion</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title red">Contact Us</h3>
        <p><strong>Company Name:</strong> LKR Technologies Pvt.Ltd
          <br/><strong>Email:</strong> <a href="mailto:contactlkrtechnologies@gmail.com">contactlkrtechnologies@gmail.com</a>{" "}
          <br /><strong>Phone:</strong> +91 9100006517
          <br/><strong>Address:</strong> 5TH FLOOR, 5H, Jains Ravi Gayathri Heights, Jubilee Enclave, Madhapur, Hyderabad, Rangareddy, Telangana, 500081
        </p>
        <p>By using our services, you acknowledge that you have read and agree to these Terms and Conditions.</p>
        <p><strong>Last Updated:</strong> 18-10-2025</p>
      </div>
    </div>
        
    </>
    )
}

export default Termsandconditions;