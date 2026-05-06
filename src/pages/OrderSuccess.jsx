import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <h1 className="text-3xl font-bold text-green-600">
        🎉 Đặt hàng thành công!
      </h1>

      <p className="mt-4 text-gray-600">
        Cảm ơn bạn đã đặt hàng tại Bela Coffee
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          to="/"
          className="bg-amber-700 text-white px-4 py-2 rounded"
        >
          Về trang chủ
        </Link>

        <Link
          to="/my-orders"
          className="border px-4 py-2 rounded"
        >
          Xem đơn hàng
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
