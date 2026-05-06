import React, { useState } from "react";

const MenuModal = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl w-[360px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-3">{item.name}</h2>

        <img src={item.img} className="rounded mb-3" />

        <p className="text-orange-600 font-bold mb-4">
          {item.price.toLocaleString()}đ
        </p>

        {/* QUANTITY */}
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-1 border rounded"
          >
            -
          </button>

          <span className="font-semibold">{quantity}</span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 border rounded"
          >
            +
          </button>
        </div>

        <p className="font-bold mb-4">
          Tổng: {(item.price * quantity).toLocaleString()}đ
        </p>

        <button className="w-full bg-amber-700 text-white py-2 rounded-lg">
          Đặt mua
        </button>
      </div>
    </div>
  );
};

export default MenuModal;
