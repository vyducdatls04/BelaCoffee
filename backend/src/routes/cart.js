const express = require("express");
const Cart = require("../models/Cart");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/add", auth, async (req, res) => {
  const { productId } = req.body;

  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = await Cart.create({ userId: req.user.id, items: [] });

  const item = cart.items.find(i => i.productId == productId);
  if (item) item.quantity++;
  else cart.items.push({ productId, quantity: 1 });

  await cart.save();
  res.json(cart);
});

router.get("/", auth, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  res.json(cart);
});

module.exports = router;