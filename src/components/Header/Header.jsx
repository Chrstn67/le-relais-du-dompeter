import Navbar from "./Navbar/Navbar";
import Bandeau from "./Bandeau/Bandeau";
import Promo from "./Promo/Promo";

import "./Header.scss";

export default function Header({ children }) {
  return (
    <header>
      <section className="Logo-Title">
        <h1>Relais du Dompeter</h1>
        <img src="./LogoDompeter.png"></img>
      </section>
      <Bandeau />

      <Navbar />

      <Promo />
      <main>{children}</main>
    </header>
  );
}
