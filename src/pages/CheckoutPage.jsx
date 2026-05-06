import { useCart } from "../context/useCart";
import { useAuth } from "../context/useAuthHook";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CheckoutPage = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const { token, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // 🔐 Chặn chưa login
  useEffect(() => {
    if (!isLoggedIn) {
      alert("Bạn cần đăng nhập để đặt hàng");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleOrder = async () => {
    if (cart.length === 0) {
      alert("Giỏ hàng trống");
      return;
    }

    try {
      await API.post(
        "/orders",
        {
          items: cart,
          total: totalPrice,
          paymentMethod: "bank-transfer",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      clearCart();
      navigate("/order-success");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Đặt hàng thất bại");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Thanh toán</h1>

      <p className="mb-4">
        Tổng tiền:{" "}
        <span className="font-semibold text-red-600">
          {totalPrice.toLocaleString()}đ
        </span>
      </p>

      <button
        onClick={handleOrder}
        className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded"
      >
        Xác nhận đặt hàng
      </button>
    </div>
  );
};

export default CheckoutPage;
