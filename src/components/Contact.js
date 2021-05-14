import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact">
        <h1 className="pt-3 text-center font-details pb-3">Contact Me</h1>
        <div className="pt-3 pb-3" id="contact">
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="mailto:shalini2019cs156abesit@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-danger" title="shalini2019cs156abesit@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.linkedin.com/in/shalini-singh-108b4a19a/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>
              <div className="m-2">
              <a href="https://github.com/Shalini-16" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="github">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            </Col>
        </Row>
      </Jumbotron>
    </div>
    </div>
    );
};

export default Contact;