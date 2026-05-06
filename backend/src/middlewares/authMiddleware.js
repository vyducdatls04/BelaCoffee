import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // 1️⃣ Kiểm tra header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // 2️⃣ Lấy token
    const token = authHeader.split(" ")[1];

    // 3️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4️⃣ Lấy user từ DB
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    // 🔥 GẮN USER VÀO REQUEST
    req.user = user;

    next();
  } catch (err) {
    console.error("AUTH ERROR:", err);
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;
