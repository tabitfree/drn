import React from "react";

import { Container } from "react-bootstrap";
import CommunityCarousel from "../content/CommunityCarousel";

const Community = (props) => {
  return (
    <Container>
      <h2 style={{ color: props.colors.main }}>DRN community feedback</h2>
      <p style={{ color: props.colors.darkText }}>
        Over 20 companies enjoy our multipurpose building on regular basis.{" "}
        <br />
        Learn their DRN experience below.
      </p>
      <CommunityCarousel colors={props.colors} />
    </Container>
  );
};

export default Community;
