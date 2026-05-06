const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");

router.get("/private", auth, (req, res) => {
  res.json({
    message: "Vào được route private",
    user: req.user
  });
});

module.exports = router;