import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div className="py-5">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={5} className="text-center">
                        <h3>Book Appointment</h3>
                        <p className="mb-0">For booking you can make a call or email to the following</p>
                        <p className="mb-0">Cell: 123456789</p>
                        <p className="mb-0">Email:abc@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Appointment;