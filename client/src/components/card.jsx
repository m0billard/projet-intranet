import { useState } from "react";
import "./card.scss";
import logo from "../assets/logoPng.png";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaBirthdayCake } from "react-icons/fa";

function Card({ collaborator }) {
  return (
    <div id="card-container">
      <div className="card">
        <img src={collaborator.photo} id="welcome-img" alt="" />
        <div className="card-details">
          <span className="tag">{collaborator.service}</span>
          <div className="name">{collaborator.firstname} {collaborator.lastname}</div>
          <p className="welcome-p">{collaborator.city}, {collaborator.country}</p>
          <p className="welcome-p">
            <span className="icon-card"><AiFillMail /></span>
            <a href="mailto:quentin.roger@example.com">
              {collaborator.email}
            </a>
          </p>
          <p className="welcome-p">
            <span className="icon-card"><AiFillPhone /></span>
            <a href="tel:{collaborator.phone}">{collaborator.phone}</a>
          </p>
          <p className="welcome-p">
            <span className="icon-card"><FaBirthdayCake /></span>
            Anniversaire: {collaborator.birthdate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
