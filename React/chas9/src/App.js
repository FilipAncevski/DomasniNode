import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Gallery } from "./components/Gallery";
import { API_URL } from "./utils/constants";

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedImg, setSelectedImg] = useState({});

  function openPhoto(photo) {
    setSelectedImg(photo);
  }

  function closePhoto() {
    setSelectedImg({});
  }

  useEffect(() => {
    fetch(`${API_URL}/photos`)
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div id="app">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/gallery"
          element={
            <Gallery
              listOfPhotos={photos}
              openPhoto={openPhoto}
              selectedImg={selectedImg.url}
              closePhoto={closePhoto}
            />
          }
        />
      </Routes>
    </div>
  );
};
