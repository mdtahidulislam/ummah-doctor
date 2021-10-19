import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './EmailSubscription.css'

const EmailSubscription = () => {
    const handleEmailSub = (e) => {
        e.preventDefault();
    }
    return (
        <div className="newsletter-area py-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Subscribe Your Email</h2>
                        <p>Please subscribe our newsletter for update news</p>
                    </Col>
                    <Col md={6}>
                        <form className="newsletter-form" onSubmit={handleEmailSub}>
                            <input type="email" className="input-newsletter" placeholder="Enter your email" />
                            <button type="submit" className="disabled">Subscribe Now</button>
                            <div id="validator-newsletter" className="form-result"></div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EmailSubscription;