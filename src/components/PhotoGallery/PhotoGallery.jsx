// PhotoGallery.js
import React, { useState } from "react";

import photoData from "./PhotoGalleryData";
import "./PhotoGallery.scss";

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeGallery = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery">
      {photoData.map((photo, index) => (
        <div
          key={index}
          className="photo-item"
          onClick={() => handleClick(photo)}
        >
          <img src={photo.imageUrl} alt={photo.title} />
        </div>
      ))}

      {selectedPhoto && (
        <div className="modal">
          <img src={selectedPhoto.imageUrl} alt={selectedPhoto.title} />
          <p>{selectedPhoto.title}</p>
          <button onClick={closeGallery}>Fermer</button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
