import React from 'react'
import portfoliologo1 from '../portfoliologo1.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#"><img className="logo" src={portfoliologo1} alt="logo" /></a>
          <button className="navbar-toggler" type="button"
           data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
              <a className="nav-link"  href="#home">Home </a>
            {/*    <a className="nav-link"  href="#">Home <span className="sr-only">(current)</span> </a> */}
              </li>
            
            
                <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">Siklls</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">Contacts</a>
              </li>
           
          
            </ul>
              </div>
            
              </div>
      </nav>
    );
}

export default Navbar;
