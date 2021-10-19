import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="text-center">
                            <h1>Please Register</h1> <br />
                            <input type="email" name="" id="" placeholder="Enter Your Email" className="mb-3" /> <br />
                            <input type="password" name="" id="" placeholder="Enter Password" className="mb-3" /> <br />
                            <input type="submit" value="submit" className="mb-2" /> <br />
                            <Link to='/login'>Already Registered?</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;

