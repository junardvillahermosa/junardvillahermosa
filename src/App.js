import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JunardVillahermosa } from "./pages/junardvillahermosa";

function App() {
  return (
    <Router basename="/junardvillahermosa">
      <Routes>
        <Route path="/" element={<JunardVillahermosa />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
