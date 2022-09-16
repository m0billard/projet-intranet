import "./profil.scss";
import Navbar from "../../components/navbar";

function Profil() {
  return (
    <div>
      <Navbar />
      <div className="main-profil">
        <div className="profil-contain">
          <h1 className="list-h1">Modifier mon profil</h1>
          <hr />
          <div className="form">
            <form>
              <div>
                <label>* Civilité :</label>
                <select name="gender" className="">
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
              </div>
              <div>
                <label>* Catégorie :</label>
                <select name="category" className="">
                  <option value="Client">Client</option>
                </select>
              </div>
              <div>
                <label>* Nom :</label>
                <input className="" />
              </div>
              <div>
                <label>* Prénom :</label>
                <input className="" />
              </div>
              <div>
                <label>* E-mail :</label>
                <input className="" type="email" />
              </div>
              <div>
                <label>Mot de passe :</label>
                <input
                  placeholder="(min. 8 caractères)"
                  className=""
                  type="password"
                />
              </div>
              <div>
                <label>Confirmation :</label>
                <input
                  placeholder="(min. 8 caractères)"
                  className=""
                  type="password"
                />
              </div>
              <div>
                <label>* Téléphone :</label>
                <input className="" />
              </div>
              <div>
                <label>* Date de naissance :</label>
                <input type="date" className="" />
              </div>
              <div>
                <label>* Ville :</label>
                <input className="" />
              </div>
              <div>
                <label>* Pays :</label>
                <input className="" />
              </div>
              <div>
                <label>URL de la photo :</label>
                <input className="" />
              </div>
            </form>
            <button id="profil-button">
            Modifier mon profil
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
