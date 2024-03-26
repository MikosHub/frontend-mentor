import "./planet-selection-entry.styles.css";
import iconChevron from "../../images/icon-chevron.svg";

const PlanetSelectionEntry = ({ planet, isActive, onChangeCurrentPlanet }) => {
  console.log(planet);
  return (
    <li
      className={`planet-entry planet-${planet.idx} ${
        isActive ? "active" : ""
      }`}
      onClick={() => onChangeCurrentPlanet(planet.idx)}
    >
      <span className="color-circle"></span>
      <span className="name">{planet.name}</span>
      <img src={iconChevron} alt="" />
    </li>
  );
};

export default PlanetSelectionEntry;
