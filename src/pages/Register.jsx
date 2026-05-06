import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", { username, password });
      localStorage.setItem("token", res.data.token);
      alert("Đăng ký thành công!");
      navigate("/menu");
    } catch (err) {
      alert(err.response?.data?.message || "Đăng ký thất bại");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required/>
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
