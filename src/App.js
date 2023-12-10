import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { JunardVillahermosa } from "./pages/junardvillahermosa";

function App() {
  return (
    <Router basename="/junardvillahermosa">
        <Route path="/" element={<JunardVillahermosa />}></Route>
    </Router>
  );
}

export default App;
