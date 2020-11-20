import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousell.css";

class DemoCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <div>
            <img
              className="image"
              src="https://www.greekboston.com/wp-content/uploads/2017/04/Dionysus.jpg"
              alt="dyonisos"
            />
            <p className="legend">Dyonisos</p>
          </div>
          <div>
            <img
              className="image"
              src="https://cdn.hswstatic.com/gif/aphrodite-statue2.jpg"
              alt="Aphrodite"
            />
            <p className="legend">Aphrodite</p>
          </div>
          <div>
            <img
              className="image"
              src="https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/p5canmlk8a73qsn2xg3m.jpg"
              alt="zeus"
            />
            <p className="legend">Zeus</p>
          </div>
          <div>
            <img
              className="image"
              src="https://www.etaletaculture.fr/wp-content/uploads/2012/06/apollon-et-sa-lyre.jpg"
              alt="Apollo"
            />
            <p className="legend">Apollo</p>
          </div>
          <div>
            <img
              className="image"
              src="https://netstorage-legit.akamaized.net/images/7ab723416fdc1ed6.jpg?imwidth=1200&impolicy=default-amp"
              alt="Apollo"
            />
            <p className="legend">Athena</p>
          </div>
        </Carousel>
        <p className="TopProfiles">The profiles of the week</p>
      </div>
    );
  }
}

export default DemoCarousel;
