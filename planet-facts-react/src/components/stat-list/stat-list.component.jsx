import data from "../../data.json";
import StatCard from "../stat-card/stat-card.component";
import './stat-list.styles.css'

const stats = {
  rotation: 'rotation time',
  revolution: 'revolution time',
  radius: 'radius',
  temperature: 'average temp.'
}

const StatList = ({ currentPlanet }) => (
  <div className="stat-list">
    {Object.keys(stats).map((stat) => (
      <StatCard
        name={stats[stat]}
        value={data[currentPlanet][stat]}
      />
    ))}
  </div>
);

export default StatList;
