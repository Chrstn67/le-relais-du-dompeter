import React, { useState, useEffect } from "react";
import "./Bandeau.scss";

function Banner() {
  const [isBannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setBannerVisible(false);
      } else {
        setBannerVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`banner ${isBannerVisible ? "visible" : "hidden"}`}>
      <p>Enjoy a peaceful moment in the Alsatian countryside !</p>
    </div>
  );
}

export default Banner;
