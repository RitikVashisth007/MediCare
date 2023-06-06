const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    full_name: String,
    email: {
      type: String,
      unique: true, // `email` must be unique
      lowercase: true, // Always convert `email` to lowercase
    },
    avatar: String,
    password: String,
    specialization: String,
    role: { type: String, default: "patient", lowercase: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = model("user", userSchema);

module.exports = User;
