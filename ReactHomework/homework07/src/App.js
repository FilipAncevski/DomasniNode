import React, { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { API_URL } from "./utils/constats";

export const AppContext = createContext();

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  function openPhoto(photo) {
    setSelectedPhoto(photo);
  }

  function closePhoto() {
    setSelectedPhoto({});
  }

  function deletePhoto(selectedPhoto) {
    setPhotos([...photos.filter((img) => img.id !== selectedPhoto.id)]);
    setSelectedPhoto({});
  }

  useEffect(() => {
    fetch(`${API_URL}/photos`)
      .then((res) => res.json())
      .then((json) => setPhotos(json.slice(0, 50)))
      .catch((err) => alert(err));
  }, []);

  return (
    <AppContext.Provider
      value={{
        photos,
        setPhotos,
        selectedPhoto,
        openPhoto,
        closePhoto,
        deletePhoto,
      }}
    >
      <div id="app">
        <h1>Learning useContext</h1>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};
