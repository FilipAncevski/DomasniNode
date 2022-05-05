import React, { useContext } from "react";
import { AppContext } from "../App";
import { Popup } from "./Popup";

export const Gallery = () => {
  const { photos, openPhoto, selectedPhoto } = useContext(AppContext);

  return (
    <div id="gallery">
      {photos.map((photo) => {
        return (
          <div
            className="image-holder"
            key={photo.id}
            onClick={() => openPhoto(photo)}
          >
            <img src={photo.thumbnailUrl} alt={photo.text} />
          </div>
        );
      })}
      {selectedPhoto && selectedPhoto !== "" && <Popup />}
    </div>
  );
};
