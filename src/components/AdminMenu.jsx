import axios from "axios";
import { useState } from "react";

const AdminMenu = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image); // 🔥 KEY PHẢI LÀ image

    await axios.post(
      "http://localhost:5000/api/menus",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert("Upload thành công");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên món"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Giá"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit">Thêm menu</button>
    </form>
  );
};

export default AdminMenu;
