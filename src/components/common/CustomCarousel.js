import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CustomCarouselItem(props) {
  return (
    <Carousel className="d-block mx-auto">
      {props.paths.map(src => {
        return (
          <Carousel.Item key={src}>
            <img className="w-100" src={src} alt="" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CustomCarouselItem;
