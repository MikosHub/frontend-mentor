import data from "../../data.json";
import './planet-info.styles.css';

const PlanetInfo = ({ currentPlanet, currentDisplay }) => {
  const { name } = data[currentPlanet];
  const { content, source } = data[currentPlanet][currentDisplay];

  return (
    <div className="planet-info">
      <h2>{name}</h2>
      <p className="content">{content}</p>
      <p>
        Source:{" "}
        <a
          href={source}
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
        </a>
      </p>
    </div>
  );
};

export default PlanetInfo;
