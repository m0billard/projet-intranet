import React, { useEffect, useState } from "react";
import "./search.scss";

const Search = ({ allCollaborator, setFilteredAllCollaborator }) => {
  const [filterType, setFilterType] = useState("Nom");
  const [filterText, setFilterText] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const onChangeText = (event) => {
    setFilterText(event.target.value);
  };

  const onChangeType = (event) => {
    setFilterType(event.target.value);
  };

  const onChangeCategory = (event) => {
    setFilterCategory(event.target.value);
  };

  useEffect(() => {
    if (allCollaborator) {
      let filteredList = [];
      if (filterType == "Localisation") {
        filteredList = allCollaborator.filter((collaborator) => {
          if (
            collaborator.country
              .toLowerCase()
              .includes(filterText.toLowerCase()) ||
            collaborator.city.toLowerCase().includes(filterText.toLowerCase())
          )
            return collaborator;
        });
      } else if (filterType == "Nom") {
        filteredList = allCollaborator.filter((collaborator) => {
          if (
            collaborator.firstname
              .toLowerCase()
              .includes(filterText.toLowerCase()) ||
            collaborator.lastname
              .toLowerCase()
              .includes(filterText.toLowerCase())
          )
            return collaborator;
        });
      }
      if (filterCategory !== "") {
        filteredList = filteredList.filter(
          (collaborator) => collaborator.service == filterCategory
        );
      }
      setFilteredAllCollaborator(filteredList);
    }
  }, [filterText, filterCategory, filterType, allCollaborator]);

  return (
    <div className="filtre">
      <input
        value={filterText}
        onChange={onChangeText}
        id="list-input"
        placeholder="Rechercher..."
      />
      <label id="label-one">Rechercher par :</label>
      <select value={filterType} onChange={onChangeType} id="select-one">
        <option value={"Nom"}>Nom</option>
        <option value={"Localisation"}>Ville</option>
      </select>
      <label id="label-two">Catégorie :</label>
      <select
        value={filterCategory}
        onChange={onChangeCategory}
        id="select-two"
      >
        <option value={""}>- Aucun -</option>
        <option value={"Client"}>Client</option>
        <option value={"Technique"}>Technique</option>
        <option value={"Marketing"}>Marketing</option>
      </select>
    </div>
  );
};

export default Search;
