import React from "react";

export const StepperLarge = () => {
  return (
    <div className="plan__stepper--large">
      <div className="step">
        <div>
          <div className="circle">1</div>
        </div>
        <div>
          <div className="title">Datos</div>
        </div>
      </div>

      <div className="step step-active">
        <div>
          <div className="circle">2</div>
        </div>
        <div>
          <div className="title">Arma tu plan</div>
        </div>
      </div>
    </div>
  );
};
