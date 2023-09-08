import axios from "axios";

const instance = axios.create({
	// baseURL: "https://cute-ruby-cricket-gown.cyclic.cloud/",
	// baseURL: "https://amazon-clone-g4tg.onrender.com"
	baseURL: "http://localhost:8990/",
});

export default instance;
