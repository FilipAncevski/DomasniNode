import React from "react";
import { Movie } from "./components/Movie";

const movies = [
  {
    title: "The Batman",
    date: "1 March 2022",
    genre: ["Action", "Crime", "Drama"],
    imdbLink: "https://www.imdb.com/title/tt1877830/?ref_=nv_sr_srsg_0",
    imgUrl:
      "https://wegotthiscovered.com/wp-content/uploads/2021/10/image4-4.jpg",
  },
  {
    title: "Shutter Island",
    date: "13 February 2010",
    genre: ["Mystery", "Thriller"],
    imdbLink: "https://www.imdb.com/title/tt1130884/?ref_=nv_sr_srsg_0",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    title: "Inception",
    date: "8 July 2010",
    genre: ["Action", "Adventure", "Sci-Fi"],
    imdbLink: "https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0",
    imgUrl: "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
  },
  {
    title: "The Dark Knight",
    date: "14 July 2008",
    genre: ["Action", "Crime", "Drama"],
    imdbLink: "https://www.imdb.com/title/tt0468569/",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    title: "The Prestige",
    date: "17 October 2006",
    genre: ["Drama", "Mystery", "Thriller"],
    imdbLink:
      "https://www.imdb.com/title/tt0482571/?ref_=hm_tpks_tt_i_23_pd_tp1_cp",
    imgUrl: "https://m.media-amazon.com/images/I/51wILNNX2VL._SY445_.jpg",
  },
];

export const App = () => {
  return (
    <div id="app">
      <h1>My top 5 movies</h1>
      <Movie movies={movies} />
    </div>
  );
};

// za Domashna: da se prikaze vo dopolnitelen fajl lista od filmovi (minimum 5 po vash izbor)
// izdefinirana vo app so atributi {name,date,genre plot,imdbLink,imgUrl}
// listata na atributi prikaz i slika za filmot (slikata ne mora da bide od imdb),
