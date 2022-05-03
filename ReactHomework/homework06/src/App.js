import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Comments } from "./components/Comments";
import { Posts } from "./components/Posts";
import { Home } from "./components/Home";

export const App = () => {
  const [comments, setComments] = useState([]);

  function getComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((data) => data.json())
      .then((json) => setComments(json))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div id="app">
      <h1>Welcome to our page</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/comments"
          element={<Comments listOfComments={comments} />}
        />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
};
