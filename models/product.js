const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: [true, "Product name is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    image: {
      type: String,
      required: [true, "Product description is required"],
    },
  },
  { timestamps: true },
  { collecton: "products" }
);

const model = mongoose.model("Product", Product);

module.exports = model;
