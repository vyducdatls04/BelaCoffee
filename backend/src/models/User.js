import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user", // user | admin
    },
    provider: {
  type: String,
  enum: ["local", "google", "facebook"],
  default: "local",
},
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
