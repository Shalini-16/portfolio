import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container';
import {Parallax} from 'react-parallax';
import Slide from "react-reveal/Slide";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import About from './components/About';
import { Mycarousal } from './components/Mycarousal';
import Projects from './components/Projects';

import Skills from "./components/skills.component";
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
<div className="App" style={{position:"relative"}}>
{/*
<Particles className="particles-canvas"
params={{
  particles:{
    number:{
      value:25,
      density:{
        enable:true,
        value_area:1000,
      }
    },
    shape:{
      type:"circle",
      stroke:{
        width:6,
        color:"#f9ab00"
      }
    }
  }
}} />  */}
<Navbar /> 
<Header />

         <div>
    {/*   <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assessts/BG.webp")}
          bgImageAlt=""
          strength={-200}
    >  */}
    <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./bg2.jpg")}
          bgImageAlt=""
          strength={-200}
        >
          
);
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
       
       </Parallax> 
        </div>
        <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Projects />
          </Fade>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <hr />
            <Contact />
          </Slide>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Footer/>
          </Fade>
        </Container>
      </div>
  </div>
  );
}

export default App;

