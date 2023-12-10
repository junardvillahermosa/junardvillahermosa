import { Routes, Route } from "react-router";
import { JunardVillahermosa } from "./pages/junardvillahermosa";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JunardVillahermosa />}></Route>

    </Routes>
  );
}

export default App;
