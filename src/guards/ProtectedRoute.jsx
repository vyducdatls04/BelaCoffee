import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuthHook";

const ProtectedRoute = ({ children, role }) => {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Kiểm tra role
  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
