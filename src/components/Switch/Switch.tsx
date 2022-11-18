import React from "react";
import switchOn from "../../shared/assets/switch-on.png";
import switchOff from "../../shared/assets/switch-off.png";

interface SwitchProps {
  isOn?: boolean;
  onClick?: () => void;
}

export const Switch: React.FC<SwitchProps> = ({ isOn = false, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        src={isOn ? switchOn : switchOff}
        alt={isOn ? "switch on" : "switch off"}
      />
    </div>
  );
};
