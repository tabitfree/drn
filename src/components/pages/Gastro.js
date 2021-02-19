import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Hero from "../Hero";
import Community from "../hp-components/Community";
import Places from "../Places";

const Gastro = ({ colors }) => {
  return (
    <>
      <section className="hero-g hero">
        <Hero
          typeContent="./images/benefits-2.png"
          title="Gastronomy"
          text="There are not just any restaurants in the office building, there are the most exquisite gastronomy options you can find in Prague."
          colors={colors}
          type="icon"
        />
      </section>
      <Container style={{ marginBottom: "123px" }}>
        <div className="w-50">
          <h2 style={{ color: colors.main }}>Perfect place to meet up</h2>
          <p style={{ color: colors.darkText }}>
            The variety of options available makes it a brilliant choice for a
            meeting of any kind. Ranging from the prestigious Italian cuisine
            perfect for a meeting with your top clients through a pleasant glass
            of wine after work with your colleagues to a tasteful coffee that
            you can take away and enjoy on the rooftop with an astonishing view
            of the Prague castle.
          </p>
        </div>
      </Container>
      <section className="places position-relative">
        <Places colors={colors} />
      </section>
      <section className="community">
        <Community colors={colors} />
      </section>
    </>
  );
};

export default Gastro;
