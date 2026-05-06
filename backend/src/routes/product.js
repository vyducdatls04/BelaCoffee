const express = require("express");
const Product = require("../models/Product");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const router = express.Router();

// Admin thêm sản phẩm
router.post("/", auth, isAdmin, async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// User xem menu
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;