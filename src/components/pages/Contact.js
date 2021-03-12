import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ContactInfo from "../ContactInfo";
import ContactPeople from "../ContactPeople";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>DRN | Contact</title>
      </Helmet>
      <section className="contact-info">
        <ContactInfo />
      </section>
      <section className="contact-people">
        <ContactPeople />
      </section>
    </>
  );
};

export default Contact;
