import PlanetSelection from "../planet-selection/planet-selection.component";
import "./app-header.styles.css";
import iconMenu from "../../images/icon-hamburger.svg";
import { useState } from "react";

const AppHeader = ({ currentPlanet, onChangeCurrentPlanet }) => {
  const planetMenuOpen = window.screen.availWidth >= 768;
  const [menuOpen, setMenuOpen] = useState(planetMenuOpen);

  return (
    <header>
      <h1>The Planets</h1>
      <img
        id="menuIcon"
        className={`${menuOpen ? "greyout" : ""}`}
        src={iconMenu}
        alt="menu icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && (
        <PlanetSelection
          currentPlanet={currentPlanet}
          onChangeCurrentPlanet={(newPlanet) => {
            setMenuOpen(false);
            onChangeCurrentPlanet(newPlanet);
          }}
        />
      )}
    </header>
  );
};

export default AppHeader;
