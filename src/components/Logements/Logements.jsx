import React, { useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { logementsData } from "./constantes";
import "./Logements.scss";

const Logements = () => {
  const [currentIndex, setCurrentIndex] = useState(logementsData.map(() => 0));

  const nextSlide = (logementIndex) => {
    setCurrentIndex((prevIndex) =>
      prevIndex.map((value, index) =>
        index === logementIndex
          ? (value + 1) % logementsData[index].photos.length
          : value
      )
    );
  };

  const prevSlide = (logementIndex) => {
    setCurrentIndex((prevIndex) =>
      prevIndex.map((value, index) =>
        index === logementIndex
          ? (value - 1 + logementsData[index].photos.length) %
            logementsData[index].photos.length
          : value
      )
    );
  };

  return (
    <>
      <section className="intro-page-logements">
        <h2>Logements</h2>
        <p>
          Découvrez les 5 logements proposés et réservez celui qui vous
          convient.
        </p>
        <button>
          <a
            href="https://www.booking.com/hotel/fr/relais-du-dompeter-avolsheim1.fr.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            RÉSERVEZ <br />
            <p className="booking">Via Booking.com</p>
          </a>
        </button>
      </section>

      <section className="logements-list">
        {logementsData.map((logement, logementIndex) => (
          <section key={logement.id} className={`logement-${logement.id}`}>
            <h2>{logement.titre}</h2>
            <p className="description-logement">{logement.description}</p>

            <div className="carousel">
              {logement.photos.map((photo, photoIndex) => (
                <img
                  key={photoIndex}
                  src={photo}
                  alt={`Photo ${photoIndex + 1}`}
                  style={{
                    display:
                      photoIndex === currentIndex[logementIndex]
                        ? "block"
                        : "none",
                  }}
                />
              ))}
              <div className="buttons-carousel">
                <BsFillArrowLeftSquareFill
                  size={30}
                  type="button"
                  onClick={() => prevSlide(logementIndex)}
                />
                <BsFillArrowRightSquareFill
                  size={30}
                  type="button"
                  onClick={() => nextSlide(logementIndex)}
                />
              </div>
            </div>

            <div className="description">
              <ul>
                {logement.caracteristiquesGenerales.map(
                  (caracteristique, index) => (
                    <li key={index}>{caracteristique}</li>
                  )
                )}
              </ul>

              <p>
                {logement.accesHandicape
                  ? "Accès handicapé disponible."
                  : "Pas d'accès handicapé."}
              </p>

              <p className="electro">
                <span>Électroménagers:</span> <br />
                {logement.appareilsElectromenagers.join(", ")}
              </p>

              <div className="chambres">
                <p>Chambres:</p>
                <ul>
                  <li>
                    <span>Nombre de chambres:</span>{" "}
                    {logement.chambres.nombreChambre}
                  </li>
                  {Object.keys(logement.chambres).map((chambreKey) => {
                    if (chambreKey !== "nombreChambre") {
                      const chambreName = chambreKey.replace("_", " ");
                      const chambreDisplayName =
                        chambreName.charAt(0).toUpperCase() +
                        chambreName.slice(1);

                      const chambreItems =
                        logement.chambres[chambreKey][0].split(", ");

                      return (
                        <li key={chambreKey}>
                          <span>{chambreDisplayName}:</span> <br />
                          {chambreItems.map((item, index) => (
                            <React.Fragment key={index}>
                              {item}
                              {index < chambreItems.length - 1 && <br />}{" "}
                            </React.Fragment>
                          ))}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </section>
    </>
  );
};

export default Logements;
