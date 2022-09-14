import { useState } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import logo from "./assets/logoPng.png";

function App() {
  const [emailval, setemailval] = useState("");
  const [passval, setpassval] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-login">
      <div className="login-contain">
        <div className="left-side">
          <div className="intranet">
            <h1>
              Intranet<span>Intranet</span>
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label for="emil1">Adresse e-mail</label>
            <input
              placeholder="Votre adresse e-mail..."
              type="email"
              id="emil1"
              value={emailval}
              onChange={(e) => {
                setemailval(e.target.value);
              }}
            />
            <label for="pwd1">Mot de passe</label>
            <input
              placeholder="Votre mot de passe..."
              type="password"
              id="pwd1"
              value={passval}
              onChange={(e) => {
                setpassval(e.target.value);
              }}
            />
            <Link to="/welcome">
              <button type="submit" id="sub-button">
                Connexion
              </button>
            </Link>
          </form>
          <div className="footer">
            <h4>
              Vous n'avez pas de compte ? <a href="tel:123-456-7890">Appelez</a>{" "}
              l'assistance !
            </h4>
          </div>
        </div>

        <div className="right-side">
          <div className="welcomeNote">
            <h3>Bienvenue sur l'Intranet,</h3>
          </div>
          <div className="welcomeImg">
            <img src={logo} id="wel-img-id" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
