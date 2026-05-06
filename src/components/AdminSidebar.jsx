import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">ADMIN</h2>

      <nav className="space-y-3">
        <Link to="/admin/menu">🍔 Menu</Link>
        <Link to="/admin/users">👤 Users</Link>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="block mt-6 text-red-400"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
