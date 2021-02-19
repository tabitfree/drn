import React from "react";
import { Container } from "react-bootstrap";
import CommunityCarouselItem from "../content/CommunityCarouselItem";

const ExcellentCommunity = (props) => {
  const colors = props.colors;
  const cards = [
    {
      icon: "./images/wework-logo.png",
      text:
        "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe ",
      website: "www.wework.com",
    },
    {
      icon: "./images/ztos-logo.png",
      text:
        "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe ",
      website: "www.ztos.com",
    },
    {
      icon: "./images/earth2-logo.png",
      text:
        "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe ",
      website: "www.earth.two",
    },
    {
      icon: "./images/asgardia-logo.png",
      text:
        "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe ",
      website: "www.asgardia.com",
    },
    {
      icon: "./images/liva-logo.png",
      text:
        "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe ",
      website: "www.liva.org",
    },
    {
      icon: "./images/kanba-logo.png",
      text:
        "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe ",
      website: "www.kanba.sk",
    },
    {
      icon: "./images/ideaa-logo.png",
      text:
        "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe ",
      website: "www.ideaa.pl",
    },
    {
      icon: "./images/hexlab-logo.png",
      text:
        "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe ",
      website: "www.hexlab.cz",
    },
  ];

  return (
    <Container>
      <div className="w-50">
        <h2 style={{ color: colors.main }}>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div className="exc-cards-container d-flex flex-wrap">
        {cards.map((card, idx) => {
          return (
            <CommunityCarouselItem
              icon={card.icon}
              text={card.text}
              website={card.website}
              colors={colors}
              id={idx}
              key={idx}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ExcellentCommunity;
