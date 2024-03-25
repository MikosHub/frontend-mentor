import PlanetSelection from "../planet-selection/planet-selection.component";
import "./app-header.styles.css";
import iconMenu from "../../images/icon-hamburger.svg";
import { useState } from "react";

const AppHeader = ({ currentPlanet, onChangeCurrentPlanet }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <h1>The Planets</h1>
      <img
        id="menuIcon"
        src={iconMenu}
        alt="menu icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && (
        <PlanetSelection
          currentPlanet={currentPlanet}
          onChangeCurrentPlanet={onChangeCurrentPlanet}
        />
      )}
    </header>
  );
};

export default AppHeader;
