import React from "react";
import buttonMinus from "../../../../../shared/assets/button-minus.png";
import buttonPlus from "../../../../../shared/assets/button-plus.png";

interface AddButtonProps {
  active?: boolean;
  handleActive?: () => void;
}

export const AddButton: React.FC<AddButtonProps> = ({
  active = false,
  handleActive,
}) => {
  return (
    <div className="plan__insurance-status-container" onClick={handleActive}>
      <img src={active ? buttonMinus : buttonPlus} alt={active ? "-" : "+"} />
      <span>{active ? "Quitar" : "Agregar"}</span>
    </div>
  );
};
