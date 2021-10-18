import React from 'react';
import { Container } from 'react-bootstrap';

const Notfound = () => {
    return (
        <div className="notfound">
            <Container className="text-center">
                <h1 className="py-5 text-danger fw-bold">OOPS !!! Page not found</h1>
            </Container>
        </div>
    );
};

export default Notfound;