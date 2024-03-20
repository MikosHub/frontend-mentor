import data from "../../data.json";

const PlanetInfo = ({ currentPlanet, currentDisplay }) => {
  console.log(data[currentPlanet]);
  const { name } = data[currentPlanet];
  const { content, source } = data[currentPlanet][currentDisplay];

  return (
    <div>
      <h2>{name}</h2>
      <p>{content}</p>
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
