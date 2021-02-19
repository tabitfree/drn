import React from "react";

const ContactInfoContent = () => {
  return (
    <div className="w-50">
      <h2>Contact information</h2>
      <p>
        Do you have any thoughts or questions about DRN? <br />
        We would love you to share it with us.
      </p>
      <div className="contact-info-item">
        <a
          href="tel:+420222101210"
          className="d-inline-flex align-items-center"
        >
          <img
            src="./images/tel-icon.png"
            style={{ width: "16px", height: "16px" }}
          />
          <p className="mt-auto mb-0">+420 222 101 210</p>
        </a>
      </div>
      <div className="contact-info-item">
        <a
          href="mailto:info@drn.com"
          className="d-inline-flex align-items-center"
        >
          <img
            src="./images/mail-icon.png"
            style={{ width: "16px", height: "16px" }}
          />
          <p className="mb-0 mt-auto">info@drn.com</p>
        </a>
      </div>
      <div className="contact-info-item">
        <a
          href="https://www.google.com/maps/place/N%C3%A1rodn%C3%AD+135,+110+00+Star%C3%A9+M%C4%9Bsto/@50.081577,14.4152391,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94ee261dac81:0x70493c7cddd71225!8m2!3d50.0815736!4d14.4174278"
          target="_blank"
          className="d-inline-flex"
        >
          <img
            src="./images/location-icon.png"
            style={{ width: "14px", height: "18px" }}
          />
          <p className="mb-0">
            Drn building <br />
            Národní 135/14, 110 00 Staré Město <br />
            Praha
          </p>
        </a>
      </div>
      <div className="contact-info-item">
        <a
          href="https://www.facebook.com/drn-prague"
          className="d-inline-flex align-items-center"
        >
          <img
            src="./images/fb-icon.png"
            style={{ width: "19px", height: "19px", marginRight: "12px" }}
          />
          <p className="mb-0 mt-auto">facebook.com/drn-prague</p>
        </a>
      </div>
    </div>
  );
};

export default ContactInfoContent;
