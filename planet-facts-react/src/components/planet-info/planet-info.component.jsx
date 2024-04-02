import data from "../../data.json";
import linkIcon from "../../images/icon-source.svg";
import "./planet-info.styles.css";

const PlanetInfo = ({ currentPlanet, currentDisplay }) => {
  const { name } = data[currentPlanet];
  const { content, source } = data[currentPlanet][currentDisplay];

  return (
    <div className="planet-info">
      <h2>{name}</h2>
      <p className="content">{content}</p>
      <p className="link">
        <span>Source:</span>
        <a
          href={source}
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
          <img
            src={linkIcon}
            alt="link icon"
          />
        </a>
      </p>
    </div>
  );
};

export default PlanetInfo;
