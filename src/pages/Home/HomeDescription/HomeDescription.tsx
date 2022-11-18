import React from "react";
import homeIllustrationSmall from "../../../shared/assets/home-illustration-small.png";
import homeIllustration from "../../../shared/assets/home-illustration.png";

export const HomeDescription = () => {
  return (
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
            <source media="(min-width: 900px)" srcSet={homeIllustration} />

            <img
              src={homeIllustrationSmall}
              alt="Home Illustration"
              className="home__illustration"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
