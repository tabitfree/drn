import React, { useRef } from "react";
import { Link, withRouter } from "react-router-dom";

import Offices from "../hp-components/Offices";
import Benefits from "../Benefits";
import ExcellentCommunity from "../b-components/ExcellentCommunity";
import Availability from "../Availability";

const OfficesSection = (props) => {
  const colors = props.colors;
  const available = props.available;

  const avaRef = useRef(null);
  const executeScroll = () => avaRef.current.scrollIntoView();

  const officesButton = (
    <div onClick={executeScroll} className="btn dark-variant office-btn">
      See available offices
    </div>
  );

  return (
    <>
      <section className="offices">
        <Offices colors={colors} button={officesButton} />
      </section>
      <section className="benefits">
        <Benefits colors={colors} />
      </section>
      <section className="ex-community">
        <ExcellentCommunity
          title="Companies in DRN"
          text="Learn more about the companies that are currently based in DRN. Find out more about them and their experience within the workspace."
          colors={colors}
        />
      </section>
      <section className="availability" ref={avaRef}>
        <Availability available={available} />
      </section>
    </>
  );
};

export default withRouter(OfficesSection);
