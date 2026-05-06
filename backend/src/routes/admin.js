const express = require("express");
const router = express.Router();

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware"); // ✅ ĐÚNG

router.get("/dashboard", authMiddleware, isAdmin, (req, res) => {
  res.json({
    message: "Welcome Admin",
    user: req.user
  });
});

module.exports = router;
