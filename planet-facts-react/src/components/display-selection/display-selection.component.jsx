import "./display-selection.styles.css";

const displayTypes = ["overview", "structure", "geology"];

const DisplaySelection = ({ currentDisplay, onChangeDisplay }) => (
  <ul className="display-select-container">
    {displayTypes.map((type) => (
      <li
        key={type}
        className={`display-select ${currentDisplay === type ? "active" : ""}`}
        onClick={() => onChangeDisplay(type)}
      >
        {type}
      </li>
    ))}
  </ul>
);

export default DisplaySelection;
