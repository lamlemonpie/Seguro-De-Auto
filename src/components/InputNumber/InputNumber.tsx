import React from "react";
import iconMinus from "../../shared/assets/input-minus.png";
import iconPlus from "../../shared/assets/input-plus.png";

interface InputNumberProps {
  value?: number;
  minValue?: number;
  maxValue?: number;
  prefix?: string;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}

export const InputNumber: React.FC<InputNumberProps> = ({
  value = 0,
  minValue = 0,
  maxValue = Number.MAX_VALUE,
  prefix = "",
  onChange,
}) => {
  const handleMinus = () => {
    if (value > minValue) {
      onChange(value - 100);
    }
  };

  const handlePlus = () => {
    if (value < maxValue) {
      onChange(value + 100);
    }
  };

  return (
    <div className="inputnumber">
      <img src={iconMinus} onClick={handleMinus} alt="-" />
      <p className="inputnumber__value">{`${prefix}${value}`}</p>
      <img src={iconPlus} onClick={handlePlus} alt="+" />
    </div>
  );
};
