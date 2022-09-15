import "./welcome.scss";
import Navbar from "../../components/navbar";
import Card from "../../components/card";
import logo from "../../assets/logoPng.png";

function Welcome() {
  return (
    <div>
      <Navbar />
      <div className="main-welcome">
        <div className="welcome-contain">
          <h1 className="welcome-h1">Bienvenue sur l'Intranet</h1>
          <p>
            La plate-forme de l'entreprise qui vous permet de retrouver tous vos
            collaborateurs.
          </p>
          <h2 className="welcome-h2">Avez-vous dit bonjour à :</h2>
          <Card/>
          <button id="welcome-button">Dire bonjour à quelqu'un d'autre</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
