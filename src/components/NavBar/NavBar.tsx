import React from "react";
import { NavLink } from "react-router-dom";
import logoRimac from "../../shared/assets/logo-rimac.png";
import telephoneImage from "../../shared/assets/phone.png";
import paths from "../../shared/routes/paths";

interface NavBarProps {
  isTransparent?: Boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ isTransparent = false }) => {
  return (
    <div className={isTransparent ? "navbar--transparent" : "navbar"}>
      <NavLink to={paths.root}>
        <img src={logoRimac} alt="Logo Rimac" />
      </NavLink>

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
