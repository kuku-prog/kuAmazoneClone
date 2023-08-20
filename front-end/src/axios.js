import axios from "axios";

const instance = axios.create({
    baseURL: "https://cute-ruby-cricket-gown.cyclic.cloud/"
   // baseURL: "https://amazon-clone-g4tg.onrender.com"
   // baseURL: "https://localhost:8100/"
})

export default instance;