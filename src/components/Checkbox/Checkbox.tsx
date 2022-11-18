import React from "react";
import checkboxActive from "../../shared/assets/checkbox-active.png";

interface CheckboxProps {
  checked?: boolean;
  handleCheck?: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  handleCheck,
}) => {
  return (
    <div className="checkbox__container" onClick={handleCheck}>
      {checked ? (
        <img src={checkboxActive} alt="checkbox" />
      ) : (
        <div className="checkbox--inactive" />
      )}
    </div>
  );
};
