import './stat-card.styles.css';

const StatCard = ({ name, value }) => (
  <div className='stat-card'>
    <h3>{name}</h3>
    <span>{value}</span>
  </div>
);

export default StatCard;
