import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Sectionheader.css';

const Sectionheader = ({ heading, subHeading }) => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                    <h2 className="section-title">{heading}</h2>
                    <p>{subHeading}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Sectionheader;