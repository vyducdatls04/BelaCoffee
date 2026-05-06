import React, { useEffect, useState } from "react";
import api from "../services/api";

const AdminMenuList = ({ onEdit }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await api.get("/menu");
        setMenu(res.data);
      } catch (err) {
        console.error("Lỗi load menu:", err);
      }
    };

    fetchMenu();
  }, []); // ✅ ESLint OK

  const handleDelete = async (id) => {
    if (!window.confirm("Xóa món này?")) return;

    await api.delete(`/menu/${id}`);
    setMenu((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h2 className="font-semibold mb-3">Danh sách menu</h2>

      {menu.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center border-b py-2"
        >
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-orange-600">
              {item.price.toLocaleString()}đ
            </p>
          </div>

          <div className="space-x-2">
            <button
              onClick={() => onEdit(item)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Sửa
            </button>

            <button
              onClick={() => handleDelete(item._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Xóa
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminMenuList;