import React, { useContext } from "react";
import { AppContext } from "../App";

export const Popup = () => {
  const { selectedPhoto, closePhoto, deletePhoto } = useContext(AppContext);
  return (
    <div id="popup">
      <button className="close-popup" onClick={() => closePhoto()}>
        &times;
      </button>
      <div className="popup-container">
        <button type="button" onClick={() => deletePhoto(selectedPhoto)}>
          Delete
        </button>
        <img src={selectedPhoto.url} alt={selectedPhoto.title} />
      </div>
    </div>
  );
};
