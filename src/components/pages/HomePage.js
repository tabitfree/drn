import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { Container } from "react-bootstrap";
import colors from "../../assets/styles/colors";

import HPHero from "../hp-components/HPHero";
import Offices from "../hp-components/Offices";
import HPBenefits from "../hp-components/HPBenefits";
import Community from "../hp-components/Community";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const officesButton = (
    <Link to="/offices" className="btn dark-variant office-btn">
      Explore offices
    </Link>
  );

  return (
    <>
      <Helmet>
        <title>DRN | Home</title>
      </Helmet>
      <section className="hero-hp">
        <HPHero colors={colors} />
      </section>
      <section className="offices-hp">
        <Offices colors={colors} button={officesButton} />
      </section>
      <section className="benefits-hp">
        <HPBenefits colors={colors} width={props.width} />
      </section>
      <section className="community">
        <Community colors={colors} />
      </section>
    </>
  );
};

export default HomePage;
