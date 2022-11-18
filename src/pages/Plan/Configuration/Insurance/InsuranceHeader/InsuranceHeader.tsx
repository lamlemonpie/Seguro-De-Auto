import React from "react";
import Arrow from "../../../../../components/Arrow";
import Switch from "../../../../../components/Switch";
import { useViewport } from "../../../../../shared/contexts/ViewportProvider";

interface InsuranceHeaderProps {
  icon: string;
  title: string;

  showMore?: boolean;
  handleMore?: () => void;

  active?: boolean;
  handleActive: () => void;
}

export const InsuranceHeader: React.FC<InsuranceHeaderProps> = ({
  icon,
  title,
  showMore = false,
  handleMore,
  active = false,
  handleActive,
}) => {
  const { width, small_screen } = useViewport();

  return (
    <div className="plan__insurance-header">
      <div className="plan__insurance-title">
        <img src={icon} alt="" className="plan__insurance-icon" />
        <p className="plan__insurance-name">{title}</p>
      </div>
      {width < small_screen && <Switch isOn={active} onClick={handleActive} />}
      {width >= small_screen && (
        <Arrow isDown={!showMore} onClick={handleMore} />
      )}
    </div>
  );
};
