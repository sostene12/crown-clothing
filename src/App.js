import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="hats" element={<HatsPage />} />
        <Route path="sneakers" element={<Sneakers />} />
      </Routes>
    </div>
  );
}

export default App;

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

const Sneakers = () => {
  return (
    <div>
      <h1>Sneakers Page</h1>
    </div>
  );
};
