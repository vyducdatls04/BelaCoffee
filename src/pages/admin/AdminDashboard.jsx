const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <ul className="mt-4 space-y-2">
        <li><a href="/admin/menu">📋 Quản lý Menu</a></li>
        <li><a href="/admin/users">👤 Quản lý User</a></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
