import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

import Hero from "../Hero";
import Community from "../hp-components/Community";
import Places from "../Places";

const Gastro = ({ colors, width }) => {
  return (
    <>
      <Helmet>
        <title>DRN | Gastro</title>
      </Helmet>
      <section className="hero-g hero">
        <Hero
          typeContent="./images/benefits-2.png"
          title="Gastronomy"
          text="From morning coffee through afternoon beer to evening dining. Explore DRN gastronomy."
          colors={colors}
          type="icon"
        />
      </section>
      <Container
        style={
          width > 767 ? { marginBottom: "123px" } : { marginBottom: "50px" }
        }
      >
        <div className={width > 580 ? "w-50" : "mr-auto"}>
          <h2 style={{ color: colors.main }}>Perfect place to meet up</h2>
          <p style={{ color: colors.darkText }}>
            A brilliant choice for a meeting of any kind. Ranging from the
            authentic Italian cuisine perfect for a meeting with your clients to
            a pleasant glass of wine or crafted beer after work with your
            colleagues. Experience the gastronomy of a pleasant courtyard
            outside the bustling city center.
          </p>
        </div>
      </Container>
      <section className="places position-relative">
        <Places colors={colors} width={width} />
      </section>
      <section className="community">
        <Community colors={colors} />
      </section>
    </>
  );
};

export default Gastro;
