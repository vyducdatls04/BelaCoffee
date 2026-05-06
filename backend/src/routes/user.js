const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

// GET ALL USERS
router.get("/", auth, role(["admin"]), async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// UPDATE ROLE
router.put("/:id/role", auth, role(["admin"]), async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, {
    role: req.body.role,
  });
  res.json({ message: "Role updated" });
});

// DELETE USER
router.delete("/:id", auth, role(["admin"]), async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;
