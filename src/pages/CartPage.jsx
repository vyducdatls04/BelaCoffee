import { useCart } from "../context/useCartHook";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    cart,
    increase,
    decrease,
    remove,
    clearCart,
    totalPrice
  } = useCart();

  const navigate = useNavigate();

  // 👉 Giỏ hàng trống
  if (cart.length === 0) {
    return (
      <div className="py-40 text-center text-2xl">
        🛒 Giỏ hàng trống
      </div>
    );
  }

  return (
    <div className="px-6 lg:px-32 py-24 bg-orange-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Giỏ hàng
      </h1>

      {/* DANH SÁCH SẢN PHẨM */}
      <div className="space-y-6">
        {cart.map(item => (
          <div
            key={item._id}
            className="flex items-center bg-white rounded-xl shadow p-4 gap-4"
          >
            <img
              src={
                item.image?.startsWith("http")
                  ? item.image
                  : `http://localhost:5000${item.image}`
              }
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="flex-1">
              <h2 className="font-bold text-lg">
                {item.name}
              </h2>
              <p className="text-orange-600 font-semibold">
                {item.price.toLocaleString()}đ
              </p>
            </div>

            {/* SỐ LƯỢNG */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decrease(item._id)}
                className="px-3 py-1 bg-gray-200 rounded text-lg"
              >
                −
              </button>

              <span className="font-semibold w-6 text-center">
                {item.quantity}
              </span>

              <button
                onClick={() => increase(item._id)}
                className="px-3 py-1 bg-gray-200 rounded text-lg"
              >
                +
              </button>
            </div>

            {/* THÀNH TIỀN */}
            <div className="w-32 text-right font-bold">
              {(item.price * item.quantity).toLocaleString()}đ
            </div>

            {/* XOÁ */}
            <button
              onClick={() => remove(item._id)}
              className="text-red-500 font-bold text-xl"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* TỔNG TIỀN */}
      <div className="mt-12 bg-white p-6 rounded-xl shadow text-right">
        <p className="text-xl font-bold">
          Tổng tiền:{" "}
          <span className="text-orange-600">
            {totalPrice.toLocaleString()}đ
          </span>
        </p>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={clearCart}
            className="px-6 py-2 border rounded hover:bg-gray-100"
          >
            Xóa giỏ hàng
          </button>

          <button
            onClick={() => navigate("/checkout")}
            className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
