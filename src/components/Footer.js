import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import FooterContentRow from "./FooterContentRow";

const Footer = (props) => {
  const colors = props.colors;
  const width = props.width;
  return (
    <Container className="footer mw-100 p-0">
      <div className="footer-adv-logo-cont"></div>
      <div className="d-flex w-100">
        {width > 767 ? (
          <>
            <a
              href="https://www.google.com/maps/place/N%C3%A1rodn%C3%AD+135,+110+00+Star%C3%A9+M%C4%9Bsto/@50.0815736,14.4152391,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94ee261dac81:0x70493c7cddd71225!8m2!3d50.0815736!4d14.4174278"
              target="_blank"
              className={
                props.location.pathname != "/contact"
                  ? "w-50 footer-map"
                  : "w-100 footer-map"
              }
              style={
                props.location.pathname == "/contact" ? { height: "623px" } : {}
              }
            >
              <div
                className={
                  props.location.pathname != "/contact"
                    ? "w-50 footer-map"
                    : "w-100 footer-map"
                }
                style={
                  props.location.pathname == "/contact"
                    ? { height: "623px" }
                    : {}
                }
              ></div>
            </a>
            {props.location.pathname != "/contact" && (
              <div className="w-50 footer-contact">
                <h2 style={{ color: colors.main }}>Contact us</h2>
                <p style={{ color: colors.darkText, fontSize: "18px" }}>
                  We would love to hear from you
                </p>
                <p style={{ color: colors.darkButton }}>
                  Interested in our office spaces?
                  <br />
                  Do you need more information?
                  <br />
                  We are here to answer all of your questions.
                </p>
                <Link to="/contact" className="btn dark-variant">
                  Contact
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            <a
              href="https://www.google.com/maps/place/N%C3%A1rodn%C3%AD+135,+110+00+Star%C3%A9+M%C4%9Bsto/@50.0815736,14.4152391,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94ee261dac81:0x70493c7cddd71225!8m2!3d50.0815736!4d14.4174278"
              target="_blank"
              className="w-100 footer-map"
              style={{ height: "300px" }}
            >
              <div
                className="w-100 footer-map"
                style={{ height: "300px" }}
              ></div>
            </a>
            <div className="w-100 footer-contact">
              <Container>
                <h2 style={{ color: colors.main }}>Contact us</h2>
                <p style={{ color: colors.darkText, fontSize: "18px" }}>
                  We would love to hear from you
                </p>
                <p style={{ color: colors.darkButton }}>
                  Interested in our office spaces?
                  <br />
                  Do you need more information?
                  <br />
                  We are here to answer all of your questions.
                </p>
                <Link to="/contact" className="btn dark-variant">
                  Contact
                </Link>
              </Container>
            </div>
          </>
        )}
      </div>
      <Container>
        <Row className="footer-logo-wrapper">
          <img src="./images/logo.png" alt="DRN logo" />
        </Row>
        <FooterContentRow width={width} />
      </Container>
    </Container>
  );
};

export default withRouter(Footer);
