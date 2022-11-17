import React from "react";

interface ButtonProps {
  text: string;
  isWide?: boolean;
  size?: "small" | "normal";
}

export const Button: React.FC<ButtonProps> = ({
  text,
  isWide = false,
  size = "normal",
}) => {
  return (
    <div
      className={`button button--${
        isWide ? "wide" : "default"
      } button--${size}`}
    >
      {text}
    </div>
  );
};
