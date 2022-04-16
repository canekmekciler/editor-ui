import React from "react";
import "./App.css";
import "./Components/style.css";
import { Footer } from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Components/Header";
import { Col, Container, Image, Row } from "react-bootstrap";
//Images
import portfolio1 from "./Images/mini-1.jpg";
import portfolio2 from "./Images/mini-2.jpg";
import portfolio3 from "./Images/mini-3.jpg";

function App() {
    return (
        <div className="App bg-black text-white">
            <Header />

            <section id="hero">
                <Container>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Ege Oral</h1>
                            <h5 className="mb-3">Videographer & Editor</h5>
                            <a
                                className="btn btn-outline-light btn-lg"
                                href="#about"
                                role="button"
                            >
                                About Me
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            <section id="about">
                <Container>
                    <h2 className="pt-5">Ege Oral</h2>
                    <p className="py-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur tempus sed nisi sed elementum. Nunc at
                        hendrerit quam. Aliquam nulla urna, bibendum eget
                        sodales sit amet, euismod non dui. Aliquam vitae leo
                        felis. Nunc orci dui, semper et urna ac, accumsan
                        feugiat nunc. Etiam vehicula vel libero eu tempus. Sed
                        ornare quam sit amet egestas rhoncus.
                    </p>
                </Container>
            </section>

            <section id="portfolio">
                <Container>
                    <h2>What I Do</h2>
                    <Row className="row-cols-1 row-cols-md-3 g-3">
                        <Col className="portfolio-item">
                            <Image src={portfolio1} fluid />
                            <div className="overlay">
                                <div className="text">
                                    <h6>text</h6>
                                </div>
                            </div>
                        </Col>
                        <Col className="portfolio-item">
                            <Image src={portfolio2} fluid />
                            <div className="overlay">
                                <div className="text">
                                    <h6>text</h6>
                                </div>
                            </div>
                        </Col>
                        <Col className="portfolio-item">
                            <Image src={portfolio3} fluid />
                            <div className="overlay">
                                <div className="text">
                                    <h6>text</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </div>
    );
}

export default App;
