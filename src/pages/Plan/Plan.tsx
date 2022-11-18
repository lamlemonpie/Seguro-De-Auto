import React from "react";
import NavBar from "../../components/NavBar";
import Amount from "./Amount";
import Stepper from "./Stepper";
import Configuration from "./Configuration";

export const Plan = () => {
  return (
    <div className="plan__root">
      <NavBar />

      <div className="plan__container">
        <Stepper />

        <Configuration />

        <Amount price={35} />
      </div>
    </div>
  );
};
