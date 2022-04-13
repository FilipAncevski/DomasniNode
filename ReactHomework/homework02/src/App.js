import React from "react";
import { Weather } from "./components/Weather";
import { data } from "./data/weather_api";

export const App = () => {
  return (
    <div id="app">
      <p>Welcome to my Weather App</p>
      <Weather data={data} />
    </div>
  );
};
