import React from "react";
import "../css/Movie.css";

export const Movie = (props) => {
  console.log(props);
  return (
    <div id="main">
      <div>
        {props.movies.map((movie, i) => {
          return (
            <div id="container">
              <div className="description">
                <h1 key={i}>{movie.title}</h1>
                <h2>
                  {movie.title} was released on the {movie.date}
                </h2>
                <ul>
                  {movie.genre.map((genre, i) => (
                    <li key={i}>{genre}</li>
                  ))}
                </ul>
                <h3>
                  To view the movie at Imbd, click{" "}
                  <a href={movie.imdbLink}>here</a>
                </h3>
              </div>
              <div className="image">
                <img src={movie.imgUrl} alt="pla"></img>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};
