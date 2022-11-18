import React from "react";

interface DropdownProps {
  placeholder: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ placeholder }) => {
  return (
    <div className="dropdown__container">
      <select className="dropdown__selector">
        <option value="dni">DNI</option>
      </select>

      <input
        className="input--default dropdown__input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
