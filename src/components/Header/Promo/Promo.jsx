import React, { useState, useEffect } from "react";
import "./Promo.scss";

function Promo() {
  const promoStartDate = new Date("2025-01-01");
  const promoEndDate = new Date("2025-04-30");
  const promoPreviewDate = new Date(promoStartDate);
  promoPreviewDate.setDate(promoPreviewDate.getDate() - 100); // 100 jours avant la promo

  const [isPromoActive, setIsPromoActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const today = new Date();
    if (today >= promoPreviewDate && today <= promoEndDate) {
      setIsPromoActive(true);
      setModalOpen(true);
    } else {
      setIsPromoActive(false);
    }
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      {modalOpen && isPromoActive && (
        <dialog open className="modal-dialog">
          <button className="close-button" onClick={handleCloseModal}>
            &times;
          </button>
          <h3>On se pose ?</h3>
          <p>
            Du
            <span> {formatDate(promoStartDate)}</span> au
            <span> {formatDate(promoEndDate)}</span>
          </p>
          <aside className="content-container">
            <div className="proposition">
              <ul style={{ listStyle: "none" }}>
                <li>2 plateaux apéritif de bienvenue</li>
                <li>2 nuitées dans une suite de 45m²</li>
                <li>2 petits-déjeuners</li>
                <li>Balade au bord de l'eau</li>
              </ul>
            </div>
            <div className="prix">125€ / personne</div>
          </aside>
        </dialog>
      )}
    </>
  );
}

export default Promo;
