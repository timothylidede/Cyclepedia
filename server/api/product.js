const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.post("/api/addproduct", async (req, res) => {
  console.log(req.body);
  try {
    const product = await Product.create(req.body);
    res.json({ status: "ok", product });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error });
  }
});

router.get("/api/allproducts", async (req, res) => {
  try {
    const products = await Product.find().sort("-createdAt");
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/api/product/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
