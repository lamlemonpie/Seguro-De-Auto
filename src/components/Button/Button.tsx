import React from "react";

interface ButtonProps {
  text?: string;
  isWide?: boolean;
  size?: "small" | "normal";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text = "",
  isWide = false,
  size = "normal",
  className,
  children,
  onClick,
  active = true,
}) => {
  return (
    <div
      className={`button button--${
        isWide ? "wide" : "default"
      } button--${size} ${className}`}
      onClick={active ? onClick : () => {}}
    >
      {text}
      {children}
    </div>
  );
};
