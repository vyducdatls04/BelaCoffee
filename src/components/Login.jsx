import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuthHook";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  // 🔹 Login thường (email + password)
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      const { user, token } = res.data;

      localStorage.setItem("token", token);
      login(user);
      navigate("/");
    } catch (err) {
      const message =
        err?.response?.data?.message || "Đăng nhập thất bại";
      alert(message);
    }
  };

  // 🔹 Login Google
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  // 🔹 Login Facebook
  const handleFacebookLogin = () => {
    window.location.href = "http://localhost:5000/auth/facebook";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">
          Đăng nhập
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩu"
          className="w-full border px-3 py-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800"
        >
          Đăng nhập
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <hr className="flex-1 border-gray-300" />
          <span className="text-sm text-gray-500">HOẶC</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Đăng nhập bằng Google
        </button>

        {/* Facebook */}
        <button
          type="button"
          onClick={handleFacebookLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Đăng nhập bằng Facebook
        </button>
      </form>
    </div>
  );
};

export default Login;
