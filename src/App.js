import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="sneakers" element={<Sneakers />} />
      </Routes>
    </div>
  );
}

export default App;

const Sneakers = () => {
  return (
    <div>
      <h1>Sneakers Page</h1>
    </div>
  );
};
