import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: String,
    image: String
  },
  {
    timestamps: true   // ⬅ CỰC KỲ QUAN TRỌNG
  }
);

export default mongoose.model("Menu", menuSchema);
