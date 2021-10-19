import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profile from '../../images/profile.jpg';
import './Doctor.css'

const Doctor = () => {
    return (
        <div className="py-5">
            <Container className="py-5">
                <Row>
                    <Col md={3}>
                        <div className="dashboard-profile">
                            <div className="profile-box">
                                <img src={profile} alt="" className="img-fluid" />
                                <div className="profile-designation">
                                    <h3>Dr.Addison Smith</h3>
                                    <p>MBBS, M.D of Medicine</p>
                                    <span>BDS, FCPS (Hons), Ph.D.(USA)</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={3}>
                                <div className="single-stats-box">
                                    <h3 className="text-white">783K</h3>
                                    <p className="text-white">Total Patient</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="single-stats-box bg-2">
                                    <h3 className="text-white">783K</h3>
                                    <p className="text-white">Total Patient</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="single-stats-box bg-3">
                                    <h3 className="text-white">783K</h3>
                                    <p className="text-white">Total Patient</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="single-stats-box bg-4">
                                    <h3 className="text-white">783K</h3>
                                    <p className="text-white">Total Patient</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Doctor;