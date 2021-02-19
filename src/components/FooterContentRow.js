import React from "react";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import colors from "../assets/styles/colors";

const FooterContentRow = ({ width }) => {
  const pages = [
    "Homepage",
    "Offices",
    "Rooftop",
    "Gastro",
    "Building",
    "Contact",
  ];
  return width < 767 ? (
    <Row>
      <Row>
        <div className="pl-0 mb-4">
          <p style={{ color: colors.light }}>
            Representing a premium multi – functional hub in the heart of
            Prague. The unique compound of modern office building and historical
            baroque - renaissance palace works its own magic and without any
            doubt makes it a modern Czech architectural masterpiece.
          </p>
        </div>
        <div className="d-flex w-100 list-group-wrapper">
          <ListGroup className="mr-auto w-50">
            {pages.slice(0, pages.length / 2).map((page, idx) => (
              <ListGroupItem
                key={idx}
                className="p-0"
                style={{
                  backgroundColor: colors.darkText,
                }}
              >
                <p
                  style={{
                    color: colors.light,
                    fontSize: "16px",
                    lineHeight: "18.7px",
                  }}
                >
                  <Link
                    to={page == "Homepage" ? "/" : `/${page.toLowerCase()}`}
                    className="mb-0"
                    style={{ color: colors.light }}
                  >
                    {page}
                  </Link>
                </p>
              </ListGroupItem>
            ))}
          </ListGroup>
          <ListGroup className="mr-auto w-50">
            {pages.slice(pages.length / 2, pages.length).map((page, idx) => (
              <ListGroupItem
                key={idx}
                className="p-0"
                style={{
                  backgroundColor: colors.darkText,
                }}
              >
                <p
                  style={{
                    color: colors.light,
                    fontSize: "16px",
                    lineHeight: "18.7px",
                  }}
                >
                  <Link
                    to={page == "Homepage" ? "/" : `/${page.toLowerCase()}`}
                    className="mb-0"
                    style={{ color: colors.light }}
                  >
                    {page}
                  </Link>
                </p>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </Row>
      <Row>
        <Col className="footer-social">
          <p className="text-uppercase footer-contact-small-wrapper">
            <a
              href="mailto:info@drn.com"
              style={{
                color: colors.light,
              }}
            >
              info@drn.com
            </a>
          </p>
          <p className="footer-contact-small-wrapper">
            <a
              href="tel:+420764890443"
              style={{
                color: colors.light,
              }}
            >
              +420 764 890 443
            </a>
          </p>
          <a href="https://www.facebook.com/drn-prague" target="_blank">
            <div className="d-flex align-items-center">
              <img src="./images/fb-icon-white.png" />
              <p style={{ color: colors.light }} className="mb-0">
                /drn-prague
              </p>
            </div>
          </a>
        </Col>
        <Col className="footer-address">
          <p style={{ color: colors.light }}>
            DRN building
            <br />
            Národní 135/14
            <br />
            110 00 Staré Město
            <br />
            Praha
          </p>
        </Col>
      </Row>
    </Row>
  ) : (
    <Row>
      <Col className="pl-0 col-4">
        <p style={{ color: colors.light }}>
          Representing a premium multi – functional hub in the heart of Prague.
          The unique compound of modern office building and historical baroque -
          renaissance palace works its own magic and without any doubt makes it
          a modern Czech architectural masterpiece.
        </p>
      </Col>
      <Col>
        <ListGroup className="mr-auto ml-auto">
          {pages.map((page, idx) => (
            <ListGroupItem
              key={idx}
              className="p-0"
              style={{
                backgroundColor: colors.darkText,
              }}
            >
              <p
                style={{
                  color: colors.light,
                  fontSize: "16px",
                  lineHeight: "18.7px",
                }}
              >
                <Link
                  to={page == "Homepage" ? "/" : `/${page.toLowerCase()}`}
                  className="mb-0"
                  style={{ color: colors.light }}
                >
                  {page}
                </Link>
              </p>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
      <Col className="footer-social">
        <p className="text-uppercase footer-contact-small-wrapper">
          <a
            href="mailto:info@drn.com"
            style={{
              color: colors.light,
            }}
          >
            info@drn.com
          </a>
        </p>
        <p className="footer-contact-small-wrapper">
          <a
            href="tel:+420764890443"
            style={{
              color: colors.light,
            }}
          >
            +420 764 890 443
          </a>
        </p>
        <a href="https://www.facebook.com/drn-prague" target="_blank">
          <div className="d-flex align-items-center">
            <img src="./images/fb-icon-white.png" />
            <p style={{ color: colors.light }} className="mb-0">
              /drn-prague
            </p>
          </div>
        </a>
      </Col>
      <Col className="footer-address">
        <p style={{ color: colors.light }}>
          DRN building
          <br />
          Národní 135/14
          <br />
          110 00 Staré Město
          <br />
          Praha
        </p>
      </Col>
    </Row>
  );
};

export default FooterContentRow;
