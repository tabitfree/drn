import React from "react";

import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

const HPBenefits = (props) => {
  const cards = [
    {
      cardImg: "./images/benefits-1.png",
      cardTitle: "Rooftop garden",
      cardText: "Green oasis with the most astonishing views.",
      cardLink: "Explore rooftop",
    },
    {
      cardImg: "./images/benefits-2.png",
      cardTitle: "Gastronomy",
      cardText: "From morning coffee through afternoon beer to evening dining.",
      cardLink: "Explore gastronomy",
    },
  ];

  return props.width > 576 ? (
    <Container>
      <div className="benefits-content-wrapper ml-auto w-63">
        <h2 style={{ color: props.colors.main }}>Unique benefits</h2>
        <div className="d-flex flex-wrap">
          {cards.map((card, idx) => (
            <Card className="w-50" border="white" key={idx}>
              <Card.Body>
                <Card.Img src={card.cardImg} variant="icon" />
                <Card.Title>{card.cardTitle}</Card.Title>
                <Card.Text>{card.cardText}</Card.Text>
                <Link to="/rooftop" className="underlined-btn dark-underlined">
                  {card.cardLink}
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  ) : (
    <>
      <img src="./images/unique-benefits-respo.png" className="w-100 pb-5" />
      <Container>
        <div className="w-100">
          <h2 className="w-50" style={{ color: props.colors.main }}>
            Unique benefits
          </h2>
          <div className="d-flex flex-wrap">
            {cards.map((card, idx) => (
              <Card className="w-50" border="white" key={idx}>
                <Card.Body>
                  <Card.Img src={card.cardImg} variant="icon" />
                  <Card.Title>{card.cardTitle}</Card.Title>
                  <Card.Text>{card.cardText}</Card.Text>
                  <Link
                    to="/rooftop"
                    className="underlined-btn dark-underlined"
                  >
                    {card.cardLink}
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default HPBenefits;
