import React from "react";
import "../css/Weather.css";
import PropTypes from "prop-types";

export const Weather = ({ data }) => {
  return (
    <div className="weather">
      <p>
        On this page a will present you a detailed condition about the Weather
        in 3 cities in Macedonia
      </p>

      {data.map((city, i) => {
        return (
          <div className="city" key={i}>
            <h1>
              City number {i + 1} is {city.name}
            </h1>
            <p>
              Today {city.name} has a maximum temperature of{" "}
              {city.main.temp_max} and a minimum of {city.main.temp_min}{" "}
              Celcius. The current temperature is {city.main.temp} Celcius. The
              weather today has a{" "}
              {city.weather.map((info, i) => info.description)} and winds with
              the speed of {city.wind.speed * 10}km/h, with humidity of{" "}
              {city.main.humidity}%. The latitude is {city.coord.lat} and the
              longitude {city.coord.lon}
            </p>
          </div>
        );
      })}
    </div>
  );
};

Weather.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
