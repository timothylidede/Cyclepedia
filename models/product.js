const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

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
    posted_by: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
  { collecton: "products" }
);

const model = mongoose.model("Product", Product);

module.exports = model;
