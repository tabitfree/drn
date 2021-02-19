import React from "react";
import { Card } from "react-bootstrap";

const CommunityCarouselItem = (props) => {
  return (
    <Card>
      <Card.Body className="card-body-com-item">
        <Card.Img
          src={props.icon}
          variant="icon"
          style={{ marginBottom: "11px" }}
        />
        <Card.Title
          style={{
            fontSize: "14px",
            fontWeight: "1",
            lineHeight: "16px",
            color: props.colors.darkButton,
            marginBottom: "12px",
          }}
        >
          {props.website}
        </Card.Title>
        <Card.Text
          style={{
            fontSize: "16px",
            fontWeight: "1",
            lineHeight: "24px",
            color: props.colors.darkButton,
          }}
        >
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CommunityCarouselItem;
