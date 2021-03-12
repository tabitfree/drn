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
    "./images/ctp-logo.jpg",
    "./images/gzs-logo.png",
    "./images/urarasku-logo.png",
  ];

  const texts = [
    "At DRN, we were initially attracted by the exclusive design and location in the heart of Prague. A plus is the terrace with a 360° view of Prague, which will please all of our clients.",
    "After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted.",
    "I was skeptical of SEO and content marketing at first, but the Lorem Ipsum Company not only proved.",
    "We decided to relocate our headquarters to DRN because it is arguably the prime office building in Prague due to its central location, contemporary design and stunning views to Prague Castle and its surroundings.",
    "The highlights of fine art in the noble architecture of Stanislav Fiala and Josef Pleskot.",
    "The location and architecture of the palace create an extraordinary atmosphere thanks to which everyone is happy to return!",
  ];

  const websites = [
    "www.wework.com",
    "www.amazon.com",
    "www.seznam.cz",
    "www.ctp.eu",
    "www.zdeneksklenar.cz",
    "www.urarasku.cz",
  ];

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
