import axios from "axios";

const api = axios.create({
 baseURL: "https://fashionstore-cdg-backend.onrender.com"
});

export default api;
