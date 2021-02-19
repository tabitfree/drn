import React, { useState, useEffect } from "react";
import Hero from "../Hero";
import Unique from "../b-components/Unique";
import Architecture from "../b-components/Architecture";
import Awards from "../b-components/Awards";
import About from "../b-components/About";
import ExcellentCommunity from "../b-components/ExcellentCommunity";
import Offices from "../hp-components/Offices";
import Community from "../hp-components/Community";
import { Link } from "react-router-dom";

const Building = ({ colors }) => {
  const officeButton = (
    <Link to="/offices" className="btn dark-variant offices-btn">
      See available offices
    </Link>
  );

  return (
    <>
      <section className="hero hero-b">
        <Hero
          type="text"
          typeContent="DRN building"
          title="Outside and in, DRN is simply one of the most beautiful office building imaginable today."
          text=""
          colors={colors}
        />
      </section>
      <section className="upae">
        <Unique colors={colors} />
      </section>
      <section className="architecture">
        <Architecture colors={colors} />
      </section>
      <section className="awards">
        <Awards colors={colors} />
      </section>
      <section className="about">
        <About colors={colors} />
      </section>
      <section className="ex-community">
        <ExcellentCommunity
          title="Excellent community"
          text="Meet the companies that are currently based in DRN and find out how
          they enjoy working with us. In DRN we aim to connect, develop, and
          cooperate. That is why we enhance good relationship within the
          community, because we are certain that even a short chit chat in the
          elevator can lead to big ideas and successful business models."
          colors={colors}
        />
      </section>
      <section className="offices">
        <Offices colors={colors} button={officeButton} />
      </section>
      <section className="community">
        <Community colors={colors} />
      </section>
    </>
  );
};

export default Building;
