import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Offcanvas,
} from "react-bootstrap";

export const Header = () => {
    return (
        <Navbar sticky="top" className="bg-black" variant="dark" expand={false} >
            <Container>
                <Navbar.Brand href="#">Ege Oral</Navbar.Brand>
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
                            <Nav.Link className="text-white" href="#action1">Home</Nav.Link>
                            <Nav.Link className="text-white py-5" href="#action2">Link</Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="offcanvasNavbarDropdown"
                            >
                                <NavDropdown.Item href="#action3">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};
