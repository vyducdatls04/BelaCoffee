import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api", // ❗ bỏ vite proxy cho khỏi lỗi
});

export default axiosClient;
