import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JunardVillahermosa } from "./pages/junardvillahermosa";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/junard-villahermosa" element={<JunardVillahermosa />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
