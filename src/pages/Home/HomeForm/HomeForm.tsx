import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import Dropdown from "../../../components/Dropdown";
import { useUser } from "../../../shared/contexts/UserProvider";
import { useQuery } from "../../../shared/hooks/useQuery";
import { useValidation } from "../../../shared/hooks/useValidation";
import paths from "../../../shared/routes/paths";

export const HomeForm = () => {
  // Hooks
  const navigate = useNavigate();
  const { carPlate, setCarPlate, identifier, setIdentifier, phone, setPhone } =
    useUser();
  const { isPositiveNumber, hasLength } = useValidation();
  const { getUserQuery } = useQuery();

  // Local state
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  const [validIdentifier, setValidIdentifier] = React.useState(false);
  const [validPhone, setValidPhone] = React.useState(false);
  const [validCarPlate, setValidCarPlate] = React.useState(false);

  // Event handlers
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

  // Side effects
  React.useEffect(() => {
    if (isPositiveNumber(identifier) && hasLength(identifier, 8)) {
      setValidIdentifier(true);
    } else {
      setValidIdentifier(false);
    }
  }, [hasLength, identifier, isPositiveNumber]);

  React.useEffect(() => {
    if (isPositiveNumber(phone) && hasLength(phone, 9)) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  }, [hasLength, isPositiveNumber, phone]);

  React.useEffect(() => {
    if (hasLength(carPlate, 6)) {
      setValidCarPlate(true);
    } else {
      setValidCarPlate(false);
    }
  }, [carPlate, hasLength]);

  return (
    <div className="home__form_bucket">
      <div className="home__form-container">
        <p className="home__form-title">D??janos tus datos</p>

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
                <b>Pol??tica de Proteccion de Datos Personales</b>
              </u>{" "}
              y los{" "}
              <u>
                <b>T??rminos y Condiciones</b>
              </u>
              .
            </p>
          </div>

          {(!validIdentifier ||
            !validPhone ||
            !validCarPlate ||
            !acceptedTerms) && (
            <div className="home__validation-text">
              Valide los campos antes de continuar:
              {!validIdentifier && <div>DNI: 8 d??gitos, numerico</div>}
              {!validPhone && <div>Celular: 9 d??gitos, numerico</div>}
              {!validCarPlate && <div>Placa: 6 d??gitos</div>}
              {!acceptedTerms && <div>Aceptar t??rminos y condiciones</div>}
            </div>
          )}

          <Button
            text="COT??ZALO"
            isWide
            className="home__button"
            onClick={getUser}
            active={
              validIdentifier && validPhone && validCarPlate && acceptedTerms
            }
          />
        </div>
      </div>
    </div>
  );
};
