import { React} from "react";
import Login from "./views/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./views/welcome/welcome";
import List from "./views/list/list";
import Profil from "./views/profil/profil";

function setToken(userToken) {
  localStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const token = localStorage.getItem("token");
  return token;
}

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="list" element={<List />} />
          <Route path="profil" element={<Profil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
