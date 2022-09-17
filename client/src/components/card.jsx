import "./card.scss";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaBirthdayCake } from "react-icons/fa";
import { displayServiceColor } from "../js/serviceColors";
import { calculateAge } from "../js/calculateAge";

function Card({ collaborator }) {
  return (
    <div id="card-container">
      <div className="card">
        <img src={collaborator.photo} id="welcome-img" alt="" />
        <div className="card-details">
          <span
            className="tag"
            style={{
              backgroundColor: displayServiceColor(collaborator.service),
            }}
          >
            {collaborator.service}
          </span>
          <div className="name">
            {collaborator.firstname} {collaborator.lastname}{" "}
            <span style={{ fontSize: "1rem", fontStyle: "italic" }}>
              ({calculateAge(collaborator.birthdate)})
            </span>
          </div>
          <p className="welcome-p">
            {collaborator.city}, {collaborator.country}
          </p>
          <p className="welcome-p">
            <span className="icon-card">
              <AiFillMail />
            </span>
            <a href="mailto:quentin.roger@example.com">{collaborator.email}</a>
          </p>
          <p className="welcome-p">
            <span className="icon-card">
              <AiFillPhone />
            </span>
            <a href="tel:{collaborator.phone}">{collaborator.phone}</a>
          </p>
          <p className="welcome-p">
            <span className="icon-card">
              <FaBirthdayCake />
            </span>
            Anniversaire: {collaborator.birthdate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
