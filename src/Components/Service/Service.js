import React from 'react';
import { Card, Col } from 'react-bootstrap';
import TruncateWord from '../TruncateWord/TruncateWord';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, img, description } = props.service;

    return (
        <Col md={4} sm={12}>
            <Card className="mb-5">
                <Card.Img variant="top" src={img} className="img-fluid" />
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <TruncateWord content={description} noWord={20}></TruncateWord>
                    <div className="d-flex justify-content-center">
                        <Link to={`/services/${id}`} className="btn read-more me-2">Read More</Link>
                    </div>
                </Card.Body>
            </Card >
        </Col >
    );
};

export default Service;