const CheckoutItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between border p-4 rounded">
      <div className="flex gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover"
        />
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-500">x{item.quantity}</p>
        </div>
      </div>
      <p className="font-semibold text-orange-500">
        {(item.price * item.quantity).toLocaleString()}đ
      </p>
    </div>
  );
};

export default CheckoutItem;
