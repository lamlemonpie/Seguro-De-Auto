import React from "react";

interface FooterProps {
  isTransparent?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isTransparent = false }) => {
  return (
    <div className={`footer--${isTransparent ? "transparent" : "default"}`}>
      © 2021 RIMAC Seguros y Reaseguros.
    </div>
  );
};
