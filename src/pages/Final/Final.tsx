import React from "react";
import NavBar from "../../components/NavBar";
import finalIllustration from "../../shared/assets/final-illustration.png";
import finalIllustrationSmall from "../../shared/assets/final-illustration-small.png";

export const Final = () => {
  return (
    <>
      <NavBar />
      <div className="final__container">
        <div className="final__background-container" />
        <div className="final__image-container">
          <picture>
            <source media="(min-width: 768px)" srcSet={finalIllustration} />
            <img
              src={finalIllustrationSmall}
              alt="Final Illustration"
              className="final__image"
            />
          </picture>
        </div>

        <div className="final__text-container">
          <div>
            <p className="final__welcome-title">¡Te damos la bienvenida!</p>
            <p className="final__welcome-description">
              Cuenta con nosotros para proteger tu vehículo
            </p>
          </div>

          <div>
            <div className="final__welcome-footnote-container">
              <p className="final__welcome-footnote--light">
                Enviaremos la confirmación de compra de tu Plan Vehícular
                Tracking a tu correo:
              </p>
              <p className="final__welcome-footnote--regular">
                joel.sanchez@gmail.com
              </p>
            </div>
            <div className="button--default final__welcome-button">
              cómo usar mi seguro
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
