import axios from "axios";

const API_URL = "http://localhost:5000/api/menu";

export const updateMenu = (id, formData, token) => {
  return axios.put(`${API_URL}/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteMenu = (id, token) => {
  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
