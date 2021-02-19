import React from "react";
import { Container } from "react-bootstrap";

const About = ({ colors }) => {
  return (
    <Container>
      <h2 style={{ color: colors.main }}>About the Project</h2>
      <div className="container-p-img d-flex">
        <div>
          <p>The scope</p>
          <ul>
            <li>11,600 m2 of leased space</li>
            <li>9,500 m²office space</li>
            <li>4 underground floors</li>
            <li>8 floors</li>
            <li>rooftop garden</li>
          </ul>
          <p>
            The project was executed by the developer company SEBRE who bought a
            plot of land previously used as a parking. This development project
            was originally planned as a hotel complex, however, during the
            construction works and archaeological investigation, the developers
            reconsidered the functionality of the building and began the
            cooperation with an architect Stanislav Fiala.
          </p>
        </div>
        <img src="./images/upae-5.jpg" />
      </div>
      <img src="./images/upae-6.jpg" type="whole" className="w-100" />
      <div className="arch-imgs" type="whole">
        <img src="./images/upae-7.jpg" className="sf-img left" />
        <img src="./images/upae-8.jpg" className="sf-img" />
      </div>
      <div>
        <iframe
          src="https://player.vimeo.com/video/378024629"
          frameborder="0"
          width="1110"
          height="650"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
};

export default About;
