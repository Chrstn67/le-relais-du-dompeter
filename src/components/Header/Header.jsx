import Navbar from "./Navbar/Navbar";
import Bandeau from "./Bandeau/Bandeau";
import Promo from "./Promo/Promo";

import "./header.scss";

export default function Header({ children }) {
  return (
    <header>
      <Navbar />
      <Bandeau />
      <Promo />
      <main>{children}</main>
    </header>
  );
}
