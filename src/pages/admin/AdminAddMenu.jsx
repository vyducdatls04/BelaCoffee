import React, { useState } from "react";
import axios from "axios";

const AdminAddMenu = () => {
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

    const data = new FormData();
    data.append("name", form.name);
    data.append("price", form.price);
    data.append("category", form.category);
    data.append("image", image);

    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "http://localhost:5000/api/menu",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("✅ Thêm menu thành công");
    } catch (err) {
      alert(err.response?.data?.message || "Lỗi");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-md">
      <input
        name="name"
        placeholder="Tên món"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="price"
        placeholder="Giá"
        type="number"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="category"
        placeholder="Danh mục"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button className="bg-orange-500 text-white px-4 py-2 rounded">
        Thêm menu
      </button>
    </form>
  );
};

export default AdminAddMenu;
