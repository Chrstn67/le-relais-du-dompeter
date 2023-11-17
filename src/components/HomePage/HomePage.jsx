import "./HomePage.scss";
import PhotoGallery from "./PhotoGallery/PhotoGallery";

const Accueil = () => {
  return (
    <>
      <section className="photos-home">
        <PhotoGallery />
      </section>

      <section className="home">
        <div>
          <h3>Bienvenue !</h3>
          <p>
            Je vous invite à découvrir l&#39;Alsace dans toute sa splendeur. Au
            fil des quatre saisons, l&#39;une des plus belles régions de France
            vous réservera d&#39;innombrables souvenirs.
          </p>
          <p>
            Sans appréhention, même en hiver, laissez-vous surprendre par le
            charme de nos villages colorés, par la diversité de nos paysages et
            de notre culture.
          </p>
          <p>
            Accompagnées de vos amis, de votre famille et de vos enfants, venez
            découvrir et déguster nos trésors culinaires traditionnels, assortis
            de grands crus d&#39;Alsace.
          </p>
          <p>
            Venez faire un &#39;relais&#39; dans notre relais où je me ferais un
            plaisir de vous accueillir et de vous assurer des jours agréables.
          </p>
          <p>
            Situé à 25 kilomètres de Strasbourg et 3 kilomètres de Molsheim, ce
            qui sera votre lieu de séjour préféré est parfaitement palcé de
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
        </div>
      </section>

      <section className="services">
        <h2>Services</h2>
        <p>Joignez l&#39;utile à l&#39;agréable !</p>
        <ul>
          <li>Mariages</li>
          <li>Receptions</li>
          <li>Séminaires</li>
          <li>Nuitées</li>
          <li>Séjours</li>
        </ul>
      </section>
    </>
  );
};

export default Accueil;
