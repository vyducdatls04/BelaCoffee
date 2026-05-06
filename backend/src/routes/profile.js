const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middlewares/authMiddleware"); // ✅ ĐÚNG

router.get("/", authMiddleware, (req, res) => {
  res.json(req.user);
});

module.exports = router;
