import React from "react";
import "./Gastronomie.scss";

const foodData = [
  { name: "Choucroute", image: "Choucroute.png", category: "salé" },
  { name: "Flammenkuche", image: "Flammenkuche.png", category: "salé" },
  { name: "Knepfle", image: "Knepfle.png", category: "salé" },
  { name: "Baeckeoffe", image: "Baeckeoffe.png", category: "salé" },
  { name: "Fleischschnacka", image: "Fleischschnacka.png", category: "salé" },
  { name: "Presskopf", image: "Presskopf.png", category: "salé" },
  { name: "Munster", image: "Munster.png", category: "salé" },

  { name: "Kougelhopf", image: "Kougelhopf.png", category: "sucré" },
  { name: "Bredele", image: "Bredele.png", category: "sucré" },
  { name: "Mannele", image: "Mannele.png", category: "sucré" },
  { name: "Schwarzwalder", image: "Schwartzwalder.png", category: "sucré" },
  { name: "Pains d'épice", image: "Pain_epice.png", category: "sucré" },
  { name: "Steutzel", image: "Steutzel.png", category: "sucré" },
  {
    name: "Tarte aux questches",
    image: "Tarte_questches.png",
    category: "sucré",
  },
];

const Gastronomie = () => {
  return (
    <>
      <section className="food">
        <div>
          <h3>e Gueter !</h3>
          <p>Savourez vos pauses en dégustant nos spécialités régionales !</p>
        </div>
        <div className="picture-food">
          <section className="category-container column">
            <h4 className="category-title">Salé</h4>
            <ul className="word-cloud">
              {foodData
                .filter((foodItem) => foodItem.category === "salé")
                .map((foodItem, index) => (
                  <li key={`sale-${index}`} className="food-list">
                    <img
                      src={`./images/Gastronomie/${foodItem.image}`}
                      alt={foodItem.name}
                    />
                    <p>{foodItem.name}</p>
                  </li>
                ))}
            </ul>
          </section>
          <section className="category-container column">
            <h4 className="category-title">Sucré</h4>
            <ul className="word-cloud">
              {foodData
                .filter((foodItem) => foodItem.category === "sucré")
                .map((foodItem, index) => (
                  <li key={`sucre-${index}`} className="food-list">
                    <img
                      src={`./images/Gastronomie/${foodItem.image}`}
                      alt={foodItem.name}
                    />
                    <p>{foodItem.name}</p>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
};

export default Gastronomie;
