import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { iconMappings, restoMarker } from "./constantes";
import "./LeafletGastro.scss";

const LeafletInfo = () => {
  const [mapCenter, setMapCenter] = useState([48.5613977, 7.5024652]);
  const [selectedType, setSelectedType] = useState("Tous");

  const getCustomIcon = (type) => {
    return new Icon(iconMappings[type] || iconMappings.Hôtel);
  };

  const typeOptions = ["Tous", ...Object.keys(iconMappings).sort()];

  const filteredMarkers = restoMarker.filter(
    (marker) =>
      selectedType === "Tous" ||
      marker.type === selectedType ||
      marker.type === "Hôtel"
  );

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <>
      <section className="info-carte">
        <section className="intro-page">
          <h2>Bonnes adresses</h2>
          <p>Envie d'une pause réconfortante ?</p>
        </section>
        <div>
          <label htmlFor="filter">Filtrer par: </label>
          <select id="filter" onChange={handleTypeChange} value={selectedType}>
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
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={mapCenter} icon={getCustomIcon("Hôtel")}>
            <Popup>Relais du Dompeter</Popup>
          </Marker>
          <MarkerClusterGroup>
            {filteredMarkers.map((city, index) => (
              <Marker
                key={index}
                position={city.coordinates}
                icon={getCustomIcon(city.type)}
              >
                <Popup>
                  {city.name} <br />
                  {city.description.startsWith("http") ? (
                    <a
                      href={city.description}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Découvrir
                    </a>
                  ) : (
                    city.description
                  )}
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </section>
    </>
  );
};

export default LeafletInfo;
