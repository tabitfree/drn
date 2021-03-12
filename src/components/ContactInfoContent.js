import React, { useState } from "react";

const ContactInfoContent = () => {
  const [tel, setTel] = useState("./images/tel-icon.png");
  const [mail, setMail] = useState("./images/mail-icon.png");
  const [loc, setLoc] = useState("./images/location-icon.png");
  const [fb, setFb] = useState("./images/fb-icon.png");
  const [parking, setParking] = useState("./images/parking.svg");
  const [bus, setBus] = useState("./images/bus.svg");
  const [plane, setAirplane] = useState("./images/plane.svg");
  const [subway, setSubway] = useState("./images/subway.svg");

  return (
    <div className="w-50">
      <h2>Contact information</h2>
      <p>We look forward to hearing from you or you could visit us at DRN.</p>
      <div className="contact-info-item">
        <a
          href="tel:+420222101210"
          className="d-inline-flex align-items-center"
        >
          <img src={tel} style={{ width: "16px", height: "16px" }} />
          <p className="mt-auto mb-0">+420 222 101 210</p>
        </a>
      </div>
      <div className="contact-info-item">
        <a
          href="mailto:info@drn.com"
          className="d-inline-flex align-items-center"
        >
          <img src={mail} style={{ width: "16px", height: "16px" }} />
          <p className="mb-0 mt-auto">info@drn.com</p>
        </a>
      </div>
      <div className="contact-info-item">
        <a
          href="https://www.google.com/maps/place/N%C3%A1rodn%C3%AD+135,+110+00+Star%C3%A9+M%C4%9Bsto/@50.081577,14.4152391,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94ee261dac81:0x70493c7cddd71225!8m2!3d50.0815736!4d14.4174278"
          target="_blank"
          className="d-inline-flex"
        >
          <img src={loc} style={{ width: "14px", height: "18px" }} />
          <p className="mb-0">
            Drn building <br />
            Národní 135/14,
            <br />
            110 00 Prague 1 - New Town
          </p>
        </a>
      </div>
      <div className="contact-info-item">
        <a
          href="https://www.facebook.com/drn-prague"
          target="_blank"
          className="d-inline-flex align-items-center"
        >
          <img
            src={fb}
            style={{ width: "19px", height: "19px", marginRight: "12px" }}
          />
          <p className="mb-0 mt-auto">facebook.com/drn-prague</p>
        </a>
      </div>
      <div className="connectivity-wrapper">
        <p className="connectivity">Connectivity</p>
        <div className="contact-info-item d-flex align-items-center">
          <img src={parking} style={{ width: "16px", height: "16px" }} />
          <p className="mt-auto mb-0">Direct acces to underground parking</p>
        </div>
        <div className="contact-info-item d-flex align-items-center">
          <img src={bus} style={{ width: "16px", height: "16px" }} />
          <p className="mt-auto mb-0">
            Easily accessible with the fully integrated Prague public transport.
            Subway Line A, trams and buses - Národní třída station.
          </p>
        </div>
        <div className="contact-info-item d-flex align-items-center">
          <img src={plane} style={{ width: "16px", height: "16px" }} />
          <p className="mt-auto mb-0">
            Accessible from airport by car (30 min) or a public transport (45
            min)
          </p>
        </div>
        <div className="contact-info-item d-flex align-items-center">
          <img src={subway} style={{ width: "16px", height: "16px" }} />
          <p className="mt-auto mb-0">
            Accessible from main trainstation by car (6 min) or a public
            transport (15 min)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoContent;
