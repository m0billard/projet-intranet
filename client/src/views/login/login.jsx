import { useState } from "react";
import "./login.scss";
import logo from "../../assets/loginPng.png";

async function LoginUser(connexion) {
  let response = await fetch("http://localhost:7000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(connexion),
  });

  if (response.status == 200) {
    let data = await response.json();
    console.log(data.token);
    localStorage.setItem("token", data.token);
  }
}

function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const submit = async (e) => {
    e.preventDefault();
    const data = await LoginUser({
      email: username,
      password: password,
    });
    window.location = "/welcome";
  };
  return (
    <div className="main-login">
      <div className="login-contain">
        <div className="left-side">
          <div className="intranet">
            <h1>
              Intranet<span>Intranet</span>
            </h1>
          </div>
          <form onSubmit={submit}>
            <label>Adresse e-mail</label>
            <input
              placeholder="Votre adresse e-mail..."
              type="email"
              id="emil1"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <label>Mot de passe</label>
            <input
              placeholder="•••••••••••"
              type="password"
              id="pwd1"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" id="sub-button">
              Connexion
            </button>
          </form>
          <div className="footer">
            <h4>
              Vous n'avez pas de compte ? <a href="tel:123-456-7890">Appelez</a>{" "}
              l'assistance !
            </h4>
          </div>
        </div>

        <div className="right-side">
          <div className="welcomeImg">
            <img src={logo} id="wel-img-id" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
