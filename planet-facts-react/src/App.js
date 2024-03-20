import { useState } from "react";
import AppHeader from "./components/app-header/app-header.component";
import AppMain from "./components/app-main/app-main.component";

const App = () => {
  const [currentPlanet, setCurrentPlanet] = useState(0);

  const onChangeCurrentPlanet = (newPlanet) => {
    setCurrentPlanet(newPlanet);
  };

  return (
    <div>
      <AppHeader
        currentPlanet={currentPlanet}
        onChangeCurrentPlanet={onChangeCurrentPlanet}
      />
      <AppMain currentPlanet={currentPlanet} />
    </div>
  );
};

export default App;
