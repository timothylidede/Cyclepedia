const Product = require("../models/product");

exports.addproduct = async (req, res) => {
  console.log(req.body);
  try {
    const product = await Product.create(req.body);
    res.json({ status: "ok", product });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error });
  }
};

exports.allproducts = async (req, res) => {
  try {
    const products = await Product.find().sort("-createdAt");
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.productById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.productsBycategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json(err);
  }
};
