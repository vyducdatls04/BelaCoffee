import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccess from "./pages/OrderSuccess";
import MenuDetail from "./pages/MenuDetails";
import OAuthSuccess from "./pages/OAuthSuccess";
import ProtectedRoute from "./guards/ProtectedRoute";
import MyOrdersPage from "./pages/MyOrdersPage";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:id" element={<MenuDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />
        <Route path="/my-orders" element={<MyOrdersPage />} />
        {/* USER */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />

        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </>
  );
}

export default App;
