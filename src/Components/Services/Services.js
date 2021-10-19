import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AllServices from '../AllServices/AllServices';

const Services = () => {
    return (
        <div className="service-page">
            <Container>
                <Row>
                    <AllServices></AllServices>
                </Row>
            </Container>
        </div>
    );
};

export default Services;