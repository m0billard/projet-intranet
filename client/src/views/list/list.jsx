import "./list.scss";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Card from "../../components/card";
import APIService from "../../services/APIService";

function List() {
  const [collaborators, setCollaborators] = useState([]);

  const getAllCollaborator = async () => {
    const data = await APIService.getAllCollaborators();

    setCollaborators(data);
  };

  useEffect(() => {
    getAllCollaborator();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main-list">
        <div className="list-contain">
          <h1 className="list-h1">Liste des collaborateurs</h1>
          <hr />
          <div className="filtre">
            <input
              type="text"
              placeholder="Rechercher..."
              className="list-input"
            />
          </div>
          <div className="list-cards">
            {collaborators.map((collaborator) => (
              <Card collaborator={collaborator} key={collaborator.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
