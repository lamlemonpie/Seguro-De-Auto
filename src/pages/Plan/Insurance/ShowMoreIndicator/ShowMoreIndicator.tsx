import React from "react";
import arrowUpGray from "../../../../shared/assets/arrow-up-gray.png";
import arrowDownBlue from "../../../../shared/assets/arrow-down-blue.png";

interface ShowMoreIndicatorProps {
  showMore?: boolean;
  onClick?: () => void;
}

export const ShowMoreIndicator: React.FC<ShowMoreIndicatorProps> = ({
  showMore = true,
  onClick,
}) => {
  return (
    <div
      className={`plan__insurance-more ${showMore ? "active" : "inactive"}`}
      onClick={onClick}
    >
      <p className={showMore ? "plan__more--active" : "plan__more--inactive"}>
        {showMore ? "Ver Menos" : "Ver Más"}
      </p>
      <img src={showMore ? arrowUpGray : arrowDownBlue} alt="" />
    </div>
  );
};
