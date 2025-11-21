import React from 'react';
import './Datadeletion.css';
import { Container, Row, Col, Card, ListGroup, Alert,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Datadeletion = () =>{
    return (
        <>
        <div className="terms-container">
        <h1 className="header-text">
          <span className="terms-text">Data Deletion Request</span>
        </h1>
        <p className="desc-text">
          Request removal of your personal data from our records.
        </p>

        {/* Steps Section */}
        <Container className="mt-4">
          <Row className="gy-4 text-center">
            {[
              {
                step: "Step 1",
                title: "Submit Request",
                desc: "Contact us via WhatsApp or email with your data deletion request",
                icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>,
              },
              {
                step: "Step 2",
                title: "Verification",
                desc: "We'll verify your identity to ensure the request is legitimate",
                icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"/></svg>,
              },
              {
                step: "Step 3",
                title: "Processing",
                desc: "Your data will be removed from our systems within 30 days",
                icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>,
              },
              {
                step: "Step 4",
                title: "Confirmation",
                desc: "You'll receive confirmation once the deletion is complete",
                icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>,
              },
            ].map((item, index) => (
              <Col key={index} xs={12} md={6} lg={3}>
                <Card className="h-100 shadow-sm border-0 p-3 text-center">
                  <div style={{ fontSize: "2rem" }}>{item.icon}</div>
                  <Card.Title className="mt-3 fw-bold">{item.step}</Card.Title>
                  <Card.Subtitle className="fw-semibold text-dark mb-2">{item.title}</Card.Subtitle>
                  <Card.Text className="text-muted small">{item.desc}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* What Data Can Be Deleted Section */}
        <Container className="mt-5">
          <h3 className="section-title red">What Data Can Be Deleted?</h3>
          <Row className="mt-4">
            <Col md={6} className="mb-4">
              <Card className="border-success shadow-sm">
                <Card.Header className="bg-success text-white fw-bold">
                  ✅ Data We Can Delete
                </Card.Header>
                <ListGroup variant="flush">
                  {[
                    "Guest information",
                    "Booking information",
                    "Payment information",
                    "Personal details and government-approved ID for KYC verification",
                    "Helpdesk/chat communication with our support team",
                  ].map((item, index) => (
                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="border-warning shadow-sm">
                <Card.Header className="bg-warning fw-bold">
                  ⚠️ Data We Must Retain
                </Card.Header>
                <ListGroup variant="flush">
                  {[
                    "Guest identity records",
                    "Booking history and invoices for GST & taxation compliance",
                    "Payment and refund transaction records",
                    "Legal documentation related to disputes, safety, or verification",
                    "Safety and security logs",
                  ].map((item, index) => (
                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
          </Row>

          {/* Important Information Section */}
          <Alert variant="danger" className="mt-4">
            <Alert.Heading> Important Information</Alert.Heading>
            <ul className="mb-0">
              <li>Data deletion is permanent and cannot be undone.</li>
              <li>Some information may be retained for legal compliance (e.g., GST records: 5+ years).</li>
              <li> Processing may take up to 10 days to complete</li>
              <li>You may lose access to booking history and preferences</li>
              <li>Future bookings will require providing information again</li>
            </ul>
          </Alert>
        </Container>

        <Container className="my-5">
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">Ready to Submit Your Request?</h4>
              <p className="text-muted">
                Contact us through your preferred method to initiate the data deletion process.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="shadow-sm border-0 p-4">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Button
                    variant="success"
                    className="px-4 py-2 fw-semibold"
                    href="https://wa.me/919100006517"
                    target="_blank"
                  >
                    Request via WhatsApp
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Contact Information */}
          <Row className="justify-content-center mt-5">
            <Col md={8}>
              <Card className="shadow-sm border-0 p-4">
                <h5 className="fw-bold mb-3">Contact Information</h5>
                <p>
                  <strong>WhatsApp:</strong> +91 9100006517 <br />
                  <strong>Email:</strong>{" "}
                  <a href="mailto:contactlkrtechnologies@gmail.com">
                    contactlkrtechnologies@gmail.com
                  </a>{" "}
                  <br />
                  <strong>Response Time:</strong> Within 48 hours
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
    )
}

export default Datadeletion;