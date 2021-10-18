import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Useservices from '../Hooks/Useservices';
import Service from '../Service/Service';

const AllServices = () => {
    const [services] = Useservices();
    return (
        <div className="service-card">
            <Container>
                <Row>
                    {
                        services.map((service) => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllServices;