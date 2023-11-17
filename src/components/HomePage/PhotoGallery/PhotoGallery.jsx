import React, { useState, useEffect } from "react";
import photoData from "./PhotoGalleryData";
import // BsFillArrowLeftSquareFill,
// BsFillArrowRightSquareFill,
"react-icons/bs";
import "./PhotoGallery.scss";

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photoData.length);
  };

  // const prevSlide = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + photoData.length) % photoData.length
  //   );
  // };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="photo-gallery">
      <div className="carousel">
        {photoData.map((photo, index) => (
          <img
            key={index}
            src={photo.imageUrl}
            alt={photo.title}
            style={{
              display: index === currentIndex ? "block" : "none",
            }}
          />
        ))}
        {/* <div className="buttons-carousel">
          <BsFillArrowLeftSquareFill
            size={30}
            type="button"
            onClick={prevSlide}
          />
          <BsFillArrowRightSquareFill
            size={30}
            type="button"
            onClick={nextSlide}
          />
        </div> */}
      </div>
      <p>
        <span>
          {photoData[currentIndex].title + ",\n" + photoData[currentIndex].lieu}
        </span>
      </p>
    </div>
  );
};

export default PhotoGallery;
