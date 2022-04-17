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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faMessage } from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
        <div className="App bg-black text-white">
            <Header />

            <section id="hero">
                <Container>
                    <div
                        id="hero-text"
                        className="d-flex justify-content-center align-items-center h-100"
                    >
                        <div className="text-white">
                            <h1 className="mb-3">NECDET EGE ORAL</h1>
                            <h5 className="mb-3">Videographer & Editor</h5>
                            <a
                                className="btn btn-outline-light btn-lg"
                                href="#about"
                                role="button"
                            >
                                ABOUT ME
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            <section id="about">
                <Container>
                    <h2 className="pt-5">ABOUT ME</h2>
                    <p className="py-5 text-gray fs-4 font-monospace">
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

            <section className="py-5" id="portfolio">
                <Container>
                    <h2>-- WHAT I DO --</h2>
                    <Row className="row-cols-1 row-cols-md-3 g-3">
                        <Col className="portfolio-item">
                            <Image src={portfolio1} fluid />
                            <div className="overlay">
                                <div className="text">
                                    <h5 className="fw-bold">Lorem Ipsum</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Curabitur tempus sed
                                        nisi sed elementum. Nunc at hendrerit
                                        quam.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="portfolio-item">
                            <Image src={portfolio2} fluid />
                            <div className="overlay">
                                <div className="text">
                                    <h5 className="fw-bold">Lorem Ipsum</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Curabitur tempus sed
                                        nisi sed elementum. Nunc at hendrerit
                                        quam.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="portfolio-item">
                            <Image src={portfolio3} fluid />
                            <div className="overlay">
                                <div className="text">
                                    <h5 className="fw-bold">Lorem Ipsum</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Curabitur tempus sed
                                        nisi sed elementum. Nunc at hendrerit
                                        quam.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5" id="my-work">
                <Container>
                    <Row className="row-cols-1 row-cols-md-2 g-3">
                        <Col md={4}>
                            <Image
                                className="img-thumbnail"
                                src={portfolio1}
                                fluid
                            />
                        </Col>
                        <Col md={8}>
                            <div className="text-start">
                                <h2>-- MY WORK --</h2>
                                <p className="my-3 text-gray fs-5 font-monospace">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur tempus sed nisi
                                    sed elementum. Nunc at hendrerit quam.
                                </p>
                                <a
                                    className="btn btn-outline-light btn-lg"
                                    href="#about"
                                    role="button"
                                >
                                    SEE MORE WORKS
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="contact">
                <Container>
                    <Row className="row-cols-1 row-cols-md-2 g-3">
                        <Col>
                            <form
                                action="https://formsubmit.co/can.ekmekciler@gmail.com"
                                method="POST"
                            >
                                <Row className="my-5">
                                    <Col>
                                        <div className="input-group">
                                            <div className="input-group-text rounded-start bg-white border border-1 border-light">
                                                <FontAwesomeIcon
                                                    icon={faUser}
                                                />
                                            </div>
                                            <input
                                                className="form-control rounded-end border border-1 border-light text-white bg-transparent"
                                                type="text"
                                                name="name"
                                                placeholder=" Full Name"
                                                required
                                            ></input>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="input-group">
                                            <div className="input-group-text rounded-start bg-white border border-1 border-light">
                                                <FontAwesomeIcon icon={faAt} />
                                            </div>
                                            <input
                                                className="form-control rounded-end border border-1 border-light text-white bg-transparent"
                                                type="email"
                                                name="email"
                                                placeholder=" Email Address"
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Col>
                                    <div className="input-group">
                                        <span className="input-group-text rounded-start bg-white border border-1 border-light">
                                        <FontAwesomeIcon icon={faMessage} />
                                        </span>
                                        <textarea
                                            rows={5}
                                            type="text"
                                            name="message"
                                            className="form-control rounded-end border border-1 border-light text-white bg-transparent"
                                            placeholder=" Your Message"
                                            required></textarea>
                                    </div>
                                    <br />
                                    <button
                                        className="w-25 d-grid gap-2 d-md-block mt-3 btn btn-outline-light"
                                        type="submit"
                                    >
                                        Send
                                    </button>
                                </Col>
                            </form>
                        </Col>
                        <Col>hello</Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </div>
    );
}

export default App;
