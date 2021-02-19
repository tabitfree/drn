import React from "react";
import { Container } from "react-bootstrap";

const Architecture = ({ colors }) => {
  return (
    <Container className="architecture-container">
      <div className="arch-imgs">
        <img src="./images/upae-1.jpg" className="sf-img left" />
        <img src="./images/upae-2.jpg" className="sf-img" />
      </div>
      <div className="w-50" title="Architecture">
        <h2 style={{ color: colors.main }}>Architecture</h2>
        <p>
          The two key parameters for the design of this building were history,
          for the importance of the location and the structure of the
          surrounding buildings. The biggest challenge for the architect
          Stanislav Fiala was to overcome the differences of heights between the
          surrounding palaces. The objective was to connect two worlds. Two
          different heights and styles. DRN functions as the interconnection
          that links the small old playful baroque style palace to the new
          modern and concrete construction. There were several techniques
          utilized to do so. The most significant and key is the application of
          rods on the fasade. Their first function is to reflect the decoration
          of the surroungings. The aim is to approach and build a relation to
          the decorative lattices and balconies covered with ornaments of other
          buildings. The second function is the connection. The rods are copying
          the arc of the building and running down over the corner and creating
          a linkage with the rim of the Schönkirch’s palace. Following with the
          copy of another roof, running over the attic and then slowly
          dissolving. The inspiration of Fiala comes from the gradual and leaky
          urbanism and the parched location to which he wanted to bring a touch
          of nature.
        </p>
        <p>
          “The materials are different, but the principles stay the same, which
          is absolutely perfect. "
        </p>
        <p className="text-right">– Stanislav Fiala</p>
      </div>
      <div title="History and architecture">
        <h2 style={{ color: colors.main }}>History and architecture</h2>
        <div className="d-flex">
          <p className="half-p">
            History was one of the most important parameters in the creation of
            the architecture of this building. The location in Narodni trida
            recalls the key turnout of history in the country, which Fiala also
            reflected in his work. Furthermore, throughout the investigation of
            the palace, constructors and architects discovered many surprising
            historical treasures for example painted wooden ceilings or
            frescoes. Many original materials from the old baroque palace,
            including some objects that were no longer considered as useful have
            been transferred to the concrete of the interior. The value of these
            materials reflects the memory of this location and the objective of
            Fiala was to preserve the spirit and bring it to the new
            construction.
          </p>
          <p className="half-p">
            In the past, there were many architectural attempts to interconnect
            the new and the old. This is an exceptional example of the breaking
            through success to reach this objective. It defines many principles
            that are inspirational not just to other architects, but also to
            restores and constructors all over the world.
          </p>
        </div>
      </div>
      <div className="arch-imgs">
        <img src="./images/upae-3.jpg" className="sf-img left" />
        <img src="./images/upae-4.jpg" className="sf-img" />
      </div>
    </Container>
  );
};

export default Architecture;
