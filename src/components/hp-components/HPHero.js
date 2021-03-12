import React from "react";

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const HPHero = (props) => {
  return (
    <Container className="position-relative">
      <div className="w-40 pr-2">
        <h1 style={{ color: props.colors.main }}>
          DRN – a building that exceeds your expectations.
        </h1>
        <p style={{ color: props.colors.light }}>
          The place for business and inspiration representing a premium multi –
          functional hub in the heart of Prague. The Czech architectural
          masterpiece combining a modern building and historical baroque -
          renaissance palace.
        </p>
        <div className="d-flex align-items-center">
          <Link to="/building" className="btn light-variant hp-btn">
            DRN Building
          </Link>
          <Link to="/offices" className="underlined-btn">
            Explore offices
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default HPHero;
