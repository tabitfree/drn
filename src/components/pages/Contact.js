import React, { useState, useEffect } from "react";
import ContactInfo from "../ContactInfo";
import ContactPeople from "../ContactPeople";

const Contact = () => {
  return (
    <>
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
