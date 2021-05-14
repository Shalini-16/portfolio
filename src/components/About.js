
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import profilepicture from '../assessts/profilepicture.jpg';
import './About.css';

 function About() {
    return (
        <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                    <Image className="profile justify-content-end" alt="profile" src={profilepicture} thumbnail fluid />
                        </Row>
                    </Col>

                    <Col xs={12} md={6} >
                    <Row className="align-items-start p-2 my-details rounded">
                    Hi there! I am<strong>&nbsp;Shalini Singh</strong>
                    A Web Developer and Learner,born and brought up in India. 
                  <br/>
                     I am a Front-end developer with HTML,CSS JAVASCRIPT and REACTJS.
                     <br/>
                     I'm pursuing my Engineering in Computer Science  <br/>
                     along with that I believe in self learning.<br/>
                     I immensly like to explore new technologies. 
                     
                        </Row>
                        <Row>
                            <Col className="d-flex justify-contnet-center flex-wrap">
                        <div>
                            <a href="#contact"><Button  className="m-2" variant="outline-danger">Let's talk</Button></a>
                            <a href="https://github.com/Shalini-16"><Button  className="m-2" variant="outline-info">Github</Button></a>
                           
                            <a href="https://www.linkedin.com/in/shalini-singh-108b4a19a/"><Button  className="m-2" variant="outline-secondary">LinkedIn</Button></a>
                            <a href="https://twitter.com/Shalini72416917"><Button  className="m-2" variant="outline-primary">Twitter</Button></a>
                        </div>
                        </Col>
                        </Row>
                    </Col>
        </Row>
            </Container>
           </div>
        </div>
    );
}
export default About;


