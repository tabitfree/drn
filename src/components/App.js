import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import colors from "../assets/styles/colors";

import Menu from "./Menu";
import HomePage from "./pages/HomePage";
import Building from "./pages/Building";
import Contact from "./pages/Contact";
import Gastro from "./pages/Gastro";
import OfficesSection from "./pages/OfficesPage";
import Rooftop from "./pages/Rooftop";
import Footer from "./Footer";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <Menu width={width} />
      <Switch>
        <Route path="/building">
          <Building colors={colors} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/gastro">
          <Gastro colors={colors} />
        </Route>
        <Route path="/offices">
          <OfficesSection colors={colors} available={false} />
        </Route>
        <Route path="/Rooftop">
          <Rooftop colors={colors} />
        </Route>
        <Route path="/send"></Route>
        <Route path="/">
          <HomePage width={width} />
        </Route>
      </Switch>
      <Footer colors={colors} width={width} />
    </>
  );
};

export default App;
