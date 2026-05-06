import { useNavigate } from "react-router-dom";

const OrderSummary = ({ items }) => {
  const navigate = useNavigate();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="border p-4 rounded h-fit">
      <h3 className="font-semibold mb-4">Tóm tắt đơn hàng</h3>

      <div className="flex justify-between mb-2">
        <span>Tạm tính</span>
        <span>{total.toLocaleString()}đ</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Phí vận chuyển</span>
        <span>0đ</span>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between text-lg font-bold text-orange-500">
        <span>Tổng</span>
        <span>{total.toLocaleString()}đ</span>
      </div>

      <button
        onClick={() => navigate("/order-success")}
        className="w-full mt-4 bg-orange-500 text-white py-2 rounded"
      >
        Đặt hàng
      </button>
    </div>
  );
};

export default OrderSummary;
