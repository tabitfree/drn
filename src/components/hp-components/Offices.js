import React from "react";
import { Container } from "react-bootstrap";

import OfficeCarousel from "../content/OfficeCarousel";

const Offices = ({ colors, button }) => {
  return (
    <Container className="offices-hp-inner d-flex">
      <div className="w-33">
        <h2 style={{ color: colors.main }}>DRN Offices</h2>
        <p>
          DRN offers over 9800 m² of premium Grade A office space that
          accommodates high-profile occupiers.
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
