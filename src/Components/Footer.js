import React from "react";
import { ReactDOM } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section class="mb-4">
                    <h4 className="py-3">Ege Oral</h4>
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

                </section>
            </div>

            <div
                className="text-center p-3"
                style={{backgroundColor:"#000000"}}
            >
                © 2022 Copyright:
                <a className="text-white" href="#!">
                    EgeOral
                </a>
            </div>
        </footer>
    );
};
