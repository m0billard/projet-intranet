import { useState } from 'react';
import './App.scss';
import { Link } from "react-router-dom";
import logo from "./assets/logoPng.png";

function App() {

  const [emailval,setemailval]=useState("");
  const [passval,setpassval]=useState("");

  const handleSubmit=(event)=>{
    event.preventDefault();
  }

  return (
      <div className="main-login">
        <div className="login-contain">
            <div className="left-side">
              <div className="img-class">
                <img src={logo} id="img-id" alt="" />
              </div>
              <form onSubmit={handleSubmit}>
                <label for="emil1">Adresse e-mail</label>
                  <input placeholder="Votre adresse e-mail..." type="email" id="emil1" value={emailval} onChange={(e)=>{setemailval(e.target.value)}}/>
                <label for="pwd1">Mot de passe</label>
                  <input placeholder="Votre mot de passe..." type="password" id="pwd1" value={passval} onChange={(e)=>{setpassval(e.target.value)}}/>
                  <button type="submit" id="sub_butt">Connexion</button>
              </form>
            </div>

            <div className="right-side">
              <div className="welcomeNote">
                <h3>INTRANET</h3>
              </div>
              <div className="welcomeImg">

              </div>
            </div>

        </div>

      </div>
  );
}

export default App;