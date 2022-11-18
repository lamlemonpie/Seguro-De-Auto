import React from "react";
import Checkbox from "../../components/Checkbox";
import Dropdown from "../../components/Dropdown";
import NavBar from "../../components/NavBar";
import HomeDescription from "./HomeDescription";
import HomeForm from "./HomeForm";

export const Home: React.FC = () => {
  return (
    <div className="home__root">
      <div className="home__header_background" />

      <NavBar isTransparent />

      <div className="home__container">
        <HomeDescription />

        <HomeForm />
      </div>
    </div>
  );
};
