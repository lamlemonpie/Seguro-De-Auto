import React from "react";

interface ButtonProps {
  text?: string;
  isWide?: boolean;
  size?: "small" | "normal";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text = "",
  isWide = false,
  size = "normal",
  className,
  children,
  onClick,
}) => {
  return (
    <div
      className={`button button--${
        isWide ? "wide" : "default"
      } button--${size} ${className}`}
      onClick={onClick}
    >
      {text}
      {children}
    </div>
  );
};
