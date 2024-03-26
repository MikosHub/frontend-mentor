import data from "../../data.json";
import PlanetSelectionEntry from "../planet-selection-entry/planet-selection-entry.component";
import "./planet-selection.styles.css";

const DesktopPlanetSelection = ({ currentPlanet, onChangeCurrentPlanet }) => (
  <ul className="planet-select">
    {data.map((planet, idx) => (
      <PlanetSelectionEntry
        key={idx}
        planet={{ ...planet, idx }}
        isActive={currentPlanet === idx}
        onChangeCurrentPlanet={onChangeCurrentPlanet}
      />
    ))}
  </ul>
);

export default DesktopPlanetSelection;
