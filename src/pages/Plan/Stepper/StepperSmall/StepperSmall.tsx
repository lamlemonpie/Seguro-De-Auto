import React from "react";
import { NavLink } from "react-router-dom";
import planIconBack from "../../../../shared/assets/icon-back-gray.png";
import paths from "../../../../shared/routes/paths";

export const StepperSmall = () => {
  return (
    <div className="plan__stepper--small">
      <NavLink to={paths.root}>
        <img src={planIconBack} alt="Back Icon" className="plan__step-icon" />
      </NavLink>

      <p className="plan__step">Paso 2 de 2</p>
      <div className="plan__progress" />
    </div>
  );
};
