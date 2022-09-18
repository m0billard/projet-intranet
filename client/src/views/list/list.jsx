import "./list.scss";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Card from "../../components/card";
import APIService from "../../services/APIService";
import Search from "../../components/search";

function List() {
  const [allCollaborator, setAllCollaborator] = useState(null);
  const [filterdedAllCollaborator, setFilteredAllCollaborator] = useState(null);

  const getAllCollaborator = async () => {
    const data = await APIService.getAllCollaborators();
    setAllCollaborator(data);
    setFilteredAllCollaborator(data);
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
          <Search
            allCollaborator={allCollaborator}
            setFilteredAllCollaborator={setFilteredAllCollaborator}
          />
          <div className="list-cards">
            {filterdedAllCollaborator?.map((collaborator) => (
              <Card key={collaborator.id} collaborator={collaborator} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
