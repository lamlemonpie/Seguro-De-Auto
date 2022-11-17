import React from "react";
import Button from "../../components/Button";
import InputNumber from "../../components/InputNumber";
import NavBar from "../../components/NavBar";
import planIconBack from "../../shared/assets/icon-back.png";
import planIllustrationSmall from "../../shared/assets/plan-illustration-small.png";
import theftIcon from "../../shared/assets/icon-theft.png";
import damageIcon from "../../shared/assets/icon-damage.png";
import runoverIcon from "../../shared/assets/icon-runover.png";
import ShowMoreIndicator from "./Insurance/ShowMoreIndicator";
import Insurance from "./Insurance";

export const Plan = () => {
  return (
    <div className="plan__root">
      <NavBar />

      <div className="plan__container">
        <div className="plan__stepper-container">
          <img src={planIconBack} alt="Back Icon" className="plan__step-icon" />

          <p className="plan__step">Paso 2 de 2</p>

          <div className="plan__progress" />
        </div>

        <div>
          <div className="plan__description-container">
            <p className="plan__description-title">Mira las coberturas</p>
            <p className="plan__description-subtitle">
              Conoce las coberturas para tu plan
            </p>

            <div className="plan__car-background" />
            <div className="plan__car-container">
              <div className="plan__car-description">
                <p className="plan__car-plate">Placa: C2U-114 </p>
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
              initialValue={14300}
              minValue={12500}
              maxValue={16500}
              prefix="$"
            />
          </div>

          <div className="plan__coverage-container">
            <p className="plan__coverage-title">Agregar o quitar coverturas</p>

            <div className="plan__coverage-tabs">
              <div className="plan__tab--selected">Protege a tu auto</div>
              <div className="plan__tab--default">
                Protege a los que te rodean
              </div>
              <div className="plan__tab--default">Mejora tu plan</div>
            </div>

            <div className="plan__car-coverage">
              <Insurance
                icon={theftIcon}
                title="Llanta robada"
                text="He salido de casa a las cuatro menos cinco para ir a la
                  academia de ingles de mi pueblo (Sant Cugat, al lado de
                  Barcelona) con mi bici, na llego a la academia que está en el
                  centro del pueblo en una plaza medio-grande y dejo donde
                  siempre la bici atada con una pitón a un sitio de esos de
                  poner las bicis"
              />

              <Insurance
                icon={damageIcon}
                title="Choque y/o pasarte la luz roja"
                text="He salido de casa a las cuatro menos cinco para ir a la
                  academia de ingles de mi pueblo (Sant Cugat, al lado de
                  Barcelona) con mi bici, na llego a la academia que está en el
                  centro del pueblo en una plaza medio-grande y dejo donde
                  siempre la bici atada con una pitón a un sitio de esos de
                  poner las bicis"
              />

              <Insurance
                icon={runoverIcon}
                title="Atropello en la vía Evitamiento"
                text="He salido de casa a las cuatro menos cinco para ir a la
                  academia de ingles de mi pueblo (Sant Cugat, al lado de
                  Barcelona) con mi bici, na llego a la academia que está en el
                  centro del pueblo en una plaza medio-grande y dejo donde
                  siempre la bici atada con una pitón a un sitio de esos de
                  poner las bicis"
              />
            </div>
          </div>
        </div>

        <div className="plan__amount-container">
          <div className="plan__price">
            <p className="plan__price-value">$35.00</p>
            <p className="plan__price-recurrent">Mensual</p>
          </div>

          <Button text="LO QUIERO" size="small" />
        </div>
      </div>
    </div>
  );
};
