import React from "react";
import planIconBack from "../../../shared/assets/icon-back-gray.png";
import { useViewport } from "../../../shared/contexts/ViewportProvider";
import StepperLarge from "./StepperLarge";
import StepperSmall from "./StepperSmall";

export const Stepper = () => {
  const { width, small_screen } = useViewport();

  return (
    <div className="plan__stepper-container">
      {width >= small_screen && <StepperLarge />}
      {width < small_screen && <StepperSmall />}
    </div>
  );
};
