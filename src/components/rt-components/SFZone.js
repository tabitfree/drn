import React from "react";
import { Container } from "react-bootstrap";

const SFZone = ({ colors }) => {
  return (
    <Container>
      <div className="w-50">
        <h2 style={{ color: colors.main }}>Stress-free zone</h2>
        <p style={{ color: colors.darkText }}>
          The rooftop garden is a perfect escape from the everyday life in the
          office filled with business and paperwork. After a busy day topped up
          with meetings, it is important to slow down and disconnect for a
          second. Find the time for yourself and your thoughts only few steps
          away from your workplace. This magical rooftop is the best place for
          you to forget that you are in the middle of the capital city. Perfect
          rest leads to perfect performance and the most creative ideas.
        </p>
      </div>
      <div className="d-flex mb-64">
        <img src="./images/sf-1.jpg" className="sf-img left" />
        <img src="./images/sf-2.jpg" className="sf-img" />
      </div>
      <p className="w-50 ml-auto">
        This oasis is also the ideal place for the informal gatherings. Your
        guest would not only enjoy your company, but certainly will also be
        pleasantly surprised by the unique 360° view of the whole city. On the
        top of that, it is a very stylish and comfortable part of the building
        which fits to everyone’s needs. The additional value comes from the
        presence of variety of gastronomic options that will certainly exceed
        your expectations and satisfy your appetite. Ranging from the tasteful
        coffee or the typical Italian cuisine to a nice glass of wine after
        work. Resulting in the ultimate location for an informal meeting,
        friendly chit chat or a pleasant team building.
      </p>
      <div className="d-flex">
        <img src="./images/sf-3.jpg" className="sf-img left" />
        <img src="./images/sf-4.jpg" className="sf-img" />
      </div>
      <img src="./images/sf-5.jpg" type="whole" className="mb-64 w-100" />
      <p className="w-50 mr-auto">
        One of the key advantages of this building is the location. Located
        literally in the heart of Prague at one of the most historically
        significant addresses of the Czech Republic. This place has experienced
        a critical turnout of the political situation and has contributed to the
        change of the regime. You can definitely feel this extraordinary vibe in
        the air and from all the walls of the building, but you can certainly
        confirm this feeling up on the terrace with the exquisite 360° view of
        the most important sights of this astonishing city, including the
        well-known Prague castle. Come and soak in the atmosphere built on the
        mixture of precious history and a modern design.
      </p>
    </Container>
  );
};

export default SFZone;
