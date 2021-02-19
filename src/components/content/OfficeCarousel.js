import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OfficeCarouselItem from "./OfficeCarouselItem";

const OfficeCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 2,
      partialVisibilityGutter: 0,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1200, min: 767 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
      slidesToSlide: 1,
    },
  };

  let images = [
    "./images/office1.png",
    "./images/office2.png",
    "./images/office3.png",
    "./images/office2.png",
    "./images/office1.png",
  ];

  let titles = [
    "Meeting Room",
    "Emerald Lobby",
    "Common Room",
    "Meeting Room",
    "Emerald Lobby",
  ];

  let subtitles = [
    "New Palace",
    "Schonkirch Palace",
    "Schonkirch Palace",
    "New Palace",
    "New Palace",
  ];

  return (
    <Carousel
      ssr
      partialVisible={true}
      deviceType={props.deviceType}
      itemClass="item"
      containerClass="office-carousel"
      responsive={responsive}
      renderButtonGroupOutside={true}
      transitionDuration={200}
    >
      {images.map((image, idx) => {
        return (
          <OfficeCarouselItem
            image={image}
            title={titles[idx]}
            subtitle={subtitles[idx]}
            id={idx}
            key={idx}
          />
        );
      })}
    </Carousel>
  );
};

export default OfficeCarousel;
