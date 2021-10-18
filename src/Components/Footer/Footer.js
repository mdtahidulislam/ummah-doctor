import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-area py-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <h3 className="text-white-50">Ummah's Doctor</h3>
                        <p className="text-white-50">Research chemicals are chemical substances used by scientists for medical and scientific research purposes.</p>
                    </Col>
                    <Col md={3}>
                        <h3 className="text-white-50">Important Link</h3>
                        <p className="text-white">
                            <a href="https://facebook.com" target="_blank">fb</a>
                            <a href="https://facebook.com" target="_blank">fb</a>
                            <a href="https://facebook.com" target="_blank">fb</a>
                            <a href="https://facebook.com" target="_blank">fb</a>
                        </p>
                    </Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;