import axiosClient from "./axios";

const menuApi = {
  getAll: () => axiosClient.get("/menu"),
};

export default menuApi;
