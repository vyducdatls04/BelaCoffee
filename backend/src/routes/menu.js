import express from "express";
import Menu from "../models/Menu.js";

const router = express.Router();

/* ================= GET ALL MENU ================= */
router.get("/", async (req, res) => {
  try {
    const menus = await Menu.find().sort({ createdAt: -1 });
    res.json(menus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ================= GET FEATURED MENU (RANDOM 3) ================= */
router.get("/featured", async (req, res) => {
  try {
    const menus = await Menu.aggregate([
      { $sample: { size: 3 } } // 🔥 RANDOM 3 MÓN
    ]);

    res.json(menus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ================= GET MENU BY ID ================= */
router.get("/:id", async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.json(menu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
