import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CommunityCarouselItem from "./CommunityCarouselItem";

const CommunityCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 90,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    largerMobile: {
      breakpoint: { max: 767, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  const icons = [
    "./images/wework-logo.png",
    "./images/amazon-logo.png",
    "./images/seznam-logo.png",
  ];

  const texts = [
    "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe.",
    "After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted.",
    "I was skeptical of SEO and content marketing at first, but the Lorem Ipsum Company not only proved.",
  ];

  const websites = ["www.wework.com", "www.amazon.com", "www.seznam.cz"];

  return (
    <Carousel
      ssr
      deviceType={props.deviceType}
      itemClass="com-item"
      containerClass="community-carousel"
      responsive={responsive}
      renderButtonGroupOutside={true}
      infinite={true}
      showDots={true}
      swipeable={true}
      draggable={true}
      dotListClass="com-dots"
    >
      {icons.map((icon, idx) => {
        return (
          <CommunityCarouselItem
            icon={icon}
            text={texts[idx]}
            website={websites[idx]}
            colors={props.colors}
            id={idx}
            key={idx}
          />
        );
      })}
    </Carousel>
  );
};

export default CommunityCarousel;
