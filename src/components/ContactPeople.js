import React from "react";
import { Card, Container } from "react-bootstrap";

const ContactPeople = () => {
  const people = [
    {
      imgPath: "./images/person-contact1.png",
      name: "Name Name",
      function: "Media & PR",
      tel: "+420 123 456 789",
      mail: "name@mail.com",
    },
    {
      imgPath: "./images/person-contact1.png",
      name: "Name Name",
      function: "Media & PR",
      tel: "+420 123 456 789",
      mail: "name@mail.com",
    },
    {
      imgPath: "./images/person-contact1.png",
      name: "Name Name",
      function: "Media & PR",
      tel: "+420 123 456 789",
      mail: "name@mail.com",
    },
    {
      imgPath: "./images/person-contact1.png",
      name: "Name Name",
      function: "Media & PR",
      tel: "+420 123 456 789",
      mail: "name@mail.com",
    },
    {
      imgPath: "./images/person-contact1.png",
      name: "Named Name",
      function: "Media & PR",
      tel: "+420 123 456 789",
      mail: "name@mail.com",
    },
  ];

  return (
    <Container className="contact-people-cont">
      <h2>Who is there to attend you?</h2>
      <div className="contact-cards-wrapper d-flex flex-wrap">
        {people.map((person, idx) => (
          <Card
            key={idx}
            className="contact-card d-flex flex-column align-items-center text-center"
          >
            <Card.Img
              src={person.imgPath}
              style={{ width: "112px", height: "112px" }}
            />
            <p className="person-name">{person.name}</p>
            <p className="person-function">{person.function}</p>
            <a href={`tel:${person.tel}`}>{person.tel}</a>
            <a href={`mailto:${person.mail}`}>{person.mail}</a>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ContactPeople;
