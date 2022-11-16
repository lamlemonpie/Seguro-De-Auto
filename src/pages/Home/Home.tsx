import React from "react";
import Checkbox from "../../components/Checkbox";
import Dropdown from "../../components/Dropdown";
import NavBar from "../../components/NavBar";
import homeIllustrationSmall from "../../shared/assets/home-illustration-small.png";
import homeIllustration from "../../shared/assets/home-illustration.png";

export const Home: React.FC = () => {
  return (
    <div className="home__root">
      <div className="home__header_background" />

      <NavBar isTransparent />

      <div className="home__container">
        <div className="home__description_bucket">
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
                <source media="(min-width: 768px)" srcSet={homeIllustration} />

                <img
                  src={homeIllustrationSmall}
                  alt="Home Illustration"
                  className="home__illustration"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="home__form_bucket">
          <div className="home__form-container">
            <p className="home__form-title">Déjanos tus datos</p>

            <div className="home__form">
              <Dropdown />
              <input
                className="input--default"
                type="text"
                placeholder="Celular"
              />
              <input
                className="input--default"
                type="text"
                placeholder="Placa"
              />
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
      </div>
    </div>
  );
};
