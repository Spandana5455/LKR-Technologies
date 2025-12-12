import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Datadeletion: React.FC = () => {
    return (
        <>
            <div className="data-deletion-page" style={{ paddingTop: '10px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
                <Container className="py-5">
                    <Row className="justify-content-center">
                        <Col lg={10} xl={9}>
                            {/* Header */}
                            <div className="text-center mb-5">
                                <div className="mb-4">
                                    <span className="badge bg-danger fs-6 px-4 py-2">Account Deletion Request</span>
                                </div>
                                <h1 className="display-5 fw-bold text-dark mb-3">Jipstay (Manager & Tenant)</h1>
                                <p className="text-muted lead">Request permanent deletion of your account and personal data</p>
                            </div>

                            {/* App Info Card */}
                            <div className="card bg-primary bg-opacity-10 border-primary mb-5">
                                <div className="card-body">
                                    <div className="row text-center justify-content-center">
                                        <div className="col-md-5 mb-3 mb-md-0">
                                            <h6 className="text-muted small mb-1">App Name</h6>
                                            <p className="fw-bold mb-0 fs-5">Jipstay (Manager & Tenant)</p>
                                        </div>
                                        <div className="col-md-5 mb-3 mb-md-0">
                                            <h6 className="text-muted small mb-1">Developer</h6>
                                            <p className="fw-bold mb-0 fs-5">LakshmiKanth (LKR Technologies Pvt.Ltd)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="bg-white rounded-4 shadow-lg p-4 p-md-5">

                                {/* How to Request */}
                                <section className="mb-5">
                                    <h2 className="h3 fw-bold text-dark mb-4 pb-2 border-bottom border-danger" style={{ borderBottomWidth: '3px' }}>
                                        <span className="me-2">📝</span> How to Request Account Deletion
                                    </h2>
                                    <p>If you wish to delete your account and associated data, please submit a request using one of the following methods:</p>

                                    <div className="row g-4 mt-3">
                                        {/* Email Method */}
                                        <div className="col-md-6">
                                            <div className="card h-100 border-success">
                                                <div className="card-header bg-success text-white">
                                                    <h5 className="mb-0">📧 1. Email (Preferred Method)</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p className="mb-2">Send an email to:</p>
                                                    <p className="fw-bold fs-5 text-primary mb-3">
                                                        <a href="mailto:contactlkrtechnologies@gmail.com">contactlkrtechnologies@gmail.com</a>
                                                    </p>
                                                    <div className="bg-light p-3 rounded">
                                                        <p className="mb-1"><strong>Subject:</strong></p>
                                                        <p className="font-monospace small mb-2">Account Deletion Request - Jipstay Tenant</p>
                                                        <p className="mb-0"><strong>Include:</strong> The registered mobile number or email used in the app.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* WhatsApp Method */}
                                        <div className="col-md-6">
                                            <div className="card h-100 border-warning">
                                                <div className="card-header bg-warning text-white">
                                                    <h5 className="mb-0">📱 2. WhatsApp Support</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p className="mb-2">Message us at:</p>
                                                    <p className="fw-bold fs-5 text-success mb-3">
                                                        <a href="https://wa.me/919912155551" target="_blank" rel="noopener noreferrer">+91 9912155551</a>
                                                    </p>
                                                    <div className="bg-light p-3 rounded">
                                                        <p className="mb-1"><strong>Start your message with:</strong></p>
                                                        <p className="font-monospace small mb-0">Account Deletion Request - Jipstay Tenant</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="alert alert-info mt-4" role="alert">
                                        <span className="me-2">⏱️</span>
                                        <strong>We will acknowledge your request within 48 hours.</strong>
                                    </div>
                                </section>

                                {/* Identity Verification */}
                                <section className="mb-5">
                                    <h2 className="h3 fw-bold text-dark mb-4 pb-2 border-bottom border-warning" style={{ borderBottomWidth: '3px' }}>
                                        <span className="me-2">🔐</span> Identity Verification
                                    </h2>
                                    <p>To protect your privacy and ensure the request is legitimate, we may ask for one or more of the following for verification:</p>

                                    <div className="row g-2 mt-3">
                                        {[
                                            { icon: '📱', text: 'Registered mobile number' },
                                            { icon: '📧', text: 'Registered email address' },
                                            { icon: '🆔', text: 'User ID (if available)' },
                                            { icon: '📋', text: 'Partial Aadhaar or PAN details (never the full number) - only if needed for verification' },
                                        ].map((item, idx) => (
                                            <div key={idx} className="col-md-6">
                                                <div className="p-3 bg-light rounded-3 d-flex align-items-center">
                                                    <span className="fs-4 me-3">{item.icon}</span>
                                                    <span>{item.text}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="alert alert-secondary mt-3" role="alert">
                                        <strong>Note:</strong> We do not collect unnecessary or unrelated information.
                                    </div>
                                </section>

                                {/* Processing Time */}
                                <section className="mb-5">
                                    <h2 className="h3 fw-bold text-dark mb-4 pb-2 border-bottom border-info" style={{ borderBottomWidth: '3px' }}>
                                        <span className="me-2">⏳</span> Processing Time
                                    </h2>
                                    <div className="card bg-info bg-opacity-10 border-info">
                                        <div className="card-body text-center py-4">
                                            <p className="mb-2">Once your identity is verified, your account and eligible data will be deleted within</p>
                                            <h2 className="display-4 fw-bold text-info">30 Days</h2>
                                            <p className="mb-0 text-muted">You will receive a confirmation message once the process is complete.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Data That Will Be Deleted */}
                                <section className="mb-5">
                                    <h2 className="h3 fw-bold text-dark mb-4 pb-2 border-bottom border-danger" style={{ borderBottomWidth: '3px' }}>
                                        <span className="me-2">🗑️</span> Data That Will Be Deleted
                                    </h2>
                                    <p>Upon approval of your deletion request, the following information will be <strong>permanently removed</strong>:</p>

                                    <ul className="list-group list-group-flush">
                                        {[
                                            'Your user account and login credentials',
                                            'Personal profile details',
                                            'PAN card information submitted for verification',
                                            'Aadhaar information submitted for verification',
                                            'Bank details provided for payments or refunds',
                                            'Helpdesk / support chat history',
                                            'Any other personal information stored within the Jipstay Tenant app',
                                        ].map((item, idx) => (
                                            <li key={idx} className="list-group-item bg-transparent d-flex align-items-center">
                                                <span className="text-danger me-2">✗</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Data That May Be Retained */}
                                <section className="mb-5">
                                    <h2 className="h3 fw-bold text-dark mb-4 pb-2 border-bottom border-warning" style={{ borderBottomWidth: '3px' }}>
                                        <span className="me-2">📁</span> Data That May Be Retained Temporarily
                                    </h2>
                                    <p>Some information must be retained for legal, security, and fraud-prevention purposes, even after you request account deletion. This may include:</p>

                                    <ul className="list-group list-group-flush mb-3">
                                        {[
                                            'Records of payments, payouts, or financial transactions',
                                            'Identity verification logs used for fraud prevention and safety',
                                            'Security logs (such as login attempts)',
                                            'Dispute-related data, if any',
                                        ].map((item, idx) => (
                                            <li key={idx} className="list-group-item bg-transparent d-flex align-items-center">
                                                <span className="text-warning me-2">⚠️</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="alert alert-warning" role="alert">
                                        <p className="mb-1"><strong>This information is stored securely and is never used for marketing.</strong></p>
                                        <p className="mb-0">It is retained only for the minimum duration required by law and then permanently deleted.</p>
                                    </div>
                                </section>

                                {/* Important Notes */}
                                <section className="mb-5">
                                    <h2 className="h3 fw-bold text-dark mb-4 pb-2 border-bottom border-danger" style={{ borderBottomWidth: '3px' }}>
                                        <span className="me-2">⚠️</span> Important Notes
                                    </h2>

                                    <div className="card bg-danger bg-opacity-10 border-danger">
                                        <div className="card-body">
                                            <ul className="mb-0">
                                                <li className="mb-2"><strong>Account deletion is permanent and cannot be undone.</strong></li>
                                                <li className="mb-2">You will lose access to booking history, saved details, and previous activity.</li>
                                                <li className="mb-2">Any future use of the app will require creating a new account.</li>
                                                <li className="mb-0">Active bookings, payments, or disputes may affect the deletion timeline.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* Support & Contact */}
                                <section className="mb-5">
                                    <h2 className="h3 fw-bold text-dark mb-4 pb-2 border-bottom border-primary" style={{ borderBottomWidth: '3px' }}>
                                        <span className="me-2">💬</span> Support & Contact
                                    </h2>
                                    <p>For help or additional questions regarding account deletion:</p>

                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <div className="card h-100 text-center bg-light border-0">
                                                <div className="card-body">
                                                    <span className="fs-1">📧</span>
                                                    <h6 className="fw-bold mt-2">Email</h6>
                                                    <a href="mailto:contactlkrtechnologies@gmail.com" className="small">contactlkrtechnologies@gmail.com</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card h-100 text-center bg-light border-0">
                                                <div className="card-body">
                                                    <span className="fs-1">📱</span>
                                                    <h6 className="fw-bold mt-2">WhatsApp</h6>
                                                    <a href="https://wa.me/919912155551" target="_blank" rel="noopener noreferrer">+91 9912155551</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Additional Links */}
                                <section className="mb-4">
                                    <h2 className="h3 fw-bold text-dark mb-4 pb-2 border-bottom border-secondary" style={{ borderBottomWidth: '3px' }}>
                                        <span className="me-2">🔗</span> Additional Links
                                    </h2>

                                    <div className="d-flex flex-wrap gap-3">
                                        <a href="/privacy-policy" className="btn btn-outline-primary btn-lg">
                                            <span className="me-2">📄</span> Privacy Policy
                                        </a>
                                        <a href="terms-conditions" className="btn btn-outline-secondary btn-lg">
                                            <span className="me-2">📋</span> Terms & Conditions
                                        </a>
                                    </div>
                                </section>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Datadeletion;
