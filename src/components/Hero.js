import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Hero = (props) => {
  const style =
    props.type === "text"
      ? { paddingRight: "136px" }
      : { paddingRight: "156px" };

  return (
    <Container>
      <div className="hero-cont w-50" style={style}>
        {props.type === "icon" ? (
          <img src={props.typeContent} />
        ) : (
          <p>{props.typeContent}</p>
        )}
        <h1 style={{ color: props.colors.main }}>{props.title}</h1>
        {props.text !== "" ? <p>{props.text}</p> : ""}
      </div>
    </Container>
  );
};

export default Hero;
