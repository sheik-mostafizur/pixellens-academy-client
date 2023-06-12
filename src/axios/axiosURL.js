// api.js
import axios from "axios";

// http://localhost:3001/ // TODO: changeable
const axiosURL = axios.create({
  baseURL: "https://pixellens-academy.vercel.app/",
});

// create axios baseURL for and set headers for access token
axiosURL.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("access-token");
export default axiosURL;
