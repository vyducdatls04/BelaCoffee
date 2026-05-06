import React, { useState } from "react";
import API from "../utils/api";

const MenuForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("category", form.category);
    if (image) {
      formData.append("image", image);
    }

    try {
      await API.post("/menu", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Thêm menu thành công");
      setForm({ name: "", price: "", category: "" });
      setImage(null);
      onSuccess && onSuccess();
    } catch (err) {
      alert(err.response?.data?.message || "Lỗi upload");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Tên món"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Giá"
        value={form.price}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Danh mục"
        value={form.category}
        onChange={handleChange}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />

      <button type="submit">Thêm menu</button>
    </form>
  );
};

export default MenuForm;
