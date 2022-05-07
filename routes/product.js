const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const {
  addproduct,
  allproducts,
  productById,
} = require("../controllers/product");

router.route("/addproduct").post(protect, addproduct);

router.route("/allproducts").get(allproducts);

router.route("/:id").get(productById);

module.exports = router;
