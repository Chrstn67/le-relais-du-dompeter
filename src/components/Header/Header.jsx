import Navbar from "./Navbar/Navbar";
import Bandeau from "./Bandeau/Bandeau";

import "./header.scss";

export default function Header({ children }) {
  return (
    <header>
      <Navbar />
      <Bandeau />
      <main>{children}</main>
    </header>
  );
}
