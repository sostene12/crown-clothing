import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUpPage from "./pages/sign-and-signup/signin-and-signup";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="sneakers" element={<Sneakers />} />
        <Route path="signin" element={<SignInAndSignUpPage />} />
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
