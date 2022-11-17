import React from "react";
import switchOn from "../../shared/assets/switch-on.png";
import switchOff from "../../shared/assets/switch-off.png";

interface SwitchProps {
  isOn?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({ isOn = false }) => {
  const [active, setActive] = React.useState(isOn);

  const handleChangeActive = () => {
    setActive(!active);
  };

  return (
    <div>
      <img
        src={active ? switchOn : switchOff}
        alt={active ? "switch on" : "switch off"}
        onClick={handleChangeActive}
      />
    </div>
  );
};
