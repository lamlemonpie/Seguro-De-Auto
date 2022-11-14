import React from "react";
import NavBar from "../../components/NavBar";

export const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="home__form">
        <input className="input--default" type="text" placeholder="Celular" />
        <input className="input--default" type="text" placeholder="Placa" />
        <div className="button--default">COTÍZALO</div>
      </div>
    </div>
  );
};
