import { useState } from "react";
import CartContext from "./CartContext";

export const CartProvider = ({ children }) => {
  // ✅ Khởi tạo cart từ localStorage
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    try {
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  const saveCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const addToCart = (item) => {
    const existing = cartItems.find((i) => i._id === item._id);

    let updatedCart;
    if (existing) {
      updatedCart = cartItems.map((i) =>
        i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }

    saveCart(updatedCart);
  };

  const removeFromCart = (id) => {
    saveCart(cartItems.filter((item) => item._id !== id));
  };

  const clearCart = () => {
    saveCart([]);
  };

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
