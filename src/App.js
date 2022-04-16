import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import "./Components/style.css";
import { Footer } from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Components/Header";
import { Container } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Header />

            <section id="hero">
                <Container>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Ege Oral</h1>
                            <h4 className="mb-3">Videographer & Editor</h4>
                            <a
                                className="btn btn-outline-light btn-lg"
                                href="#!"
                                role="button"
                            >
                                About Me
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}

export default App;
