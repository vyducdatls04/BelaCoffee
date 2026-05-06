import { useEffect, useState } from "react";
import API from "../utils/api";
import { useAuth } from "../context/useAuthHook";

const MyOrdersPage = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get("/orders/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchOrders();
  }, [token]);

  if (loading) return <p className="p-6">Đang tải...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lịch sử đơn hàng</h1>

      {orders.length === 0 ? (
        <p>Bạn chưa có đơn hàng nào</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border rounded p-4 bg-white shadow"
            >
              <p className="font-semibold">
                Mã đơn: {order._id}
              </p>
              <p>Tổng tiền: {order.total.toLocaleString()}đ</p>
              <p>Trạng thái: {order.status}</p>
              <p>
                Ngày đặt:{" "}
                {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
