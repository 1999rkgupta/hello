import axios from "axios";

let axiosInstance = axios.create({ baseURL: "https://api.github.com/users" });
export default axiosInstance;
