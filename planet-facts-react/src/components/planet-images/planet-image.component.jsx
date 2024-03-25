import data from "../../data.json";
import "./planet-image.styles.css";

//TODO add alt texts
const PlanetImage = ({ currentPlanet, currentDisplay }) => {
  const planetName = data[currentPlanet].name.toLocaleLowerCase();
  const suffix = currentDisplay === "structure" ? "-internal" : "";

  return (
    <div className="image-container">
      <img
        className={`planet-${currentPlanet}`}
        src={require(`../../images/planet-${planetName}${suffix}.svg`)}
        alt=""
      />
      <img
        src={require(`../../images/geology-${planetName}.png`)}
        alt=""
        className={`geology ${currentDisplay === "geology" ? "" : "hidden"}`}
      />
    </div>
  );
};

export default PlanetImage;
