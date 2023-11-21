import React from "react";
import "./Gastronomie.scss";

const foodData = [
  { name: "Kougelhopf", image: "Kougelhopf.png" },
  { name: "Bredele", image: "Bredele.png" },
  { name: "Mannele", image: "Mannele.png" },
  { name: "Schwartzwalder", image: "Schwartzwalder.png" },
  { name: "Pains d'épice", image: "Pain_epice.png" },
  { name: "Steutzel", image: "Steutzel.png" },
  { name: "Flammenkuche", image: "Flammenkuche.png" },

  { name: "Knepfle", image: "Knepfle.png" },
  { name: "Baeckeoffe", image: "Baeckeoffe.png" },
  { name: "Fleischschnacka", image: "Fleischschnacka.png" },
  { name: "Presskopf", image: "Presskopf.png" },
  { name: "Munster", image: "Munster.png" },
  { name: "Choucroute", image: "Choucroute.png" },
];

const Gastronomie = () => {
  return (
    <>
      <section className="food">
        <div>
          <h3>Qu&#39;est-ce qu&#39;on mange à midi ?</h3>
          <p>Savourez vos pauses en dégustant nos spécialités régionales !</p>
        </div>
        <div className="picture-food">
          <ul className="word-cloud">
            {foodData.map((foodItem, index) => (
              <li key={index} className="food-list">
                <img
                  src={`./images/Gastronomie/${foodItem.image}`}
                  alt={foodItem.name}
                />
                <p>{foodItem.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
export default Gastronomie;
