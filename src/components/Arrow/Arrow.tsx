import React from "react";
import arrowDown from "../../shared/assets/arrow-down-red.png";
import arrowUp from "../../shared/assets/arrow-up-red.png";

interface ArrowProps {
  isDown?: boolean;
  onClick?: () => void;
}

export const Arrow: React.FC<ArrowProps> = ({ isDown = true, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={isDown ? arrowDown : arrowUp} alt="" />
    </div>
  );
};
