import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import './Project.css';
import HTML5 from "../assessts/html-5.svg";
import css from "../assessts/css3.svg";

import js from '../assessts/javascript.svg';
import  react from "../assessts/react.svg";
import film from "../assessts/film.jpeg";
import customer from '../assessts/customer-database.png';
import fire from "../assessts/fire.png";

const Projects = () => {
    return (
    <div className="projects">
        <h1 className="pt-3 text-center font-details pb-3">Projects</h1>
        <div className="pt-3 pb-3" id="projects">
        <Timeline>
          <Events>

          <ImageEvent
            date="30/12/2020"
            className="text-center"
            text="React film"
            src={film}
            alt="React film"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a React film database created with the help of ReactJs
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It provides the information about the searched film</li>
                          <li>Powered by React</li>
  
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={css}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={js}
                                alt="Javascript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={react}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                         
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Shalini-16/React_film"
                  target="_blank"
                >
                    SOURCE CODE
                </UrlButton>
                </div>
              
            </div>
          </ImageEvent>
          


    



      <ImageEvent
            date="16/01/2021"
            className="text-center"
            text="Customer Database"
            src={customer}
            alt="customer"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is Reactjs based cumstomer database using the firebase realtime database to store data.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It is basically used to collect data in realtime database</li>
                          <li>Firebase Realtime database</li>
                          <li>ReactJs</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={react}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ReactJs
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={HTML5}
                                alt="html"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                             HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={css}
                                alt="css"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                        CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={js}
                                alt="js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={fire}
                                alt="firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href=""
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              
              </div>
            </div>
          </ImageEvent>
          </Events>
      </Timeline>
    </div>
    </div>
    );
    }
    export default Projects;