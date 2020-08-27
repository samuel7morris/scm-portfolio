import React from "react";
import { Carousel } from "react-bootstrap";



function Portfolio() {
  return (
  <Carousel>
    <Carousel.Item>
      
      <div className="port-image mx-3">
      <img src="https://i.imgur.com/CauJBc2.png" alt="the book depot"/>
      <br></br>
      <a href="https://github.com/samuel7morris/Brewgle">Brewgle</a>
      </div>
    </Carousel.Item>
    <Carousel.Item>

      <div className="port-image">
      <img src="https://i.imgur.com/E12Du6T.png" alt="the book depot"/>
      <br></br>
      <a href="https://github.com/samuel7morris/weather-dashboard">Weather Dashboard</a>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="port-image">
      <img src="https://i.imgur.com/c9FUToH.png" alt="the book depot"/>
      <br></br>
      <a href="https://github.com/caligd45/The-Book-Depo">The Book Depot</a>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="port-image">
      <img src="https://i.imgur.com/7Sn4s9W.png" alt="the book depot"/>
      <br></br>
      <a href="https://github.com/samuel7morris/day-planner">Day Planner</a>
      </div>
    </Carousel.Item>
  </Carousel>

  );
}




export default Portfolio;
