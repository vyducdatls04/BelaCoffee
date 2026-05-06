import express from "express";
import {
  createOrder,
  getMyOrders,
  getAllOrders,
} from "../controllers/orderController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = express.Router();

/* ================= USER ================= */

// Tạo đơn hàng
router.post("/", authMiddleware, createOrder);

// Lịch sử đơn hàng của user
router.get("/me", authMiddleware, getMyOrders);

/* ================= ADMIN ================= */

// Admin xem tất cả đơn hàng
router.get("/", authMiddleware, adminMiddleware, getAllOrders);

export default router;
