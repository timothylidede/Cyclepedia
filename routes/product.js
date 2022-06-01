const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const {
  addproduct,
  allproducts,
  productById,
  productsBycategory,
} = require("../controllers/product");

router.route("/addproduct").post(protect, addproduct);

router.route("/allproducts").get(allproducts);

router.route("/:id").get(productById);

router.route("/category/:category").get(productsBycategory);

module.exports = router;
