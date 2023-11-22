
import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  goToPrevSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + images.length) % images.length,
    }));
  };

  goToNextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length,
    }));
  };

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="carousel-container">
        <ArrowBackIosIcon className="arrow-icon" onClick={this.goToPrevSlide} />
        <div className="carousel-content">
          <h2>{images[currentIndex].title}</h2>
          <p>{images[currentIndex].subtitle}</p>
          <img src={images[currentIndex].img} alt={images[currentIndex].title} />
        </div>
        <ArrowForwardIosIcon className="arrow-icon" onClick={this.goToNextSlide} />
      </div>
    );
  }
}

export default Carousel;

