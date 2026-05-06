import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-4">ADMIN</h2>
        <nav className="space-y-2">
          <Link to="/admin" className="block">Dashboard</Link>
          <Link to="/admin/menu" className="block">Menu</Link>
          <Link to="/admin/users" className="block">Users</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
