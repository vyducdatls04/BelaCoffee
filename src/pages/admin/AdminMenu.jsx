import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/menu";

const AdminMenu = () => {
  const [menus, setMenus] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  /* ================= FETCH MENU ================= */
  const fetchMenus = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setMenus(res.data);
    } catch (err) {
      console.error("Fetch menu error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  /* ================= ADD / UPDATE MENU ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    if (image) formData.append("image", image);

    try {
      if (editingId) {
        // UPDATE
        await axios.put(`${API_URL}/${editingId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        // CREATE
        await axios.post(API_URL, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      resetForm();
      fetchMenus();
    } catch (err) {
      console.error(err);
      alert("Lỗi thêm / cập nhật menu");
    }
  };

  /* ================= EDIT MENU ================= */
  const editMenu = (menu) => {
    setEditingId(menu._id);
    setName(menu.name);
    setPrice(menu.price);
    setImage(null); // không set lại file cũ
  };

  /* ================= DELETE MENU ================= */
  const deleteMenu = async (id) => {
    if (!window.confirm("Xóa menu này?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchMenus();
    } catch (err) {
      console.error("Delete menu error:", err);
      alert("Xóa menu thất bại");
    }
  };

  /* ================= RESET FORM ================= */
  const resetForm = () => {
    setEditingId(null);
    setName("");
    setPrice("");
    setImage(null);
  };

  return (
    <div className="px-5 lg:px-32 py-20">
      <h1 className="text-3xl font-bold mb-10">Quản lý Menu</h1>

      {/* ================= FORM ================= */}
      <form onSubmit={handleSubmit} className="mb-10 flex gap-3 flex-wrap">
        <input
          placeholder="Tên món"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          placeholder="Giá"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button className="px-4 py-2 bg-amber-700 text-white rounded">
          {editingId ? "Cập nhật" : "Thêm"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Hủy
          </button>
        )}
      </form>

      {/* ================= LIST MENU ================= */}
      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <div className="space-y-4">
          {menus.map((m) => (
            <div
              key={m._id}
              className="flex items-center gap-4 bg-white p-3 rounded shadow"
            >
              <img
                src={`http://localhost:5000${m.image}`}
                alt={m.name}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1">
                <p className="font-semibold">{m.name}</p>
                <p className="text-amber-700">
                  {m.price.toLocaleString()}đ
                </p>
              </div>

              <button
                onClick={() => editMenu(m)}
                className="text-blue-600"
              >
                Sửa
              </button>

              <button
                onClick={() => deleteMenu(m._id)}
                className="text-red-600"
              >
                Xóa
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMenu;
