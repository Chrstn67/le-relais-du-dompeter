import React, { useState } from "react";
import LeafletTown from "./LeafletTown/LeafletTown";
import { Link } from "react-router-dom";
import "./Autour.scss";
import { IoMdBicycle } from "react-icons/io";
import { BiSolidBus } from "react-icons/bi";

const Festivites = () => {
  const festivitesData = [
    {
      name: "Cox Show",
      lieu: "Molsheim",
      date: "Mai",
      description:
        "Molsheim devient la capitale de la Cox ! Des centaines de célèbres 'Coccinelles' envahissent la ville le temps d'un week-end ! Venez les voir ! ",
      image: "images_festivites/coxshow.jpg",
      site: "https://www.facebook.com/CoxShow",
    },
    {
      name: "Grand Marché Annuel d'Obernai",
      lieu: "Centre-ville d'Obernai",
      date: "Le jeudi suivant l'Assomption",
      description:
        "Le Grand Marché Annuel d'Obernai est l'occasion de trouver de nombreuses promotions sur divers objets du quotidien et surtout faire le plein de souvenirs avec des produits locaux !",
      image: "images_festivites/marche_obernai.jpg",
      site: "https://www.obernai.fr/Fr/Economie/Commerce-artisanat/Marche-annuel.html",
    },
    {
      name: "Foire Européenne de Strasbourg",
      lieu: "Parc des Expositions de Strasbourg",
      date: "Deux semaines, début Septembre",
      description:
        "La Foire Européenne de Strasbourg accueille des centaines d'exposants venant présenter le fruit de leur talent ! Vibrez au rythme des animations proposées, et découvrez une grande variété de produits de consommation !",
      image: "images_festivites/foire_europeenne.jpg",
      site: "https://www.foireurop.com/",
    },
    {
      name: "Festival Bugatti",
      lieu: "Molsheim",
      date: "Du Vendredi au Dimanche, le 3ème week-end de Septembre",
      description:
        "Le Festival Bugatti attire chaque année des milliers de touristes et amateurs d'automobiles. Venez découvrir l'histoire fabuleuse de ces voitures rares et exceptionnelles !",
      image: "images_festivites/festival_bugatti.jpg",
      site: "https://www.enthousiastes-bugatti-alsace.com/",
    },
  ];

  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [busOptions, setBusOptions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const busRoutes = [
      {
        departure: "Avolsheim",
        destination: "Molsheim",
        trajet: "Avolsheim > Molsheim",
      },
      {
        departure: "Molsheim",
        destination: "Avolsheim",
        trajet: "Molsheim > Avolsheim",
      },
      {
        departure: "Avolsheim",
        destination: "Strasbourg",
        trajet: "Avolsheim > Marlenheim puis Marlenheim > Strasbourg",
      },
      {
        departure: "Molsheim",
        destination: "Strasbourg",
        trajet: "Molsheim > Marlenheim puis Marlenheim > Strasbourg",
      },
      {
        departure: "Strasbourg",
        destination: "Molsheim",
        trajet: "Starsbourg > Marlenheim puis Marlenheim > Molsheim",
      },
      {
        departure: "Strasbourg",
        destination: "Avolsheim",
        trajet: "Starsbourg > Marlenheim puis Marlenheim > Avolsheim",
      },
      {
        departure: "Avolsheim",
        destination: "Saverne",
        trajet: "Avolsheim > Wasselone puis Wasselone > Saverne",
      },
      {
        departure: "Saverne",
        destination: "Avolsheim",
        trajet: "Saverne > Wasselonne puis Wasselone > Avolsheim",
      },

      {
        departure: "Molsheim",
        destination: "Saverne",
        trajet: "Molsheim > Wasselone puis Wasselone > Saverne",
      },
      {
        departure: "Saverne",
        destination: "Molsheim",
        trajet: "Saverne > Wasselonne puis Wasselone > Molsheim",
      },

      {
        departure: "Saverne",
        destination: "Strasbourg",
        trajet:
          "Saverne > Wasselonne puis Wasselone > Marlenheim puis Marlenheim > Strasbourg",
      },
      {
        departure: "Strasbourg",
        destination: "Saverne",
        trajet:
          "Starsbourg > Marlenheim puis Marlenheim > Wasselone puis Wasselonne > Saverne",
      },
    ];

    const filteredRoutes = busRoutes.filter(
      (route) =>
        route.departure === departure && route.destination === destination
    );

    setBusOptions(filteredRoutes);
  };

  return (
    <>
      <section className="intro-page">
        <h2>Autour de vous</h2>
        <p>
          Allez visiter ces endroits touristiques, historiques ou de loisirs !
          <br />
          Partez à la découverte des plaines alsaciennes, participez aux
          festivités endémiques de notre Alsace !
        </p>

        <Link to={`/gastronomie`} className="link-to-gastro">
          <span>Gastronomie</span>
        </Link>
      </section>
      <section className="transports-trajets">
        <h3>Renseignements trajets/transport</h3>
        <div className="velo">
          <IoMdBicycle />
          <p>
            L&#39;Alsace est l&#39;une des régions les plus cyclables de France
            ! <br /> Venez découvrir la région sur des pistes cyclables
            entretenues et sécurisées.
            <br />
            Du Relais, partez en direction des villes de Molsheim, Obernai,
            Saverne ou Starsbourg, en passant par des villages uniques sur des
            pistes à votre disposition pour votre plus grand plaisir !
          </p>
        </div>
        <div className="bus">
          <BiSolidBus />
          <p>
            Si vous ne souhaitez pas prendre la voiture, vous avez l&#39;option
            du bus. <br /> Des lignes sont mises à votre disposition pour vous
            permettre de voyager en toute sécurité.
          </p>
          <div className="bus-trajet">
            <h4>Trajet en bus</h4>
            <form onSubmit={handleSubmit}>
              <label>
                <span>De</span> <br />
                <select
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                >
                  <option value="">Commune de départ</option>
                  <option value="Avolsheim">Avolsheim</option>
                  <option value="Molsheim">Molsheim</option>
                  <option value="Strasbourg">Strasbourg</option>
                  <option value="Saverne">Saverne</option>
                </select>
              </label>
              <label>
                <span>À</span>
                <br />
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option value="">Commune de destination</option>
                  <option value="Avolsheim">Avolsheim</option>
                  <option value="Molsheim">Molsheim</option>
                  <option value="Strasbourg">Strasbourg</option>
                  <option value="Saverne">Saverne</option>
                </select>
              </label>
              <button type="submit">Ligne</button>
            </form>
            <ul>
              {busOptions.map((option, index) => (
                <li key={index}>{option.trajet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <LeafletTown />
      </section>

      <section className="festivites">
        <h2>Festivités</h2>
        <p>
          Toute l&#39;année est ponctuée de festivités que vous ne trouverez
          nulle part ailleurs !
          <br />
          Venez vous délecter du patrimoine culturel alsacien !
        </p>
        <div className="festivites-list">
          {festivitesData.map((festivite, index) => (
            <div key={index} className="festivite-item">
              <h3>{festivite.name}</h3>
              <a
                href={festivite.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                Plus d&#39;infos
              </a>
              <p>
                <strong>Date :</strong> {festivite.date}
              </p>
              <p>
                <strong>Lieu :</strong> {festivite.lieu}
              </p>
              <p>{festivite.description}</p>
              <img src={festivite.image} alt={festivite.name} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Festivites;
