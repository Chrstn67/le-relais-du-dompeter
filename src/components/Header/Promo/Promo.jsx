import React, { useState, useEffect } from "react";
import "./Promo.scss";

function Promo() {
  const [isPromoVisible, setPromoVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setPromoVisible(false);
      } else {
        setPromoVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`promo ${isPromoVisible ? "visible" : "hidden"}`}>
      <p>10% de réduction sur votre séjour du 15 au 30 janvier 2024 !</p>
    </div>
  );
}

export default Promo;
