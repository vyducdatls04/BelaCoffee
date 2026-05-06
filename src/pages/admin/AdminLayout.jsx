import AdminSidebar from "../../components/AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default AdminLayout;
