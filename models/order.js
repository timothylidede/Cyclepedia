const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const Order = new mongoose.Schema(
  {
    order_by: {
      type: ObjectId,
      ref: "User",
    },
    total: {
      type: Number,
      required: [true, "Total cannot be null"],
    },
    products: [
      {
        id: {
          type: String,
          required: true,
        },
        product_name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true },
  { collection: "orders" }
);

const model = mongoose.model("Order", Order);

module.exports = model;
