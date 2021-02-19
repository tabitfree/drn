import React from "react";
import { Container } from "react-bootstrap";

import OfficeCarousel from "../content/OfficeCarousel";

const Offices = ({ colors, button }) => {
  return (
    <Container className="offices-hp-inner d-flex">
      <div className="w-33">
        <h2 style={{ color: colors.main }}>DRN Offices</h2>
        <p>
          DRN offers a wide variety of offices ranging from X to Y m², which
          accommodates business of all kinds and sizes.
        </p>
        {button}
      </div>
      <>
        <OfficeCarousel />
      </>
    </Container>
  );
};

export default Offices;
