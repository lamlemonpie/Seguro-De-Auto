import React from "react";
import InputNumber from "../../../components/InputNumber";
import Insurance from "./Insurance";
import planIllustrationSmall from "../../../shared/assets/plan-illustration-small.png";
import iconBack from "../../../shared/assets/icon-back-red.png";
import { NavLink } from "react-router-dom";
import paths from "../../../shared/routes/paths";
import { useUser } from "../../../shared/contexts/UserProvider";

export const Configuration = () => {
  const {
    carPlate,
    insuranceAmountMin,
    insuranceAmountMax,
    insuranceAmount,
    setInsuranceAmout,
    insurances,
  } = useUser();

  return (
    <div className="plan__configuration-container">
      <div className="plan__description-container">
        <div className="plan__back-container">
          <NavLink to={paths.root}>
            <img src={iconBack} alt="Back" />
          </NavLink>

          <p>Volver</p>
        </div>

        <p className="plan__description-title--large">
          ¡Hola, <span> Juan!</span>
        </p>
        <p className="plan__description-title--small">Mira las coberturas</p>
        <p className="plan__description-subtitle">
          Conoce las coberturas para tu plan
        </p>

        <div className="plan__car-background" />
        <div className="plan__car-container">
          <div className="plan__car-description">
            <p className="plan__car-plate">Placa: {carPlate}</p>
            <p className="plan__car-model">Wolkswagen 2019 Golf</p>
          </div>
          <picture>
            <img src={planIllustrationSmall} alt="Plan Illustration" />
          </picture>
        </div>
      </div>

      <div className="plan__insurance-container">
        <div className="plan__insurance-description">
          <p className="plan__insurance-title">Indica la suma asegurada</p>
          <div className="plan__insurance-range">
            <p className="plan__insurance-value">MIN $12.500</p>
            <div className="plan__vertical-divider" />
            <p className="plan__insurance-value">MAX $16.500</p>
          </div>
        </div>

        <InputNumber
          minValue={insuranceAmountMin}
          maxValue={insuranceAmountMax}
          prefix="$"
          value={insuranceAmount}
          onChange={setInsuranceAmout}
        />
      </div>

      <div className="plan__divider" />

      <div className="plan__coverage-container">
        <p className="plan__coverage-title">Agregar o quitar coberturas</p>

        <div className="plan__coverage-tabs">
          <div className="plan__tab--selected">Protege a tu auto</div>
          <div className="plan__tab--default">Protege a los que te rodean</div>
          <div className="plan__tab--default">Mejora tu plan</div>
        </div>

        <div className="plan__car-coverage">
          {Object.entries(insurances).map(
            ([key, value]) =>
              value.isAvailable && (
                <Insurance
                  key={key}
                  id={value.id}
                  icon={value.icon}
                  price={value.price}
                  title={value.name}
                  text={value.description}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};
