import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Menu.css'

const Menu = () => {
    const { user, handleSignOut } = useAuth();

    return (
        <div>
            <Navbar expand="lg" className="header-menu py-4">
                <Container>
                    <Navbar.Brand as={Link} to='/' className="text-white fw-bold">Ummah's Doctor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/home' className="text-white fw-bold">Home</Nav.Link>
                            <Nav.Link as={Link} to='/services' className="text-white fw-bold">Services</Nav.Link>
                            <Nav.Link as={Link} to='/booking' className="text-white fw-bold">Appointment</Nav.Link>
                            <Nav.Link as={Link} to='/doctordashboard' className="text-white fw-bold">Doctor Dashboard</Nav.Link>
                            {user.email ? <p className="mb-0"><span className="text-white">{user.displayName}</span> <button onClick={handleSignOut}>Log out</button></p>
                                : <Nav.Link as={Link} to='/login' className="text-white fw-bold">Login / Register</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;