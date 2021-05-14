import React from 'react';
import Typed from "react-typed";
function Header(){
    return (
        <>
        <div className="header-wrapper">
            <div className="main-info">
                <br />
                <h3>Hi , I am <span>Shalini Singh</span></h3>
                <br />
                <br />
              
                <h2>Web Development</h2>
                <br />
         <Typed className="typed-text"
         strings={["Web Developer","Learner"]} 
         typeSpeed={40}
         backSpeed={60}
         loop/>
      {/*  <a href="#" className="btn-main">Contact-me</a> */}
            </div>
        </div>
        </>
    );
}

export default Header;