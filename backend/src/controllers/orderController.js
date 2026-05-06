import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { items, total, paymentMethod } = req.body;

    const order = await Order.create({
      user: req.user.id,
      items,
      total,
      paymentMethod,
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Create order failed" });
  }
};

export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).sort({
    createdAt: -1,
  });

  res.json(orders);
};

export const getAllOrders = async (req, res) => {
  const orders = await Order.find()
    .populate("user", "email")
    .sort({ createdAt: -1 });

  res.json(orders);
};
