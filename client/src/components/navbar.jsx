import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className="intranet">
        <h1>
          Intranet<span>Intranet</span>
        </h1>
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Liste</a>
        <a href="/about">Mon profil</a>
        <a href="/service">Déconnexion</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
