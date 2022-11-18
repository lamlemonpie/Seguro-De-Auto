import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import Dropdown from "../../../components/Dropdown";
import paths from "../../../shared/routes/paths";

export const HomeForm = () => {
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleAcceptedTerms = () => {
    console.log("changing");
    setAcceptedTerms(!acceptedTerms);
  };

  return (
    <div className="home__form_bucket">
      <div className="home__form-container">
        <p className="home__form-title">Déjanos tus datos</p>

        <div className="home__form">
          <Dropdown placeholder="Nro. de doc" />
          <input className="input--default" type="text" placeholder="Celular" />
          <input className="input--default" type="text" placeholder="Placa" />
          <div className="home__checkbox-container">
            <Checkbox
              checked={acceptedTerms}
              handleCheck={handleAcceptedTerms}
            />

            <p className="home__checbox-text">
              Acepto la{" "}
              <u>
                <b>Política de Proteccion de Datos Personales</b>
              </u>{" "}
              y los{" "}
              <u>
                <b>Términos y Condiciones</b>
              </u>
              .
            </p>
          </div>

          <Button isWide className="home__button">
            <NavLink to={paths.plan}>COTÍZALO</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
};
