import { useState } from "react";
import "./navbar.scss";

function deconnectUser(){
  localStorage.clear();
  window.location = "/";
}

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
        <button onClick={deconnectUser}>Déconnexion</button>
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
