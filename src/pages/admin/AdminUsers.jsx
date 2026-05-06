import { useEffect, useState } from "react";
import API from "../../utils/api";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users").then(res => setUsers(res.data));
  }, []);

  const changeRole = async (id, role) => {
    await API.put(`/users/${id}/role`, { role });
    alert("Updated");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Quản lý user</h1>
      {users.map(u => (
        <div key={u._id} className="border p-3 mb-2">
          <p>{u.username} – {u.role}</p>
          <select onChange={(e) => changeRole(u._id, e.target.value)}>
            <option>user</option>
            <option>staff</option>
            <option>admin</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
