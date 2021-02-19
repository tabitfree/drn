import React from "react";
import { Container } from "react-bootstrap";

const Awards = ({ colors }) => {
  const awards = [
    {
      img: "./images/awards-1.jpg",
      title: "European Concrete Award 2018",
    },
    {
      img: "./images/awards-2.jpg",
      title: "Stavba roku 2019",
    },
    {
      img: "./images/awards-3.jpg",
      title: "Cena primátora Hlavního města Prahy 2019",
    },
    {
      img: "./images/awards-4.jpg",
      title: "Nominace Mies van der Rohe Award 2019",
    },
  ];
  return (
    <Container className="awards-container">
      <h2 style={{ color: colors.main }} className="text-center">
        Awards
      </h2>
      <div className="d-flex align-items-center flex-wrap justify-content-around">
        {awards.map((award, idx) => (
          <div className="award-item text-center" key={idx}>
            <img src={award.img} />
            <p>{award.title}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Awards;
