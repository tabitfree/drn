import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Benefits = ({ colors }) => {
  const benefitsCards = [
    {
      title: "Rooftop garden",
      text: "Green oasis with the most astonishing views.",
      icon: "./images/benefits-1a.png",
      iconWidth: "20px",
      iconHeight: "35px",
    },
    {
      title: "Gastronomy",
      text: "The most exquisite gastronomy options you can find in Prague.",
      icon: "./images/benefits-2.png",
      iconWidth: "35px",
      iconHeight: "35px",
    },
    {
      title: "Location",
      text: "Situated in the heart of Prague.",
      icon: "./images/benefits-1a.png",
      iconWidth: "20px",
      iconHeight: "35px",
    },
    {
      title: "Community",
      text: "Learn more about people in DRN.",
      icon: "./images/benefits-1a.png",
      iconWidth: "20px",
      iconHeight: "35px",
    },
    {
      title: "Design",
      text: "Highly representative and modern.",
      icon: "./images/benefits-1a.png",
      iconWidth: "20px",
      iconHeight: "35px",
    },
    {
      title: "Variety",
      text: "Offices of all sizes that suit any business.",
      icon: "./images/benefits-1a.png",
      iconWidth: "20px",
      iconHeight: "35px",
    },
  ];

  return (
    <Container className="benefits-container d-flex">
      <div className="benefits-left">
        <h2 style={{ color: colors.main }}>Benefits</h2>
        <p>
          We are offering a fully furnished office spaces with full service –
          reception, cleaning services, I.T. support, assistant services, post
          services, gastronomy, and many other available benefits.
        </p>
        <Link to="/building" className="btn dark-variant">
          Explore DRN building
        </Link>
      </div>
      <div className="d-flex  flex-wrap">
        {benefitsCards.map((card, idx) => (
          <div className="benefit-card d-flex" key={idx}>
            <div className="benefit-card-img-wrapper">
              <img
                src={card.icon}
                style={{ width: card.iconWidth, height: card.iconHeight }}
              />
            </div>
            <div>
              <p className="small-title">{card.title}</p>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Benefits;
