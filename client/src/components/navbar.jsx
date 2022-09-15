import { useState } from "react";
import "./navbar.scss";
import { FiPower } from 'react-icons/fi';

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
        <a href="/list">Liste</a>
        <a href="/about">Mon profil</a>
        <button onClick={deconnectUser} className="navbar-button"><FiPower/></button>
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
