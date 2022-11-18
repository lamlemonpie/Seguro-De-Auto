import React, { ReactNode } from "react";

interface ContextValueTypes {
  carPlate: string;
  identifier: string;
  phone: string;
  planPrice: number;
  setCarPlate: React.Dispatch<React.SetStateAction<string>>;
  setIdentifier: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setPlanPrice: React.Dispatch<React.SetStateAction<number>>;
}

interface UserProviderProps {
  children?: ReactNode;
}

const UserContext = React.createContext<ContextValueTypes | null>(null);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [carPlate, setCarPlate] = React.useState("");
  const [identifier, setIdentifier] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [planPrice, setPlanPrice] = React.useState(20);

  const contextValues: ContextValueTypes = {
    carPlate,
    identifier,
    phone,
    planPrice,
    setCarPlate,
    setPhone,
    setIdentifier,
    setPlanPrice,
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
