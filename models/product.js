const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      maxLength: [8],
      default: [0.0]
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    ratings: {
      type: Number,
      default: 0
    },
    images: [
      {
        public_id:{
          type: String,
          required: true
        },
        url:{
          type: String,
          required: true
        },
      }
    ],
    category: {
      type: String,
      required: [true, "Product category is required"],
      enum: {
        values: [
          "Cruiser",
          "Sport",
          "Touring",
          "Standard",
          "Dual-Purpose",
          "Dirt"
        ],
        message: "Select correct product category",
      }
    },
    seller: {
      type: String,
      required: [true, "Enter product seller"],

    },
    numOfReviews: {
      type: Number,
      default: 0
    },
    reviews: [
      {
        user_id: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        rating: {
          type: Number,
          required: true
        },
        comment: {
          type: String,
          required: true
        }
      }
    ],
    cretedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true },
  { collecton: "products" }
);

const model = mongoose.model("Product", Product);

module.exports = model;
