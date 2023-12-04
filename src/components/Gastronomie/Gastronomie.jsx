import React, { useState } from "react";
import "./Gastronomie.scss";
import LeafletGastro from "../Gastronomie/LeafletGastro/LeafletGastro";

const foodData = [
  {
    name: "Choucroute",
    image: "Choucroute.png",
    category: "salé",
    lieu: "Relais",
  },
  {
    name: "Flammenkuche",
    image: "Flammenkuche.png",
    category: "salé",
    lieu: "Relais",
  },
  { name: "Knepfle", image: "Knepfle.png", category: "salé", lieu: "Relais" },
  {
    name: "Baeckeoffe",
    image: "Baeckeoffe.png",
    category: "salé",
    lieu: "Relais",
  },
  {
    name: "Fleischschnacka",
    image: "Fleischschnacka.png",
    category: "salé",
    lieu: "Relais",
  },
  {
    name: "Presskopf",
    image: "Presskopf.png",
    category: "salé",
    lieu: "Relais",
  },
  { name: "Munster", image: "Munster.png", category: "salé", lieu: "Relais" },

  {
    name: "Kougelhopf",
    image: "Kougelhopf.png",
    category: "sucré",
    lieu: "Relais",
  },
  { name: "Bredele", image: "Bredele.png", category: "sucré", lieu: "Relais" },
  { name: "Mannele", image: "Mannele.png", category: "sucré", lieu: "Relais" },
  {
    name: "Schwarzwalder",
    image: "Schwartzwalder.png",
    category: "sucré",
    lieu: "Relais",
  },
  {
    name: "Pains d'épice",
    image: "Pain_epice.png",
    category: "sucré",
    lieu: "Relais",
  },
  {
    name: "Steutzel",
    image: "Steutzel.png",
    category: "sucré",
    lieu: "Relais",
  },
  {
    name: "Tarte aux questches",
    image: "Tarte_questches.png",
    category: "sucré",
    lieu: "Relais",
  },
];

const Gastronomie = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodItemClick = (foodName) => {
    setSelectedFood(foodName);
  };

  const handleCloseModal = () => {
    setSelectedFood(null);
  };

  const getLieuFromFoodName = (foodName) => {
    const foodItem = foodData.find((item) => item.name === foodName);
    return foodItem ? foodItem.lieu : null;
  };

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
                  <li
                    key={`sale-${index}`}
                    className="food-list"
                    onClick={() => handleFoodItemClick(foodItem.name)}
                  >
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
                  <li
                    key={`sucre-${index}`}
                    className="food-list"
                    onClick={() => handleFoodItemClick(foodItem.name)}
                  >
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
        {selectedFood && (
          <aside className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedFood}</h2>
              <img
                src={`./images/Gastronomie/${
                  foodData.find((item) => item.name === selectedFood).image
                }`}
                alt={selectedFood}
              />
              <p>
                À déguster : <br /> {getLieuFromFoodName(selectedFood)}
              </p>
              <button onClick={handleCloseModal}>Fermer</button>
            </div>
          </aside>
        )}
      </section>
      <LeafletGastro />
    </>
  );
};

export default Gastronomie;
