import React, { ReactNode } from "react";
import insurancesObject from "../data/insurances";

export interface InsuranceType {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: number;
  isActive: boolean;
  isAvailable: boolean;
}

export interface InsurancesObject {
  [key: string]: InsuranceType;
}

interface SetInsuranceActiveProps {
  id: string;
  value: boolean;
}

interface ContextValueTypes {
  carPlate: string;
  identifier: string;
  phone: string;
  basePlanPrice: number;
  planPrice: number;
  insuranceAmountMin: number;
  insuranceAmountMax: number;
  insuranceAmount: number;
  setCarPlate: React.Dispatch<React.SetStateAction<string>>;
  setIdentifier: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setPlanPrice: React.Dispatch<React.SetStateAction<number>>;
  setInsuranceAmout: React.Dispatch<React.SetStateAction<number>>;

  insurances: InsurancesObject;
  setInsurances: React.Dispatch<React.SetStateAction<InsurancesObject>>;
  setInsuranceActive: (args: SetInsuranceActiveProps) => void;
}

interface UserProviderProps {
  children?: ReactNode;
}

const UserContext = React.createContext<ContextValueTypes | null>(null);

const basePlanPrice = 20;
const insuranceAmountMin = 12500;
const insuranceAmountMax = 16500;
const insuranceAmountDanger = 16000;

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [carPlate, setCarPlate] = React.useState("");
  const [identifier, setIdentifier] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [planPrice, setPlanPrice] = React.useState(20);
  const [insuranceAmount, setInsuranceAmout] = React.useState(12500);

  const [insurances, setInsurances] = React.useState(insurancesObject);
  const [insuranceDisabled, setInsuranceDisabled] = React.useState(false);

  const setInsuranceActive = React.useCallback(
    ({ id, value }: SetInsuranceActiveProps) => {
      if (!!insurances[id]) {
        const newInsurances = Object.assign({}, insurances);
        newInsurances[id].isActive = value;
        setInsurances(newInsurances);
      }
    },
    [insurances]
  );

  const setInsuranceAvailable = React.useCallback(
    ({ id, value }: SetInsuranceActiveProps) => {
      if (!!insurances[id]) {
        const newInsurances = Object.assign({}, insurances);
        newInsurances[id].isAvailable = value;
        setInsurances(newInsurances);
      }
    },
    [insurances]
  );

  React.useEffect(() => {
    const activeInsurancesAmount = Object.values(insurances).reduce(
      (sum, value) => {
        if (value.isActive && value.isAvailable) {
          return sum + value.price;
        } else {
          return sum;
        }
      },
      0
    );
    const newPlanPrice = basePlanPrice + activeInsurancesAmount;

    setPlanPrice(newPlanPrice);
  }, [insurances]);

  React.useEffect(() => {
    if (!insuranceDisabled && insuranceAmount > insuranceAmountDanger) {
      setInsuranceAvailable({ id: "2", value: false });
      setInsuranceActive({ id: "2", value: false });
      setInsuranceDisabled(true);
    }

    if (insuranceDisabled && insuranceAmount <= insuranceAmountDanger) {
      setInsuranceAvailable({ id: "2", value: true });
      setInsuranceDisabled(false);
    }
  }, [
    insuranceAmount,
    insuranceDisabled,
    setInsuranceActive,
    setInsuranceAvailable,
  ]);

  const contextValues: ContextValueTypes = {
    carPlate,
    identifier,
    phone,
    basePlanPrice,
    planPrice,
    insuranceAmount,
    insuranceAmountMin,
    insuranceAmountMax,
    insurances,
    setCarPlate,
    setPhone,
    setIdentifier,
    setPlanPrice,
    setInsuranceAmout,
    setInsurances,
    setInsuranceActive,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): ContextValueTypes => {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
