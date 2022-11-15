import React from "react";

export const Dropdown = () => {
  return (
    <div className="dropdown__container">
      <select className="dropdown__selector">
        <option value="dni">DNI</option>
      </select>

      <input
        className="input--default dropdown__input"
        type="text"
        placeholder="Nro. de doc"
      />
    </div>
  );
};
