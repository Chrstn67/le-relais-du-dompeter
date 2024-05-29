import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { iconMappings, townMarker } from "./constantes";
import "./LeafletTown.scss";

const LeafletTown = () => {
  const [mapCenter, setMapCenter] = useState([48.5613977, 7.5024652]);
  const [selectedType, setSelectedType] = useState("Tous");

  const getCustomIcon = (type) => {
    return new Icon(iconMappings[type] || iconMappings.Hôtel);
  };

  const typeOptions = ["Tous", ...Object.keys(iconMappings).sort()];

  const filteredMarkers = townMarker.filter(
    (marker) =>
      selectedType === "Tous" ||
      marker.type === selectedType ||
      marker.type === "Hotel"
  );

  const renderPopup = (marker) => {
    if (marker.type === "Randonnée") {
      // Popup pour les sentiers de randonnée
      return (
        <Popup>
          {marker.name} <br />
          <a
            href={marker.description}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visiter le site
          </a>
          <section className="infos-randos">
            <span>Niveau d&#39;effort: </span>
            <div>
              <img src={marker.images.effort} alt="Niveau d'effort" />
            </div>
            <span>Niveau de risque: </span>
            <div>
              <img src={marker.images.risk} alt="Niveau de risque" />
            </div>
            <span>Niveau technique: </span>
            <div>
              <img src={marker.images.technique} alt="Niveau technique" />
            </div>
          </section>
        </Popup>
      );
    } else {
      return (
        <Popup>
          {marker.name} <br />
          <a
            href={marker.description}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visiter le site
          </a>
        </Popup>
      );
    }
  };

  return (
    <>
      <section className="intro-page">
        <h2>À visiter</h2>
        <p>
          Découvrez les lieux incontournables autour du Relais du Dompeter :{" "}
          <br />
          Sentiers de randonnée, châteaux, musées, parcs animaliers...
        </p>
      </section>
      <section className="info-carte">
        <div>
          <label htmlFor="filter">Filtrer par: </label>
          <select
            id="filter"
            onChange={(e) => setSelectedType(e.target.value)}
            value={selectedType}
          >
            {typeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <MapContainer
          center={mapCenter}
          zoom={13}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={mapCenter} icon={getCustomIcon("Hotel")}>
            <Popup>Hôtel</Popup>
          </Marker>
          <MarkerClusterGroup>
            {filteredMarkers.map((city, index) => (
              <Marker
                key={index}
                position={city.coordinates}
                icon={getCustomIcon(city.type)}
              >
                {renderPopup(city)}
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </section>
    </>
  );
};

export default LeafletTown;
