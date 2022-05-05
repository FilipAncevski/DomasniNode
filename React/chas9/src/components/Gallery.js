import React from "react";
import PropTypes from "prop-types";
import { Popup } from "./Popup";

export const Gallery = ({
  listOfPhotos,
  openPhoto,
  selectedImg,
  closePhoto,
}) => {
  return (
    <div id="gallery">
      {listOfPhotos.slice(0, 50).map((photo) => {
        return (
          <div
            className="image-holder"
            onClick={() => openPhoto(photo)}
            key={photo.id}
          >
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        );
      })}
      {selectedImg && selectedImg !== "" && (
        <Popup selektiranaSlika={selectedImg} closePhoto={closePhoto} />
      )}
    </div>
  );
};

Gallery.propTypes = {
  listOfPhotos: PropTypes.arrayOf(PropTypes.object).isRequired,
  openPhoto: PropTypes.func,
  selectedImg: PropTypes.string,
  closePhoto: PropTypes.func,
};
