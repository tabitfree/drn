import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const Menu = (props) => {
  const link = props.location.pathname;

  const sectionStyle = (path, width) => {
    return width < 992
      ? "menu-section-background menu-section mb-0 white-bg"
      : path === "/offices" || path === "/contact"
      ? "menu-section-background menu-section mb-0"
      : "menu-section mb-0";
  };

  const navbarStyle = (width) => {
    return width >= 576 ? "position-absolute w-100" : "position-relative w-100";
  };

  const containerStyle = (width) => {
    return width >= 576
      ? "position-relative transparent-container container"
      : "position-absolute w-100";
  };

  const classNames = (path) => {
    return link === path ? "px-3 cur-page nav-link" : "px-3 nav-link";
  };

  return (
    <section className={sectionStyle(link, props.width)}>
      <Container className={containerStyle(props.width)}>
        <Navbar
          bg="transparent"
          className={navbarStyle(props.width)}
          expand="lg"
        >
          <Link to="/">
            <Navbar.Brand href="/">
              <img
                src={
                  props.width > 991
                    ? "./images/logo.svg"
                    : "./images/logo-black.png"
                }
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/building" className={classNames("/building")}>
                Building
              </Link>
              <Link to="/offices" className={classNames("/offices")}>
                Offices
              </Link>
              <Link to="/rooftop" className={classNames("/rooftop")}>
                Rooftop
              </Link>
              <Link to="/gastro" className={classNames("/gastro")}>
                Gastro
              </Link>
              <Link to="/contact" className={classNames("/contact")}>
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
};

export default withRouter(Menu);
