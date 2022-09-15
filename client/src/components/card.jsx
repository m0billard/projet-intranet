import { useState } from "react";
import "./card.scss";
import logo from "../assets/logoPng.png";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaBirthdayCake } from "react-icons/fa";

function Card() {
  return (
    <div id="card-container">
              <div className="card">
                <img src={logo} id="welcome-img" alt="" />
                <div className="card-details">
                  <span className="tag">Technique</span>
                  <div className="name">Quentin Roger (36 ans)</div>
                  <p className="welcome-p">Saint-pierre, France</p>
                  <p className="welcome-p">
                    <AiFillMail />
                    <a href="mailto:quentin.roger@example.com">
                      quentin.roger@example.com
                    </a>
                  </p>
                  <p className="welcome-p">
                    <AiFillPhone />
                    <a href="tel:123-456-7890">04-05-29-42-43</a>
                  </p>
                  <p className="welcome-p">
                    <FaBirthdayCake />
                    Anniversaire: 11 décembre
                  </p>
                </div>
              </div>
            </div>
  );
}

export default Card;
