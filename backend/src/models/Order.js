import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        _id: String,
        name: String,
        price: Number,
        quantity: Number,
        image: String,
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      default: "bank-transfer",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "done", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
