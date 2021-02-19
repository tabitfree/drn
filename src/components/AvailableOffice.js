import React from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";

const AvailableOffice = (props) => {
  let office = props.office,
    name = office.name,
    text = office.text,
    area = office.area,
    coffeMaker = office.coffeMaker,
    confRooms = office.confRooms,
    items = office.items,
    person = office.person;

  const renderRightNav = (onClick, disabled) => {
    return (
      <div className="image-gallery-custom-right-nav-wrapper">
        <img
          src="./images/arrow-right.png"
          alt="Right arrow"
          className="image-gallery-custom-right-nav"
          disabled={disabled}
          onClick={onClick}
        />
      </div>
    );
  };

  const renderLeftNav = (onClick, disabled) => {
    return (
      <div
        className="image-gallery-custom-left-nav"
        disabled={disabled}
        onClick={onClick}
      ></div>
    );
  };

  return (
    <div className="available-office-container d-flex">
      <ImageGallery
        items={office.items}
        showPlayButton={false}
        showFullscreenButton={false}
        renderRightNav={renderRightNav}
        renderLeftNav={renderLeftNav}
      />
      <div className="office-info-wrapper">
        <h2>{name}</h2>
        <p>{text}</p>
        <div className="office-info-additional d-flex flex-wrap">
          <div className="d-flex">
            <p>Rozloha:</p>
            <p>{area} m²</p>
          </div>
          <div className="d-flex">
            <p>Rozloha:</p>
            <p>{area} m²</p>
          </div>
          <div className="d-flex">
            <p>Kavovar:</p>
            <p>{coffeMaker}</p>
          </div>
          <div className="d-flex">
            <p>Kavovar:</p>
            <p>{coffeMaker}</p>
          </div>
          <div className="d-flex">
            <p>Zasedaci mistnost:</p>
            <p>{confRooms}</p>
          </div>
          <div className="d-flex">
            <p>Zasedaci mistnost:</p>
            <p>{confRooms}</p>
          </div>
          <div className="d-flex">
            <p>Rozloha:</p>
            <p>{area} m²</p>
          </div>
          <div className="d-flex">
            <p>Rozloha:</p>
            <p>{area} m²</p>
          </div>
        </div>
        <Link to="/contact" className="btn dark-variant">
          Contact
        </Link>
        <hr className="separator" />
        <div className="d-flex">
          <div
            className="available-office-person-icon-wrapper"
            style={{ backgroundImage: `url(${person.imgPath})` }}
          ></div>
          <div>
            <p className="available-office-person-name small-title">
              {person.name}
            </p>
            <p className="available-office-person-sub">{person.sub}</p>
            <div className="available-office-person-contact">
              <a
                href={`tel:${person.tel}`}
                className="available-office-person-tel"
              >
                {person.tel}
              </a>
              <a href={`mailto:${person.mail}`}>{person.mail}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableOffice;
