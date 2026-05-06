import Menu from "../models/Menu.js";
import fs from "fs";
import path from "path";

/* ================= UTILS ================= */
const safeDelete = (filePath) => {
  try {
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.error("Delete file error:", err.message);
  }
};

/* ================= CREATE ================= */
export const createMenu = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const menu = await Menu.create({
      name,
      price,
      description,
      image: req.file ? `/uploads/${req.file.filename}` : null
    });

    res.status(201).json(menu);
  } catch (err) {
    res.status(500).json({
      message: "Create menu failed",
      error: err.message
    });
  }
};

/* ================= GET ALL ================= */
export const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find().sort({ createdAt: -1 });
    res.json(menus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= GET FEATURED ================= */
export const getFeaturedMenus = async (req, res) => {
  try {
    const menus = await Menu.aggregate([
      { $sample: { size: 3 } }
    ]);
    res.json(menus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= GET BY ID ================= */
export const getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu)
      return res.status(404).json({ message: "Menu not found" });

    res.json(menu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= UPDATE ================= */
export const updateMenu = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const menu = await Menu.findById(req.params.id);

    if (!menu)
      return res.status(404).json({ message: "Menu not found" });

    if (req.file) {
      if (menu.image) {
        safeDelete(path.join(process.cwd(), menu.image));
      }
      menu.image = `/uploads/${req.file.filename}`;
    }

    menu.name = name;
    menu.price = price;
    menu.description = description;

    await menu.save();
    res.json(menu);
  } catch (err) {
    res.status(500).json({
      message: "Update menu failed",
      error: err.message
    });
  }
};

/* ================= DELETE ================= */
export const deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);

    if (!menu)
      return res.status(404).json({ message: "Menu not found" });

    if (menu.image) {
      safeDelete(path.join(process.cwd(), menu.image));
    }

    await menu.deleteOne();
    res.json({ message: "Delete menu success" });
  } catch (err) {
    res.status(500).json({
      message: "Delete menu failed",
      error: err.message
    });
  }
};
