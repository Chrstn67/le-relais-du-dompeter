import React, { useState, useEffect } from "react";
import "./ModalInfo.scss";

function ModalInfo() {
  const eventStartDate = new Date("2024-10-01"); // Date de début de l'événement
  const eventEndDate = new Date("2024-10-15"); // Date de fin de l'événement
  const [isEventActive, setIsEventActive] = useState(false);

  useEffect(() => {
    const today = new Date();

    // Vérifie si la date actuelle est dans la période de l'événement
    if (today >= eventStartDate && today <= eventEndDate) {
      setIsEventActive(true);
    } else {
      setIsEventActive(false);
    }
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      {isEventActive && (
        <div className="banner-info visible">
          <h4 className="event">Visite nocturne de Strasbourg</h4>
          <p>
            Du <span>{formatDate(eventStartDate)}</span> au{" "}
            <span>{formatDate(eventEndDate)}</span>
          </p>
          <p>Strasbourg de nuit ? C'est dingo, les potos !</p>
          <a
            href="https://www.obernai.fr/Fr/Economie/Commerce-artisanat/Marche-annuel.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site
          </a>
        </div>
      )}
    </>
  );
}

export default ModalInfo;
