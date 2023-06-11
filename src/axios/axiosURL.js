// api.js
import axios from "axios";

const axiosURL = axios.create({
  baseURL: "https://pixellens-academy.vercel.app/",
});

export default axiosURL;
