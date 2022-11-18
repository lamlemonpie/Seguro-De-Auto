import React from "react";

interface DropdownProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="dropdown__container">
      <select className="dropdown__selector">
        <option value="dni">DNI</option>
      </select>

      <input
        className="input--default dropdown__input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
