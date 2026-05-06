import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuthHook";

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      login({});
      navigate("/");
    }
  }, [login, navigate]); // ✅ thêm dependencies

  return <p>Đang đăng nhập...</p>;
};

export default OAuthSuccess;
