import express from "express";
import Menu from "../models/Menu.js";

const router = express.Router();

router.get("/home", async (req, res) => {
  try {
    const menus = await Menu.find().limit(3);

    res.json({
      hero: {
        subtitle: "Chào mừng tới Bela Coffee",
        title: "Hãy thưởng thức hương vị nồng nàn tại Bela Coffee",
        description:
          "Không gian ấm áp – hương vị nguyên bản – trải nghiệm trọn vẹn",
      },
      about: {
        title: "Bela Coffee – Hơn cả một tách cà phê",
        description:
          "Bela Coffee là nơi giao thoa giữa không gian ấm áp và hương vị cà phê nguyên bản",
      },
      menu: {
        title: "Menu nổi bật",
        items: menus,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Home API error" });
  }
});

export default router;
