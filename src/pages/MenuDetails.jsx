import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/useCart";

const MenuDetail = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/menu/${id}`
      );
      setMenu(res.data);
    };
    fetchMenu();
  }, [id]);

  if (!menu) return <p className="text-center py-10">Đang tải...</p>;

  return (
    <div className="px-6 lg:px-32 py-20">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={
            menu.image?.startsWith("http")
              ? menu.image
              : `http://localhost:5000${menu.image}`
          }
          className="rounded-xl w-full h-96 object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold">{menu.name}</h1>

          <p className="text-orange-600 text-xl font-bold mt-4">
            {menu.price.toLocaleString()}đ
          </p>

          <p className="mt-4 text-gray-600">
            {menu.description || "Chưa có mô tả"}
          </p>

          <button
            onClick={() => addToCart(menu)}
            className="mt-6 px-6 py-3 bg-orange-500 text-white rounded"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
