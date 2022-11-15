import React from "react";
import logoRimac from "../../shared/assets/logo-rimac.png";
import telephoneImage from "../../shared/assets/phone.png";

export const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logoRimac} alt="Logo Rimac" />

      <div className="navbar__telephone">
        <p className="navbar__subtitle">¿Tienes alguna duda?</p>

        <img
          className="navbar__telephone-icon"
          src={telephoneImage}
          alt="Phone"
        />

        <p className="navbar__telephone-number">(01) 411 6001</p>

        <p className="navbar__telephone-quote">Llámanos</p>
      </div>
    </div>
  );
};
