import React from "react";
import Checkbox from "../../../components/Checkbox";
import Dropdown from "../../../components/Dropdown";

export const HomeForm = () => {
  return (
    <div className="home__form_bucket">
      <div className="home__form-container">
        <p className="home__form-title">Déjanos tus datos</p>

        <div className="home__form">
          <Dropdown />
          <input className="input--default" type="text" placeholder="Celular" />
          <input className="input--default" type="text" placeholder="Placa" />
          <div className="home__checkbox-container">
            <Checkbox />

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
          <div className="button--wide home__button">COTÍZALO</div>
        </div>
      </div>
    </div>
  );
};
