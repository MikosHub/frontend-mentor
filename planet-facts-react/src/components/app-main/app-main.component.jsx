import { useState } from "react";
import PlanetImage from "../planet-images/planet-image.component";
import PlanetInfo from "../planet-info/planet-info.component";
import DisplaySelection from "../display-selection/display-selection.component";
import "./app-main.styles.css";
import StatList from "../stat-list/stat-list.component";

const AppMain = ({ currentPlanet }) => {
  const [currentDisplay, setCurrentDisplay] = useState("overview");

  const onChangeDisplay = (newDisplay) => {
    if (!["overview", "geology", "structure"].includes(newDisplay)) return;

    setCurrentDisplay(newDisplay);
  };

  return (
    <main className={`planet-${currentPlanet}-active`}>
      <DisplaySelection
        currentDisplay={currentDisplay}
        onChangeDisplay={onChangeDisplay}
      />
      <PlanetImage
        currentPlanet={currentPlanet}
        currentDisplay={currentDisplay}
      ></PlanetImage>
      <PlanetInfo
        currentPlanet={currentPlanet}
        currentDisplay={currentDisplay}
      />
      <StatList currentPlanet={currentPlanet} />
    </main>
  );
};

export default AppMain;
