import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner banner-bg">
            <div className="d-table">
                <div className="d-table-cell">
                    <Container>
                        <Row className="align-items-center justify-content-center">
                            <Col lg={6} md={6}>
                                <div>
                                    <h1 className="text-white fw-bold text-center">Ummah's Doctor, Keeping Care Close To Home</h1>
                                    <p className="text-white text-center">Our Service And Work Efficiency Are The Reasons For Success.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Banner;