import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../assessts/carousel1.jpg';
import carousel2 from '../assessts/carousel2.jpg';
import carousel3 from '../assessts/carousel3.jpg';
import './Carousal-style.css';

export const Mycarousal = () => {
    return (

        <div id="home">
            <Carousel contrl={false} indicators interval={2500} pauseOnHover={false} >
           
  <Carousel.Item>
    <img
      className="d-block w-100 custome-img"src={carousel1}alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100 custome-img" src={carousel2} alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100 custom-img" src={carousel3}alt="Third slide"
    />

  </Carousel.Item>
</Carousel>

</div>
     
    )
}
