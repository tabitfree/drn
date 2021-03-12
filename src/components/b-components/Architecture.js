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
        <h2 style={{ color: colors.main }}>History and Architecture</h2>
        <p>
          When designing the building the two key parameters were history (for
          the importance of the location) and the construction of the
          surrounding buildings. The biggest challenge for the architect
          Stanislav Fiala was to overcome the differences of heights between the
          surrounding palaces. His objective was to connect two worlds, two
          different heights and styles. DRN functions as the interconnection
          that links the old and playful baroque style palace to the new modern
          and concrete construction. There were several techniques utilized to
          do so - the most significant and key is the application of rods on the
          fasade. Their first function is to reflect the decoration of the
          surroungings. Its aim is to approach and build a relation to the
          decorative lattices and balconies covered with ornaments of other
          buildings. The second function is the connection. The rods are copying
          the arc of the building and running down over the corner and creating
          a linkage with the rim of the Schönkirch’s palace. Following with the
          copy of another roof, running over the attic and then slowly
          dissolving. Fiala was inspired by the gradual and leaky urbanism and
          the parched location to which he wanted to bring a touch of nature.
        </p>
        <p>
          "Even though the materials may be different, but the principles remain
          the same, which is brilliant."
        </p>
        <p className="text-right">– Stanislav Fiala</p>
      </div>
      <div title="History and architecture">
        <div className="d-flex">
          <p className="half-p">
            History was one of the fundamental parameters in the creation of the
            architecture of this building. The location in Narodni trida recalls
            the key turnout of history in the country, which Fiala also
            reflected in his work. <br />
            Throughout the investigation of the palace, constructors and
            architects discovered many surprising historical treasures for
            example painted wooden ceilings or frescoes. Many original materials
            from the old baroque palace (including some objects that were no
            longer considered as useful) have been transferred to the concrete
            of the interior. The value of these materials reflects the memory of
            this location and Fiala’s objective was to preserve the spirit and
            bring it to the new construction.
          </p>
          <p className="half-p">
            In the past, there were many architectural attempts to interconnect
            the new and the old. This is an exceptional example of the breaking
            through success to reach this objective. It defines many principles
            that are inspirational not just to other architects, but also to the
            restorers and constructors all over the world.
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
