import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import PhotoGallery from "./PhotoGallery/PhotoGallery";

const Accueil = () => {
  const servicesArray = [
    "Mariages",
    "Receptions",
    "Séminaires",
    "Nuitées",
    "Vacances",
  ].filter(Boolean);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesArray.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [servicesArray]);

  return (
    <>
      <section className="photos-home">
        <PhotoGallery />
      </section>

      <section className="home">
        <div>
          <h2>Bienvenue !</h2>
          <p>
            Je vous invite à découvrir l&#39;Alsace dans toute sa splendeur. Au
            fil des quatre saisons, l&#39;une des plus belles régions de France
            vous réservera d&#39;innombrables souvenirs.
          </p>
          <p>
            Sans appréhension, même en hiver, laissez-vous surprendre par le
            charme de nos villages colorés, par la diversité de nos paysages et
            de notre culture.
          </p>
          <p>
            Accompagnés de vos amis, de votre famille et de vos enfants, venez
            découvrir et déguster nos trésors culinaires traditionnels, assortis
            de grands crus d&#39;Alsace.
          </p>
          <p>
            Venez faire un &#39;relais&#39; dans notre relais où je me ferai un
            plaisir de vous accueillir et de vous assurer des jours agréables.
          </p>
          <p>
            Situé à 25 kilomètres de Strasbourg et 3 kilomètres de Molsheim, ce
            qui sera votre lieu de séjour préféré est parfaitement placé de
            manière à vous assurer des déplacements des plus faciles !
          </p>
          <p>Mon souhait ? Que votre rêve Alsacien devienne une réalité !</p>
          <p className="signature">Marie-Jo Vetter-Brucker</p>
        </div>
        <div className="picture-home">
          <img
            src="./images/Relais/cour-accueil.jpg"
            alt="Cour intérieure du Relais du Dompeter"
          ></img>
          <img
            src="./images/Relais/arriere_cour.jpg"
            alt="Cour vue du fond de la propriété"
          ></img>
          <img
            src="./images/Relais/piscine_1.jpg"
            alt="Cour intérieure du Relais du Dompeter"
          ></img>
          <img
            src="./images/Relais/piscine_2.jpg"
            alt="Cour intérieure du Relais du Dompeter"
          ></img>
          <img
            src="./images/Relais/arriere_cours.jpg"
            alt="Cour vue du fond de la propriété"
          ></img>
        </div>
      </section>

      <section className="services">
        <h2>Services</h2>
        <p>
          Nous vous proposons les services suivants, pour vous offrir un
          meilleur un séjour de qualité
        </p>

        <ul>
          <li>{servicesArray[currentIndex]}</li>
        </ul>
      </section>
    </>
  );
};

export default Accueil;
