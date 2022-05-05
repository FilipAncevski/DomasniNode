import React from "react";

export const Popup = ({ selektiranaSlika, closePhoto }) => {
  return (
    <div id="popup">
      <button className="close-popup" onClick={() => closePhoto()}>
        &times;
      </button>
      <div className="popup-container">
        <img src={selektiranaSlika} alt="" />
      </div>
    </div>
  );
};
