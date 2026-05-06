import React, { useEffect, useState } from "react";
import API from "../utils/api";
import MenuForm from "../components/MenuForm";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [editMenu, setEditMenu] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Lấy danh sách menu từ backend
  const fetchMenu = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await API.get("/menu"); // GET menu
      setMenu(res.data);
    } catch (err) {
      console.error("Fetch menu lỗi:", err.response?.data || err.message);
      setError(
        err.response?.data?.message ||
          "Không thể lấy danh sách menu. Kiểm tra backend."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  // Xóa menu
  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa?")) return;
    try {
      await API.delete(`/menu/${id}`);
      fetchMenu();
    } catch (err) {
      console.error("Xóa menu lỗi:", err.response?.data || err.message);
      alert(
        err.response?.data?.message ||
          "Không thể xóa menu. Kiểm tra backend."
      );
    }
  };

  // Logout (tùy chọn)
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Menu</h2>
      <button onClick={handleLogout}>Logout</button>

      {loading && <p>Đang tải menu...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <MenuForm
        onSuccess={() => {
          setEditMenu(null);
          fetchMenu();
        }}
        menu={editMenu}
      />

      <ul>
        {menu.length === 0 && !loading && !error && <p>Chưa có món nào</p>}
        {menu.map((item) => (
          <li key={item._id} style={{ marginBottom: "10px" }}>
            <img
              src={item.image}
              alt={item.name}
              width={100}
              style={{ marginRight: "10px" }}
            />
            <strong>{item.name}</strong> - {item.price} VND
            <button
              onClick={() => setEditMenu(item)}
              style={{ marginLeft: "10px" }}
            >
              Sửa
            </button>
            <button
              onClick={() => handleDelete(item._id)}
              style={{ marginLeft: "5px" }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
