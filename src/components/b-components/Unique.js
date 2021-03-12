import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Unique = ({ colors }) => {
  const cards = [
    {
      cardImg: "./images/benefits-4.png",
      cardTitle: "Offices",
      cardText: "Highly representative and modern offices.",
      cardLink: "Learn more about offices",
    },
    {
      cardImg: "./images/benefits-1.png",
      cardTitle: "Rooftop terrace",
      cardText: "Green oasis with the most astonishing views.",
      cardLink: "Explore rooftop",
    },
    {
      cardImg: "./images/benefits-2.png",
      cardTitle: "Gastronomy",
      cardText: "From morning coffee through afternoon beer to evening dining.",
      cardLink: "Explore gastronomy",
    },
    {
      cardImg: "./images/benefits-3.png",
      cardTitle: "Community",
      cardText: "Learn more about businesses in DRN.",
      cardLink: "Community",
    },
  ];
  return (
    <Container className="upae-cont">
      <div className="w-50">
        <h2 style={{ color: colors.main }}>Unique place and experience</h2>
        <p>
          A place for enterprises that are Devoted, Respected and Neat. A
          building that exceeds your expectations. The unique compound of modern
          office building and historical baroque - renaissance palace makes it,
          without any doubt, one of the key pieces of the Czech modern
          architecture.
        </p>
      </div>
      <div className="d-flex flex-wrap unique-cards">
        {cards.map((card, idx) => (
          <Card className="w-50 position-relative" border="white" key={idx}>
            <Card.Body>
              <Card.Img src={card.cardImg} variant="icon" />
              <Card.Title>{card.cardTitle}</Card.Title>
              <Card.Text>{card.cardText}</Card.Text>
              <Link
                to="/rooftop"
                className="underlined-btn dark-underlined position-absolute"
                style={{ bottom: 0 }}
              >
                {card.cardLink}
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Unique;
