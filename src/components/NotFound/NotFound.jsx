import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <section className="NotFound">
      <h1>Erreur 404 - Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez est introuvable.</p>
      <Link to="/">Retour à la page d&#39;accueil</Link>
    </section>
  );
}

export default NotFound;
