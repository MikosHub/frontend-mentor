import { useState } from "react";
import AppHeader from "./components/app-header/app-header.component";
import AppMain from "./components/app-main/app-main.component";

const App = () => {
  const [currentPlanet, setCurrentPlanet] = useState(0);

  return (
    <div>
      <AppHeader
        currentPlanet={currentPlanet}
        onChangeCurrentPlanet={setCurrentPlanet}
      />
      <AppMain currentPlanet={currentPlanet} />
    </div>
  );
};

export default App;
