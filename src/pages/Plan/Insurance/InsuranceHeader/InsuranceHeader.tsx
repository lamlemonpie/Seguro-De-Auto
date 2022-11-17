import React from "react";
import Switch from "../../../../components/Switch";

interface InsuranceHeaderProps {
  icon: string;
  title: string;
}

export const InsuranceHeader: React.FC<InsuranceHeaderProps> = ({
  icon,
  title,
}) => {
  return (
    <div className="plan__insurance-header">
      <div className="plan__insurance-title">
        <img src={icon} alt="" className="plan__insurance-icon" />
        <p className="plan__insurance-name">{title}</p>
      </div>
      <Switch />
    </div>
  );
};
