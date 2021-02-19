import React from "react";

const OfficeCarouselItem = (props) => {
  return (
    <div>
      <img
        style={{ width: "100%", height: "100%" }}
        key={props.id}
        src={props.image}
      />
      <div className="position-absolute">
        <p>{props.title}</p>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
};

export default OfficeCarouselItem;
