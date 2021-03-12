import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AvailableOffice from "./AvailableOffice";
import offices from "../assets/offices";

const Availability = (props) => {
  const available = props.available;

  const availableTitle =
    available && offices.length == 1 ? (
      <h2>There is one office available</h2>
    ) : available && offices.length > 1 ? (
      <h2>There are {offices.length} available offices</h2>
    ) : (
      <h2>There are no available offices at the moment</h2>
    );

  return (
    <Container
      className={
        !available
          ? "availability-container-unavailable d-flex justify-content-center"
          : "availability-container-available"
      }
    >
      <div>
        {availableTitle}
        {!available ? (
          <div className="d-flex flex-column">
            <p className="text-center">
              Unfortunately, there are no offices available for rent at this
              moment. We are more than happy to answer any question regarding
              the office rental or the building in general. In addition you are
              welcome to explore the We Work community and possibly join their
              office spaces.
            </p>
            <Link to="/contact" className="btn dark-variant ml-auto mr-auto">
              Contact
            </Link>
          </div>
        ) : (
          offices.map((office, idx) => {
            return <AvailableOffice office={office} key={idx} />;
          })
        )}
      </div>
    </Container>
  );
};

export default Availability;
