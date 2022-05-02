const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    fullname: { 
      type: String, 
      required: [true, "Full name is required"] 
    },
    email: { 
      type: String, 
      required: true, 
      unique: [true, "Email is required"]
    },
    phonenumber: { 
      type: String, 
      required: [true, "Phone number is required"] 
    },
    password: { 
      type: String,
      required: [true, "Password is required"]
    },
  },
  {timestamps: true},
  { collecton: "users" }
);

const model = mongoose.model("User", User);

module.exports = model;
