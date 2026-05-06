import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/useCart";

const CartIcon = () => {
  const { cart } = useCart();

  const totalQty = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="relative">
      <FaShoppingCart size={24} />
      {totalQty > 0 && (
        <span className="badge">{totalQty}</span>
      )}
    </div>
  );
};

export default CartIcon;
