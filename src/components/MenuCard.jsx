import { FaShoppingCart, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCartHook";

const BACKEND_URL = "http://localhost:5000";

const MenuCard = ({ menu }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const imageUrl = menu.image
    ? menu.image.startsWith("http")
      ? menu.image
      : `${BACKEND_URL}${menu.image}`
    : "/no-image.png";

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={menu.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3">
          <button
            onClick={() => navigate(`/menu/${menu._id}`)}
            className="bg-white px-4 py-2 rounded-full flex items-center gap-2"
          >
            <FaEye /> Xem
          </button>

          <button
            onClick={() => addToCart(menu)}
            className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2"
          >
            <FaShoppingCart /> Mua
          </button>
        </div>
      </div>

      <div className="p-4 text-center">
        <h3 className="font-semibold">{menu.name}</h3>
        <p className="text-orange-600 font-bold">
          {menu.price?.toLocaleString()}đ
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
