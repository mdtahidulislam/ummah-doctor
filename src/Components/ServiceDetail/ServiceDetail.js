import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServciceDetail.css'


const ServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/tahidul1/servicejson/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])




    return (
        <div className="service-detail">
            <div className="service-detail-bg">
                <img src={service.img} alt="" className="img-fluid" />
                <div className="d-table">
                    <div className="d-table-cell">
                        <Container>
                            <Row className="align-items-center justify-content-center">
                                <Col md={6}>
                                    <h2 className="detail-title">{service.name}</h2>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <h3 className="pt-5">Description</h3>
                        <p className="pb-5">{service.description}</p>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default ServiceDetail;