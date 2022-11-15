import React from "react";
import Checkbox from "../../components/Checkbox";
import Dropdown from "../../components/Dropdown";
import NavBar from "../../components/NavBar";
import homeIllustrationSmall from "../../shared/assets/home-illustration-small.png";

export const Home: React.FC = () => {
  return (
    <div>
      <div className="home__header_container">
        <NavBar isTransparent />

        <div className="home__description_container">
          <div className="home__description">
            <p className="home__tag">¡NUEVO!</p>
            <p className="home__title">Seguro Vehicular</p>
            <p className="home__title--secondary">Tracking</p>
            <p className="home__subtitle">
              Cuentanos donde le haras seguimiento a tu seguro
            </p>
          </div>

          <div>
            <picture>
              <img
                src={homeIllustrationSmall}
                alt="Home Illustration"
                className="home__illustration"
              />
            </picture>
          </div>
        </div>
      </div>

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
            y los
            <u>
              <b>Términos y Condiciones</b>
            </u>
            .
          </p>
        </div>

        <div className="button--wide">COTÍZALO</div>
      </div>
    </div>
  );
};
