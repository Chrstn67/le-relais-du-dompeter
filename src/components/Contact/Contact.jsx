import React from "react";
import "./Contact.scss";

const ContactPage = () => {
  return (
    <>
      <section className="contact-page">
        <h2>Besoin de renseignements supplémentaires ?</h2>
        <p>Vous avez des questions ou des préoccupations ? Contactez-moi !</p>
        <p>
          Je me fais un plaisir de vous aider à rendre votre séjour le plus
          agréable possible !
        </p>
      </section>

      <section className="contact-info">
        <h2>Informations de contact</h2>
        <p>Marie-Josée &#39;Marie-Jo&#39; VETTER-BRUCKER</p>
        <p>
          <span>Adresse: </span> <br /> 2, Rue du Dompeter 67120 AVOLSHEIM
        </p>

        <p>
          <span>Téléphone:</span> <br />{" "}
          <a href="tel:+33765161969">+33 (0)7 65 16 19 69</a>
        </p>
        <p>
          <span>Email:</span> <br />
          <a href="mailto:mjo.vetter@gmail.com ">mjo.vetter@gmail.com</a>
        </p>
      </section>
    </>
  );
};

export default ContactPage;
