import React from "react";
import { Container } from "react-bootstrap";

const SFZone = ({ colors }) => {
  return (
    <Container>
      <div className="w-50">
        <h2 style={{ color: colors.main }}>Take your business outside</h2>
        <p style={{ color: colors.darkText }}>
          An ideal location for the informal gatherings. A very welcome and
          enjoyable place which fits perfectly into the daily work schedule with
          constantly changing atmosphere according to the weather and the
          seasons. Accompanied by the unique 360° view that that will certainly
          exceed all the expectations.
        </p>
      </div>
      <div className="d-flex mb-64">
        <img src="./images/sf-1.jpg" className="sf-img left" />
        <img src="./images/sf-2.jpg" className="sf-img" />
      </div>
      <h2 className="w-50 ml-auto">Perfect place to relax</h2>
      <p className="w-50 ml-auto">
        The perfect escape from the everyday life in the office filled with
        business and paperwork. After a busy day topped up with meetings, it is
        important to slow down and disconnect for a second only a few steps away
        from your workplace. The green rooftop is the place for you to forget
        that you are in the middle of the capital city. Perfect rest leads to
        perfect performance and the most creative ideas.
      </p>
      <div className="d-flex">
        <img src="./images/sf-3.jpg" className="sf-img left" />
        <img src="./images/sf-4.jpg" className="sf-img" />
      </div>
      <img src="./images/sf-5.jpg" type="whole" className="mb-64 w-100" />
      <h2 className="w-50 mr-auto">Astonishing views</h2>
      <p className="w-50 mr-auto">
        The key advantage of this building is the location. Located literally in
        the heart of Prague at one of the most historically significant
        addresses of the Czech Republic. All the important sights of this
        extraordinary city can be spotted on the terrace with the exquisite 360°
        view inclunding the world known Prague castle.
      </p>
    </Container>
  );
};

export default SFZone;
