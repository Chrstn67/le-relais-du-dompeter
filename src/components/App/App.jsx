import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import Footer from "../Footer/Footer";
import Logements from "../Logements/Logements";
import { logementsData } from "../Logements/constantes";
import Autour from "../Autour/Autour";
import Gastronomie from "../Gastronomie/Gastronomie";
import InfosPratiques from "../InfosPratiques/InfosPratiques";

import Contact from "../Contact/Contact";

import MentionsLegales from "../Footer/MentionsLegales/MentionsLegales";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

import NotFound from "../NotFound/NotFound";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/logements"
              element={<Logements logementsData={logementsData} />}
            />

            <Route path="/autour-de-vous" element={<Autour />} />
            <Route path="/gastronomie" element={<Gastronomie />} />

            <Route path="/infos-pratiques" element={<InfosPratiques />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
