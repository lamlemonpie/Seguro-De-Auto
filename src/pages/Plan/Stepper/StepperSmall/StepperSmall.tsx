import React from "react";
import planIconBack from "../../../../shared/assets/icon-back-gray.png";

export const StepperSmall = () => {
  return (
    <div className="plan__stepper--small">
      <img src={planIconBack} alt="Back Icon" className="plan__step-icon" />
      <p className="plan__step">Paso 2 de 2</p>
      <div className="plan__progress" />
    </div>
  );
};
