import PlanetSelection from "../planet-selection/planet-selection.component";

const AppHeader = ({ currentPlanet, onChangeCurrentPlanet }) => (
  <header>
    <h1>Planets</h1>
    <PlanetSelection
      currentPlanet={currentPlanet}
      onChangeCurrentPlanet={onChangeCurrentPlanet}
    />
  </header>
);

export default AppHeader;
