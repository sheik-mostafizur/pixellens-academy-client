// api.js
import axios from "axios";

const axiosURL = axios.create({
  baseURL: "http://localhost:3001/",
});

// create axios baseURL for and set headers for access token
axiosURL.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("access-token");

// const temporaryURL = () => {
//   axiosURL.get("/users", {
//     headers: {
//       authorization: "Bearer " + localStorage.getItem("access-token"),
//     },
//   });
// };

// temporaryURL();
export default axiosURL;
