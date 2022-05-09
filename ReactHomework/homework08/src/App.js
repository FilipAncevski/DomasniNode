import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import Burgers from "./components/Burgers";
import { VeganBurgers } from "./components/VeganBurgers";

export const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burgers" element={<Burgers />} />
        <Route path="/veganburgers" element={<VeganBurgers />} />
      </Routes>
    </div>
  );
};
