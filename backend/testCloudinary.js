require("dotenv").config();
const cloudinary = require("./src/config/cloudinary");


console.log({
  name: process.env.CLOUDINARY_NAME,
  key: process.env.CLOUDINARY_API_KEY,
  secret: process.env.CLOUDINARY_API_SECRET
});
cloudinary.api.ping()
  .then(() => {
    console.log("✅ Cloudinary OK");
  })
  .catch((err) => {
    console.error("❌ Cloudinary lỗi:", err);
  });
