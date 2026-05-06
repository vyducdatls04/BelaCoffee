const Cart = require("../models/Cart");

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate("items.menu");
  res.json(cart || { items: [] });
};

exports.addToCart = async (req, res) => {
  const { menuId, quantity } = req.body;
  let cart = await Cart.findOne({ user: req.user.id });
  if(!cart){
    cart = await Cart.create({ user: req.user.id, items: [{ menu: menuId, quantity }] });
  } else {
    const itemIndex = cart.items.findIndex(i => i.menu.toString() === menuId);
    if(itemIndex > -1) cart.items[itemIndex].quantity += quantity;
    else cart.items.push({ menu: menuId, quantity });
    await cart.save();
  }
  res.json(cart);
};

exports.removeFromCart = async (req, res) => {
  const { menuId } = req.body;
  const cart = await Cart.findOne({ user: req.user.id });
  if(cart){
    cart.items = cart.items.filter(i => i.menu.toString() !== menuId);
    await cart.save();
  }
  res.json(cart);
};
