import React, { useState, useEffect } from "react";

import Hero from "../Hero";
import SFZone from "../rt-components/SFZone";
import Community from "../hp-components/Community";

const Rooftop = ({ colors }) => {
  return (
    <>
      <section className="hero-rt hero">
        <Hero
          typeContent="./images/benefits-1.png"
          title="Rooftop Garden"
          text="Green oasis in the heart of Prague is one of the many unique benefits that DRN offers. It is modern, it is peaceful, and it has astonishing views of the city. Altogether it makes it a perfect place to relax or organize events of any kind."
          colors={colors}
          type="icon"
        />
      </section>
      <section className="sfzone">
        <SFZone colors={colors} />
      </section>
      <section className="community">
        <Community colors={colors} />
      </section>
    </>
  );
};

export default Rooftop;
