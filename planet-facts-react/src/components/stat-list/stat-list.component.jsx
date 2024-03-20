import data from "../../data.json";
import StatCard from "../stat-card/stat-card.component";

const stats = ["rotation", "revolution", "radius", "temperature"];

const StatList = ({ currentPlanet }) => (
  <div>
    {stats.map((stat) => (
      <StatCard
        name={stat}
        value={data[currentPlanet][stat]}
      />
    ))}
  </div>
);

export default StatList;
