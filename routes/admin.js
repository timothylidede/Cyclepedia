const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const {
    allUsers,
    allOrders,
    allPayments
} = require("../controllers/admin");

router.route("/allusers").get(allUsers);
router.route("/allorders").get(allOrders);
router.route("/allpayments").get(allPayments);



module.exports = router;
