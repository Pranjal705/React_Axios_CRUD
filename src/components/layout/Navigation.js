import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
const Navigation = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand to="/">Posts</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <LinkContainer exact to="/">
                            <Nav.Link to="/">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer exact to="/about">
                            <Nav.Link exact to="/about">about</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link to="/contact">Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
                <Link className="btn btn-outline-light" to="/posts/add">Add Posts</Link>
            </Navbar>
        </div>
    );
}

export default Navigation;
