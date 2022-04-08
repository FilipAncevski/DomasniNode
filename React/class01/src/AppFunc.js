import React from "react";
import { Hello } from "./components/Hello";
import "./css/AppFunc.css";

export const AppFunc = () => {
  return (
    <div id="app-func" style={{ backgroundColor: "coral" }}>
      <h2 style={{ color: "magenta", backgroundColor: "aqua" }}>
        Functional Component Text
      </h2>
      <Hello />
      <p style={{ color: "magenta", backgroundColor: "aqua" }}>5+3</p>
      <p style={{ color: "magenta", backgroundColor: "aqua" }}>{5 + 3}</p>
      <div className="filip">
        <h1> Proverka za import na CSS</h1>
      </div>
    </div>
  );
};
