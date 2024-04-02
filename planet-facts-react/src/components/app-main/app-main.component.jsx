import { useState } from "react";
import PlanetImage from "../planet-images/planet-image.component";
import PlanetInfo from "../planet-info/planet-info.component";
import DisplaySelection from "../display-selection/display-selection.component";
import StatList from "../stat-list/stat-list.component";
import "./app-main.styles.css";

const AppMain = ({ currentPlanet }) => {
  const [currentDisplay, setCurrentDisplay] = useState("overview");

  return (
    <main className={`planet-${currentPlanet}-active`}>
      <DisplaySelection
        currentDisplay={currentDisplay}
        onChangeDisplay={setCurrentDisplay}
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
