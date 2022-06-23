const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const {
  addtocart,
  reducecart,
  removefromcart,
  cartinfo,
  completeorder,
  orderhistory,
} = require("../controllers/user");

router.route("/addtocart").get(protect, addtocart);
router.route("/reducecart").get(protect, reducecart);
router.route("/removefromcart").get(protect, removefromcart);
router.route("/cartinfo").get(protect, cartinfo);
router.route("/completeorder").post(protect, completeorder);
router.route("/orderhistory").get(protect, orderhistory);

module.exports = router;
