const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const { addtocart, removefromcart, cartinfo } = require("../controllers/user");

router.route("/addtocart").get(protect, addtocart);
router.route("/removefromcart").get(protect, removefromcart);
router.route("/cartinfo").get(protect, cartinfo);

module.exports = router;
