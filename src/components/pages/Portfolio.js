import React from "react";
import { Carousel } from "react-bootstrap";

function Portfolio() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="port-image mx-3">
          <a href="https://github.com/samuel7morris/Brewgle">Brewgle</a>
          <br></br>
          <img src="https://i.imgur.com/CauJBc2.png" alt="Brewgle" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="port-image mx-3">
          <a href="https://github.com/samuel7morris/weather-dashboard">
            Weather Dashboard
          </a>
          <br></br>
          <img src="https://i.imgur.com/E12Du6T.png" alt="Weather dashboard" />
          
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="port-image mx-3">
          <a href="https://github.com/caligd45/The-Book-Depo">The Book Depot</a>
          <br></br>
          <img src="https://i.imgur.com/c9FUToH.png" alt="the book depot" />
          
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="port-image mx-3">
          <a href="https://github.com/samuel7morris/day-planner">Day Planner</a>
          <br></br>
          <img src="https://i.imgur.com/7Sn4s9W.png" alt="Day planner" />
          
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Portfolio;
