import React, { useState } from "react";
import "./Gastronomie.scss";
import LeafletGastro from "../Gastronomie/LeafletGastro/LeafletGastro";

const foodData = [
  {
    name: "Choucroute",
    image: "Choucroute.png",
    description:
      "La choucroute est un plat traditionnel associé à la cuisine alsacienne. Les ingrédients principaux de la choucroute comprennent du chou blanc fermenté naturellement avec du sel. Elle est souvent agrémentée de divers ingrédients tels que des saucisses alsaciennes, du lard alsacien, des pommes de terre et parfois d'autres viandes comme du porc. La choucroute est appréciée pour sa saveur acidulée distinctive résultant du processus de fermentation du chou.",
    category: "salé",
    lieu: "Relais",
  },
  {
    name: "Flammenkuche",
    image: "Flammenkuche.png",
    description:
      "La flammenkuche traditionnelle, également connue sous le nom de tarte flambée, est une spécialité d'Alsace. Cette délicieuse tarte fine a une base de pâte à pain ou à pizza et est garnie d'un mélange de crème fraîche, de lardons fumés, d'oignons finement émincés et d'épices. La combinaison de ces ingrédients donne à la flammenkuche une saveur délicieusement crémeuse, fumée et souvent légèrement sucrée. Elle est traditionnellement cuite au four à bois et servie chaude, faisant de cette spécialité une option savoureuse et réconfortante. Il en existe plusieurs variante, dont la grâtinée (au gruyère ou au munster), la végétarienne (avec des herbes vertes), la forestière (avec des champignons) pour ne citer que les plus courantes.",
    category: "salé",
    lieu: "Relais",
  },
  {
    name: "Knepfle",
    image: "Knepfle.png",
    description:
      "Les knepfle, sont une spécialité de pâtes d'origine allemande. Ils sont souvent décrits comme des petites pâtes en forme de gouttes ou de nouilles irrégulières. Les ingrédients principaux pour préparer les knepfle comprennent généralement de la farine, des œufs, du sel et de l'eau. Ces ingrédients de base sont mélangés pour former une pâte à la consistance assez épaisse, qui est ensuite cuite de différentes manières pour obtenir ces délicieuses petites pâtes. Les knepfle sont souvent servis en accompagnement de plats de viande, de sauces ou de plats en sauce.",
    category: "salé",
    lieu: "Restaurant des Vosges, Obernai",
  },
  {
    name: "Baeckeoffe",
    image: "Baeckeoffe.png",
    description:
      "Le Baeckeoffe est un plat traditionnel de la cuisine alsacienne. Il s'agit d'un ragoût mijoté lentement, composé principalement de trois types de viandes (agneau, bœuf et porc), de pommes de terre, d'oignons et d'aromates tels que le thym et le laurier. La particularité de ce plat réside dans la cuisson lente au four dans une terrine en terre cuite, ce qui permet aux saveurs de se mélanger harmonieusement. Le Baeckeoffe est souvent considéré comme un plat convivial et familial, typique de la région alsacienne.",
    category: "salé",
    lieu: "Relais",
  },
  {
    name: "Fleischschnacke",
    image: "Fleischschnacka.png",
    description:
      "Le Fleischschnacke est un plat traditionnel alsacien qui se compose principalement de viande hachée, souvent du bœuf, mélangée avec des ingrédients tels que des oignons, des herbes aromatiques et parfois du pain trempé dans du lait. Cette préparation est ensuite enveloppée dans une pâte à nouilles et cuite au four. Les épices et les assaisonnements peuvent varier selon les recettes familiales, mais la base du Fleischschnacke repose sur l'utilisation de viande hachée et de pâte à nouilles.",
    category: "salé",
    lieu: "Relais",
  },
  {
    name: "Presskopf",
    image: "Presskopf.png",
    description:
      "Le Presskopf est un plat traditionnel alsacien, une terrine froide à base de viande de porc. Les ingrédients principaux incluent généralement de la tête de porc, des pieds de porc, du lard, des épices et des aromates. Ce plat est caractérisé par sa texture gélatineuse due à la cuisson lente de la tête et des pieds de porc, formant ainsi une terrine compacte et savoureuse.",
    category: "salé",
    lieu: "Relais",
  },
  {
    name: "Munster",
    image: "Munster.png",
    description:
      "Le munster est un fromage à pâte molle et à croûte lavée, fait avec du lait de vache. Les ingrédients que sont les ferments lactiques, la présure, le sel et le penicillium sont associés à des techniques de fabrication spécifiques et un affinage approprié, donnant au munster sa saveur riche et son arôme prononcé.",
    category: "salé",
    lieu: "Relais",
  },

  {
    name: "Kougelhopf",
    image: "Kougelhopf.png",
    description:
      "Le Kougelhopf est une spécialité de pâtisserie d'origine alsacienne. Il s'agit d'un gâteau levé, généralement en forme de couronne dûe à la forme caractéristique des moules en terre cuite utilisés pour la cuisson. Les ingrédients principaux incluent de la farine, du sucre, des œufs, du beurre, des fruits secs (comme des raisins, des noix ou des amandes), du lait ou de la crème, ainsi que de la levure pour donner au gâteau sa texture aérée. Son goût délicieusement sucré et sa texture moelleuse en font une douceur appréciée dans la cuisine alsacienne. Il existe aussi des variantes salées dont la plus commune est le Kougelhopf aux lardons.",
    category: "sucré",
    lieu: "Relais",
  },
  {
    name: "Bredele",
    image: "Bredele.png",
    description:
      "Le Bredele est un délicieux petit gâteau sec traditionnel alsacien, souvent préparé pendant la période hivernale. On peut le décliner en différentes formes et saveurs. Les ingrédients principaux des Bredele incluent généralement la farine, le sucre, le beurre, les œufs, ainsi que des épices telles que la cannelle, la muscade ou le zeste d'agrumes. Les Bredele peuvent également être agrémentés de fruits secs, de noix ou de confiture, selon la variété choisie. Ces biscuits sont appréciés pour leur texture croquante et leur goût délicieusement parfumé, faisant d'eux une gourmandise prisée lors des petites et grands enfants.",
    category: "sucré",
    lieu: "Relais",
  },
  {
    name: "Mannele",
    image: "Mannele.png",
    description:
      "Le Mannele est une brioche nature ou avec des pépites de chocolat. Très prisée en fin d'année, il s'agit d'une douceur idéale à déguster durant les petit-déjeuners ou en goûter.",
    category: "sucré",
    lieu: "Relais",
  },
  {
    name: "Schwarzwalder",
    image: "Schwartzwalder.png",
    description:
      "La Schwarzwalder, également connu sous le nom de Forêt-Noire, est un célèbre gâteau originaire de la région de la Forêt-Noire en Allemagne. Les ingrédients principaux de ce gâteau comprennent généralement une génoise au chocolat imbibée de kirch (une eau-de-vie de cerise), des cerises, de la crème chantilly et du chocolat rapé. Ces ingrédients sont assemblés de manière à créer un gâteau en couches délicieux et visuellement attrayant. Le Schwarzwalder est célèbre pour son mariage de saveurs de chocolat, de cerises et de crème, ce qui en fait un dessert apprécié dans le monde entier.",
    category: "sucré",
    lieu: "Pâtisserie Gross, Rosheim",
  },
  {
    name: "Pains d'épice",
    image: "Pain_epice.png",
    description:
      "Les pains d'épice sont des délices sucrés, reconnus pour leur saveur chaleureuse et épicée. Les ingrédients principaux incluent généralement la farine, le miel, les épices (comme la cannelle, le gingembre, la muscade et le clou de girofle), le sucre, le beurre, parfois des fruits confits et des œufs. Ces éléments combinés créent une texture moelleuse et très parfumée, caractéristique des pains d'épice.",
    category: "sucré",
    lieu: "Relais",
  },
  {
    name: "Steusel",
    image: "Steusel.png",
    description:
      "Le streusel est une garniture croustillante d'origine allemande, souvent utilisée pour saupoudrer sur des pâtisseries, des muffins, des gâteaux, ou des fruits cuits. Les ingrédients principaux du streusel incluent généralement de la farine, du sucre, du beurre et parfois des fruits à coque comme des noix. C'est une façon délicieuse d'ajouter une texture friable et sucrée à diverses préparations de pâtisseries briochées.",
    category: "sucré",
    lieu: "Relais",
  },
  {
    name: "Tarte aux questches",
    image: "Tarte_questches.png",
    description:
      "La tarte aux quetsches est une délicieuse tarte sucrée confectionnée à partir de quetsches, sur une base de pâte brisée ou sablée. Des oeufs sont souvent utilisés pour lier les ingrédients entre eux et apporter une certaine structure à la garniture. Certains recettes ajoutent une touche de crème ou de fromage blanc pour une texture plus crémeuse. Il est possible de saupoudrer le tout de sucre roux après cuisson, selon les goûts.",
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
          <img
            className="tissu-kelch"
            src="./images/verre-kelch.jpg"
            alt="Verre avec un tissu kelch alsacien"
          />
          <p>
            Savourez vos pauses en dégustant nos spécialités régionales ! <br />{" "}
            Cliquez sur une image pour plus d'informations sur les spécialités
            de notre belle région !
          </p>
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
              <p>
                {
                  foodData.find((item) => item.name === selectedFood)
                    ?.description
                }
              </p>
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
