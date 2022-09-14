import "./welcome.scss";
import Navbar from "../../components/navbar";
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
          <h2 className="welcome-h2">Avez-vous dit bonjour à:</h2>
          <div id="card-container">
            <div className="card">
              <img src={logo} id="welcome-img" alt="" />
              <div className="card-details">
                <span className="tag">Technique</span>
                <div className="name">Quentin Roger (36 ans)</div>
                <p className="welcome-p">Saint-pierre, France</p>
                <p className="welcome-p">
                  <a href="mailto:quentin.roger@example.com">
                    quentin.roger@example.com
                  </a>
                </p>
                <p className="welcome-p">
                  <a href="tel:123-456-7890">04-05-29-42-43</a>
                </p>
                <p className="welcome-p">Anniversaire: 11 décembre</p>
              </div>
            </div>
          </div>
          <button id="welcome-button">Dire bonjour à quelqu'un d'autre</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
