import { useCart } from "../context/useCart";

const CartItem = ({ item }) => {
  const { increase, decrease, remove } = useCart();

  return (
    <div className="flex gap-4 items-center border p-4 rounded">
      <img
        src={`http://localhost:5000${item.image}`}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />

      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-orange-600 font-bold">
          {item.price.toLocaleString()}đ
        </p>

        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => decrease(item._id)}
            className="px-2 border"
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increase(item._id)}
            className="px-2 border"
          >
            +
          </button>

          <button
            onClick={() => remove(item._id)}
            className="ml-4 text-red-500"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
