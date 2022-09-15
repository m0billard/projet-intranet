import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:7000/api/",
  headers: {
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
});

const APIService = {
  async getAllCollaborators() {
    const response = await instance.get("/collaborateurs");
    const data = response.data;
    return data;
  },

  async getRandomCollaborator() {
    const response = await instance.get("/collaborateurs/random");
    const data = response.data;
    return data;
  }
}

export default APIService;