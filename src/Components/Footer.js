import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faLinkedinIn,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <Container className="p-4 pb-0">
                <Row className="mb-4">
                    <Col className="text-start">
                        <h4 className="py-3">NECDET EGE ORAL</h4>
                        <h6><FontAwesomeIcon icon={faLocationDot} /> Istanbul</h6>
                        <h6 className="fw-bold">egeoral@gmail.com</h6>
                    </Col>
                    <Col className="text-end">
                    <h6>Follow me on Social Media</h6>
                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    </Col>
                </Row>
            </Container>

            <div className="bg-black text-center p-3">
                © 2022 Copyright:
                <a className="text-white" href="#!">
                    EgeOral
                </a>
            </div>
        </footer>
    );
};
