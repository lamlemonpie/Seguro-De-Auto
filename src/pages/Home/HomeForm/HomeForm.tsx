import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import Dropdown from "../../../components/Dropdown";
import { useUser } from "../../../shared/contexts/UserProvider";
import { useQuery } from "../../../shared/hooks/useQuery";
import paths from "../../../shared/routes/paths";

export const HomeForm = () => {
  const navigate = useNavigate();
  const { carPlate, setCarPlate, identifier, setIdentifier, phone, setPhone } =
    useUser();

  const { getUserQuery } = useQuery();

  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleAcceptedTerms = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const onCarPlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setCarPlate(newValue);
  };

  const onIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setIdentifier(newValue);
  };

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setPhone(newValue);
  };

  const getUser = () => {
    getUserQuery();
    navigate(paths.plan);
  };

  return (
    <div className="home__form_bucket">
      <div className="home__form-container">
        <p className="home__form-title">Déjanos tus datos</p>

        <div className="home__form">
          <Dropdown
            placeholder="Nro. de doc"
            value={identifier}
            onChange={onIdentifierChange}
          />

          <input
            className="input--default"
            type="text"
            placeholder="Celular"
            value={phone}
            onChange={onPhoneChange}
          />

          <input
            className="input--default"
            type="text"
            placeholder="Placa"
            value={carPlate}
            onChange={onCarPlateChange}
          />
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

          <Button
            text="COTÍZALO"
            isWide
            className="home__button"
            onClick={getUser}
          />
        </div>
      </div>
    </div>
  );
};
