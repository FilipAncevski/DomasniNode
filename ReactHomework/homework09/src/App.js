import React from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Cake } from "./components/Cake";
import { Comments } from "./components/Comments";
import { Comment } from "./components/Comment";

export const App = () => {
  return (
    <div>
      <h2>Welcome to our page</h2>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/comments/:id" element={<Comment />} />
      </Routes>
    </div>
  );
};
