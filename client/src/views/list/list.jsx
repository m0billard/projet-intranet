import "./list.scss";
import Navbar from "../../components/navbar";
import Card from "../../components/card";


function List() {
  return (
    <div>
      <Navbar />
      <div className="main-list">
        <div className="list-contain">
          <h1 className="list-h1">Liste des collaborateurs</h1>
          <hr />
          <div className="filtre">
            <input placeholder="Rechercher..." className="list-input" />
            <label>Rechercher par :</label>
            <select name="select1" className="list-select-one">
              <option value="nom">Nom</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label>Catégorie :</label>
            <select name="select2" className="list-select-two">
              <option value="aucun">- Aucun -</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="list-cards">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
