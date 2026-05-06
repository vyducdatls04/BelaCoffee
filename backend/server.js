import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

import passport from "./src/config/passport.js";
import homeRoutes from "./src/routes/home.js";
import menuRoutes from "./src/routes/menu.js";
import authRoutes from "./src/routes/auth.js";
import orderRoutes from "./src/routes/order.js";

const app = express();

/* ===== BASIC ===== */
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

/* ===== PATH ===== */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔥 ROOT PROJECT (E:/PROJECT/cafe)
const ROOT_DIR = path.join(__dirname, "..");

/* ===== STATIC ===== */
app.use("/uploads", express.static(path.join(ROOT_DIR, "uploads")));
app.use(express.static(path.join(ROOT_DIR, "dist"))); // ✅ ĐÚNG DIST

/* ===== API ===== */
app.use("/api", homeRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

/* ===== SPA FALLBACK (EXPRESS 5 SAFE) ===== */
app.use((req, res) => {
  res.sendFile(path.join(ROOT_DIR, "dist", "index.html"));
});

/* ===== DB ===== */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(console.error);

/* ===== START ===== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
