import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-area py-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <h3 className="text-white-50">Ummah's Doctor</h3>
                        <p className="text-white-50 pt-4">Research chemicals are chemical substances used by scientists for medical and scientific research purposes.</p>
                    </Col>
                    <Col md={3}>
                        <h3 className="text-white-50">Social Link</h3>
                        <p className="text-white social-icon pt-4">
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        </p>
                    </Col>
                    <Col md={3}>
                        <h3 className="text-white-50">Opening Hours</h3>
                        <div className="time pt-4">
                            <p className="mb-0">Mon-Tues:6:00-10:00</p>
                            <p className="mb-0">Wed-Thurs:6:00-10:00</p>
                            <p className="mb-0">Sat-Sun:6:00-10:00</p>
                            <p className="mb-0">Friday:6:00-10:00</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h3 className="text-white-50">Get In Touch</h3>
                        <div className="address pt-4">
                            <a href="tel:123456789" className="d-block text-white-50">123456789</a>
                            <a href="mailto:abc@gmail.com" className="d-block text-white-50">abc@gmail.com</a>
                            <p>Rajshahi, Bangladesh</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;