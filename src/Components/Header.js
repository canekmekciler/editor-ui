import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Navbar,
    Nav,
    Container,
    Offcanvas,
} from "react-bootstrap";

export const Header = () => {
    return (
        <Navbar sticky="top" className="bg-black" variant="dark" expand={false} >
            <Container>
                <Navbar.Brand href="#hero">NECDET EGE ORAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header className="bg-black" closeButton>
                        <Offcanvas.Title className="text-white" id="offcanvasNavbarLabel">
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="bg-black">
                        <Nav className="text-center d-flex flex-column justify-content-center h-100">
                            <Nav.Link className="text-white" href="#hero">HOME</Nav.Link>
                            <Nav.Link className="text-white py-5" href="#about">ABOUT</Nav.Link>
                            <Nav.Link className="text-white pb-5" href="#gallery">GALLERY</Nav.Link>
                            <Nav.Link className="text-white" href="#contact">CONTACT</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};
