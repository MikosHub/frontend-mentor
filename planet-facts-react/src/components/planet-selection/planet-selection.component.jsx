import data from "../../data.json";
import "./planet-selection.styles.css";

const DesktopPlanetSelection = ({ currentPlanet, onChangeCurrentPlanet }) => (
  <ul className="desktop-planet-select">
    {data.map((planet, idx) => (
      <li
        key={idx}
        className={`planet-${currentPlanet} ${
          currentPlanet === idx ? "active" : ""
        }`}
        onClick={() => onChangeCurrentPlanet(idx)}
      >
        {planet.name}
      </li>
    ))}
  </ul>
);

export default DesktopPlanetSelection;
