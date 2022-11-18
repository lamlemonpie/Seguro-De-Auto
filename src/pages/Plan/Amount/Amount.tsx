import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";
import checkGreen from "../../../shared/assets/check-green.png";
import paths from "../../../shared/routes/paths";

interface AmountProps {
  price: number;
}

export const Amount: React.FC<AmountProps> = ({ price }) => {
  return (
    <div className="plan__amount-container">
      <div className="plan__price">
        <p className="plan__price-title">Monto</p>
        <p className="plan__price-value">{`$${price}.00`}</p>
        <p className="plan__price-recurrent--small">Mensual</p>
        <p className="plan__price-recurrent--large">mensuales</p>
      </div>

      <div className="plan__amount-divider" />

      <div className="plan__included-container">
        <p className="plan__included-text">El precio incluye:</p>
        <div className="plan__included-list">
          <div className="plan__included-item">
            <img src={checkGreen} alt="" />

            <p>Llanta de respuesto</p>
          </div>

          <div className="plan__included-item">
            <img src={checkGreen} alt="" />

            <p>Analisis de motor</p>
          </div>

          <div className="plan__included-item">
            <img src={checkGreen} alt="" />

            <p>Aros gratis</p>
          </div>
        </div>
      </div>

      <Button size="small">
        <NavLink to={paths.final}>LO QUIERO</NavLink>
      </Button>
    </div>
  );
};
