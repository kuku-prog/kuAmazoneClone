import axios from "axios";

const instance = axios.create({
    baseURL: "https://amazon-clone-g4tg.onrender.com"
})

export default instance;