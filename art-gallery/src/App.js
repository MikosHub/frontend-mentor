import { Routes, Route } from "react-router";
import Home from "./routes/home/home.component";
import Locaction from "./routes/location/location.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<Locaction />} />
    </Routes>
  );
};

export default App;
